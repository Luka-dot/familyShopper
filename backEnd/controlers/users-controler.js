DUMMY_USERS = [
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

    const createdUser = {
        id,
        name,
        email,
        password
    };

    DUMMY_USERS.push(createdUser);

    res.status(201).json({user: createdUser});
};

const login = (req, res, next) => {};

exports.getUsers = getUsers;
exports.signup = signup;
exports.login = login;