<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <h2 class="card-title">Eメール、パスワードを入力してね。</h2>
        <div class="card-body">
          <input type="text" v-model="email" class="border-2">
          <input type="text" v-model="password" class="border-2">
          <button @click="login" class="btn btn-info">ログイン</button>
          <div class="card-actions justify-end">
            <NuxtLink to="/signup">とうろくはこちら</NuxtLink>
          </div>
        </div>
        <button @click="statecheck">ログインチェック</button>
    </div>
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
      router.push('/myPage')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('入力情報が間違っています。')
    });

}

</script>