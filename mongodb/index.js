import { MongoClient, ServerApiVersion } from 'mongodb'

const password = 'spider8'
const dbname = 'roupas'
const collection01 = 'camisas'


const uri = `mongodb+srv://kelwinesechiel8:${password}@cluster0.vxfjhgw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    //conectando ao banco de dados
    const db = client.db(dbname)
    const collection = db.collection(collection01)

    //exemplo de inserção

    const resultInsert = await collection.insertOne({
        type:"blusa",
        size:"m",
        cor: "rosa"
    })

    console.log("Inserted!", resultInsert.insertedId)

    //exemplo leitura

    const documentos = await collection.find().toArray()
    console.log("Documents:", documentos)

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
