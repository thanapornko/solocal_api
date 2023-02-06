const Joi = require("joi");

const validate = require("./validate");

const registerSchema = Joi.object({
  username: Joi.string().trim().required().messages({
    "string.empty": "username is required",
    "any.required": "username is required",
    "string.base": "username must be string"
  }),
  email: Joi.string()
    .email({ tlds: false })
    .required()
    .messages({ "string.empty": "email is required" }),
  password: Joi.string()
    .alphanum()
    .trim()
    .min(6)
    .required()
    .messages({
      "string.empty": "password is required",
      "string.alphanum":
        "password must contain number or alphabet",
      "string.min":
        "password must have at least 6 characters"
    }),
  confirmPassword: Joi.string()
    .trim()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "string.empty": "confirm password is required",
      "any.only":
        "password and confirm password did not match"
    })
    .strip()
});

const loginSchema = Joi.object({
  email: Joi.string()
    .required()
    .messages({ "string.empty": "email is required" }),
  password: Joi.string().required().messages({
    "string.empty": "password is required",
    "string.alphanum":
      "password must contain number or alphabet",
    "string.min": "password must have at least 6 characters"
  })
});

exports.validateRegister = validate(registerSchema);

exports.validateLogin = validate(loginSchema);

// const validate = schema =>
//   function (input) {
//     const { value, error } = schema.validate(input);
//     if (error) {
//       throw error;
//     }
//     return value;
//   };
// ย้ายไปใส่แยกในvalidate
