import update from './updater.js'
import home from './index.js'
import about from './about.js'

const Navbar = ()=>{
    return `
        <nav class='navbar'>
            <span onclick='home()' name='home'>Home</span>
        </nav>

        <nav class='navbar'>
            <span onclick='about()' name='about'>About</span>
        </nav>
    `
}

window.home = ()=>{
    update(home())
}

window.about = ()=>{
    update(about())
}

export default Navbar


