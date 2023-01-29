<script setup>
    import encabezado from './encabezado.vue'
    import pie from './pie.vue'
    import { auth } from '../firebase.js'
    import { createUserWithEmailAndPassword } from "firebase/auth";
    import { ref } from 'vue'

    var email = ref('');
    var password = ref('');

    function registrar(){
        createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Usuario con email: "+user.email+" Registrado");

        })
        .catch((error) => {    
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
</script>
<template>
    <encabezado></encabezado>
    <main>
        <section id="registro">
                <div class="registro-text">
                    <h1>Registro</h1>
                </div>
                <div class="registro-form">
                    <!-- <form action="">     -->
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" v-model="email">

                        <label for="password">Contraseña:</label> 
                        <input type="password" name="password" id="password" v-model="password">

                        <button id="btn-login" @click="registrar">Registrar</button>
                    <!-- </form> -->
                    <p>¿Tienes Cuenta? <a id="logearse"><RouterLink to="/login">Inicia Sesion</RouterLink></a></p>
                </div>
            </section>
    </main>
    <pie></pie>
</template>