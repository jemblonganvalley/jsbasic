import index from './index.js'

const update = (args = index())=>{
    document.getElementById('root').innerHTML = args
}

update()

export default update
