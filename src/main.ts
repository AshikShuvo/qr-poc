import { createApp } from 'vue'
import App from './App.vue'
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import PrimeVue from 'primevue/config';
import "/node_modules/primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import Button from "primevue/button";
import './assets/styles/main.scss'
import DynamicDialog from 'primevue/dynamicdialog';
import DialogService from 'primevue/dialogservice';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import RadioButton from 'primevue/radiobutton';
import Dropdown from 'primevue/dropdown';



const app=createApp(App);
app.use(PrimeVue,{ripple:true});
app.use(DialogService);
app.component("RadioButton",RadioButton);
app.component("Dropdown", Dropdown);
app.component("Button",Button);
app.component("DynamicDialog", DynamicDialog);
app.component("DataTable",DataTable);
app.component("Column",Column);
app.component("InputText",InputText);
app.component("Calendar",Calendar);
app.mount('#app');
