const express =  require('express')
const app = express();

const {Usernetflix} = require('./models/User');
const bodyParser = require("body-parser");
// const config = require('./config/key')
const cookieParser = require('cookie-parser');
const {auth} = require('./middleware/auth');
var dotenv = require('dotenv');
dotenv.config()

const dburl = process.env.DB_URL_LOCAL
const mongoose = require('mongoose')
mongoose.connect(dburl,{
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

if (process.env.NODE_ENV === "production") {
  
  // All the javascript and css files
  app.use(express.static("client/build"));
  
  // index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}


const port = 9000
app.listen(port, () =>  console.log(`example app listening on port ${port}!`))
