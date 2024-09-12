function MyPromisesAll() {

    //Funcion que recibe un numero y le suma el valor de 1.
    function fcnSumarUno( numero ){
        var promesa = new Promise(function(resolve, reject){
            if (numero >= 17 ){
                reject('El numero ya es muy alto');
            }
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    return promesa;
    };
    /*Funcion normal que regresa una promesa
    pero el resultado se obtiene de manera mas lenta.*/
    function fcnSumarLento( numero ){
        /* var promesa = new Promise(function(resolve, reject){
        });
        return promesa; */
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 800);
        });
    };
   
    /*Forma optima de definicion de una funcion pero de tipo arrow (flecha) que
    tambien regresa una promesa pero el resultado se obtiene de manera mas rapida. */
    let fcnSumarRapido = (numero)=>{
        return new Promise(function(resolve, reject){
            setTimeout(function(){
                resolve( numero + 1 );
                }, 300);
        });
    };
    
    //Se hace un llamado normal de la funcion sumar lento y su promesa.
    fcnSumarLento(8)
    .then(respuesta=>{
        console.log('Respuesta Lenta:', respuesta);
    });

    //Se hace un llamado normal de la funcion sumar rapido y su promesa.
    fcnSumarRapido(12)
    .then(respuesta=>{
        console.log('Respuesta Rapida:', respuesta);
    });

    //Se hace un llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
    // Promise.all([fcnSumarLento(5), fcnSumarRapido(10)])
    // .then(respuestas =>{
    //    console.log('Respuestas:', respuestas);
    // });

    let arregloVarios = [fcnSumarLento(8), fcnSumarRapido(12), true, '¡Hola Mundo!'];

    //Se hace un llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
    Promise.all(arregloVarios)
    .then(respuestas =>{
        console.log('Respuestas:', respuestas);
    })
    .catch(error=>{
        console.log("Error en todas las promesas: ", error);
    });
    
    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas ALL
                </h1>
            </div>
       
        </>
    );
};

export default MyPromisesAll;