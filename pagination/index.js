import about from './about.js'
import update from './updater.js'
import Navbar from './Navbar.js'
import Helmet from './Helmet.js'

const home = ()=>{
    Helmet('page Home')
    return `
        ${Navbar()}
        <section class='home'>
            <h1>Home</h1>
        </section>
    `
}

export default home
