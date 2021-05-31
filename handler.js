'use strict';
const moment = require('moment');

module.exports.logger = async (event) => {
  return { 
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Serverless cicd demo',
        input: event,
        version: 'v8.0',
        timestamp:moment().unix()
      },
      null,
      2
    ),
  };

  
};
