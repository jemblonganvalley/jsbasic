import updater from '../updater.js'

const Card = (title, img, content)=>{
    return `

        <div class='card'>
            <img src="${img}"/>
            <h3>${title}</h3>
            <p>${content}</p>
        </div>

    
    `
}

export default Card