var express = require('express');
const {getCurriculum} = require("../services/curriculum.service");
var router = express.Router();


router.get('/', async function (req, res, next) {
    res.send({
        "appName":"MyCurriculum",
        "version":"0.1"
    });
});


/* GET home page. */
router.get('/:id', async function (req, res, next) {
    const curriculumId = req.params.id;
    const curriculum = await getCurriculum(curriculumId);
    res.send(curriculum);
});

module.exports = router;
