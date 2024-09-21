export const useCounter = () => {
    const [valor, setValor] = useState(0);
    const acumular = (numero)=> {
        setValor(valor + numero);
    };
   
}