import React, { useState } from 'react';
import Seconds from './Seconds';

const App = () => {
        // useState => estado / función que permite modificar el estado
        // array destructuring
        const [ showTimer, setShowTimer ] = useState(false);

    return (
        <div className="App">
            <h1>Aprender hooks version</h1>
            <button onClick={() => setShowTimer(!showTimer)}>
                {!showTimer
                    ? 'Activar cronómetro'
                    : 'Apagar cronómetro'}
            </button>
            {!showTimer
                ? (
                    <div className="alert alert-danger">
                        Apagado
                    </div>
                )
                : (
                    <div className="alert alert-success">
                        Activo! <Seconds /> segundos
                    </div>
                )
            }
        </div>
    );
}

export default App;
