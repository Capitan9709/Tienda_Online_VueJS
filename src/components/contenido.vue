<script setup>
    import encabezado from './encabezado.vue'
    import pie from './pie.vue'
    import carrousel from './carrousel.vue'

</script>
<template>
    <encabezado></encabezado>
    <main>
        <carrousel></carrousel>

        <div id="bienvenida">
            <h1>¡Bienvenid@ a El Mercaillo!</h1>
        </div>

        <div id="relleno">
            <div class="div1"><img src="../assets/media/imagen1.jpg" alt="imagen stock"></div>
            <div class="div2"><img src="../assets/media/imagen5.jpg" alt="imagen stock"></div>
            <div class="div3"><img src="../assets/media/imagen3.jpg" alt="imagen stock"></div>
            <div class="div4"><img src="../assets/media/imagen4.jpg" alt="imagen stock"></div>
            <div class="div6"><img src="../assets/media/imagen6.jpg" alt="imagen stock"></div>
            <div class="div7"><img src="../assets/media/imagen7.jpg" alt="imagen stock"></div>
            <div id="contenido-relleno">
                <p>Para mas fotos como estas siguenos en: </p>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-facebook"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
        <div id="presentacion">
            <img src="../assets/media/notasfondomorao.jpg" alt="foto stock">
            <div id="contenido-presentacion">
                <h1>¡Bienvenid@ a El Mercaillo!</h1>
                <p>En nuestra tienda online encontraras todo tipo de productos a los mejores precios.
                     No te lo pienses y entra a nuestra tienda.</p>
            </div>
        </div>

        <div id="newsletter">
            <p>¡Subscribete a nosotros para no perderte ninguna oferta!</p>
            <form action="">
                <input id="#email-newsletter" type="email" placeholder="Escribe tu Email">
                <input id="#btn-newsletter" type="submit" value="Subscribirse">
            </form>
        </div>
    </main>
    <pie></pie>
</template>