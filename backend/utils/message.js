const moment = require('moment');

var generateMessage = (author, text) => {
    return {
	author,
	body,
	createdAt: moment().valueOf()
    }
};

module.exports = {generateMessage};
