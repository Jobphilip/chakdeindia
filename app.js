const express=require('express');
const port = process.env.PORT || 2200;

// const IndepRouter=require('./routes/indep');
const nodemailer=require('nodemailer');










const app=express();

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('./public'));




app.get('/',(req,res)=>{
    res.render('index');
});









// app.use('/indep',IndepRouter);


app.get('/indep',function(req,res){
    var email = req.query.email;
    var fname = req.query.names;




var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jobyy0719@gmail.com',
      pass: 'joby@1997'
    }
  });
  
  var mailOptions = {
    from: 'jobyy0719@gmail.com',
    to: req.query.email,
    subject: 'Happy 75th Independence Day',
    text: req.protocol + '://' + req.get('host') + req.originalUrl
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  res.render('indep');


});


app.listen(port,()=>{
    console.log('app serving at' +port);
});
