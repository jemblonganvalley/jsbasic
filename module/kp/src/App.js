import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Headline from './components/Headline.js'
import CardContainer from './components/CardContainer.js'
import Footer from './components/Footer.js'
import Menu from './components/Menu.js'
import DetailPage from './components/DetailPage.js'


const App = ()=>{
    return `

        ${Navbar()}
        ${Menu()}
        ${Hero()}
        ${Headline()}
        <center>
            ${CardContainer()}
        </center>
        ${DetailPage()}
        ${Footer()}

    `
}

export default App