import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const { image, title, description, address } = data;

    const client = await MongoClient.connect(
      "mongodb+srv://fathy:4487181f@cluster0.gylpxdp.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollections = db.collection("meetups");

    const result = await meetupsCollections.insertOne(data);

    console.log(result);

    client.close();

    res.status((201).json({ message: "meetup inserted" }));
  }
}
export default handler;
