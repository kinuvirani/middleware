const jwt = require("jsonwebtoken");
const config = require("../configs");
const ACCESS_TOKEN_SECRET = config.jwt.secret;

const getDecodedToken = (token) => new Promise((resolve, reject) => {
    try {
      jwt.verify(token, ACCESS_TOKEN_SECRET, (error, decodedToken) => {
        if (error?.name === "TokenExpiredError") {
          return reject(error);
        }
  
        if (!decodedToken.exp || !decodedToken.iat) {
          return reject(new Error("Token had no 'exp' or 'iat' payload"));
        }
        return resolve(decodedToken);
      });
    } catch (err) {
      logger.error(err);
      throw err;
    }
  });

  module.exports = { getDecodedToken };