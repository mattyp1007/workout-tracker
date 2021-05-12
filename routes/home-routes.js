const router = require('express').Router();
const path = require('path');

router.get("/exercise", (err, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));

  if(err) {
    console.log(err);
  }
})

module.exports = router;
