import { Participant } from "./Participant.js";

const appCourse = {
    data() {
        return {
            results: [],
        }
    },
    async mounted() {
        let response = await fetch('./resultats.json');
        this.results = await response.json();

        for (let i = 0; i < this.results.length; i++) {
            this.results[i] = new Participant(this.results[i]);
        }

        this.results.sort(function(a, b){return a.time - b.time});

        console.log(this.results);
    }
    
}

Vue.createApp(appCourse).mount('#app');