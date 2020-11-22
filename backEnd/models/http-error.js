class HttpError extends Error {
    constructor(messgae, errorCode) {
        super(messgae);  //add a messgae property
        this.code = errorCode;  // adds a code property
    }
}

module.exports = HttpError;