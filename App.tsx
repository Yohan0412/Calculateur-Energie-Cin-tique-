import * as React from 'react';
import './style.css';

export default function App() {
  const [energie, setEnergie] = React.useState(parseInt('0',10));

  const [registerUser, setRegisterUser] = React.useState({
    masse: parseInt('0', 10),
    vitesse: parseInt('0', 10),
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
    console.log(registerUser.vitesse);
  };

  
  function calcu(e) {
    e.preventDefault();
    let vitesseMS = (registerUser.vitesse * 1000) / 3600;
    console.log(vitesseMS);
    setEnergie((1 / 2) * registerUser.masse * Math.pow(vitesseMS, 2));
    console.log(vitesseMS);
    
  }

  return (
    <div>
      <h1>CALCULATEUR ENERGIE CINETIQUE</h1>
      <div className="form">
        <form>
          <label>
            Masse en Kg : 
            <input onChange={handleChange} name="masse" type="number" />
          </label>
          <br></br>
          <label>
            Vitesse en Km/h : 
            <input onChange={handleChange} name="vitesse" type="number" />
          </label>
          <br></br>
          <button onClick={calcu}>Calculer</button>
        </form>
      </div>
      {energie <= 0 ? '' : <h3>Résultat : {energie} Joules</h3>}
    </div>
  );
}
