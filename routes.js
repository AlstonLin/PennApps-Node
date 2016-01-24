var claimRequest = require('./controllers/claim_request');
var lockRequest = require('./controllers/lock_request');
var login = require('./controllers/login');
var newChat = require('./controllers/new_chat');
var newCompletion = require('./controllers/new_completion');
var newMsg = require('./controllers/new_msg');
var newRequest = require('./controllers/new_request');
var chats = require('./controllers/chats');
var posts = require('./controllers/posts');
var register = require('./controllers/register');
var requests = require('./controllers/requests');
var respondCompletion = require('./controllers/respond_completion');
var getCompletion = require('./controllers/completions');
var getRequestMessages = require('./controllers/request_msgs');

var User = require('./models/user');

var validateUser = function(email, token, callback) {
  User.find({email: email}, function(err, users){
    if (token == users[0].token){
      callback(true);
    } else {
      callback(false);
    }
  });
};
module.exports = function(app) {
  app.post('/claim_request', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        var requestId = req.body.request_id;
        var claimCode = req.body.claim_code;
        claimRequest.claimRequest(email, requestId, claimCode, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/lock_request', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        var requestId = req.body.request_id;
        lockRequest.lockRequest(email, requestId, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/login',function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    login.login(email,password,function (found) {
      console.log(found);
      res.json(found);
    });
  });
  app.post('/new_chat', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        var requestId = req.body.request_id;
        newChat.newChat(email, requestId, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/new_completion', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        var request_id = req.body.request_id;
        var image = req.body.image;
        newCompletion.newCompletion(email, request_id, image, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/new_msg', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      var reqId = req.body.req_id;
      var content = req.body.content;
      if (valid){
        newMsg.newMsg(email, reqId, content, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/new_request', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        var name = req.body.name;
        var fee = req.body.fee;
        var location = req.body.location;
        User.find({email : email}, function(err, users){
          newRequest.newRequest(users[0], name, fee, location, function(found){
            console.log(found);
            res.json(found);
          });
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/chats', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        var requestId = req.body.request_id;
        chats.getChats(email, requestId, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/posts', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        posts.getPosts(email, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/register', function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    var name = req.body.name;
    register.register(email, password, name, function (found) {
      console.log(found);
      res.json(found);
    });
  });
  app.post('/request_chats', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        requestChats.getRequestChats(email, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/requests', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        requests.getRequests(function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/respond_completion', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        var completionId = req.body.completion_id;
        var accepted = req.body.accepted;
        respondCompletion.respondCompletion(completionId, accepted, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/completions', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        var requestId = req.body.request_id;
        getCompletion.getCompletion(requestId, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
  app.post('/request_messages', function(req,res){
    var email = req.body.email;
    var token = req.body.token;
    validateUser(email, token, function(valid){
      if (valid){
        var requestId = req.body.request_id;
        getRequestMessages.getRequestMessages(email, requestId, function (found) {
          console.log(found);
          res.json(found);
        });
      } else {
        res.json({'response' : "Bad Token", 'res' : false});
      }
    });
  });
};
