import { MongoClient } from "mongodb";

async function handler(req, res) {
  // const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    const DB = process.env.ATLAS_CONNECTION;

    const client = await MongoClient.connect(DB);

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne({ data });

    console.log(result);

    client.close();

    res.status(201).json({ message: "meetup created" });
  }
}

export default handler;
