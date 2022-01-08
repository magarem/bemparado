<template>
  <q-page class="flex flex-center">
    <q-table
      title="Entrada de carros"
      :rows="rows"
      :columns="columns"
      row-key="id"
    />
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import firebase from 'boot/firebase'
const rows = ref([])
const columns = [
  { name: 'timestamp', label: 'Entrada', field: 'in_timestamp' },
  { name: 'ticket', align: 'center', label: 'Ticket', field: 'ticket', sortable: true },
  { name: 'placa', align: 'center', label: 'Placa', field: 'placa', sortable: true },
  { name: 'saida', label: 'Saída', field: 'out_timestamp' },
  // { name: 'modelo', align: 'center', label: 'Modelo', field: 'modelo', sortable: true },
  // { name: 'cor', label: 'Cor', field: 'cor' },
  
]
var carros = firebase.firestore().collection("carros")
// carros.get()
//     .then((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data().);
//         });
//     })
//     .catch((error) => {
//         console.log("Error getting documents: ", error);
//     });
const timestampParse = (value) => {
  const today = new Date(value)
  const date = today.getDate() +'-'+(today.getMonth()+1)+ '-' + today.getFullYear()
  const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
  const dateTime = date +' | '+ time
  return dateTime
}
carros.orderBy("in_timestamp", 'desc').get().then(function(snapshot) {
  console.log(snapshot);
  snapshot.forEach(function(childSnapshot) {
    var id = childSnapshot.data().id;
    var placa = childSnapshot.data().placa;
    var ticket = childSnapshot.data().ticket;
    // console.log(childSnapshot);
    var modelo = childSnapshot.data().modelo;
    var cor = childSnapshot.data().cor;
    var in_timestamp = timestampParse(childSnapshot.data().in_timestamp)
    var out_timestamp = childSnapshot.data().out_timestamp?timestampParse(childSnapshot.data().out_timestamp):''
    rows.value.push({ id, placa, ticket, in_timestamp, out_timestamp})
  });
});

</script>
