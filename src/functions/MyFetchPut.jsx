function MyFetchPut() {
//Se declara el objeto usuario.
    let usuario = {
        nombre: 'Néstor',
        edad: 23
    }

    
    //API PUT de usuario.
fetch('https://reqres.in/api/users/2', {
    method: 'PUT',
    body: JSON.stringify(usuario), //data a enviar
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(resp => resp.json())
.then(console.log); 

 /*   
    //Parte para verificar errores
    //API PUT de usuario.
    fetch('https://reqres.in/', {
        method: 'PUT',
        body: JSON.stringify(usuario), //data a enviar
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(resp => resp.json())
    .then(console.log)
    .catch(error => {
        console.log('Error en la peticion API PUT');
        console.log(error);
    });*/
    
        return (
            <>
                <div>
                    <h1>
                        Programa para Fetch Put
                    </h1>
                </div>
           
            </>
        );
    };
    
    export default MyFetchPut;