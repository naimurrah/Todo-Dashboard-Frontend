import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function WeatherView() {
    const [temp, setTemp] = useState(0);
    const getTemp = async () => {
        try {
            const temp_promise = await fetch("https://tddbbe.azurewebsites.net/weather");
            const temp_json = await temp_promise.json();
            console.log(temp_json.temperature_f);
            setTemp(temp_json.temperature_f);

        } catch (error) {
            console.error(error.message);
        }
    }
    useEffect(() => {
        getTemp();
    }, []);

    return (
        <div className="card bg-light">
        <a target="_blank" rel="noreferrer" href="https://weather.com/weather/today/l/f6f6b1cb1cd9947e9768c25dc2d924009d6079538fc8829ff28f93fc5c988da1" style={{textDecoration:"None"}}>
            <h5 className="card-header bg-secondary text-white">Weather</h5>
            <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Frisco, Texas</h6>
                <h4 className="card-body text-primary">{temp}°F</h4>
            </div>
        </a>
        </div>
    )
}
