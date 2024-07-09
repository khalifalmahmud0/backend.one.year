let AUTHKEY = process.env.AUTHKEY;
let apiMiddleware = (req, res, next) => {
  if (req.headers.authorization === AUTHKEY) {
    next();
  } else {
    res.send("Unauthorized User !");
  }
};

module.exports = apiMiddleware;
