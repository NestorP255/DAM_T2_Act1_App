function MyDataTypes() {
   /*let IdNombre = 'Nes';
    IdNombre = 255;
    console.log("IdNombre: ", IdNombre);

    const NesNumControl25 = 19400652;
    const NesFichaReg = new Date();
    let NesExperiencia = 6;
    let NesActivo = true;*/

    let Alias = 'Nes';
    let IdNombre = 255;

    const Nombre = 'Néstor';
    const Apellidos = "Pérez Ceja";
    const NumControl = 255;

    const NumControl2 = 19400652;
    const FechaReg = new Date();
    let Experiencia = 6;
    let Activo = true;

    console.log("IdNombre: ", IdNombre);
    console.log("Nombre: ", Nombre);
    console.log("Apellidos: ", Apellidos);
    console.log("Numero de Control: ", NumControl2);
    console.log("Fecha de Registro: ", FechaReg);
    console.log("Experiencia: ", Experiencia);
    console.log("¿Activo?: ", Activo);

    //Arreglos
let Pasatiempos = ['Videojuegos, ', 'Musica, ', 'Streaming, '];
Pasatiempos.push('Grabar, ');
Pasatiempos.push('Dormir, ');
Pasatiempos.push(256);
Pasatiempos.push(false);

console.log("Pasatiempos: ", Pasatiempos);

let Juegos = [];
Juegos.push("Gears of War 2, ");
Juegos.push("Forza Horizon, ");
Juegos.push("Left 4 Dead 2, ");
Juegos.push(true);
Juegos.push(606060);

console.log("Juegos: ", Juegos); 

    return (
        <>
            <div>
                <h1>
                    Programa para conocer diferentes Tipos de de Datos
                </h1>
                <h2>
                    Alias: {Alias}
                    <br/>
                        ID: {IdNombre}
                    <br/> 
                        Nombre: {Nombre}
                    <br/>
                        Apellidos: {Apellidos}
                    <br/>
                        Num. Ctrl: {NumControl}
                    <br/>
                        Num. Ctrl2: {NumControl2}
                    <br/>
                        Fecha de Registro: {FechaReg.toString()}
                    <br/>
                        Años de Experiencia: {Experiencia}
                    <br/>
                        Estatus: {(Activo) ? 'Activo' : 'No Activo'}
                    <br/>
                        Pasatiempos: {Pasatiempos}
                    <br/>
                        Juegos: {Juegos}
                </h2>
            </div>
       
        </>
    );
};
export default MyDataTypes;