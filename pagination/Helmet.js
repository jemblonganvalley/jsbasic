

const Helmet = (title, desc='jvalley news')=>{
    document.title = title
    const meta = document.getElementById('desc')
    meta.setAttribute('content', desc)
}

export default Helmet