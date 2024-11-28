const { OpenAIEmbeddings } = require("@langchain/openai");
const { configDotenv } = require("dotenv");
const { ChatGPTLoader } = require("langchain/document_loaders/fs/chatgpt");
const { PDFLoader } = require("langchain/document_loaders/fs/pdf");
const { RecursiveCharacterTextSplitter } = require("langchain/text_splitter");
const dotenv = require('dotenv');
const { HNSWLib } = require("@langchain/community/vectorstores/hnswlib");
// // Load environment variables from .env file
dotenv.config();

(async () => {
    try {
      const loader = new PDFLoader("src/The_Adventures_of_Tom_Sawyer_-_Penguin_Readers-min.pdf");
      const docs = await loader.load();
  
      // SPLITTER FUNCTION
      const textSplitter = new RecursiveCharacterTextSplitter({
        chunkSize: 1000,
        chunkOverlap: 200,
      });
  
      const splits = await textSplitter.splitDocuments(docs);
  
      // ASSIGNING COORDINATES TO CREATED CHUNKS
      const embeddings = new OpenAIEmbeddings({
        apiKey: process.env.OPENAI_API_KEY, // Use the API key from environment variables
        model: "text-embedding-3-small",
      });
  
      const vectorStore = await HNSWLib.fromDocuments(splits, embeddings);
  
      console.log(vectorStore);
    } catch (error) {
      console.error("Error:", error);
    }
  })();
  




