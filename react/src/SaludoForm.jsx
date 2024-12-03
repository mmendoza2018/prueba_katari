import { useState } from 'react'
import './App.css'

function SaludoForm() {

  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  /*  event to onchange */
  const handleInput = (e) => {
    setNombre(e.target.value);
    setMensaje('');
    setError('');
  };

  /*  event to submit */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombre.length < 3) {
      setError('El nombre es demasiado corto.');
      setMensaje('');
    } else {
      setMensaje(`Hola, ${nombre}!`);
      setError('');
    }
  };

  return (
    <div className='w-50 mx-auto'>
      <h2>Formulario de Saludo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleInput}
            placeholder="Ingresa tu nombre"
            className='form-control mt-3'
          />
        </div>
        <button type="submit" className='btn btn-success mt-3'>Mostrar Saludo</button>
      </form>

      {
        mensaje &&
        <div class="alert alert-info mt-3" role="alert">
          {mensaje}
        </div>

      }

      {
        error &&
        <div class="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      }
    </div>
  )
}

export default SaludoForm
