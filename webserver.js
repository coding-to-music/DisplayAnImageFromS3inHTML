import dotenv from "dotenv";

const express = require("express");
const app = express();

const AWS = require("aws-sdk");

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  let s3 = new AWS.S3();

  async function getImage() {
    const data = s3
      .getObject({
        Bucket: process.env.AWS_BUCKET,
        Key: process.env.AWS_BUCKET_KEY,
      })
      .promise();
    return data;
  }

  getImage()
    .then((img) => {
      let startHTML = "<html><body></body>";
      let endHTML = "</body></html>";
      let html =
        startHTML +
        "<img src='data:image/png;base64," +
        encode(img.Body) +
        "'" +
        "/>" +
        endHTML;
      res.send(html);
    })
    .catch((e) => {
      res.send(e);
    });

  function encode(data) {
    let buf = Buffer.from(data);
    let base64 = buf.toString("base64");
    return base64;
  }
});
app.listen(PORT, () => {
  console.log(`Web Server running on port ${PORT}`);
});
