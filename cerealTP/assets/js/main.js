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

        this.nutriTabBis = [...this.nutriTab];
        console.log(this.nutriTabBis);

    },
    methods: {

        sortBrand(event) {

            let attribute = event.target.id;
            console.log(attribute);

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

            this.nutriTabBis.sort(sortFunction);

            if (this.asc === false) {
                this.nutriTabBis.reverse();
            }
            
                this.asc = !this.asc;
            

        },

        filteredBrand() {
            this.nutriTabBis = this.nutriTabBis.filter((cerealBrand) => {
                return cerealBrand.name.toLowerCase().includes(this.searchTerm.toLowerCase());
            });
        }
    }
}



Vue.createApp(app).mount('#appNutriments');