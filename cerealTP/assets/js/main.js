import { CerealBrand } from "./CerealBrand.js";

const app =
{
    data() {
        return {
            nutriTab: [],
            nutriTabBis: [],
            asc: true,

        }
    },
    async mounted() {
        let response = await fetch('./cereals.json');
        this.nutriTab = await response.json();
        this.nutriTab = this.nutriTab.data;
        // this.nutriTabBis = this.nutriTab;
        // console.log('1', this.nutriTab);

        for (let i = 0; i < this.nutriTab.length; i++) {
            this.nutriTab[i] = new CerealBrand(this.nutriTab[i]);
            // console.log(this.nutriTab[i]);
        }

        this.nutriTabBis =[...this.nutriTab];
        console.log(this.nutriTabBis);

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

            if (this.asc === false) {
                this.nutriTab.reverse();
            }
            else {
                this.asc = !this.asc;
            }

        },

        filteredBrand() {
            this.nutriTab
              }
        }
    }



Vue.createApp(app).mount('#appNutriments');