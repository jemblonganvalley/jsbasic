import Hero from './Hero.js'
import Headline from './Headline.js'

const DetailPage = ()=>{
    return `
        <section class='detailPage'>

            ${Hero()}
            ${Headline('Berita Daerah', 1313)}

        </section>
    `
}

export default DetailPage