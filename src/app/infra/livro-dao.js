class LivroDao {
    constructor(db){
        this._db = db;
    }

    listaLivros(callback){
        this._db.all(
            'SELECT * FROM livros',
            (erro, resultado) => 
                callback(erro, resultados)
        )
    }
}

module.exports = LivroDao;