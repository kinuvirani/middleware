/* eslint-disable arrow-body-style */
// const db = require("../models");
// const logger = require("../logger");
const { getMessage } = require("./common/messages");
const { getDecodedToken } = require("./common/token");

exports.userAuthorization = (db) => {
  // eslint-disable-next-line func-names
  return async function (req, res, next) {
    const { user: UserModel } = db;
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).send(getMessage("UNAUTHORIZED"));
    }

    try {
      const decodedToken = await getDecodedToken(token);
      const user = await UserModel.findByPk(decodedToken.sub);
      req.user = user;
      return next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(405).send(getMessage("SESSION_EXPIRED"));
      }
      // logger.info(error);
      return next(error);
    }
  };
};
