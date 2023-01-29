<script setup>

    defineProps(['producto']);

</script>
<template>
    <h3>{{producto.titulo}}</h3>
    <p>{{producto.precio}}€</p>
    <img :src="producto.imagen" alt="imagen del producto">
    
</template>