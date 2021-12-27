import { MongoClient } from "mongodb";
// url = /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://celeste:marie313@cluster0.tnhom.mongodb.net/meetupsAPIpractice?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne( data );

    console.log(result);

    client.close(); 
    // closes db 

    res.status(201).json({message: 'Meetup inserted'});
  }
}

export default handler;
