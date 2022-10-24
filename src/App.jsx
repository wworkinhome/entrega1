import { useState } from 'react'
import './App.css'
import quotes from './components/quotes.json'




function App() {

  const willRandom = Math.floor(Math.random() * quotes.length)
  const [ isChange, setIsChange ] = useState(willRandom)
 
  const alert = () => {
    const random = Math.floor(Math.random() * quotes.length)
    setIsChange(random)
  }

  const colors = ["aquamarine", "orange", "blueviolet", "orangered", "yellow", "grey", "cyan", "blue", "green", "brown", "purple", "red", "pink", "rosybrown","royalblue", "maroon"]
  const ChangeColors = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[ChangeColors]}`
  

  return (
    <div className="App" style={{color: colors[ChangeColors]}}>

      <div className="text">
        <p><i class='bx bxs-quote-alt-left'></i> {quotes[isChange].quote} <i class='bx bxs-quote-alt-right'></i><small>{quotes[isChange].author}</small></p>
        <p></p>
      </div>
      <div>
      <i class='bx bxs-right-arrow-circle bx-lg' onClick={alert}></i>
      </div>
    </div>
  )
}

export default App
