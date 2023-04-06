import { useState } from 'react';
import './App.css';

function App() {

  const [saldo, setSaldo] = useState("")
  const [inputValue, setInputValue] = useState("")

  const inputEinzahlen = () => {
    setSaldo(saldo + inputValue)
  }
  const inputAuszahlen = () => {
    setSaldo(saldo - inputValue)
  }
  let change = (event) => {
    setInputValue(Number(event.target.value))
  }

  return (
    <div className="App">
      <header className='header'>
        <img src="https://cdn.pixabay.com/photo/2022/07/21/15/06/banana-7336435_960_720.png" alt="banane" id='logoImg' />
        <div id='title'><h1>Banana Bank</h1>
        </div>
        <div className='konto'>
          <h2>Dein Girokonto</h2>
          <p className='saldo'>{saldo}</p>
          <div>
            <input type="text" name="" id="" className='geldbetrag' placeholder='Gib einen Geldbetrag ein' onChange={change} value={inputValue} />
          </div>
          <button className='einzahlen' onClick={inputEinzahlen}>Einzahlen</button>
          <button className='auszahlen' onClick={inputAuszahlen}>Auszahlen</button>
        </div>
      </header>
    </div>
  );
}

export default App;
