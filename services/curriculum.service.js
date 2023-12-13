const {connectToDatabase, closeDatabaseConnection} = require("../db/db.config");
const {ObjectId} = require("mongodb");
const getCurriculum = async (curriculumId) => {
    const database = await connectToDatabase()
    const curriculum = await database.db().collection('curriculums').findOne({_id: new ObjectId(curriculumId)})
    await closeDatabaseConnection()
    return curriculum
}

module.exports = {getCurriculum}