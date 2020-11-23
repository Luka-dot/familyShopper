const HttpError = require

const { findAllByPlaceholderText } = require('@testing-library/react');
const Directory = require('../models/directory');

let DUMMY_DIRECTORY = [
    {
    id: 101,
    name: 'Groceries',
    created: "11/10/2020",
    listDetail: [{
            id: 1,
            text: "this is a first list item",
            completed: false
        },
        {
            id: 2,
            text: "this is yet another list",
            completed: false
        },
        {
            id: 3,
            text: "more and more and more this is last one",
            completed: false
        },]
    },
    {
    id: 102,
    name: 'Camping list',
    created: "11/10/2020",
    listDetail: [{
            id: 21,
            text: "2nd list this is a first list item",
            completed: false
        },
        {
            id: 22,
            text: "2nd list this is yet another list",
            completed: false
        },
        {
            id: 23,
            text: "2nd list more and more and more this is last one",
            completed: false
        }]
    }
];

const getDirectoryById = async (req, res, next) => {
    const directoryId = req.params.id;   // parseInt(req.params.id, 10)

    let directory;
    try {
    directory = await Directory.findById(directoryId);
    } catch (err) {
        const error = new HttpError('Could not find directory with this ID.', 500); 
        return next(error);
    }

    if (!directory) {
        const error = new HttpError('Could not find directory with this ID.');
        return next(error);
    };

    res.json({ directory: directory.toObject( {getters: true} ) }); //toObject is used to remove Mongoose methods, 
};

const createDirectory = async (req, res, next) => {
    const { id, name, created, listDetail } = req.body;
    const createdDirectory = new Directory({
        id: id,
        name: name,
        created: created,
        listDetail: listDetail
    });

//    DUMMY_DIRECTORY.push(createdDirectory);  //unshift(createdDirectory) for first place in list
    try {
        await createdDirectory.save();
    } catch (err) {
        const error = new HttpError('Create directory failed.', 500);
        return next(error);
    }
    

    res.status(201).json({directory: createdDirectory});
};

const updateDirectoryById = async (req, res, next) => {
    const { listDetail } = req.body;
    const directoryId = req.params.id;  // = parseInt(req.params.id, 10);

    // const updatedDirectory = { ...DUMMY_DIRECTORY.find(p => p.id === directoryId) };
    // const directoryIndex = DUMMY_DIRECTORY.findIndex(p => p.id === directoryId);

    let directory;
    try {
    directory = await Directory.findById(directoryId);
    } catch (err) {
        const error = new HttpError('Could not find directory with this ID.', 500); 
        return next(error);
    }

    if (!directory) {
        const error = new HttpError('Could not find directory with this ID.');
        return next(error);
    };

    directory.listDetail = listDetail;

//    DUMMY_DIRECTORY[directoryIndex] = updatedDirectory;
    try {
        await directory.save();
    } catch (err) {
        const error = new HttpError('Could not update directory with this ID.', 500); 
        return next(error);
    }

    res.status(200).json({directory: directory.toObject({ getters: true}) });
};

const deleteDirectory = async (req, res, next) => {
    const directoryId = req.params.id;
//    DUMMY_DIRECTORY = DUMMY_DIRECTORY.filter(p => p.id !== directoryId);

    let directory;
    try {
        directory = await Directory.findById(directoryId); 
    } catch (err) {
        const error = new HttpError('Could not delete directory with this ID.', 500); 
        return next(error);
    }

    try {
        await directory.remove();
    } catch (err) {
        const error = new HttpError('Could not delete directory with this ID.', 500); 
        return next(error);
    }

    res.status(200).json({message: 'Directory deleted'})
};

exports.getDirectoryById = getDirectoryById;
exports.createDirectory = createDirectory;
exports.updateDirectoryById = updateDirectoryById;
exports.deleteDirectory = deleteDirectory;