const { MongoClient, ObjectId } = require('mongodb');
const fs = require('fs/promises'); // Use the fs.promises API for asynchronous file operations

const uri = 'mongodb+srv://titovideodev:titovideodev@cluster0.pfztcqb.mongodb.net/'; // MongoDB connection URL
const dbName = 'new'; // Database name
const collectionName = 'postulers'; // Collection name containing the PDFs
const outputDirectory = './PDFs'; // Output directory for PDF files

async function retrievePDFs() {
    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Create the output directory if it doesn't exist
        try {
            await fs.mkdir(outputDirectory);
        } catch (err) {
            if (err.code !== 'EEXIST') {
                throw err;
            }
        }

        // Search for PDF documents in the collection
        const cursor = collection.find({ type: 'pdf' }); // Adjust the condition according to your data structure

        for await (const document of cursor) {
            const pdfData = document.pdfData.buffer; // Replace 'pdfData' with the name of the field containing PDF data
            const fileName = `${outputDirectory}/${document._id}.pdf`; // File name based on the document's ID

            // Write the PDF data to a local file
            await fs.writeFile(fileName, pdfData);

            console.log(`PDF file retrieved: ${fileName}`);
        }

        console.log('All PDF files have been retrieved.');

    } finally {
        await client.close();
    }
}

retrievePDFs().catch(console.error);
