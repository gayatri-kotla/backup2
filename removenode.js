const fs = require('fs');
const path = require('path');

// Function to create or update the .gitignore file in the root directory and add node_modules/ paths
const createGitIgnore = (gitIgnorePath, nodeModulesPaths) => {
  // If the .gitignore file exists, read its contents
  if (fs.existsSync(gitIgnorePath)) {
    const existingContent = fs.readFileSync(gitIgnorePath, 'utf8');

    // Avoid duplicating the node_modules paths in the .gitignore file
    const newPaths = nodeModulesPaths.filter(path => !existingContent.includes(path));

    if (newPaths.length > 0) {
      console.log(`Adding new node_modules paths to .gitignore.`);
      fs.appendFileSync(gitIgnorePath, '\n' + newPaths.join('\n'));
    }
  } else {
    // If .gitignore doesn't exist, create it and add node_modules paths
    console.log(`Creating .gitignore in the root directory.`);
    fs.writeFileSync(gitIgnorePath, nodeModulesPaths.join('\n'));
  }
};

// Function to recursively find all node_modules directories and return their relative paths
const findNodeModules = (dir, level = 0, maxDepth = 8, nodeModulesPaths = []) => {
  if (level > maxDepth) {
    return;
  }

  const currentDir = path.join(__dirname, dir);

  try {
    const files = fs.readdirSync(currentDir);

    files.forEach(file => {
      const fullPath = path.join(currentDir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // If node_modules is found, add the relative path to node_modulesPaths array
        if (file === 'node_modules') {
          const relativePath = path.relative(__dirname, fullPath);
          nodeModulesPaths.push(`${relativePath}/`);
        } else {
          // Otherwise, recursively process subdirectories
          findNodeModules(path.join(dir, file), level + 1, maxDepth, nodeModulesPaths);
        }
      }
    });
  } catch (err) {
    console.error(`Error reading directory ${dir}:`, err);
  }
};

// Starting point - specify the root directory to start from (can be "." for the current directory)
const rootDir = '.';
const gitIgnorePath = path.join(rootDir, '.gitignore');

// Collect all node_modules paths
let nodeModulesPaths = [];
findNodeModules(rootDir, 0, 8, nodeModulesPaths);

// If any node_modules were found, create/update the .gitignore file
if (nodeModulesPaths.length > 0) {
  createGitIgnore(gitIgnorePath, nodeModulesPaths);
} else {
  console.log('No node_modules directories found.');
}

console.log('Finished updating .gitignore file.');
