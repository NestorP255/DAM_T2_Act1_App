function MyPromisesRace() {
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
                //resolve( numero + 1 );
                reject('Error en la promesa de la funcion Sumar Rapido');
                //}, 300);
            }, 1000);
        });
    };

    //Promise.race
    Promise.race([fcnSumarLento(5), fcnSumarRapido(10)])
    .then(respuesta =>{
        console.log('Respuesta:', respuesta);
    })
    .catch(error=>{
        console.log("Error en la respuesta de la promesa: ", error);
    });

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas RACE
                </h1>
            </div>
       
        </>
    );
};

export default MyPromisesRace;