const tv = {
    encendido: false,
    volumen:0,
    canal:0,
    silenciar:false,
    saveVolumen:0
}



const encendido = () =>{
    if(!tv.encendido){
        $('#btEncender').attr('class','btn btn-success')
        tv.encendido = true
        tv.volumen = 3
        tv.canal = 7
        console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
    }else{
        $('#btEncender').attr('class','btn btn-secondary')
        tv.encendido = false
    }
    //ffffff
}


const volumenMas = () =>{
    if(tv.encendido){
        if(tv.volumen < 10){
            tv.volumen++
            console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
        }else{
            console.log("TV -> Volumen Maximo es 10")
            console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
        }
    }else{
        console.log("TV -> Encienda el TV")
    }
}

const volumenMenos = () =>{
    if(tv.encendido){
        if(tv.volumen > 1){
            tv.volumen--
            console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
        }else{
            console.log("TV -> Volumen Minimo es 1")
            console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
        }
    }else{
        console.log("TV -> Encienda el TV") 
    }
}

const canalMas = () =>{
    if(tv.encendido){
            if(tv.canal < 100){
                tv.canal++
                console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
    }else{
        console.log("TV -> Canal Maximo es 100")
        console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
    }
}else{
    console.log("TV -> Encienda el TV") 
}
}


const canalMenos = () =>{
    if(tv.encendido){
            if(tv.canal > 1){
                tv.canal--
                console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
    }else{
        console.log("TV -> Canal Minimo es 1")
        console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
    }
}else{
    console.log("TV -> Encienda el TV") 
}
}

const silenciar = () =>{
    if(tv.encendido){
        if(!tv.silenciar){
            tv.silenciar = true
            console.log("TV -> Silenciado")
            tv.saveVolumen = tv.volumen
            tv.volumen = 0;
            console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
        }else{
            tv.silenciar = false
            tv.volumen = tv.saveVolumen
            console.log("TV -> Sonido Activado")
            console.log("TV -> Volumen: " + tv.volumen + " Canal: " + tv.canal);
        }
    }else{
        console.log("TV -> Encienda el TV") 
    }
}