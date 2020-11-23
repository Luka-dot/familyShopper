const HttpError = require;

const DUMMY_USERS = [
    {
        id: 1,
        nanme: "Lukas",
        email: "test@gmail.com",
        password: "test"
    }
]

const getUsers = (req, res, next) => {
    res.json({ userd: DUMMY_USERS })
};

const signup = (req, res, next) => {
    const { id, name, email, password } = req.body;

    const hasUser = DUMMY_USERS.find(u => u.email === email);

    if (hasUser) {
        throw new HttpError('This email is already registered.', 422);
    }

    const createdUser = {
        id,
        name,
        email,
        password
    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json({user: createdUser});
};

const login = (req, res, next) => {
    const { email, password } = req.body;

    const identifiedUser = DUMMY_USERS.find(u => u.email === email);
    if (!identifiedUser || identifiedUser.password !== password) {
        throw new HttpError('User not identified, not walid credentials.', 401);
    }
    
    res.json({message: "User logged in."})
};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;