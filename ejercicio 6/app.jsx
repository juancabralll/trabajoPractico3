const {useState} = React;

const App = () => {
    const [peso, setpeso] = useState();
    const [altura, setaltura] = useState();
    const [resultado, setresultado] = useState();


    const calcular = (e) => {
        e.preventDefault();

        if (!peso || !altura || peso <= 0 || altura <= 0) { 
            setresultado("Ingrese un valor valido");
            return;
        }
        const indic = peso / (altura*altura);
        let texto = "";
        let c = "";
        if (indic< 18.5) { texto =`${indic.toFixed(2)} el indice es bajo`,c = "yellow";}
        else if (indic >= 18.5 && indic < 25) { texto = `${indic.toFixed(2)} el indice es normal`,c = "green";}
        else if (indic >= 25 && indic < 30) { texto = `${indic.toFixed(2)} el indice es alto`,c = "orange";}
        else if (indic >= 30) { texto = `${indic.toFixed(2)} el indice es muy alto`,c = "red";}

        setresultado({texto,c});
    }

    return (
        <>
            <h1>Calcular el Indice de masa Corporal</h1>
            <form className="formulario" onSubmit={calcular}>
                <label htmlFor="peso">Peso</label>
                <input type="number" id="peso" name="peso" step="0.01" onChange={(e) => setpeso(parseFloat(e.target.value))}/>
                
                <label htmlFor="altura">Altura</label>
                <input type="number" id="altura" name="altura" step="0.01" onChange={(e) => setaltura(parseFloat(e.target.value))}/>
                
                <button type="submit">Calcular</button>

                {resultado && (
                    <div style={{color:resultado.c}}>{resultado.texto}</div>
                )}
            </form>
        </>
    );
}
const caja = document.getElementById("root");
const root = ReactDOM.createRoot(caja);
root.render(<App/>);
