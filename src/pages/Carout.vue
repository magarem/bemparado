<template>
  <div
    _class="q-pa-md"
    style="max-width: 400px"
  >
   <div class="row row q-col-gutter-xs" >  
          <!-- <div class="col-4" style="margin-top: 4px; padding: 11px; background-color: orange;">
            <span style="font-size: 23px;" _class="q-mt-sm">Saída</span>
          </div> -->
          <div class="col-12 text-center" style="margin-top: 4px; padding: 11px; background-color: orange;">
            <span style="font-size: 23px; color: black;" _class="q-mt-sm">Saída</span>
          </div>
          <!-- <div class="col-8">
                  <q-input
              class="font1"
              v-model="car.now_timestamp"
              filled
              label="Hora e data atual"
              readonly
            />
          </div> -->
      </div>
    <q-form
      class="q-gutter-md"
      @submit="update"
      @reset="onReset"
    >
    <qr-stream v-if=!data @decode="onDecode" class="mb"></qr-stream>
    <!-- <div class="result"> -->
      <q-btn
        v-if=data
        class="full-width"
        @click="qrcode_reader_reload"
        type=button
        color="primary"
        label="Ler Qrcode"
        size="md"
        />
    <!-- </div> -->
    <div v-if=data>
    <div class="row q-col-gutter-xs" >
            <!-- <div class="col-12">
      <q-input
        class="font1"
        v-model="car.now_timestamp"
        filled
        label="Hora e data atual"
        readonly
      />
        </div> -->
    </div>
        <div class="row row q-col-gutter-xs" >  
        <div class="col-10"><q-input
            mask="XXXXXXX"
            class="placa"
            v-model="car.placa"
            filled
            label="Placa"
            autofocus
        
        /></div>
        <div class="col-2">
             <q-btn
                _class="q-mt-sm"
                
                icon="my_location"
                @click="carsearch('placa', car.placa)"
                type=button
                color="primary"
                _label="Procurar"
                round
                size="md"
                />

        </div> 
        <div class="col-10"><q-input
            class="font2"
            v-model="ticket"
            filled
            label="Ticket"
        /></div>
        <div class="col-2">
             <q-btn
                _class="q-mt-sm"
                icon="my_location"
                @click="carsearch('id', data)"
                type=button
                color="primary"
                _label="Procurar"
                round
                size="md"
                />
        </div>
        
       
    </div>
   
      <div class="row row q-col-gutter-xs" >
          <div class="col-6">
            <q-input
                class="font2"
                v-model="car.modelo"
                filled
                label="Modelo"/>
          </div>
          <div class="col-6">
            <q-input
            class="font2"
            v-model="car.cor"
            filled
            label="Cor"/>
          </div>
      </div>
    
     
      
      <div class="row q-col-gutter-xs" >
        <div class="col-6">
            <q-input
                class="font1"
                v-model="car.pago_ate"
                filled
                label="Pago até"
                readonly
            />
        </div>
        <div class="col-6">
            <q-input v-if="car.n_diarias_falta_pagar > 0"
                class="font1"
                v-model="car.n_diarias_falta_pagar"
                filled
                label="Diarias a pagar"
                readonly
            />
              <q-input v-if="!car.n_diarias_falta_pagar || car.n_diarias_falta_pagar <= 0"
                class="font1"
                filled
                label="Status"
                v-model="car.status"
                readonly
            />
        </div>
        <div  class="row q-col-gutter-xs" v-if="car.n_diarias_falta_pagar > 0">
         <div class="col-6">
            <q-input
                class="font2"
                v-model="car.valor_diaria_falta_pagar"
                filled
                label="Valor da diária"
                input-class="text-right"
            /></div>
        <div class="col-6">
            <q-input
                class="font2"
                v-model="car.valor_total_falta_pagar"
                filled
                type=text
                label="Valor total a pagar"
                input-class="text-right"
            />
       </div>
  
      <div class="col-6 col-md-6">
      <q-input
        class="font2"
        v-model="car.valor_pago_falta_pagar"
        filled
        type=text
        label="Valor pago"
        input-class="text-right"
      /></div>
      <div class="col-6 col-md-6">
      <q-input
        class="font2"
        v-model="car.valor_troco_falta_pagar"
        filled
        type=text
        label="Troco"
        input-class="text-right"
      />
      </div></div>
      </div>
       <q-list bordered class="rounded-borders">
        <q-expansion-item
            expand-separator
            label="Detalhes"
        >
         <div class="row q-col-gutter-xs" >
        <div class="col-12">
            <q-input
                class="font1"
                v-model="car.in_timestamp"
                filled
                label="Entrada"
                readonly
            />
        </div>
      </div> 
                <div class="row row q-col-gutter-xs" >
            
            <div class="col-12">
            <q-input
                class="font2"
                v-model="car.obs"
                filled
                label="Obs"
            /></div></div>
            <div class="row q-col-gutter-xs" >
                <div class="col-4 col-md-4">
                    <q-input
                        class="font2"
                        v-model="car.n_diarias"
                        filled
                        label="Diárias"
                    />
                </div> 
                <div class="col-4 col-md-4">
                <q-input
                    class="font2"
                    v-model="car.valor_diaria"
                    filled
                    label="Valor da diária"
                    input-class="text-right"
                /></div>
                <div class="col-4 col-md-4">
                <q-input
                    class="font2"
                    v-model="car.valor_total"
                    filled
                    type=text
                    label="Valor total"
                    input-class="text-right"
                />
                </div></div>
                   <div class="row row q-col-gutter-xs" >
      <div class="col-6 col-md-6">
      <q-input
        class="font2"
        v-model="car.valor_pago"
        filled
        type=text
        label="Valor pago"
        input-class="text-right"
      /></div>
      <div class="col-6 col-md-6">
      <q-input
        class="font2"
        v-model="car.valor_troco"
        filled
        type=text
        label="Troco"
        input-class="text-right"
      />
      </div></div>
            </q-expansion-item>
      </q-list>
      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
      <div>
        <q-btn v-if="(car.valor_total_falta_pagar <= 0 || car.valor_troco_falta_pagar >= 0)"
          label="Registrar"
          type="submit"
          color="primary"
        />
        <q-btn
          label="Cancelar"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
      </div>
    </q-form>
  </div>
  
  <q-dialog
      v-model="dialog_nao_encontrado"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Erro!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <span class=dialog_save_ok>
            <b>Veículo não encontrado</b>
          </span>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
  </q-dialog>
</template>
<script>
import { useQuasar, date } from 'quasar'
import { ref, reactive, toRefs, watch, watchEffect, onBeforeUnmount, getCurrentInstance } from 'vue'
import { useRouter } from 'vue-router' // import router
import firebase from 'firebase'
import "firebase/firestore"
// import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue3-qrcode-reader'
import { QrStream, QrCapture, QrDropzone } from 'vue3-qr-reader'
export default {
  components: {
    QrStream
  },
  setup () {
    let flg_aindalendo = ref(false)
    const state = reactive({
      data: null
    })
    function onDecode(data) {
      state.data = data
    }
   
    var db = firebase.firestore()
    const router = useRouter()
    // const timeStamp = Date.now()
    // const formattedString = date.formatDate(timeStamp, 'DD-MM-YYYYTHH:mm:ss.SSSZ')
    const authListener = firebase.auth().onAuthStateChanged(function(user) {
      if (!user) { // not logged in
        alert('you must be logged in to view this. redirecting to the home page')
        router.push('/')
      }
    })
    const carro_encontrado = ref(true)
    const dialog_nao_encontrado = ref(false)
    const $q = useQuasar()
    const car = ref({
      in_timestamp: null,
      placa: null,
      modelo: null,
      cor: null,
      obs: null,
      n_diarias: 0,
      valor_diaria: 0,
      valor_total: 0,
      valor_pago: 0,
      valor_troco: 0,
      status: null
    })
   
    let entradas = null
    let car_searched_id = null
   
    const carsearch = (field, value) => {
        car_searched_id = null
        console.log(field, value)
        car.value = {
          in_timestamp: null,
          placa: null,
          modelo: null,
          cor: null,
          obs: null,
          n_diarias: 0,
          valor_diaria: 0,
          valor_total: 0,
          valor_pago: 0,
          valor_troco: 0,
          status: null
        }
        const carrosRef = db.collection("carros");
        // const q = carrosRef.where(field, "==", value).where("out_timestamp", "==", null)
        const q = carrosRef.where(firebase.firestore.FieldPath.documentId(), "==", value)
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                car_searched_id = doc.id
                console.log(doc.id, " => ", doc.data());
                car.value.in_timestamp = timestampParse(doc.data().in_timestamp)
                console.log('doc.data().placa:', doc.data().placa);
                car.value.placa = doc.data().placa
                car.value.ticket = doc.data().ticket
                car.value.modelo = doc.data().modelo
                car.value.cor = doc.data().cor
                car.value.obs = doc.data().obs
                car.value.n_diarias = doc.data().n_diarias
                car.value.valor_diaria = doc.data().valor_diaria
                car.value.valor_total = doc.data().valor_total
                car.value.valor_pago = doc.data().valor_pago
                car.value.valor_troco = doc.data().valor_troco
                car.value.pago_ate = timestampParse_date(addDays(+doc.data().in_timestamp, +doc.data().n_diarias))
                let today = +new Date()
                console.log(today);
                car.value.n_diarias_falta_pagar = parseInt((+((today - addDays(+doc.data().in_timestamp, +doc.data().n_diarias)))/1000)/86400)
                car.value.valor_diaria_falta_pagar = car.value.valor_diaria
           })
            if (!car_searched_id) {
             dialog_nao_encontrado.value = true
            //  $q.notify({
            //     color: 'green-4',
            //     textColor: 'white',
            //     icon: 'cloud_done',
            //     message: 'Registro não encontrado!'
            //  })
        }
        
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        })
       
    }

    const timestampParse = (value) => {
        const today = new Date(value)
        const date = today.getDate() +'-'+(today.getMonth()+1)+ '-' + today.getFullYear()
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        const dateTime =  time +' | '+ date
        return dateTime
    } 
    const timestampParse_date = (value) => {
        const today = new Date(value)
        const date = today.getDate() +'-'+(today.getMonth()+1)+ '-' + today.getFullYear()
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        const dateTime =  date
        return dateTime
    }

    const total_calc = () => {
        console.log("!!");
        car.value.valor_total = car.value.valor_diaria * car.value.n_diarias
    }
    
    const getNow = () => {
      const today = new Date();
      const date = today.getDate() +'-'+(today.getMonth()+1)+ '-' + today.getFullYear()
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time + '  ' + date
      car.value.now_timestamp = dateTime
    }
   
   watch(state, (x) => {
      console.log('x.data:', x.data);
      if (x.data) carsearch('id', x.data)
      
    })
    watchEffect(() => {
    //   car.value.valor_total = car.value.n_diarias * +(car.value.valor_diaria.toString().replace(',','.'))
    //   console.log(car.value.n_diarias, car.value.valor_diaria, car.value.valor_total);
    //   car.value.valor_troco = car.value.valor_pago - car.value.valor_total
    //   console.log(oldValue);
        car.value.valor_total_falta_pagar = car.value.n_diarias_falta_pagar * car.value.valor_diaria_falta_pagar
        car.value.valor_troco_falta_pagar = car.value.valor_pago_falta_pagar - car.value.valor_total_falta_pagar
   });
    const onReset = () => {
        car.value = {
            in_timestamp: null,
            placa: null,
            modelo: null,
            cor: null,
            obs: null,
            n_diarias: 1,
            valor_diaria: 30,
            valor_total: 0,
            valor_pago: 0,
            valor_troco: 0,
        }
    }

    const addDays = (date, days) => {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }

    const qrcode_reader_reload = () => {
      console.log('qrcode_reader_reload', state.data);
      state.data = null
    }

    const update = async () => {
        console.log(car_searched_id);
        db.collection("carros").doc(car_searched_id).update({out_timestamp: +new Date()});
        state.data = null
        onReset()
       // db.collection("carros_out").add({
        //   domain: 'teste',
        //   in_timestamp: new Date().getTime(),
        //   modelo: car.value.modelo,
        //   cor: car.value.cor,
        //   placa: car.value.placa,
        //   obs: car.value.obs,
        //   n_diarias: car.value.n_diarias,
        //   valor_diaria: car.value.valor_diaria,
        //   valor_total: car.value.valor_total,
        //   valor_pago: car.value.valor_pago,
        //   valor_troco: car.value.valor_troco
        // })
        // .then((docRef) => {
        //     console.log("Document written with ID: ", docRef.id);
        // })
        // .catch((error) => {
        //     console.error("Error adding document: ", error);
        // });
        // onReset()
        console.log('car_searched_id:', car_searched_id);
        $q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Registro atualizado com sucesso!'
        })
    }
    // onBeforeUnmount(() => {
    //   // clear up listener
    //   authListener()
    // })
    setInterval(getNow, 1000)
    return {
      ...toRefs(state),
      qrcode_reader_reload,
      flg_aindalendo,
      onDecode,
      carro_encontrado,
      dialog_nao_encontrado,
      carsearch,
      update,
      car,
      onReset
    }
  }
}
</script>
<style scoped>
 .font1 {
   font-size: 17px;
 }
 .placa {
   font-size: 35px;
 }
  .font2 {
   font-size: 17px;
 }
</style>
