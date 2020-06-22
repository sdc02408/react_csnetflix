const express =  require('express')
const app = express();

const {Usernetflix} = require('./models/User');
const bodyParser = require("body-parser");
const config = require('./config/key')
const cookieParser = require('cookie-parser');
const {auth} = require('./middleware/auth');

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
  userNewUrlParser:true, useUnifiedTopology: true, userCreateIndex: true, userFindAndModify: false
}).then(() => console.log('mongodb connected ....'))
.catch(err => console.log(err))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
//회원가입 할때 필요한 정보들을 client 에서 가져오면
//그것들을 데이터 베이스에 넣어준다.
//정보들을 user에 저장
app.use('/api/users', require('./routes/users'));

app.use('/api/favorite', require('./routes/favorite'));


const port = 9000
app.listen(port, () =>  console.log(`example app listening on port ${port}!`))
