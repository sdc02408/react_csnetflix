const express = require('express');
const router = express.Router();
const { Usernetflix } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

//role 1 어드민 role2 특정 부서 어드민
//role 0 dlfqks dbwj role 0이 아니면 관리자
router.get("/auth", auth, (req, res) => {
  //여기까지 미들웨어를 통과해 왔다는 얘기는 authenticaton이 true 라는 말.
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image,
  });
});

router.post("/register", (req, res) => {
  
  const user = new Usernetflix(req.body);
  
  user.save((err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true
    });
  });
});

router.post("/login", (req, res) => {
  //요청된 이메일을 데이터베이스에서 있는지 찾는다.
  Usernetflix.findOne({ email: req.body.email }, (err, user) => {
    if (!user)
      return res.json({
        loginSuccess: false,
        message: "Auth failed, email not found"
      });
    //요청된 이메일이 db에 있다면 비밀번호가 맞는 비밀번호 인지 확인
    user.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
        return res.json({ loginSuccess: false, message: "Wrong password" });
      //비밀번호 까지 맞다면 토큰생성.
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
  
        //토큰을  저장한다. 쿠키나 로컬 스토리지
        res.cookie("w_authExp", user.tokenExp);
        res
        .cookie("w_auth", user.token)
        .status(200)
        .json({
          loginSuccess: true, userId: user._id
        });
      });
    });
  });
});

router.get("/logout", auth, (req, res) => {
  Usernetflix.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).send({
      success: true
    });
  });
});

module.exports = router;
