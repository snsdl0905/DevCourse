const express = require('express');
const app = express();
const path = require('path');
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views')); //views 디렉터리에서 파일을 찾도록 한다.
app.set('view engine', 'ejs'); //렌더링 시 express의 뷰 엔진으로 ejs를 사용한다.
//ejs를 사용해야하므로 html대신 ejs파일로 작성해야한다.

app.use(cors());
app.use(expressLayouts);
app.use(express.static('public')); //정적 파일이 어디에 있는지 명시

app.get('/', (req, res) => {
    const data = {message: 'hello world'};
    res.render('index', {
        data,
        people: [
            {name: "kim"},
            {name: "lee"},
            {name: "park"},
        ],
        tasks,
        users: [
            {name: "kim", age: 17, role: 'front'},
            {name: "lee", age: 25, role: 'back'},
            {name: "park", age: 30, role: 'full'},
            {name: "choi", age: 16, role: 'front'},
        ],
    });
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/form', (req, res) => {
    res.render('form')
})

app.post('/submit', (req, res) => {
    const {name, email} = req.body;
    res.render('result', {name, email});
})

let tasks = [];

app.post('/addTask',(req, res) => {
    const newTask = req.body.newTask
    if(newTask){
        tasks.push(newTask);
    }
    res.redirect('/');
})

app.post('/deleteTask',(req, res) => {
    const deleteTask = req.body.task
    tasks = tasks.filter((task) => task !== deleteTask);
    res.redirect('/');
})

app.listen(8000, () => {
    console.log('서버 연결 http://localhost:8000')
})