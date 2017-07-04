function agendaDAO(connection) {
    this._connection = connection;
}

agendaDAO.prototype.lista = function(callback) {
    this._connection.query('select * from agenda',callback);
}

agendaDAO.prototype.salva = function(contatos,callback) {
    this._connection.query('insert into agenda set ?',contatos,callback);
}

module.exports = function(){
    return agendaDAO;
};
