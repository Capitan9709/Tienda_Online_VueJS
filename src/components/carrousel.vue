<script setup>
import { ref } from 'vue'
var nombreImagen = ref(new URL("../assets/media/banderausa.jpg", import.meta.url).href);
    
    let imagenes = [new URL("../assets/media/banderausa.jpg", import.meta.url).href, new URL("../assets/media/estopa.jpg", import.meta.url).href, new URL("../assets/media/italianoraro.jpg", import.meta.url).href, new URL("../assets/media/flamenca.jpg", import.meta.url).href];
    let i = 0;
    setInterval(() => {
        i++;
        if(i >= imagenes.length){
            i = 0;
        }
        nombreImagen.value = imagenes[i];
            
    }, 5000);
</script>

<template>
    <div id="carrousel">
            <img id="imagen-carrousel" :src="nombreImagen" alt="Imagen del carrousel">
        </div>
</template>