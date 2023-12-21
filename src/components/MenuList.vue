<template>
<DataTable :value="menuList" scrollable scrollHeight="flex" tableStyle="min-width: 50rem">
  <Column field="day" header="Day"></Column>
  <Column field="regular" header="Regular"></Column>
  <Column field="diet" header="Diet"></Column>
</DataTable>
</template>
<script lang="ts" setup>
const menuList=[
  {
    day:"Sunday",
    regular:"Rice, Chicken curry or Eggs",
    diet:"Ruti, Chicken vegetable, Salad, Yogurt"
  },
  {
    day:"Monday",
    regular:"Rice, Chicken curry or Eggs",
    diet:"Ruti, Chicken vegetable, Salad, Yogurt"
  },
  {
    day:"Tuesday",
    regular:"Rice, Chicken curry or Eggs",
    diet:"Ruti, Chicken vegetable, Salad, Yogurt"
  },
  {
    day:"Wednesday",
    regular:"Rice, Chicken curry or Eggs",
    diet:"Ruti, Chicken vegetable, Salad, Yogurt"
  },
  {
    day:"Thursday",
    regular:"Rice, Chicken curry or Eggs",
    diet:"Ruti, Chicken vegetable, Salad, Yogurt"
  },
  {
    day:"Friday",
    regular:"Rice, Chicken curry or Eggs",
    diet:"Ruti, Chicken vegetable, Salad, Yogurt"
  }
]
</script>