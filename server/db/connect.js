import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://adithyag020:adi123@cluster0.ipce1eb.mongodb.net/?retryWrites=true&w=majority";

const connectdb = async () => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    await client.db().command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    await client.close();
  }
};

export default connectdb;
