<template>
  <template v-if="!decodedValue">
  <StreamBarcodeReader
      @decode="onDecode"
      @loaded="onLoaded"
  ></StreamBarcodeReader>
  </template>
  <template v-else>
    <div class="h-10 w-100 flex flex-column justify-content-center align-content-center">
      <p class="text-xl font-bold">Decoded successfully</p>
      <p>{{decodedValue}}</p>
    </div>
  </template>
</template>
<script setup lang="ts">
import { StreamBarcodeReader } from "vue-barcode-reader";
import {ref} from "vue";

const decodedValue = ref('')
const onDecode=(text:string)=>{
  decodedValue.value=text;
}
const onLoaded=()=> {
  console.log(`Ready to start scanning barcodes`)
}
</script>