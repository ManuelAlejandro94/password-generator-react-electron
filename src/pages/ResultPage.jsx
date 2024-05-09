import React from "react";
import { useLocation } from 'react-router-dom';

function ResultPage() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const number = searchParams.get('number');

    return(
        <div>
            <h1>Result</h1>
            <p>The input number is: {number}</p>
        </div>
    );
}

export default ResultPage;