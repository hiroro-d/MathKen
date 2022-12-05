<template>
  <div>
    <h1>aaaaa</h1>
    <input type="text" v-model="email" class="border-2">
    <input type="text" v-model="password" class="border-2">
    <button @click="login">login</button>
  </div>
</template>

<script setup>
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from "firebase/auth";


const authData = auth;
const email = ref('');
const password = ref('');
const router = useRouter()

const login = () => {
  signInWithEmailAndPassword(authData, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('success')
      router.push('/courseSelect')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('入力情報が間違っています。')
    });

}

</script>