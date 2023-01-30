<script setup>
    import { useFirestore, useCollection } from 'vuefire'
    import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore'

    import producto from './producto.vue'
    import encabezado from './encabezado.vue'
    import pie from './pie.vue'

    const db = useFirestore();
    const productos = useCollection(collection(db, 'productos'));

    function filtrarProductos(productos){
        return productos.filter((producto) => 
            producto.categoria == "mujer"
        )
    }

</script>
<template>
    <encabezado></encabezado>
    <main>
        <section id="productos">
            <input id="type-sort" type="hidden" value="ordenar">
                <div class="products-text"> 
                    <h1>Mujer</h1>
                </div>
                <div class="products-sort">
                    <select id="sort">
                        <option value="asc">Acendente</option>
                        <option value="desc">Descendente</option>
                    </select>
                    <button id="btn-filter">Filtrar</button>
                </div>
                <div id="contenido-productos">
                    <producto v-for="product in filtrarProductos(productos)" :producto="product"></producto>
                </div>
        </section>
    </main>
    <pie></pie>
</template>