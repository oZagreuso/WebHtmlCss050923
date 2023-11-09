import { CerealBrand } from "./CerealBrand.js";

const app =
{
    data() {
        return {
            nutriTab: []
        }
    },
    async mounted() {
        let response = await fetch('./cereals.json');
        this.nutriTab = await response.json();
        this.nutriTab = this.nutriTab.data;
        console.log('1' , this.nutriTab);

        for (let i = 0; i < this.nutriTab.length; i++) {
            this.nutriTab[i] = new CerealBrand(this.nutriTab[i]);
            console.log(this.nutriTab[i]);
        }
    }
}

Vue.createApp(app).mount('#appNutriments');