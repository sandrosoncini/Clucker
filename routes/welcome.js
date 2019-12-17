const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index",{
    username: req.cookies.username
  });
});

router.get("/login", (req,res)=>{
  res.render('login')
})

router.post("/login", (req,res)=>{
  const ONE_DAY=new Date(Date.now() + 1000 * 60 * 60 *24)
  res.cookie(
      'username',
      req.body.username, {
          expires: ONE_DAY
      })
  res.redirect('/clucks')
})

router.delete('/logout', (req, res) => {
  res.clearCookie('username')
  res.redirect('/clucks')
})

module.exports = router;
