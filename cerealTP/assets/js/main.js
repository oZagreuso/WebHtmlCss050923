import { CerealBrand } from "./CerealBrand.js";

const app =
{
    data() {
        return {
            nutriTab: [],
            asc: true,
        }
    },
    async mounted() {
        let response = await fetch('./cereals.json');
        this.nutriTab = await response.json();
        this.nutriTab = this.nutriTab.data;
        this.nutriTab = nutriTabSource;
        this.asc = true;

        console.log('1', this.nutriTab);

        for (let i = 0; i < this.nutriTab.length; i++) {
            this.nutriTab[i] = new CerealBrand(this.nutriTab[i]);
            console.log(this.nutriTab[i]);
        }



    },
    methods: {

        sortBrand(event) {

            let attribute = event.target.id;

            let sortFunction = (a, b) => {
                if (a[attribute] > b[attribute]) {
                    return 1;
                }
                else if (a[attribute] < b[attribute]) {
                    return -1;
                } else {
                    return 0;
                }
            }

                this.nutriTab.sort(sortFunction);

                if (this.asc === true) {
                    this.nutriTab.sort(((a, b) => a.id - b.id).reverse());
                    this.asc = false;
                }
                else {
                    this.nutriTab.sort(((a, b) => a.id - b.id));
                    this.asc = true;
                }
            
        }





    }
}

Vue.createApp(app).mount('#appNutriments');