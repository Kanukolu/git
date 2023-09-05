// const express = require('express');
// const bodyParser = require('body-parser');
// const path=require('path')

// const app = express();

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// const contactus=require('./routes/contactus');

// app.use(bodyParser.urlencoded({extended: false}));

// app.use('/admin',adminRoutes);
// app.use('/shop',shopRoutes);
// app.use('/',contactus);
// app.use((req,res,next )=>{
    
//     res.status(404).sendFile(path.join(__dirname,'views','error404.html'))
// })

// app.listen(3000);
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

//const errorController = require('./controllers/error');
const db = require('./util/database');

const app = express();

//app.set('view engine', 'ejs');
//app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

db.execute('SELECT * FROM prouducts')
  .then(result => {
    console.log(result[0], result[1]);
  })
  .catch(err => {
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

//app.use(errorController.get404);

app.listen(3000);