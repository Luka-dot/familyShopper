const HttpError = require;

const { v4: uuid } = require("uuid");

const User = require('../models/user');

const DUMMY_USERS = [
    {
        id: 1,
        nanme: "Lukas",
        email: "test@gmail.com",
        password: "test"
    }
]

//************************** GET USER  ***************************/
const getUsers = (req, res, next) => {
    res.json({ userd: DUMMY_USERS })
};


//************************** SIGN UP  ***************************/
const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser
  try {
    existingUser = await User.findOne({ email: email })
  } catch (err) {
    const error = new HttpError(
      'Signing up failed, please try again later.',
      500
    );
    return next(error);
  }
  
  if (existingUser) {
    const error = new HttpError(
      'User exists already, please login instead.',
      422
    );
    return next(error);
  }

    const createdUser = new User({
        name,
        email,
        password
    });
    console.log(createdUser)

    try {
        await createdUser.save();
      } catch (err) {
//        const error = new HttpError('Signing up failed, please try again.', 500);
        return next(err);
      }

    res.status(201).json({user: createdUser.toObject({ getters: true })});
};

//************************** LOG IN  ***************************/
const login = (req, res, next) => {
    const { email, password } = req.body;

    const identifiedUser = DUMMY_USERS.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
        return next(new HttpError('User not identified, not walid credentials.', 401));
    }
    
    res.json({message: "User logged in."})
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;