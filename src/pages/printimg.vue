<template>
  <q-page>
    <q-input
      v-model="qrLink"
      label="Input value to generate"
      :rules="[(val) => !!val || 'Link field cannot be empty']"
    />
    <br />
    <q-btn color="primary" label="Generate QR Code" @click="generateQrCode" />
    <q-btn color="primary" label="Print" @click="print" />

    <canvas id="qr-code"></canvas>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import QRious from "qrious";

export default defineComponent({
  name: "PageIndex",
  data() {
    return {
      qrLink: "",
    };
  },
  methods: {
    print: function (){
        let printCharacteristic;
        let index = 0;
        let data;

        // let image = document.querySelector('#qr');
        let image = document.getElementById("qr-code")
        // Use the canvas to get image data
        let canvas = document.createElement('canvas');
        // Canvas dimensions need to be a multiple of 40 for this printer
        canvas.width = 200;
        canvas.height = 200;
        let context = image.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        let imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
        console.log(imageData)
        function getDarkPixel(x, y) {
          // Return the pixels that will be printed black
          let red = imageData[((canvas.width * y) + x) * 4];
          let green = imageData[((canvas.width * y) + x) * 4 + 1];
          let blue = imageData[((canvas.width * y) + x) * 4 + 2];
          return (red + green + blue) > 0 ? 1 : 0;
        }

        function getImagePrintData() {
          if (imageData == null) {
            console.log('No image to print!');
            return new Uint8Array([]);
          }
          
          imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;
          console.log('getImgePrintData()')
          // Each 8 pixels in a row is represented by a byte
          let printData = new Uint8Array(canvas.width / 8 * canvas.height + 8);
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
          let text = encoder.encode('Fidelito!' + '\u000A\u000D');
          return printCharacteristic.writeValue(text).then(() => {
            console.log('Write done.');
          });
        }

        function sendPrinterData() {
          // Print an image followed by the text
          console.log('111111');
         
          sendImageData()
          .then(sendTextData)
          .then(() => {
          })
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

    },
    generateQrCode: function () {
      if (this.qrLink != "" && this.qrLink != "\n") {
        new QRious({
          level: "H",
          padding: 5,
          size: 200,
          element: document.getElementById("qr-code"),
          value: this.qrLink,
        });
      }
    },
  },
});
</script>