import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Headline from './components/Headline.js'
import CardContainer from './components/CardContainer.js'

const App = ()=>{
    return `

        ${Navbar()}
        ${Hero()}
        ${Headline()}
        <center>
            ${CardContainer()}
        </center>
    `
}

export default App