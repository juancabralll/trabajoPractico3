const {useState} = React;

const App= () => {
    const [num1, setnum1] = useState(0);
    const [num2, setnum2] = useState(0);
    const [tipoOperacion, settipoOperacion] = useState("suma");
    const [respuesta, setresultado] = useState(0);

    const calcular = (e) => {
        e.preventDefault();
        let respuesta = 0;

        if(tipoOperacion === "suma"){
            respuesta = num1 + num2;
        }
        else if(tipoOperacion === "resta"){
            respuesta = num1 - num2;
        }
        else if(tipoOperacion === "multiplicacion"){
            respuesta = num1 * num2;
        }
        else if(tipoOperacion === "division"){
            respuesta = num1 / num2;
        }

        setresultado(respuesta);
    }

    return (
        <>
        <h2>Calculadora</h2>
        <form className="formulario" onSubmit={calcular}>
            <label>Ingrese el primer numero</label>
            <input type="number" value={num1} onChange={(e) => setnum1(parseFloat(e.target.value)   )} />
            <label>Ingrese el segundo numero</label>
            <input type="number" value={num2} onChange={(e) => setnum2(parseFloat(e.target.value)   )} />   
            <label>Seleccione la operación</label>
            <select value={tipoOperacion} onChange={(e) => settipoOperacion(e.target.value)}>
                <option value="suma">Suma</option>
                <option value="resta">Resta</option>
                <option value="multiplicacion">Multiplicación</option>
                <option value="division">División</option>
            </select>
            <button type="submit"disabled={tipoOperacion=== "division" && num2 === 0}>Calcular</button>
            <div>Respuesta: {respuesta}</div>
        </form>
        </>
    )
}

const contenido= document.getElementById("root");
const root = ReactDOM.createRoot(contenido);
root.render(<App/>);