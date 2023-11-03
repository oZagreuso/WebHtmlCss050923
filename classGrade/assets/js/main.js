import { DataBase } from "./Database.js";

const apiUrl = './eval.json';
console.log(apiUrl);

const { createApp } = Vue;

const evalApp = {
    data() {
        return {
            results:[]
        }
    },
    async mounted() { 

        const dB = await DataBase.fetchJson(apiUrl);
        for (const item of dB) {
            console.log(item);
        }        
    }
}

createApp(evalApp).mount('#appEval');