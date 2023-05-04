import { getRandomNumber } from './utils/getRandom'
import { useState } from 'react';
import phrases from './assets/phrases.json'
import Phrase from './Components/Phrase/Phrase';
import Button from './Components/Button/Button';

import './App.css'
import space1 from './assets/space_1.jpg'
import space2 from './assets/space_2.jpg'

/* 
  MANEJO DE IMAGENES EN VITE

  1. Lo recomendado siempre es usar una URL.
  2. Guardar la imagen en alguna carpeta de src.
    - Al guardar en src: Las imágenes deben importarse explícitamente y usarse la variable que se entrega. De lo contrario Vite, asume que no las necesitas y no las incluye en el compilado final.
  3. Guardar en la carpeta public.
    - Estas no se deben importar y deben hacerse referencia a ellas asumiendo la raíz "/" como la carpeta public.
*/

const backgrounds = [space1, space2];

function App() {
  const getRandomPhrase = () => phrases[getRandomNumber(phrases.length - 1)];
  const getRandomBackground = () => backgrounds[getRandomNumber(backgrounds.length - 1)];

  const [phraseObject, setPhraseObject] = useState(getRandomPhrase());
  const [background, setBackground] = useState(getRandomBackground());

  const changePhrase = () => {
    let newPhrase = getRandomPhrase();
    let newBackground = getRandomBackground();
    
    while(newPhrase === phraseObject) {
      newPhrase = getRandomPhrase();
    }

    while(newBackground === background) {
      newBackground = getRandomBackground();
    }

    setPhraseObject(newPhrase);
    setBackground(newBackground);
  }

  return (
    <div className='container_app' style={{backgroundImage: `url("${background}")`}}>
      <h1>INFOGALAX</h1>
      <Phrase phrase={phraseObject.phrase}/>
      <p style={{color: 'white', fontSize: 18}}>
        Author: <mark>{phraseObject.author}</mark>
      </p>

      <div className='btn_container'>
        <Button handlerClick={changePhrase}/>
      </div>
    </div>
  )
}

export default App
