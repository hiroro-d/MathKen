<template>
  <div>
    <h1>aaaaa</h1>
    <input type="text" v-model="email" class="border-2">
    <input type="text" v-model="password" class="border-2">
    <button @click="signup">signup</button>
    <button @click="statecheck" class="btn">ログイン状態確認</button>
    <button @click="logout" class="btn">ログアウト</button>
  </div>
</template>

<script setup>
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';

const authData = auth;
const email = ref('');
const password = ref('');

const signup = () => {
  createUserWithEmailAndPassword(authData, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      alert('success')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    })
}

const statecheck = () => {
  onAuthStateChanged(authData, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = ref(user.uid);
      console.log('signin')
      console.log(user.uid)
      // ...
    } else {
      // User is signed out
      // ...
      console.log('signout')
    }
  })
}

const logout = () => {
  signOut(authData)
  .then(() => {
    alert('ログアウト')
  })
  .catch(error => {
    console.log(error.message)
  })
}

</script>