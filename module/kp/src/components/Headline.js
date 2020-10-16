import updater from '../updater.js'


const Headline = (title='Judul Berita', img=150)=>{
    return `
        <section class='headline'>
            <h1>${title}</h1>
            <img src="https://picsum.photos/seed/${img}/900" />
            ${Headline.state.content}
        </section>
        `
}

Headline.state = {
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

