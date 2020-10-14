import updater from '../updater.js'


const Hero = ()=>{
    
    return `

        <section class='hero' style="
            background-image : url(https://picsum.photos/seed/${Hero.state.imgNo}/900);
            background-size : cover;
            background-position : center;
            width : 100vw;
            height : 50vh;
            display : flex;
            justify-content : space-between;
            align-items : center;
            padding : 0 10%;
        ">

        <span class="material-icons arrow_left" 
            onclick="prev()"
        >
            keyboard_arrow_left
        </span>

        <div>
            <h1 onclick="showInput()">${Hero.state.nama}</h1>
            ${Hero.state.showInput === true ? (`

                 <input placeholder='masukan nama' onchange="ubahText(event)"/>
            
            `) : (``) }
        </div>

        <span class="material-icons arrow_right" 
            onclick="next()"
        >
            keyboard_arrow_right
        </span>

        
        </section>
    
    `
}

// STORAGE MEMORY STATE
Hero.state = {
    nama : "fadliselaz",
    setNama : (event)=>{
        Hero.state.nama = event
    },

    imgNo : 350,
    prevImg : ()=>{
        Hero.state.imgNo -= 1
    },
    nextImg : ()=>{
        Hero.state.imgNo += 1
    },

    showInput : false,
    setShowInput : ()=>{
        Hero.state.showInput = !Hero.state.showInput
    }
}

window.prev = ()=>{
    Hero.state.prevImg()
    // console.log(Hero.state.imgNo)
    updater()
}

window.next = ()=>{
    Hero.state.nextImg()
    // console.log(Hero.state.imgNo)
    updater()
}

window.ubahText = (event)=>{
    Hero.state.setNama(event.target.value)
    Hero.state.setShowInput()
    // console.log(Hero.state.nama)
    updater()
}

window.showInput = ()=>{
    Hero.state.setShowInput()
    console.log(Hero.state.showInput)
    updater()
}




export default Hero