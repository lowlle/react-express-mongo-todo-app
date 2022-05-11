const express = require("express");
const uuid = require("uuid");

const { ObjectId } = require("mongodb");
const databaseConnectionConfig = require("../config/database");

const router = express.Router();
const collectionName = process.env.DB_COLLECTION;

router.get("/tasks", function (req, res, _) {
    const databaseConnection = databaseConnectionConfig.getDb();
    const payload = {};

    const { id } = req.query;
    if (id) {
        payload["_id"] = ObjectId(id);
    }

    databaseConnection
        .collection(collectionName)
        .find(payload)
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send("Error fetching listings!");
            } else {
                res.json(result);
            }
        });
});

router.post("/tasks", function (req, res, _) {
    const databaseConnection = databaseConnectionConfig.getDb();
    const { _id: id, task, date_schedule } = req.body;
    const _id = id ? id : uuid.v4();
    const filter = {
        _id,
    };

    const payload = {
        $set: {
            _id,
            task,
            date_schedule,
        },
    };

    databaseConnection
        .collection(collectionName)
        .updateOne(filter, payload, { upsert: true }, function (err, result) {
            if (err) {
                res.status(400).send("Error processing task!");
            } else {
                console.log(result);
                res.status(204).send();
            }
        });
});

router.put("/tasks/:id", function (req, res, _) {
    const databaseConnection = databaseConnectionConfig.getDb();
    const { task, date_schedule } = req.body;
    const { id } = req.params;
    const filter = {};
    if (id) {
        filter["_id"] = ObjectId(id);
    }

    const payload = {
        $set: {
            task,
            date_schedule,
        },
    };

    databaseConnection
        .collection(collectionName)
        .updateOne(filter, payload, function (err, result) {
            if (err) {
                res.status(400).send("Error updating task!");
            } else {
                console.log(`Task Updated`);
                res.send(result);
            }
        });
});

router.delete("/tasks/:id", function (req, res, _) {
    const databaseConnection = databaseConnectionConfig.getDb();
    const { id } = req.params;
    const payload = {
        _id: id,
    };

    databaseConnection
        .collection(collectionName)
        .deleteOne(payload, function (err, result) {
            if (err) {
                res.status(400).send("Error deleting task!");
            } else {
                console.log(`Task Deleted`);
                res.send(result);
            }
        });
});

module.exports = router;
