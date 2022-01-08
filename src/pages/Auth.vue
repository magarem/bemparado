<template>
  <q-page class="flex q-pa-md">
    <q-card class="full-width"><br>
        <q-form @submit="submitForm">
        <q-input outlined class="q-mb-md" type="text" label="Domínio" v-model="formData.domain" />
        <q-input outlined class="q-mb-md" type="email" label="Email" v-model="formData.email" />
        <q-input outlined class="q-mb-md" type="password" label="Senha" v-model="formData.password" />
        <div class="row">
            <q-space />
            <q-btn type="submit" color="primary" label="Login" />
        </div>
        </q-form>
    </q-card>
  </q-page>
</template>
<script>
import firebase from 'boot/firebase'
export default {
  data () {
    return {
      formData: {
        domain: 'teste',
        email: 'contato@magaweb.com.br',
        password: '123456'
      }
    }
  },
  methods: {
    submitForm () {
      console.log("oi")
      this.signInExistingUser(this.formData.email, this.formData.password)
    },
    signInExistingUser (email, password) {  
      console.log(email, password)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        console.log("oi3")  
        this.$q.notify({message: 'Sign In Success.'})
        this.$router.push('/home')
        })
        .catch(error => { 
            console.log(error)
        })
    }
  },
  async mounted () {
      console.log('!!!!00', await firebase.getCurrentUser())
      if ( await firebase.getCurrentUser()){
      console.log('!!!!', firebase.getCurrentUser())
      this.$router.push('home')
    }
  }
}
</script>