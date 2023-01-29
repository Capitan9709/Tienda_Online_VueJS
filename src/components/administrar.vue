<script setup>
    import encabezado from './encabezado.vue'
    import pie from './pie.vue'

</script>
<template>
    <encabezado></encabezado>
    <main>
        <div>
            <h1>Administrar</h1>
            <form>
                <label for="categoria">Categoria</label>
                <input type="text" id="categoria" name="categoria">
                <label for="titulo">Titulo</label>
                <input type="text" id="titulo" name="titulo">
                <label for="precio">Precio</label>
                <input type="number" id="precio" name="precio">
                <label for="imagen">Imagen</label>
                <input type="text" id="imagen" name="imagen">
                <label for="archivo">Subir imagen</label>
                <input type="file" id="archivo" name="archivo">
                <button>Añadir</button>
            </form>
        </div>
    </main>
    <pie></pie>
</template>