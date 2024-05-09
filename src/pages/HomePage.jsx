import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function HomePage () {
    const [number, setNumber] = useState('');
    const history = useNavigate();

    const handleInputChange = (e) => {
        const input = e.target.value;

        if(!isNaN(input)) {
            setNumber(input);
        }
    };

    const handleSubmit = () => {
        history(`/result?number=${number}`);
    };

    return(
        <div>
            <h1>Electron React App</h1>
            <input
                type="text"
                value={number}
                onChange={handleInputChange}
                placeholder="Input a number"
            />
            <button onClick={handleSubmit}>Go to result</button>
        </div>
    )
}

export default HomePage;