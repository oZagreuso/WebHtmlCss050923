import { CerealBrand } from "./CerealBrand.js";

const app =
{
    data() {
        return {
            nutriTab: [],
            nutriTabBis: [],
            asc: true,
            inputSearch: '',
            inputNS: [],
            nutriCheck: []

        }
    },
    async mounted() {
        let response = await fetch('./cereals.json');
        this.nutriTab = await response.json();
        this.nutriTab = this.nutriTab.data; // le fichier jason est dans un fichier data d'où le .data
        // this.nutriTabBis = this.nutriTab;
        // console.log('1', this.nutriTab);

        for (let i = 0; i < this.nutriTab.length; i++) {
            this.nutriTab[i] = new CerealBrand(this.nutriTab[i]);
            // console.log(this.nutriTab[i]);
        }

        this.nutriTabBis = [...this.nutriTab]; //spread opérateur : copie chaque élément dans un nouveau tableau
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

        filterBrand() {
            this.nutriTabBis = this.nutriTab.filter(cerealBrand => cerealBrand.name.toLowerCase().includes((this.inputSearch.toLowerCase()).trim()));
        },

        filterByNS() {     
            if (this.inputNS.length > 0) {
                this.nutriTabBis = this.nutriTab.filter(cerealBrand => this.inputNS.includes(cerealBrand.ns));
            }
            else {
                this.nutriTabBis = this.nutriTab;
            }
        },

        filterByCat() {
            if (this.inputNS.length > 0) {
                this.nutriTabBis = this.nutriTab.filter(cerealBrand => cerealBrand.name.includes(this.inputCat));
            }

        },

        deleteBrand(event) {

            let brandId = event.target.id;
            this.nutriTabBis.splice(brandId, 1);
        }

    
            /*const idCereal = event.target.dataset.id;
            this.cereals = this.cereals.filter(cereal => cereal.id != idCereal);
        }*/
    
        




    }
}



Vue.createApp(app).mount('#appNutriments');