import { DataBase } from "./Database.js";
import { Students } from "./Students.js";

const apiUrl = './eval.json';
console.log(apiUrl);

const { createApp } = Vue;

const evalApp = {

    data() {
        return {
            students:[],
            grades: []
        }
    },

    async mounted() { 

        const dB = await DataBase.fetchJson(apiUrl);

        for (const item of dB) {
            const student = new Students(item);
            this.students.push(student);
        }        

        for (const item of this.students) {
            this.grades.push(item.grade);
        }
    }

}

createApp(evalApp).mount('#appEval');