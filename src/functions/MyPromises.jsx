function MyPromises() {
    
    //Funcion que recibe un numero y le suma el valor de 1.
    // function fcnSumarUno(numero){
    //    var promesa = new Promise(function(resolve, reject){
    //        setTimeout(function(){
    //            resolve( numero + 1 );
    //            }, 800);
    //    });
    // return promesa;
    // };

    //Funcion que recibe un nuemero y le suma el valor de 1.
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

    //Se hace un llamado de la funcion y promesa
    // fcnSumarUno(5).then( function(nuevoNumero){
    //    console.log(nuevoNumero);
    // });

    //Se hace un llamado de la funcion arrow (flecha) => y promesa
    // fcnSumarUno(5).then( nuevoNumero=>{
    //    console.log(nuevoNumero);
    // });
   
    /*Se hace un llamado de la funcion y promesa
    de manera que sea recursiva y de manera encadenada.*/
    // fcnSumarUno(5).then( nuevoNumero=>{
    //    console.log("Resultado:",nuevoNumero);
    //    return fcnSumarUno(nuevoNumero);
    // }).then( nuevoNumero=>{
    //    console.log("Resultado:",nuevoNumero);
    //    return fcnSumarUno(nuevoNumero);
    // }).then( nuevoNumero=>{
    //    console.log("Resultado:",nuevoNumero);
    // });
    // fcnSumarUno(5)
    //    .then( fcnSumarUno)
    //    .then( fcnSumarUno)
    //    .then( nuevoNumero=>{
    //    console.log("Resultado:",nuevoNumero);
    // });

    /*Se hace llamado de la funcion y promesa
    de manera recursiva y optimizada y con validaciones de errores*/
    fcnSumarUno(15) //probado con 13, 14 y 15
        .then( fcnSumarUno)
        .then( fcnSumarUno)
        .then( nuevoNumero=>{
        console.log("Resultado:",nuevoNumero);
    })
    .catch(error =>{
        console.log('Error en la Promesa', error);
    });
   
///////////////////////////////////////////////////////////////////////////////

    return (
        <>
            <div>
                <h1>
                    Programa de Funciones con Promesas
                </h1>
            </div>
       
        </>
    );
};
export default MyPromises;