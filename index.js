const express = require('express');
const app = express();
const port = 3000;
const Sequelize=require("sequelize")
app.use(express.json());

const sequelize=new Sequelize('cricket_careers','root','Lakshmi@2002',{
    host:'localhost',
    dialect:'mysql'
})


const User=sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:Sequelize.STRING,
    dob:Sequelize.STRING,
    Birthplace:Sequelize.STRING,
    photo:Sequelize.STRING,
    matches:Sequelize.STRING,
    score:Sequelize.STRING,
    fifities:Sequelize.STRING,
    centuries:Sequelize.STRING,
    wickets:Sequelize.STRING,
    average:Sequelize.STRING
})


app.get('/players', (req, res) => {
    const query = 'SELECT * FROM players';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
