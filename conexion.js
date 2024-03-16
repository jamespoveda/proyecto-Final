let mysql = require("mysql");

let conexion = mysql.createConnection({
    host: "localhost",
    database:"sakila",
    user: "root",
    password:"sofia"
});

conexion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("conexion exitosa");
    }
});




/*const categorias ="SELECT * FROM actor";

conexion.query(categorias, function (error,lista){
    if(error){
        throw error;
    }else{
        //console.log(lista[4].first_name);
        console.log(lista);
    }
});*/

const categorias ="SELECT * FROM category";

conexion.query(categorias, function (error,lista){
    if(error){
        throw error;
    }else{
        //console.log(lista[4].first_name);
        console.log(lista);
    }
});
conexion.end();