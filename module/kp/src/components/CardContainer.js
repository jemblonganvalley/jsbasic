import updater from '../updater.js'
import Card from './Card.js'

const CardContainer = ()=>{
    return `
        <section class='cardContainer'>

            <div class='slider'>

                ${Card('Card 1', 'https://picsum.photos/seed/13/300', 'ini adalah isi dari card 1')}

                ${Card('Card 2', 'https://picsum.photos/seed/156/300', 'ini adalah isi dari card 3')}

                ${Card('Card 3', 'https://picsum.photos/seed/17/300', 'ini adalah isi dari card 3')}

                ${Card('Card 1', 'https://picsum.photos/seed/13/300', 'ini adalah isi dari card 1')}

                ${Card('Card 2', 'https://picsum.photos/seed/156/300', 'ini adalah isi dari card 3')}

                ${Card('Card 3', 'https://picsum.photos/seed/17/300', 'ini adalah isi dari card 3')}

            </div>
        
        </section>
    `
}

export default CardContainer