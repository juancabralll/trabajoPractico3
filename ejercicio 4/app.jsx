const { useState } = React;

const App = () => {
    const [ladoActivo, setLadoActivo] = useState("derecha"); 

    return (
        <>
            <button
                disabled={ladoActivo === "izquierda"}
                onClick={() => setLadoActivo("izquierda")}
            >
                Izquierda
            </button>
            <button
                disabled={ladoActivo === "derecha"}
                onClick={() => setLadoActivo("derecha")}
            >
                Derecha
            </button>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);