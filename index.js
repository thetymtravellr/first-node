const express = require('express');
const app = express();
const cors = require('cors');
const { use } = require('express/lib/router');
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());


app.get('/',(req,res) => {
    res.send('yay i can now write node')
})

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0178888888'},
    {id: 2, name: 'Sabnur', email: 'shabnur@gmail.com', phone: '0179999999'},
    {id: 3, name: 'Moushumi', email: 'moushumi@gmail.com', phone: '01733333333'},
    {id: 4, name: 'Suchorita', email: 'suchorita@gmail.com', phone: '01722222222'},
    {id: 5, name: 'Bobita', email: 'bobita@gmail.com', phone: '01711111111'},
    {id: 6, name: 'Rojina', email: 'rojina@gmail.com', phone: '01700000000'},
]

app.get('/users',(req,res) => {
    if(req.query.name){
        const search = req.query.name;
        const matched = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))
        res.send(matched)
    } else {
        res.send(users)
    }
})

app.get('/user/:id',(req,res)=>{
    const id = req.params.id;
    const user = users.find(u => u.id == id);
    res.send(user);
})

app.post('/user',(req,res)=>{
    console.log('request',req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.listen(port);