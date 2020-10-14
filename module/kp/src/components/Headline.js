import updater from '../updater.js'


const Headline = ()=>{
    return `
        <section class='headline'>
            <h1>${Headline.state.title}</h1>
            <img src="${Headline.state.img}" />
            ${Headline.state.content}
        </section>
        `
}

Headline.state = {
    title : 'Berita Terkini',
    img : 'https://picsum.photos/seed/150/600',
    content : `
        <p>
            Selamat datang di Jvalley News, 
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum modi rem laudantium, sunt in natus facere aliquam voluptatem. Labore sint delectus repellendus reprehenderit ea eum error quae quo autem.
        </p>

        <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis rerum modi rem laudantium, sunt in natus facere aliquam voluptatem. Labore sint delectus repellendus reprehenderit ea eum error quae quo autem.
        </p>
    `

}


export default Headline

