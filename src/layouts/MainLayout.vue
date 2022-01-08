<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        /> -->

        <q-toolbar-title @click="home" style="font-size:20px;">
          Bem parado
        </q-toolbar-title>
        <q-input
                class="font1"
                v-model="in_timestamp"
                filled
                style="width:150px; font-size: 15px;"
                readonly
              />
        <!-- <q-btn
          class="flex flex-center q-px-lg q-py-sm q-mb-md btn1"
          size="xs"
          icon="home"
          @click="home"
          color="red"
        /> -->
      </q-toolbar>
    </q-header>

    <!--q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
    
      <q-list>
        <q-item-label
          header
        >
          Opções
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
     
    </q-drawer-->

    <q-page-container>
      <router-view />
    </q-page-container>
    
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Início',
    icon: 'school',
    link: ''
  },
  {
    title: 'Entrada de veículo',
    caption: 'carros e motos',
    icon: 'school',
    link: 'carnew'
  },
  {
    title: 'Saída de veículo',
    caption: 'carros e motos',
    icon: 'school',
    link: 'carout'
  },
  {
    title: 'Listagem de veículo',
    caption: 'carros e motos',
    icon: 'school',
    link: 'list'
  }
];

import { defineComponent, ref } from 'vue'
import firebase from "boot/firebase"
import { useRouter } from 'vue-router' // import router
export default defineComponent({
  name: 'MainLayout',
  setup () {
    const router = useRouter()
    let in_timestamp  = ref(null)
    const home = () => {
        router.push('/')
    }  
    const logout = () => {
        firebase.auth().signOut()
        router.push('/')
            .then(() => {
            this.$q.notify({message: 'Sign Out Success.'})
        })
        .catch(error =>  console.log('error',error))
    }  
    const getNow = () => {
      const today = new Date();
      const date = today.getDate() +'-'+(today.getMonth()+1)+ '-' + today.getFullYear()
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time + '  ' + date
      in_timestamp.value = dateTime
    }
    setInterval(getNow, 1000)
    return {
      in_timestamp,
      home,
      logout
    }
  }
})
</script>
