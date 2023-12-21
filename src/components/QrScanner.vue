<template>
  <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"

  ></StreamBarcodeReader>
</template>
<script setup lang="ts">
import { StreamBarcodeReader } from "vue-barcode-reader";
const onDecode=(text:string)=>{
  console.log(`Decode text from QR code is ${text}`)
}
const onLoaded=()=> {
  console.log(`Ready to start scanning barcodes`)
}
</script>