const faker = require("@faker-js/faker").faker;
const uuid = require("uuid");
const dayjs = require("dayjs");
const MongoClient = require("mongodb").MongoClient;

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
const isCollectionExist = async (db, collectionName) => {
    const cursor = db.listCollections({ name: collectionName });
    const result = await cursor.hasNext();
    await cursor.close();

    return result;
};

(async function seedDB() {
    const connectionString = process.env.DB_CONNECTION;

    const client = new MongoClient(connectionString, {
        useNewUrlParser: true,
        // useUnifiedTopology: true,
    });

    try {
        await client.connect();

        const databaseConnection = client.db(process.env.DB_NAME);
        const collectionName = process.env.DB_COLLECTION;

        const isExisting = await isCollectionExist(
            databaseConnection,
            collectionName
        );
        console.log({ isExisting });
        const collection = databaseConnection.collection(collectionName);
        if (isExisting) collection.drop();

        const oneWeekBefore = dayjs().subtract(1, "day").format();
        const oneWeekAfter = dayjs().add(2, "day").format();

        const tasks = Array.from({ length: 10 }).map(() => ({
            _id: uuid.v4(),
            task: faker.hacker.phrase(),
            date_schedule: faker.date.between(oneWeekBefore, oneWeekAfter),
        }));
        const response = await collection.insertMany(tasks);
        console.log("Response:", response);
        client.close();
        console.log("Database seeded");
        return;
    } catch (err) {
        console.log(err.stack);
    }
})();
