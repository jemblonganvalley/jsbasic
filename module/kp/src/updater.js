import App from './App.js'

const updater = ()=>{
    document.getElementById('root').innerHTML = App()
}

updater()

export default updater