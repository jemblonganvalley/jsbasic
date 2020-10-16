//import App.js
import App from './App.js'
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'
import Headline from './components/Headline.js'
import Slider from './components/Slider.js'
import Menu from './components/Menu.js'

//Buat function index yang berisi syntax HTML
const index = ()=>{
    return `
    
        ${Navbar()}
        ${Menu()}
        ${Hero()}
        ${Headline()}
        ${Slider()}
        
    `
}

//export index() agar bisa digunakan di file JS lainnya
export default index