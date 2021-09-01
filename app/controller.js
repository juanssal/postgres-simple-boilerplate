const dataMapper = require('./dataMapper');

const mainController = {
    // méthode pour la page d'accueil
    homePage: (request, response) => {
      dataMapper.getAllData((error, result) => {
        // si il y a eu une erreur dans la requête SQL, alors execute la fonction errorSQL (console.log l'erreur et renvoie un message d'erreur au client)
        if(error) console.log('error');
        // sinon génère la vue en lui passant toutes les figurines
        else {
          // on stock dans une variable le resultat de la base (tableau contenant toutes les figurines)
          let items = result.rows;
          // on test : si on a une variable category dans le lien, alors ne garder dans le tableau QUE LES FIGURINES QUI POSSEDENT LA CATEGORIE INDIQUEE
          console.log('Items found capitan!');
          response.render('index', { items });
        }
      });
    },
    // addItem: (request, response) => {
    //   dataMapper.addItem((error, result) => {
    //     if(error) console.log('error');
    //     else {
    //       let items = result.rows;
    //       console.log('Item added capitan!');
    //     }
    //   })
    // }
    addItemPage: (request, response) => {
      dataMapper.addItem(request.body, (error, result) => {
        // si il y a eu une erreur dans la requête SQL, alors execute la fonction errorSQL (console.log l'erreur et renvoie un message d'erreur au client)
        if(error) console.log('error');
        // sinon génère la vue en lui passant toutes les figurines
        else {
          // on stock dans une variable le resultat de la base (tableau contenant toutes les figurines)
          let items = result.rows;
          // on test : si on a une variable category dans le lien, alors ne garder dans le tableau QUE LES FIGURINES QUI POSSEDENT LA CATEGORIE INDIQUEE
          console.log(items);
         response.send(items);
        }
      });
    }

}

module.exports = mainController;