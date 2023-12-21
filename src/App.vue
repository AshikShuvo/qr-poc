<template>
  <div class="h-full w-full flex flex-row justify-content-center gap-2">
    <div>
      <DynamicDialog/>
      <div id="header" class="p-2">
        <div class="header-container p-2">
          <div class="p-1">
            <div class="flex flex-column justify-content-start align-content-start">
              <div>Name: Ashik Ahmmed</div>
              <div>Email: ashik@outlook.com</div>
              <div>Campus: Mohakhali New</div>
              <div>Total Consumed (This month): 10</div>
            </div>
          </div>
          <div class="p-1 mt-2">
            <div class="grid gap-2">
              <Button label="Menu List" icon="pi pi-list" @click="showMenu" />
              <Button label="Apply" icon="pi pi-check" iconPos="right" @click="showOrder" />
              <Button label="Scan QR" icon="pi pi-camera" iconPos="right" @click="showScanner"/>
            </div>
          </div>
        </div>
      </div>
      <div id="order-log">

      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import {useDialog} from "primevue/usedialog";
import MenuList from "./components/MenuList.vue";
import LunchOrder from "./components/LunchOrder.vue";
import QrScanner from "./components/QrScanner.vue";

const dialog = useDialog();

const showScanner= ()=>{
  dialog.open(QrScanner,{
    props:{
      header:"Order lunch",
      style: {
        width: '50vw',
      },
      breakpoints:{
        '960px': '75vw',
        '640px': '90vw'
      },
      modal: true
    }
  })
}
const showOrder= ()=>{
  dialog.open(LunchOrder,{
    props:{
      header:"Order lunch",
      style: {
        width: '50vw',
      },
      breakpoints:{
        '960px': '75vw',
        '640px': '90vw'
      },
      modal: true
    }
  })
}
const showMenu = () => {
  dialog.open(MenuList, {
    props: {
      header: 'Menu List',
      style: {
        width: '50vw',
      },
      breakpoints:{
        '960px': '75vw',
        '640px': '90vw'
      },
      modal: true
    }
  });
}
</script>

