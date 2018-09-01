const mongoose = require('mongoose');
const School = mongoose.model('School');

const schoolsHome = function (req, res) {
    School
        .find()
        .exec((err, school) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                res.json(school);
            }
        })
};

const schoolsAdd = function (req, res) {
    // show schoolsAdd window
};

const schoolsCreate = function (req, res) {
    let newSchool = new School({
        name: req.body.name
    });

    newSchool.save((err, school)=>{
        if (err)
        {
            res
                .status(400)
                .json(err);
        } else {
            res.json(school);
        }
    });
    
};

const statisticsList = function (req, res) {
    if (req.params && req.params.schoolid){
        School
            .findById(req.params.schoolid)
            .exec((err, school) => {
                if (!school) {
                    res
                        .status(404)
                        .json({
                            "message": "schoolid not found"
                        });
                    return;                   
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(school);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No schoolid in request"
            })
    }
};

const statisticsCreate = function (req, res) {

    /*     const schoolid = req.params.schoolid;
    if (schoolid) {
        School
            .findById(schoolid)
            .exec((err, school) => {
                if (err) {
                    res
                        .status(400)
                        .json(err);
                } else {
                    statisticsSave(req, res, school);
                }
            });
    } else {
        res
            .status(404)
            .json({
                "message" : "Not found, schoolid required"
            });
    } */
};

const statisticsSave = function (req, res) {

    const schoolid = req.body._id;
    School
        .findById(schoolid)
        .exec((err, school) => {
            if (err) {
                res
                    .status(400)
                    .json(err);
            } else {
                school.statistics.push({
                    year: parseInt(req.body.year),
                    week: parseInt(req.body.week),
                    month: parseInt(req.body.month),
                    elect_eur: parseFloat(req.body.elect_eur),
                    elect_kwh: parseFloat(req.body.elect_kwh),
                    heating_eur: parseFloat(req.body.heating_eur),
                    heating_kwh: parseFloat(req.body.heating_kwh),
                    water_eur: parseFloat(req.body.water_eur),
                    water_litres: parseFloat(req.body.water_litres)
                });
                school.save((err, school) => {
                    if (err) {
                        console.log(err);
                        res
                            .status(400)
                            .json(err);
                    } else {
                        res
                            .status(201)
                            .json(school);
                    }
                });
            }
        });
    
};

const statisticsEdit = function (req, res) {
    res.json("You can create schools");
};

const statisticsUpdateOne = function (req, res) {
    res.json("You can create schools");
};

const statisticsDeleteOne = function (req, res) {
    res.json("You can create schools");
};

module.exports = {
    schoolsHome,
    schoolsAdd,
    schoolsCreate,
    statisticsList,
    statisticsCreate,
    statisticsSave,
    statisticsEdit,
    statisticsUpdateOne,
    statisticsDeleteOne
}

