const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.get("/", restricted, checkRole("admin"), (req, res)=> {
  Users.find()
    .then(users => {
      res.status(200).json({ users, jwt: req.jwt } );
    })
    .catch(err => res.send(err));
});
// write checkRole() function to only allow access if the role in token 
// matches the role passed as an argument to the checkRole function  

function checkRole(role) {
  return function(req, res, next) {
    if (req.jwt.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'you dont have access' });
  }
}

}

module.exports = router;
