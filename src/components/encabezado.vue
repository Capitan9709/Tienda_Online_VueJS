<script setup>

</script>
<template>
    <header>
        <router-link to="/"><img id="Logo" src="../assets/media/logo.png" alt="logo de la tienda 'el mercaillo'"></router-link>
        
        <nav>
            <ul>
                <li><a id="Mujer"><router-link to="/mujer">Mujer</router-link></a></li>
                <li><a id="Hombre"><router-link to="/hombre">Hombre</router-link></a></li>
                <li><a id="Joyeria"><router-link to="/joyeria">Joyeria</router-link></a></li>
                <li><a id="Productos"><router-link to="/productos">Productos</router-link></a></li>
                <li><a id="Anadir"><router-link to="/administrar">Administrar</router-link></a></li>
            </ul>
        </nav>

        <div id="iconos">
            <a id="Carrito">
                <RouterLink to="/carrito">
                    <i class="fa-sharp fa-solid fa-cart-shopping"></i>
                </RouterLink>
            </a>
    
            <a id="Login">
                <RouterLink to="/login">
                    <i class="fa-sharp fa-solid fa-user-astronaut"></i>
                </RouterLink>
            </a>
            
        </div>
        </header>
</template>