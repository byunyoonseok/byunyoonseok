const express = require("express");
const router = express.Router();
const { join, login, logout } = require("../controllers/auth");
const { isNotLoggedIn, isLoggedIn } = require("../middlewares");

router.use((req, res, next) => {
  res.locals.user = req.user; // 복붙하고 null user로 바꿧음
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get("/join", isNotLoggedIn, join);

router.get("/login", isNotLoggedIn, login);

router.get("/logout", isLoggedIn, logout);

router.get(
  "/kakao",
  passport.authenticate("kakao", {
    failureRedirect: "/?loginError=카카오로그인 실패",
  }),
  (req, res) => {
    res.redirect("/");
  }
);

module.exports = router;
