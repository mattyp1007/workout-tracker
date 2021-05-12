const router = require('express').Router();
const mongoose = require('mongoose');
const db = require("../../models");

router.get("/workouts", (req, res) => {
  db.Workout.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  })
})

router.put("/workouts/:id", (req, res) => {
  const newExercise = req.body;
  console.log(newExercise);
  // const workoutId = req.params.id;
  db.Workout.updateOne(
    { 
      _id: mongoose.Types.ObjectId(req.params.id) 
    },
    {
      $push: {
        exercises: newExercise
      }
    }, (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  )
})

module.exports = router;
