import { DataBase } from "./DataBase.js";

const apiURL = 'https://arfp.github.io/tp/web/html-css-js/03-zipcodes/zipcodes.json';

const myApp = {
    data() {
        return {
            zipCodes: [],
            result: [],
            zipCode: ''
        }
    },
    async mounted() {
        this.zipCodes = await DataBase.fetchJson(apiURL);
        console.log(this.zipCodes);
        // mounted <= l'élément DOM a été rendu dans la page et peut être manipulé
    },
    methods: {
        validClick() {
            this.result = this.zipCodes.filter(city => city.codePostal == this.zipCode);
        }
    }
 }

Vue.createApp(myApp).mount('#appCP');