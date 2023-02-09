const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
    // null .. err
  },
  filename: (req, file, cb) => {
    // console.log(req);
    // console.log(file);
    cb(
      null,
      new Date().getTime() +
        "" +
        Math.round(Math.random() * 1000000000) +
        "." +
        file.mimetype.split("/")[1]
      // name + type ex: jpg
    );
  }
});

module.exports = multer({ storage: storage });
