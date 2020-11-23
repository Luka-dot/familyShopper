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
const getUsers = async (req, res, next) => {
    let users;

    try {
        users = await User.find({}, '-password');
    } catch (err) {
        const error = new HttpError('Getting users failed, please try again later.', 500);
        return next(error);
    }

    res.json({ users: users.map(user => user.toObject({ getters: true }))});
};


//************************** SIGN UP  ***************************/
const signup = async (req, res, next) => {
    const { name, email, password } = req.body;

    let existingUser
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        const error = new HttpError('Signing up failed, please try again later.', 500);
        return next(error);
    }
    
    if (existingUser) {
        const error = new HttpError('User exists already, please login instead.', 422);
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
const login = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        const error = new HttpError('Login failed, please try again later.', 500);
        return next(error);
    }

    if (!existingUser || existingUser.password !== password) {
        const error = new HttpError('Invalid credential, log in denied.', 401);
        return next(error);
    }
    
    res.json({message: "User logged in."})
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;