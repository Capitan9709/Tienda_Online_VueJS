<script setup>
    import encabezado from './encabezado.vue'
    import pie from './pie.vue'

</script>
<template>
    <encabezado></encabezado>
    <main>
        <section id="carrito">
                <div class="carrito-text">
                    <h1>Carrito</h1>
                </div>
                <div class="carrito-productos">
                    
                    <ul class="lista-carrito">
                    </ul>

                    <div class="carrito-total">
                        <h2 id="calculo-total"></h2>
                        <button id="comprar">Comprar</button>
                    </div>
                </div>
                
        </section>
    </main>
    <pie></pie>
</template>