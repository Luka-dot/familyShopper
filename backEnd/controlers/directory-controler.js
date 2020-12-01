const HttpError = require

const Directory = require('../models/directory');


/**************************************************** GET ****************************************************/
const getDirectoryById = async (req, res, next) => {
 //   const directoryId = req.params.id;   // parseInt(req.params.id, 10)

    let directory;
    try {                       
    directory = await Directory.find({});
    } catch (err) {
        const error = new HttpError('Could not find directory with this ID.', 500); 
        return next(error);
    }

    if (!directory) {
        const error = new HttpError('Could not find directory with this ID.');
        return next(error);
    };

    res.json({ directory: directory.map(dir => dir.toObject({getters: true}) ) }); //toObject is used to remove Mongoose methods, 
 //   res.json({ users: users.map(user => user.toObject({ getters: true }))});
};

const createDirectory = async (req, res, next) => {
    const { name, created, listDetail } = req.body;
    const createdDirectory = new Directory({
        name: name,
        created: created,
        listDetail: listDetail
    });
    
    try {
        await createdDirectory.save();
    } catch (err) {
        const error = new HttpError('Create directory failed.', 500);
        return next(error);
    }
    

    res.status(201).json({directory: createdDirectory });
};

/**************************************************** UPDATE ****************************************************/
const updateDirectoryById = async (req, res, next) => {
    const directoryId = req.params.id;  // = parseInt(req.params.id, 10);
    console.log('update directory ',req.body)
    
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
    
    directory.listDetail.push(req.body);

    try {
        await directory.save();
    } catch (err) {
        const error = new HttpError('Could not update directory with this ID.', 500); 
        return next(error);
    }

    res.status(200).json({directory: directory.toObject({ getters: true}) });
};

/**************************************************** DELETE ITEM ****************************************************/
const deleteItemById = async (req, res, next) => {
    const itemId = req.params.id;
    const directoryId = req.params.directoryId;
    
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
    
    const itemToDeleteFilterOut = directory.listDetail.filter((item) => item.id != itemId);
    directory.listDetail = itemToDeleteFilterOut

    try {
        await directory.save();
    } catch (err) {
        const error = new HttpError('Could not update directory with this ID.', 500); 
        return next(error);
    }

    res.status(200).json({directory: directory.toObject({ getters: true}) });
//    res.json({ directory: directory.map(dir => dir.toObject({getters: true}) ) })
};

/**************************************************** DELETE ITEM ****************************************************/
const deleteDirectory = async (req, res, next) => {
    const directoryId = req.params.id;
    
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
exports.deleteItemById = deleteItemById;
exports.deleteDirectory = deleteDirectory;