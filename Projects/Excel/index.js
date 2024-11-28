const express = require('express');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.raw({ type: 'application/octet-stream', limit: '50mb' }));
app.use(cors({
    origin: 'https://excel.officeapps.live.com',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

const secret = 'yoyo';

const filePath = path.join(__dirname, 'Sample Data.xlsx');

// Endpoint: CheckFileInfo (provides metadata about the file)
app.get('/wopi/files/:fileId', (req, res) => {
  const fileInfo = {
    BaseFileName: 'Sample Data.xlsx',
    Size: fs.statSync(filePath).size,  // File size in bytes
    OwnerId: 'user1',  // Owner ID
    UserId: 'user1',   // User ID
    UserCanWrite: true,  // Allow editing in Excel Online
    Version: 'v1'  // File version
  };
  res.json(fileInfo);
});

// Endpoint: GetFile (returns the actual file contents)
app.get('/wopi/files/:fileId/contents', (req, res) => {
  // Read the file and stream it back to the client
  const fileStream = fs.createReadStream(filePath);
  res.setHeader('Content-Disposition', 'attachment; filename="Sample Data.xlsx"');
  fileStream.pipe(res);
});

// Endpoint: PutFile (saves the updated file content after editing)
app.post('/wopi/files/:fileId/contents', (req, res) => {
  // Save the file content back to disk
  const writeStream = fs.createWriteStream(filePath);
  req.pipe(writeStream);
  writeStream.on('finish', () => {
    res.sendStatus(200);
  });
  writeStream.on('error', (err) => {
    console.error('Error saving file:', err);
    res.sendStatus(500);
  });
});

// Generate an access token (JWT)
app.get('/generate-token', (req, res) => {
  const fileId = '1';
  const userId = 'user1';
  const token = jwt.sign(
    { fileId, userId, permissions: 'read-write' },
    secret,
    { expiresIn: '1h' }
  );

  const wopiSrc = encodeURIComponent(`http://localhost:3000/wopi/files/${fileId}`);
  const excelUrl = `https://excel.officeapps.live.com/x/_layouts/xlviewerinternal.aspx?WOPISrc=${wopiSrc}&access_token=${token}`;

  res.json({ token, excelUrl });
});

// Start the server
app.listen(3000, () => {
  console.log('WOPI Host is running on http://localhost:3000');
});
