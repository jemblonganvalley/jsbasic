import Navbar from './Navbar.js'
import Helmet from './Helmet.js'

const about = ()=>{
    Helmet('page about', 'ini adalah page about')
    return `
        ${Navbar()}
        <section class='about'>
            <h1>About</h1>
        </section>
    `
}

export default about

