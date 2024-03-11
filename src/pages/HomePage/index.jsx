import './style.css';
import { useEffect } from 'react';
import { useState } from 'react';

export const HomePage = () => {

  const [datetime, setDatetime] = useState('');
  const [timezone, setTimezone] = useState("Europe/Prague");

      useEffect(() => {
        const fetchTime = async () => {
          const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
          const data = await response.json();
        setDatetime(data.datetime);
        };

        fetchTime();
      //alert('Potvrď OK');
    }, [timezone]);


  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Zobrazení času:</h1>
      </header>
      <main>
       <div> 
          <label>
            Pro město:{" "}
            <select
              onChange={(event) => {
                setTimezone(event.target.value);
              }}
              value={timezone}
            >
              <option value="America/New_York">New York</option>
              <option value="Europe/London">Londýn</option>
              <option value="Europe/Moscow">Moskva</option>
              <option value="Europe/Prague">Praha</option>
              <option value="Asia/Hong_Kong">Hong Kong</option>
              <option value="Asia/Jerusalem">Jeruzalém</option>
            </select>
          </label>
        </div>
        <div>
          Aktuálni čas: {" "}
          <output className='time'>{datetime}</output>
        </div>
      </main>
      <footer>
        <p>Czechitas, Kurz: React 1</p>
      </footer>
    </div>
  );
};
