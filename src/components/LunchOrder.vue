<template>
    <form class="w-full flex flex-column justify-content-start align-content-center gap-4">
      <div class="card flex flex-column justify-content-center align-content-center">
        <label for="date-select" class="font-bold block mb-2"> Select Date(s) </label>
        <Calendar input-id="date-select" v-model="dates" selectionMode="multiple" :manualInput="false" />
      </div>
      <div class="card flex flex-wrap justify-content-center gap-3 align-content-center">
        <div class="flex align-items-center">
          <RadioButton v-model="selectedMenu" inputId="regular" name="Regular" value="regular" />
          <label for="regular" class="ml-2"> Regular Menu </label>
        </div>
        <div class="flex align-items-center">
          <RadioButton v-model="selectedMenu" inputId="diet" name="Diet" value="diet" />
          <label for="regular" class="ml-2"> Diet Menu </label>
        </div>
      </div>
      <div class="card flex flex-column justify-content-center align-content-center">
        <label for="campus-input" class="font-bold block mb-2"> Select Branch </label>
        <Dropdown input-id="campus-input" v-model="selectedBranch" :options="branch" optionLabel="label" placeholder="Select a Campus" class="w-full" />
      </div>
      <div class="w-full flex flex-row justify-content-end align-content-center">
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
      </div>
    </form>
</template>
<script setup lang="ts">
import {ref} from "vue";

const dates = ref([]);
const selectedMenu = ref("");
const selectedBranch = ref("");
const branch = [
  {
    label:"Mohakhali(new)",
    value:"Mohakhali(new)"
  },
  {
    label:"Mohakhali(old)",
    value:"Mohakhali(old)"
  },
  {
    label:"Mirpur",
    value:"Mirpur"
  }
]
</script>