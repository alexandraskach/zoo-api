// import * as jwt from "jsonwebtoken";
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

/* Récupération du header bearer */
function extractBearerToken(headerValue) {
  if (typeof headerValue !== "string") {
    return false;
  }
  const matches = headerValue.match(/(bearer)\s+(\S+)/i);
  return matches && matches[2];
}

/* Vérification du token */
function checkTokenMiddleware(req, res, next) {
  // Récupération du token
  const token =
    req.headers.authorization && extractBearerToken(req.headers.authorization);
  console.log(extractBearerToken(req.headers.authorization));
  // Présence d'un token
  if (!token) {
    return res.status(401).json({ message: "Error. Need a token" });
  }

  // Véracité du token
  jwt.verify(token, SECRET, (err, decodedToken) => {
    if (err) {
      res.status(401).json({ message: "Error. Bad token" });
    } else {
      return next();
    }
  });
}

module.exports = { checkTokenMiddleware, extractBearerToken };
