function MyObjects(){
    const persona = {
        nombre: 'Néstor',
        edad: 23,
        direccion: {
            pais: 'México',
            estado: 'Nayarit',
            ciudad: 'Tepic',
            direccion: 'No la dire No. 255'
        }
    };

    console.log("JSON Person: ", JSON.stringify(persona, null, 2));

    return(
        <>
        <div> 
            <h1>Objetos Literales</h1> 
            <h2>
            <code> 
                <pre> 
                    {/*JSON.stringify(persona)*/} 
                    {JSON.stringify(persona, null, 2)} 
                </pre> 
            </code> 
            </h2>
        </div> 
        </>
    );

};

export default MyObjects;