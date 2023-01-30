<script setup>
    import router from '../main';
    defineProps(['producto']);

    function cambiarAProducto(id){
      router.push(`/producto/${id}`)
    }

</script>
<template>
    <h3>{{producto.titulo}}</h3>
    <p>{{producto.precio}}€</p>
    <img class="imagen-producto" @click="cambiarAProducto(producto.id)" :src="producto.img" :alt="producto.titulo">
    <!-- boton comprar -->
    <button class="ver" @click="cambiarAProducto(producto.id)">Ver</button>
    
</template>