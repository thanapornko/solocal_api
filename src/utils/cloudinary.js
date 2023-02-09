const cloudinary = require("../config/cloudinary");

exports.upload = async (filePath, publicId) => {
  const option = {
    unique_filename: false,
    use_filename: true,
    overwrite: true
  };
  // ถ้ามีเป็นชื่อไฟล์ overwrite filename
  if (publicId) {
    option.public_id = publicId;
  }

  const result = await cloudinary.uploader.upload(
    filePath,
    option
  );
  // console.log(result);
  return result.secure_url;
};

// delete old image from cloudinary
// กำหนดชื่อไฟล์ให้ซ้ำ
exports.getPublicId = url => {
  const splitSlash = url.split("/");
  return splitSlash[splitSlash.length - 1].split(".")[0];
};
