var register = require('./config/register.js');
var login = require('./config/login.js');
module.exports = function(app) {
  app.post('/login',function(req,res){        
    var email = req.body.email;             
    var password = req.body.password;       
    login.login(email,password,function (found) {           
      console.log(found);             
      res.json(found);    
    });    
  });     
  app.post('/register',function(req,res){         
    var email = req.body.email;             
    var password = req.body.password;       
    var name = req.body.name;
    register.register(email, password, name, function (found) {             
      console.log(found);             
      res.json(found);    
    });     
  });
};
