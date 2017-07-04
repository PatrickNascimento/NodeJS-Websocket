module.exports = function(app) {

    var listagenda  = function(req, res,next) {
        var connection = app.infra.connection();
        var agendaDAO = new app.infra.agendaDAO(connection);
        
        agendaDAO.lista(function(err, results) {
            if (err) {
                  return(next(err))  ;
            }
            res.format({
                html : function() {
                res.render('agenda/lista', {lista: results});
            },
                json : function() {
                res.json(results);
            }

            });
        });

        connection.end();
    }
    app.get('/agenda', listagenda);  
    

    app.get('/agenda/form', function (req,res) {        
    	res.render('agenda/form');
    })   

    app.post('/agenda', function (req,res) {        
        var contatos = req.body;        
		var connection = app.infra.connection();
        var agendaDAO = new app.infra.agendaDAO(connection);

        agendaDAO.salva(contatos,function(err,results){
            app.get('io').emit('nova',contatos,results);
            console.log(results.insertId);
        	res.redirect('/agenda/form');            
        });

        connection.end();
    });
}
