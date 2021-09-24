import '../styles/App.scss';
import data from './data.json';
import { useState } from 'react';

function App() {
  // constantes de estado
  const [clubs, setClubs] = useState(data);
  const [searchClubs, setSearchClubs] = useState('');
  const [newClub, setNewClub] = useState({
    name: '',
    openOnWeekdays: false,
    openOnWeekend: false,
  });

  const handleSearchClub = (ev) => {
    // Para el filtro de busqueda
    setSearchClubs(ev.target.value);
  };
  const handleNewCLub = (ev) => {
    // Los elementos para que me los pinte en el objeto
    console.log(ev.currentTarget.id);
    console.log(ev.currentTarget.value);
    console.log(ev.currentTarget.checked);

    if (ev.currentTarget.id === 'name') {
      setNewClub({
        ...newClub,
        name: ev.currentTarget.value,
      });
    } else if (ev.currentTarget.id === 'week') {
      setNewClub({
        ...newClub,
        openOnWeekdays: ev.currentTarget.checked,
      });
    } else if (ev.currentTarget.id === 'weekends') {
      setNewClub({
        ...newClub,
        openOnWeekend: ev.currentTarget.checked,
      });
    }
  };

  const handleNewClub = (ev) => {
    //Añado un nuevo Club(objeto) al array de los clubs ya hechos
    ev.preventDefault();
    if (newClub.name !== '') {
      setClubs([...clubs, newClub]);

      setNewClub({
        name: '',
        openOnWeekdays: '',
        openOnWeekend: '',
      });
    }

    console.log(clubs);
  };
  const handleDeleteClub = (ev) => {
    ev.preventDefault();
    // If click borrame ese objeto del array
  };
  const renderClubs = () => {
    return (
      clubs
        // filtrame todos || filtrame solo los que abren entre semana || filtrame solo los que abren los fines de semana
        .filter((clubs) => {
          if (searchClubs === 'week') {
            return clubs.openOnWeekdays === true;
          } else {
            return true;
          }
        })
        .filter((clubs) => {
          if (searchClubs === 'weekend') {
            return clubs.openOnWeekend === true;
          } else {
            return true;
          }
        })
        .map((clubs, i) => {
          return (
            <li key={i} id={i}>
              <p>
                <label>Nombre: </label>
                {'' + clubs.name}
              </p>
              <p>
                <label>Abierto entre semana:</label>
                {clubs.openOnWeekdays ? ' Si' : ' No'}
              </p>
              <p>
                <label>Abierto el fin de semana:</label>
                {clubs.openOnWeekend ? 'Si' : 'No'}
              </p>

              <button onClick={handleDeleteClub}>X</button>
            </li>
          );
        })
    );
  };
  return (
    <div>
      <header>
        <h1>Mis clubs</h1>

        <form>
          <label htmlFor='filter'>Mostrar</label>
          <select value={searchClubs} onChange={handleSearchClub}>
            <option value='other'>Todos</option>
            <option value='week'>Los que abren entre semana</option>
            <option value='weekend'>Los que abren en fin de semana</option>
          </select>
        </form>
        <hr></hr>
        <ul>{renderClubs()}</ul>
      </header>
      <main>
        <form>
          <label htmlFor='name'>Nombre del club</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder=' Ej. Robótica'
            onChange={handleNewCLub}
          />
          <label htmlFor='week'>¿Abre entre semana?</label>
          <input
            type='checkbox'
            name='week'
            id='week'
            onChange={handleNewCLub}
          />
          <label htmlFor='weekends'>¿Abre los fines de semana?</label>
          <input
            type='checkbox'
            name='weekends'
            id='weekends'
            onChange={handleNewCLub}
          />

          <input type='submit' value='Añadir' onClick={handleNewClub} />
        </form>
      </main>
    </div>
  );
}

export default App;
