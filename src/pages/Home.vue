<template>
  <q-page class=" q-pa-md">
      <!-- Bem vindo!
    <q-space /> -->
    <div class="row justify-center q-col-gutter-xs">
      <div class="col">
        <q-btn
          class="flex flex-center q-px-lg q-py-sm q-mb-md btn1"
          size="xl"
          label="Entrada"
          @click="carnew"
          color="secondary"
        />
      </div>
      </div>
 <div class="row justify-center q-col-gutter-xs">
      <div class="col">
        <q-btn
          class="flex flex-center q-px-lg q-py-sm q-mb-md btn1"
          size="xl"
          label="Saida"
          @click="carout"
          color="primary"
        />
      </div>
    </div>
    <div class="row justify-center">
     <div class="col-12">
       <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md btn1"
        size="xl"
        label="Listagem"
        @click="list"
        color="purple"
      />
     </div>
    </div>
    <div class="row justify-center">
      <div class="col-12">
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md btn1"
        size="xl"
        label="Print"
        @click="print"
        color="red"
      /> 
    </div> </div>
     <div class="row justify-center">
      <div class="col-12">
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md btn1"
        size="xl"
        label="Print img"
        @click="printimg"
        color="red"
      /> 
    </div> </div>
    
    <div class="row justify-center">
      <div class="col-12">
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md btn1"
        size="xl"
        label="Sair do sistema"
        @click="logout"
        color="red"
      /> 
    </div>
    </div>
  </q-page>
</template>
<script>
import firebase from "boot/firebase"
export default {
name: "Home",
  data () {
  return {}
  },
  methods: {
    carnew() {
        this.$router.push('/carnew')
    },
    carout() {
        this.$router.push('/carout')
    },
    list() {
        this.$router.push('/list')
    },
    print() {
        this.$router.push('/print')
    },
    printimg() {
        this.$router.push('/printimg')
    },
    logout() {
        firebase.auth().signOut()
        this.$router.push('/')
            .then(() => {
            this.$q.notify({message: 'Sign Out Success.'})
        })
        .catch(error =>  console.log('error',error))
    }  
  }
}
</script>
<style scoped>
 .btn1 {
   width: 300px;
 }
</style>