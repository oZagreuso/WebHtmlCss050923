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
        
        sortBrand() {
            if(this.asc === true) 
            {
            this.nutriTab.sort(((a, b) => a.id - b.id).reverse());
            this.asc = false;
            }
            else {
                this.nutriTab.sort(((a, b) => a.id - b.id));
                this.asc = true;
            }
        }

   
  
        /*
        sortBrandId() {
            this.nutriTab.sort((a, b) => a.id - b.id).reverse();
        },

        sortBrandName() {
            this.nutriTab.sort((a, b) => a.id - b.id).reverse();
        },

        sortBrandCal() {
            this.nutriTab.sort((a, b) => a.calories - b.calories).reverse();
        },

        sortBrandProt() {
            this.nutriTab.sort((a, b) => a.protein - b.protein).reverse();
        },

        sortBrandSodium() {
            this.nutriTab.sort((a, b) => a.sodium - b.sodium).reverse();
        },

        sortBrandFiber() {
            this.nutriTab.sort((a, b) => a.fiber - b.fiber).reverse();
        },

        sortBrandCarb() {
            this.nutriTab.sort((a, b) => a.carbo - b.carbo).reverse();
        },

        sortBrandSugars() {
            this.nutriTab.sort((a, b) => a.sugars - b.sugars).reverse();
        },

        sortBrandPotass() {
            this.nutriTab.sort((a, b) => a.potass - b.potass).reverse();
        },

        sortBrandVit() {
            this.nutriTab.sort((a, b) => a.vitamins - b.vitamins).reverse();
        },

        sortBrandRating() {
            this.nutriTab.sort((a, b) => a.rating - b.rating).reverse();
        }*/

    }
}

Vue.createApp(app).mount('#appNutriments');