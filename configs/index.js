require("dotenv").config();

const config = {
  server: {
    port: process.env.PORT,
    url: process.env.SERVER_URL,
  },
  db: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    name: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
  },
  jwt: {
    secret: process.env.ACCESS_TOKEN_SECRET,
    lifeTime: process.env.ACCESS_TOKEN_LIFE_TIME,
  },
  aws: {
    emailFunction: process.env.LAMBDA_EMAIL_FUNCTION,
    bucketName: process.env.AWS_BUCKET,
    bucketUrl: process.env.AWS_BUCKET_URL,
    fileSize: 5120000,
  },
  verificationTime: process.env.VERIFICATION_TIME,
};

module.exports = config;
