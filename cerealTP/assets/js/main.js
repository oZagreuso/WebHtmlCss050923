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
        console.log(this.nutriTab);
    }
}

Vue.createApp(app).mount('#appNutriments');