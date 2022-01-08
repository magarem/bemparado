<template>
  <div
    _class="q-pa-md"
    style="_max-width: 400px"
  >
      <div class="row row q-col-gutter-xs" >  
          <div class="col-12 text-center" style="margin-top: 4px; padding: 11px; background-color: #90ee90;">
            <span style="font-size: 23px; color: black;" _class="q-mt-sm">Entrada</span>
          </div>
          <!-- <div class="col-8">
             <q-input
                class="font1"
                v-model="car.in_timestamp"
                filled
                readonly
              />
          </div> -->
      </div>
      <br>
     
    

    <q-form
      _class="q-gutter-md"
      @submit="insert"
      @reset="onReset"
    >   
   
      <!-- <q-card> -->
        <q-tabs
          style="font-size: 15px;"
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="placa" label="Veículo" />
          <q-tab v-if="flg_placa_ok" name="info" label="Info" />
          <q-tab v-if="flg_placa_ok" name="owner" label="Dono" />
          <q-tab v-if="flg_placa_ok" name="valor" label="Valor" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="placa">
            
      <!-- <q-card-section> -->
     
    
        <span style="font-size: 20px;">Placa</span>
      <q-input
            mask="XXXXXXX"
            class="font3"
            v-model="car.placa"
            maxlength="7"
            filled
            autofocus
            debounce="1000"
            :rules="[val => !!val || 'Defina a placa', val => val.length == 7 || '7 dígitos']"
        
        />
          <div class="q-gutter-sm">
          <q-radio v-model="car.type" val="carro"   label="Carro" />
          <q-radio v-model="car.type" val="moto" label="Moto" />
        </div><br>
         <q-btn  @click="chamatab('info')" label="Próximo"></q-btn>
       
      <!-- </q-card-section> -->
       
          </q-tab-panel>

          <q-tab-panel name="info">
          <!-- <q-card class="my-card">
        <q-card-section> -->
          <div class="text-h6">Dados do veículo</div>
        <br>
        <q-input
            class="font2"
            v-model="car.modelo"
            filled
            label="Modelo"
        /><br>

         <q-input
        class="font2"
        v-model="car.cor"
        filled
        label="Cor"
      /><br>
       <q-input
          class="font2"
          v-model="car.obs"
          filled
          label="Obs"
        />
        <br>
         <q-btn @click="chamatab('owner')" label="Próximo"></q-btn>
        
      <!-- </q-card-section>
          </q-card> -->
          </q-tab-panel>

          <q-tab-panel name="owner">
           
              <!-- <q-card flat bordered class="my-card">
          
          <q-card-section> -->
            <div class="text-h6">Dados do proprietário</div>
          <br>
            <q-input
                class="font2"
                v-model="car.owner.name"
                filled
                label="Proprietário"
            /><br>

            <q-input
            class="font2"
            v-model="car.owner.contato"
            filled
            label="Contato"
          /><br>
          <q-input
              class="font2"
              v-model="car.owner.hostel"
              filled
              label="Pousada"
            /><br>
          <q-input
              class="font2"
              v-model="car.owner.obs"
              filled
              label="Obs"
            />
            <br>
             <q-btn @click="chamatab('valor')" label="Próximo"></q-btn>
           
          <!-- </q-card-section>
              </q-card> -->
        
          </q-tab-panel>


          <q-tab-panel name="valor">
 <!-- <q-card class="my-card">
      <q-card-section> -->
          <div class="text-h6">Valor a pagar</div>
        <br>
        <div class="row row q-col-gutter-xs" >  
          <div class="col-6">
          <q-input
          class="font2"
          v-model="car.n_diarias"
          filled
          label="Diárias"
        />
          </div>
          <div class="col-6">
            <QCurrencyInput
            v-model="car.valor_diaria"
            class="font2"
            label="Valor diária"
            :key="componentKey_valor_diaria"
            :options="{	locale: 'pt-BR',
              currency: 'BRL',
              currencyDisplay: 'symbol',
              valueRange: undefined,
              precision: undefined,
              hideCurrencySymbolOnFocus: false,
              hideGroupingSeparatorOnFocus: false,
              hideNegligibleDecimalDigitsOnFocus: false,
              autoDecimalDigits: true,
              exportValueAsInteger: false,
              autoSign: true,
              useGrouping: true
            }"
          />
          </div>
        </div>
        <div class="row row q-col-gutter-xs" >  
        <div class="col-6">
       <QCurrencyInput
          :key="componentKey" 
          class="font2"
          v-model="car.valor_total"
          label="Total a pagar"
          readonly
          :options="{	locale: 'pt-BR',
            currency: 'BRL',
            currencyDisplay: 'symbol',
            valueRange: undefined,
            precision: undefined,
            hideCurrencySymbolOnFocus: false,
            hideGroupingSeparatorOnFocus: false,
            hideNegligibleDecimalDigitsOnFocus: false,
            autoDecimalDigits: true,
            exportValueAsInteger: false,
            autoSign: true,
            useGrouping: true
          }"
        />
        </div>
        <div class="col-6">
         <QCurrencyInput
          :key="componentKey_valor_pago" 
          v-model="car.valor_pago"
          class="font2"
          label="Valor pago"
          :options="{	locale: 'pt-BR',
            currency: 'BRL',
            currencyDisplay: 'symbol',
            valueRange: undefined,
            precision: undefined,
            hideCurrencySymbolOnFocus: false,
            hideGroupingSeparatorOnFocus: false,
            hideNegligibleDecimalDigitsOnFocus: false,
            autoDecimalDigits: true,
            exportValueAsInteger: false,
            autoSign: true,
            useGrouping: true
          }"
        /></div></div>
         <QCurrencyInput
         class="font2"
          :key="componentKey" 
          v-model="car.valor_troco"
          label="Troco"
          readonly
          :options="{	locale: 'pt-BR',
            currency: 'BRL',
            currencyDisplay: 'symbol',
            valueRange: undefined,
            precision: undefined,
            hideCurrencySymbolOnFocus: false,
            hideGroupingSeparatorOnFocus: false,
            hideNegligibleDecimalDigitsOnFocus: false,
            autoDecimalDigits: true,
            exportValueAsInteger: false,
            autoSign: true,
            useGrouping: true
          }"
        />
        <q-btn v-if="flg_placa_ok && car.valor_troco >= 0"
          label="Registrar"
          type="submit"
          color="primary"
        />
 <!-- </q-card-section>
    </q-card> -->
          </q-tab-panel>
        </q-tab-panels>
      <!-- </q-card> -->
      <!-- <q-toggle v-model="accept" label="I accept the license and terms" /> -->
    </q-form>
  </div>

  <q-dialog
      v-model="dialog_save_ok"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <div class="text-h6">Veículo registrado!</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <span class=dialog_save_ok>

            <!-- <canvas ref="qrcode"></canvas> -->
            <!-- <vue-qrious value="https://www.1stg.me" /> -->
            <canvas ref="qrcode" width=200 height=200></canvas>
            <canvas ref="qrcode2" width=200 height=200 style="display: none;"></canvas>
             
             <!-- <QRCodeVue3
             ref="qrcode"
          :value=qrcodevalue
          :width="160"
          :height="160"
        /> -->
        <br>
            <b>Entrada:</b><br>{{registrada.timestamp}}<br>
            <b>Placa:</b> {{registrada.placa}}<br>
            <b>Ticket:</b> {{registrada.ticket}}
          </span>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn color="primary" label="Print" @click="print" />
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
  </q-dialog>
</template>
<script>
import { useQuasar, date } from 'quasar'
import { ref, watch, watchEffect, onBeforeUnmount, getCurrentInstance, nextTick } from 'vue'
import { useRouter } from 'vue-router' // import router
import firebase from 'firebase'
import "firebase/firestore"
// import QRious from "qrious";
// import VueQrious from 'vue-qrious'
// import QRCodeVue3 from "qrcode-vue3";
import QRious from "qrious";
import QCurrencyInput from "../QCurrencyInput.vue";
export default {
  components: {
    QCurrencyInput,
  },
  setup () {
    let qrcodevalue = ref('oi')
    let qrcode = ref(null)
    let qrcode2 = ref(null)
    var qrLink = ref("")
    var db = firebase.firestore()
    const router = useRouter()
    const flg_placa_ok = ref(false)
    const tab = ref('placa')
    const valor_diaria = ref(40)
    const ticket = ref(0)
    const dialog_save_ok = ref(false)
    const registrada = ref({})
    const componentKey = ref(0)
    const componentKey_valor_pago = ref(0)
    const componentKey_valor_diaria = ref(0)
    const forma_de_pagamento = ref('Dinheiro')
    const forma_de_pagamento_options = ['Dinheiro', 'Cartão de débito', 'Cartão de crédito', 'Pix', 'Outros']
    // const plusOne = computed(() => count.value + 1)
    // const timeStamp = Date.now()
    // const formattedString = date.formatDate(timeStamp, 'DD-MM-YYYYTHH:mm:ss.SSSZ')
    const authListener = firebase.auth().onAuthStateChanged(function(user) {
      if (!user) { // not logged in
        alert('you must be logged in to view this. redirecting to the home page')
        router.push('/')
      }else{
        console.log('current_user:', user);
      }
    })

    const print = () => {
        let printCharacteristic;
        let index = 0;
        let data;

        // let image = document.querySelector('#qr');
        // let image = document.getElementById("qr-code")
        let image = qrcode.value
        // Use the canvas to get image data
        // let canvas = document.createElement('canvas');
        // Canvas dimensions need to be a multiple of 40 for this printer
        let canvas = qrcode2.value
        canvas.width = 200;
        canvas.height = 200;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
        // let imageData = image.getContext("2d").getImageData(0, 0, canvas.width, canvas.height).data;
        // console.log(imageData)
        function getDarkPixel(x, y) {
          // Return the pixels that will be printed black
          let red = imageData[((canvas.width * y) + x) * 4];
          let green = imageData[((canvas.width * y) + x) * 4 + 1];
          let blue = imageData[((canvas.width * y) + x) * 4 + 2];
          return (red + green + blue) > 0 ? 0 : 1;
        }

        function getImagePrintData() {
          
          if (imageData == null) {
            console.log('No image to print!');
            return new Uint8Array([]);
          }
          
          // Each 8 pixels in a row is represented by a byte
          let printData = new Uint8Array(canvas.width / 8 * canvas.height + 8);
          console.log('printdata:', printData)
          let offset = 0;
          // Set the header bytes for printing the image
          printData[0] = 29;  // Print raster bitmap
          printData[1] = 118; // Print raster bitmap
          printData[2] = 48; // Print raster bitmap
          printData[3] = 0;  // Normal 203.2 DPI
          printData[4] = canvas.width / 8; // Number of horizontal data bits (LSB)
          printData[5] = 0; // Number of horizontal data bits (MSB)
          printData[6] = canvas.height % 256; // Number of vertical data bits (LSB)
          printData[7] = canvas.height / 256;  // Number of vertical data bits (MSB)
          offset = 7;
          // Loop through image rows in bytes
          for (let i = 0; i < canvas.height; ++i) {
            for (let k = 0; k < canvas.width / 8; ++k) {
              let k8 = k * 8;
              //  Pixel to bit position mapping
              printData[++offset] = getDarkPixel(k8 + 0, i) * 128 + getDarkPixel(k8 + 1, i) * 64 +
                          getDarkPixel(k8 + 2, i) * 32 + getDarkPixel(k8 + 3, i) * 16 +
                          getDarkPixel(k8 + 4, i) * 8 + getDarkPixel(k8 + 5, i) * 4 +
                          getDarkPixel(k8 + 6, i) * 2 + getDarkPixel(k8 + 7, i);
            }
          }
          return printData;
        }

        function handleError(error) {
          console.log(error);
          // progress.hidden = true;
          printCharacteristic = null;
          // dialog.open();
        }

        function sendNextImageDataBatch(resolve, reject) {
          // Can only write 512 bytes at a time to the characteristic
          // Need to send the image data in 512 byte batches
          if (index + 512 < data.length) {
            printCharacteristic.writeValue(data.slice(index, index + 512)).then(() => {
              index += 512;
              sendNextImageDataBatch(resolve, reject);
            })
            .catch(error => reject(error));
          } else {
            // Send the last bytes
            if (index < data.length) {
              printCharacteristic.writeValue(data.slice(index, data.length)).then(() => {
                resolve();
              })
              .catch(error => reject(error));
            } else {
              resolve();
            }
          }
        }

        function sendImageData() {
          index = 0;
          data = getImagePrintData();
          return new Promise(function(resolve, reject) {
            sendNextImageDataBatch(resolve, reject);
          });
        }

        function sendTextData() {
          // Get the bytes for the text
          let encoder = new TextEncoder("utf-8");
          // Add line feed + carriage return chars to text
          // let text = encoder.encode(JSON.stringify(registrada.value,null,2) + '\u000A\u000D');
          let text = encoder.encode('      l1   l2  l3\u000A\u000D     l4   l5   l6'  + '\u000A\u000D');
          return printCharacteristic.writeValue(text).then(() => {
            console.log('Write done.');
          });
        }

        function sendPrinterData() {
          // Print an image followed by the text
         
          sendImageData()
          .then(sendTextData)
          .then(() => {})
          .catch(handleError);
        }


         if (printCharacteristic == null) {
            navigator.bluetooth.requestDevice({
              filters: [{
                services: ['000018f0-0000-1000-8000-00805f9b34fb']
              }]
            })
            .then(device => {
              console.log('> Found ' + device.name);
              console.log('Connecting to GATT Server...');
              return device.gatt.connect();
            })
            .then(server => server.getPrimaryService("000018f0-0000-1000-8000-00805f9b34fb"))
            .then(service => service.getCharacteristic("00002af1-0000-1000-8000-00805f9b34fb"))
            .then(characteristic => {
              // Cache the characteristic
              printCharacteristic = characteristic;
              console.log(printCharacteristic)
              sendPrinterData();
            })
            .catch(handleError);
          } else {
            sendPrinterData();
          }

    }
    
    const generateQrCode = () => {
      console.log(5, qrLink.value)
      if (qrLink.value != "" && qrLink.value != "\n") {
        console.log(6, qrLink.value)
       
       setTimeout(function () {
          new QRious({
          level: "M",
          padding: 5,
          size: 200,
          element: qrcode.value, //document.getElementById("qr-code"),
          value: qrLink.value,
        });
        }, 1000);
       
      }
    }



    const $q = useQuasar()
    const config =  {
          masked: false,
          prefix: '',
          suffix: '',
          thousands: '.',
          decimal: ',',
          precision: 2,
          disableNegative: false,
          disabled: false,
          min: null,
          max: null,
          allowBlank: false,
          minimumNumberOfCharacters: 0,
        }
   
    const car = ref({
      in_timestamp: null,
      placa: null,
      modelo: null,
      type: 'carro',
      cor: null,
      obs: null,
      n_diarias: 1,
      valor_diaria: 30.00,
      valor_total: 35.00,
      valor_pago: 0,
      valor_troco: 0,
      cliente_email: null,
      owner:{}
    })

    let entradas = null

    const chamatab = (val) => {
      if (car.value.placa?.length > 6) {
        tab.value = val
      }
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
      car.value.in_timestamp = dateTime
    }
    watch(() => car.value.valor_diaria, (x) => {
      console.log(12, x);
      // componentKey.value += 1
      // car.value.valor_total = 11//car.value.n_diarias * car.value.valor_diaria
    })
    watch(() => car.value.placa, (x) => { 
      if (x?.length > 6) {
        flg_placa_ok.value = true
      }else{
        flg_placa_ok.value = false
      }
      }
    );
    watchEffect(() => console.log('!2'));
    watchEffect(() => {
      componentKey.value += 1
      // componentKey_valor_pago.value += 1
      car.value.valor_total = car.value.n_diarias * car.value.valor_diaria
      console.log(car.value.n_diarias, car.value.valor_diaria, car.value.valor_total);
      car.value.valor_troco = car.value.valor_pago - car.value.valor_total
   //   console.log(oldValue);
    });
    const onReset = async () => {
        
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
            out_timestamp: null,
        }
        await nextTick()
        car.value.valor_diaria = 30
        componentKey.value += 1
        componentKey_valor_pago.value += 1
        componentKey_valor_diaria.value += 1
    }

    const insert = async () => {
      const query = db.collection("carros");
      const snapshot = await query.get();
      const count = snapshot.size;

        console.log('count:', count);
        console.log(car.value);
        let car_to_save = {
          domain: 'teste',
          in_timestamp: + new Date(),
          modelo: car.value.modelo,
          cor: car.value.cor,
          placa: car.value.placa,
          obs: car.value.obs,
          n_diarias: car.value.n_diarias,
          valor_diaria: car.value.valor_diaria,
          valor_total: car.value.valor_total,
          valor_pago: car.value.valor_pago,
          valor_troco: car.value.valor_troco,
          out_timestamp: null,
          ticket: car.value.placa + '-' + (parseInt(+ new Date()/1000))
        }
        registrada.value = {
          timestamp: new Date(car_to_save.in_timestamp),
          placa: car_to_save.placa,
          ticket: car_to_save.ticket
        }
        db.collection("carros").add(car_to_save)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            
           
            console.log(car.value.in_timestamp);
            qrLink.value = docRef.id
        generateQrCode()
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
       
       
        
        onReset()
        dialog_save_ok.value = true
        // $q.notify({
        //   color: 'green-4',
        //   textColor: 'white',
        //   icon: 'cloud_done',
        //   message: 'Veículo registrado com sucesso!'
        // })
    }
    // onBeforeUnmount(() => {
    //   // clear up listener
    //   authListener()
    // })
    setInterval(getNow, 1000)
    return {
      print,
      qrcodevalue,
      qrcode,
      qrcode2,
      qrLink,
      flg_placa_ok,
      chamatab,
      tab,
      dialog_save_ok, registrada, ticket,
      componentKey, componentKey_valor_pago, componentKey_valor_diaria, insert, car, 
      onReset, config, valor_diaria, forma_de_pagamento, forma_de_pagamento_options
    }
  }
}
</script>
<style scoped>
 .dialog_save_ok {
   font-size: 27px;
 }
 .font1 {
   font-size: 19px;
 }
 .font2 {
   font-size: 22px;
 } 
 .font3 {
   font-size: 35px;
 }
</style>
