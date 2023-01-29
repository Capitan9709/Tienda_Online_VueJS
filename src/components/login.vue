<script setup>
    import encabezado from './encabezado.vue'
    import pie from './pie.vue'
    import { auth } from '../firebase.js'
    import { signInWithEmailAndPassword } from "firebase/auth";
    import { ref } from 'vue'

    var email = ref('');
    var password = ref('');

    function iniciar(){
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("Usuario con email: "+user.email+" Logeado");
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
        <section id="login">
                <div class="login-text">
                    <h1>Login</h1>
                </div>
                <div class="login-form">
                    <!-- <form action="">     -->
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" v-model="email" required>

                        <label for="password">Contraseña:</label> 
                        <input type="password" name="password" id="password" v-model="password" required>

                        <button id="btn-login" @click="iniciar">Login</button>
                    <!-- </form> -->
                    <p>¿No tienes una cuenta? <a id="registrarse"><RouterLink to="/registro">Registrate Aqui</RouterLink></a></p>
                </div>
        </section>
    </main>
    <pie></pie>
</template>