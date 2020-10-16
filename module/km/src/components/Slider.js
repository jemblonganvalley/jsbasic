import App from '../App.js'
import Card from './Card.js'

const Slider = ()=>{
    return `

        <section class='slider'>
        
            <div class='cardContainer'>

                ${Card('https://picsum.photos/seed/100/200', 'Card 1', 'Ini Adalah Card Pertama' )}

                ${Card('https://picsum.photos/seed/15/200', 'Card 2', 'Ini Adalah Card Kedua' )}

                ${Card('https://picsum.photos/seed/10/200', 'Card 3', 'Ini Adalah Card Ketiga' )}

                ${Card('https://picsum.photos/seed/51/200', 'Card 4', 'Ini Adalah Card Keempat' )}

                ${Card('https://picsum.photos/seed/55/200', 'Card 5', 'Ini Adalah Card kelima' )}

                ${Card('https://picsum.photos/seed/65/200', 'Card 6', 'Ini Adalah Card Keenam' )}

            </div>

        </section>
    
    `
}

export default Slider