function MyFunctions() {
    //Se crea una funcion que recibe un numero y le suma el valor de 1.
    /*
    function fcnSumarUno(){
        return numero + 1;
    }
    */

    //Se mejora la funcion que recibe un numero y le suma el valor de 1.
    function fcnSumarUno(numero, fcnResultadoCallBack){
        setTimeout(function(){
        //return numero + 1;
            fcnResultadoCallBack(numero + 1);
        }, 800);
    }

    //Se envia a la consola el nombre de "Programa de Funciones".
    console.log("Programa de Funciones");

    //Se manda llamar a la funcion.
    //let Resultado = fcnSumarUno(15);
    //Se muestra el resultado en consola
    //console.log(Resultado);

    //Se llamar a la funcion.
    fcnSumarUno(11, function(nuevoValor1){
        //Se muestra el resultado en la consola.
        //console.log("Resultado: ", nuevoValor1)
        fcnSumarUno(nuevoValor1, function(nuevoValor2){
            console.log("Resultado:", nuevoValor2);
        });
    });

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones
                </h1>
            </div>
       
        </>
    );
};

export default MyFunctions;