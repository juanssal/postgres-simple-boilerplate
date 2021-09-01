const dataMapper = require('./dataMapper');

const mainController = {
    homePage: (request, response) => {
      dataMapper.getAllData((error, result) => {
        if(error) console.log('error');
        else {
          let items = result.rows;
          console.log('Items found capitan!');
          response.render('index', { items });
        }
      });
    },

    addItemPage: (request, response) => {
          dataMapper.addItem(request.body, (error, result) => {
            if(error) console.log('error');
            else {
              console.log(request.body.product + ' was added');
              response.end();
            }
          });
        }
        
      };

module.exports = mainController;