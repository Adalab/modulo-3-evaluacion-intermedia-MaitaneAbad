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
    }
    setNewClub({
      name: '',
      openOnWeekdays: false,
      openOnWeekend: false,
    });
  };
  const handleDeleteClub = (ev) => {
    // esta funcion necesitamos saber SIEMPRE EL ID, luego cogemos el array principal y le borramos el clickado y 1 solo ( id,1) para que no nos borre más elementos y después volvemos a actualizar el estado para que lo muestre en el HTML
    ev.preventDefault();
    const id = ev.currentTarget.id;
    clubs.splice(id, 1);
    setClubs([...clubs]);
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
            <li key={i} id={i} className='list'>
              <div>
                <p className='textTitle'>
                  <label>Nombre: </label>
                  {'' + clubs.name}
                </p>
                <p className='textTitle'>
                  <label>Abierto entre semana: </label>
                  {clubs.openOnWeekdays ? '  Si' : ' No'}
                </p>
                <p className='textTitle'>
                  <label>Abierto el fin de semana:</label>
                  {clubs.openOnWeekend ? ' Si' : ' No'}
                </p>
              </div>
              <div className='divButton'>
                <button className='button' onClick={handleDeleteClub}>
                  X
                </button>
              </div>
            </li>
          );
        })
    );
  };
  return (
    <div class='page'>
      <header className='header'>
        <h1 class='title'>Mis clubs</h1>

        <form className='select'>
          <label htmlFor='filter' className='labelSelector'>
            Mostrar{' '}
          </label>
          <select
            value={searchClubs}
            onChange={handleSearchClub}
            className='optionSelect'
          >
            <option value='other'>Todos</option>
            <option value='week'>Los que abren entre semana</option>
            <option value='weekend'>Los que abren en fin de semana</option>
          </select>
        </form>
      </header>
      <main>
        <ul class='listComplete'>{renderClubs()}</ul>
        <form className='formNewClub'>
          <h2 className='title'>Nuevo Club</h2>
          <label htmlFor='name'>Nombre del club:</label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder=' Ej. Robótica'
            onChange={handleNewCLub}
            value={newClub.name}
            className='inputText'
          />
          <label htmlFor='week'>
            ¿Abre entre semana?
            <input
              type='checkbox'
              name='week'
              id='week'
              onChange={handleNewCLub}
              checked={newClub.openOnWeekdays}
              className='inputCheckbox'
            />
          </label>
          <label htmlFor='weekends'>
            ¿Abre los fines de semana?
            <input
              type='checkbox'
              name='weekends'
              id='weekends'
              onChange={handleNewCLub}
              checked={newClub.openOnWeekend}
              className='inputCheckbox'
            />
          </label>

          <input
            type='submit'
            value='Añadir'
            className='button'
            onClick={handleNewClub}
          />
        </form>
      </main>
    </div>
  );
}

export default App;
