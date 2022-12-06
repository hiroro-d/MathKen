<template>
  <div class="w-full h-screen flex justify-center items-center">
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <h2 class="card-title">名前、Eメール、パスワードを入力してね。</h2>
        <div class="card-body">
          <input type="text" v-model="userName" class="border-2">
          <input type="text" v-model="email" class="border-2">
          <input type="text" v-model="password" class="border-2">
          <button @click="signup">signup</button>
          <button @click="logout" class="btn">ログアウト</button>
          <div class="card-actions justify-end">
            <NuxtLink to="/login">ログインはこちら</NuxtLink>
          </div>
        </div>
        <button @click="statecheck">ログインチェック</button>
    </div>
  </div>
</template>

<script setup>
import { auth, db } from '../firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const authData = auth;
const dbData = db;
const userName = ref('');
const email = ref('');
const password = ref('');
const router = useRouter()

const signup = async() => {
  try {
    const userCredential = await createUserWithEmailAndPassword(authData, email.value, password.value);
    const user = userCredential.user;
    // const docRef = await addDoc(collection(dbData, "users"), {
    //   name: userName.value,
    //   uid: user.uid
    // });
    // console.log(docRef.id);
    alert('success');
    router.push('/myPage');
  } catch(error) {
    console.error(error);
    alert('Error creating user:', error.message);
  }
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

const statecheck = () => {
  onAuthStateChanged(authData, (user) => {
    if (user) {
      const uid = ref(user.uid);
      console.log(user)
      console.log('signin')
      console.log(user.uid)
    } else {
      console.log('signout')
    }
  })
}
</script>

