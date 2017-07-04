module.exports = function(app) {
    app.get('/', function(req, res) {  
    var connection = app.infra.connection();
        var agendaDAO = new app.infra.agendaDAO(connection);
        
       agendaDAO.lista(function(err, results) {            
       res.render('home/home');   
       });

    });
}
