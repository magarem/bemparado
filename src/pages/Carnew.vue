<template>
  <div>
    <div class="row row q-col-gutter-xs" >  
      <div class="col-12 text-center" style="margin-top: 4px; padding: 11px; background-color: #90ee90;">
        <span style="font-size: 23px; color: black;">Entrada</span>
      </div>
    </div>
    <br>
    <q-form @submit="insertTest" @reset="onReset" >   
      <q-tabs
        style="font-size: 15px;"
        v-model="tab"
        dense
        class="text-grey"
        active-color="primary"
        indicator-color="primary"
        align="justify"
        narrow-indicator>
        <q-tab name="placa" label="Veículo" />
        <q-tab v-if="flg_placa_ok" name="info" label="Info" />
        <q-tab v-if="flg_placa_ok" name="dono" label="Dono" />
        <q-tab v-if="flg_placa_ok" name="valor" label="Valor" />
      </q-tabs>
      <q-separator />
      <q-tab-panels v-model="tab" animated>  
       
        <q-tab-panel name="placa">
          <span style="font-size: 20px;">Placa</span>
          <div class="q-gutter-sm text-center self-center">
            <div class="col-12 text-center self-center">
             
              <q-input
                mask="XXXXXXX"
                class="font3"
                style="width: 200px;"
                v-model="car.placa"
                maxlength="7"
                filled
                autofocus
                debounce="1000"
                :rules="[val => !!val || 'Defina a placa', val => val.length == 7 || '7 dígitos']"
              />
           
            </div>
          </div>
          <div class="q-gutter-sm">
            <q-radio v-model="car.tipo" val="carro" label="Carro" />
            <q-radio v-model="car.tipo" val="moto" label="Moto" />
          </div><br>
          <q-btn  @click="chamatab('info')" label="Próximo"></q-btn>
        </q-tab-panel>
        
        <q-tab-panel name="info">
          <div class="text-h6">Dados do veículo</div>
          <br>
          <q-input
            class="font2"
            v-model="car.info.modelo"
            filled
            label="Modelo"
          /><br>
          <q-input
            class="font2"
            v-model="car.info.cor"
            filled
            label="Cor"
          /><br>
          <q-input
            class="font2"
            v-model="car.info.obs"
            filled
            label="Obs"
          />
          <br>
          <q-btn @click="chamatab('dono')" label="Próximo"></q-btn>
        </q-tab-panel>

        <q-tab-panel name="dono">
          <div class="text-h6">Dados do proprietário</div>
          <br>
          <q-input
            class="font2"
            v-model="car.dono.nome"
            filled
            label="Proprietário"
          /><br>
          <q-input
            class="font2"
            v-model="car.dono.contato"
            filled
            label="Contato"
          /><br>
          <q-input
            class="font2"
            v-model="car.dono.pousada"
            filled
            label="Pousada"
          /><br>
          <q-input
            class="font2"
            v-model="car.dono.obs"
            filled
            label="Obs"
          />
          <br>
          <q-btn @click="chamatab('valor')" label="Próximo"></q-btn>
        </q-tab-panel>

        <q-tab-panel name="valor">
          <div class="text-h6">Valor a pagar</div>
          <br>
          <div class="row row q-col-gutter-xs" >  
            <div class="col-6">
              <q-input
                class="font2"
                v-model="car.checkout.n_diarias"
                filled
                label="Diárias" />
            </div>
            <div class="col-6">
              <QCurrencyInput
              v-model="car.checkout.valor_diaria"
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
              }" />
            </div>
          </div>
          <div class="row row q-col-gutter-xs" >  
            <div class="col-6">
              <QCurrencyInput
                :key="componentKey" 
                class="font2"
                v-model="car.checkout.valor_a_pagar"
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
              <q-select v-model="car.checkout.forma_de_pagamento" :options="forma_de_pagamento_options" label="Forma de pagamento" />
            </div>
          </div>
          <div class="row row q-col-gutter-xs" >  
            <div class="col-6">
              <QCurrencyInput
                :key="componentKey_valor_pago" 
                v-model="car.checkout.valor_pago"
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
              />
            </div>
            <div class="col-6">
              <QCurrencyInput
                class="font2"
                :key="componentKey" 
                v-model="car.checkout.valor_troco"
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
            </div>
          </div>
          <q-btn v-if="flg_placa_ok && (car.checkout.valor_troco >= 0 || car.checkout.forma_de_pagamento == 'Em aberto') "
            label="Registrar"
            type="submit"
            color="primary"
          />
        </q-tab-panel>
      
      </q-tab-panels>
    </q-form>
  </div>

  <q-dialog v-model="dialog_save_ok" >
    <q-card style="width: 300px">
      <q-card-section>
        <div class="text-h6">Veículo registrado!</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <span class=dialog_save_ok>
          <canvas ref="qrcode" width=200 height=200></canvas>
          <canvas ref="qrcode2" width=200 height=200 style="display: none;"></canvas>
          <br>
          <b>Ticket:</b>{{registrada.ticket}}
          <b>Entrada:</b><br>{{registrada.in_timestamp}}<br>
          <b>Placa:</b> {{registrada.placa}}<br>
          <b>Tipo:</b><br>{{registrada.tipo}}<br>
          <b>modelo:</b><br>{{registrada.info.modelo}}<br>
          <b>cor:</b><br>{{registrada.info.cor}}<br>
          <b>Obs:</b><br>{{registrada.info.obs}}<br>
          <b>Dono:</b><br>{{registrada.dono.nome}}<br>
          <b>Contato:</b><br>{{registrada.dono.contato}}<br>
          <b>Pousada:</b><br>{{registrada.dono.pousada}}<br>
          <b>Obs:</b><br>{{registrada.dono.obs}}<br>
          <b>N° diárias:</b><br>{{registrada.checkout.n_diarias}}<br>
          <b>Valor diária:</b><br>{{registrada.checkout.valor_diaria}}<br>
          <b>Total a pagar:</b><br>{{registrada.checkout.total_a_pagar}}<br>
          <b>Forma de pagamento:</b><br>{{registrada.checkout.forma_de_pagamento}}<br>
          <b>Valor pago:</b><br>{{registrada.checkout.valor_pago}}<br>
          <b>Troco:</b><br>{{registrada.checkout.troco}}<br>
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
import QRious from "qrious";
import QCurrencyInput from "../QCurrencyInput.vue";
export default {
  components: {
    QCurrencyInput
  },
  setup () {
    let qrcode = ref(null)
    let qrcode2 = ref(null)
    var qrLink = ref("")
    var db = firebase.firestore()
    const router = useRouter()
    const flg_placa_ok = ref(false)
    const tab = ref('placa')
    const dialog_save_ok = ref(false)
    const registrada = ref({})
    const componentKey = ref(0)
    const componentKey_valor_pago = ref(0)
    const componentKey_valor_diaria = ref(0)
    const forma_de_pagamento_options = ['Dinheiro', 'Cartão de débito', 'Cartão de crédito', 'Pix', 'Em aberto']
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

        let image = qrcode.value
        let canvas = qrcode2.value
        canvas.width = 200;
        canvas.height = 200;
        let context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
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
          let printData = new Uint8Array(canvas.width / 8 * canvas.height + 8)
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
              printData[++offset] = 
                getDarkPixel(k8 + 0, i) * 128 + getDarkPixel(k8 + 1, i) * 64 +
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
    let objReset = (obj) => {
      Object.keys(obj).map(key => {
        // Test if it's an Object
        if (obj[key] === Object(obj[key])) {
          objReset(obj[key])
          return
        }
        if (obj[key] instanceof Array) obj[key] = []
        else obj[key] = undefined
      })
    }

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
      ticket: null,
      in_timestamp: null,
      placa: null,
      tipo: 'carro',
      info: {
        modelo: null,
        cor: null,
        obs: null
      },
      dono: {
        nome: null,
        contato: null,
        pousada: null,
        obs: null
      },
      checkout: {
        n_diarias: 1,
        valor_diaria: 30.00,
        valor_a_pagar: 30.00,
        forma_de_pagamento: null,
        valor_pago: 0,
        valor_troco: 0
      }
    })
    let entradas = null

    const chamatab = (val) => {
      if (car.value.placa?.length > 6) {
        tab.value = val
      }
    }

    const total_calc = () => {
        console.log("!!");
        car.value.checkout.valor_a_pagar = car.value.checkout.valor_diaria * car.value.checkout.n_diarias
    }
    
    const getNow = () => {
      const today = new Date();
      const date = today.getDate() +'-'+(today.getMonth()+1)+ '-' + today.getFullYear()
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = time + '  ' + date
      car.value.in_timestamp = dateTime
    }

    watch(() => car.value.placa, (x) => flg_placa_ok.value = x.length > 6 );
   
    watchEffect(() => {
      console.log(1);
      componentKey.value += 1
      car.value.checkout.valor_a_pagar = car.value.checkout.n_diarias * car.value.checkout.valor_diaria
      console.log(car.value.checkout.n_diarias, car.value.checkout.valor_diaria, car.value.checkout.valor_a_pagar);
      car.value.checkout.valor_troco = car.value.checkout.valor_pago - car.value.checkout.valor_a_pagar
    });

    const onReset = async () => {
      objReset(car.value)
      // car.value = {
      //     ticket: null,
      //     in_timestamp: null,
      //     placa: null,
      //     tipo: null,
      //     modelo: null,
      //     cor: null,
      //     obs: null,
      //     dono: null,
      //     contato: null,
      //     pousada: null,
      //     obs: null,
      //     n_diarias: 1,
      //     valor_diaria: 30,
      //     valor_total: 0,
      //     valor_pago: 0,
      //     valor_troco: 0,
      //     pago: false,
      //     out_timestamp: null,
      // }
      await nextTick()
      car.value.valor_diaria = 30
      componentKey.value += 1
      componentKey_valor_pago.value += 1
      componentKey_valor_diaria.value += 1
    }

    const insertTest = async () => {
      console.log(car.value);
    }

    const insert = async () => {
      const query = db.collection("carros");
      const snapshot = await query.get();
      const count = snapshot.size;
     
      // let car_to_save = {
      //   ticket: car.value.placa + '-' + (parseInt(+ new Date()/1000)),
      //   domain: 'teste',
      //   in_timestamp: + new Date(),
      //   placa: car.value.placa,
      //   tipo: car.value.tipo,
      //   modelo: car.value.modelo,
      //   cor: car.value.cor,
      //   dono: car.value.dono, 
      //   contato: car.value.contato,
      //   pousada: car.value.pousada,
      //   obs: car.value.obs,
      //   n_diarias: car.value.n_diarias,
      //   valor_diaria: car.value.valor_diaria,
      //   valor_total_a_pagar: car.value.valor_total_a_pagar,
      //   valor_pago: car.value.valor_pago,
      //   valor_troco: car.value.valor_troco,
      //   out_timestamp: null
      // }
      // registrada.value = car_to_save.value

      db.collection("carros")
      .add(car.value)
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
    }
  
    setInterval(getNow, 1000)
    return {insertTest,
      print, qrcode, qrcode2, qrLink,
      flg_placa_ok, chamatab,tab,
      dialog_save_ok, registrada, componentKey, 
      componentKey_valor_pago, componentKey_valor_diaria, insert, car, 
      onReset, config, forma_de_pagamento_options
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
