const HttpError = require

const DUMMY_DIRECTORY = [
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

const getDirectoryById = (req, res, next) => {
    const directoryId = parseInt(req.params.id, 10);
    const directory = DUMMY_DIRECTORY.find(p => {
        return p.id === directoryId;
    });

    if (!directory) {
        throw HttpError('Could not find directory with this ID.');
    };

    res.json({ directory })
};

exports.getDirectoryById = getDirectoryById;