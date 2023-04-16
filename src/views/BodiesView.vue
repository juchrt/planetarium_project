<script>
import axios from "axios";
import BodyCardComponent from "@/components/BodyCardComponent.vue";

export default{
    components: { BodyCardComponent },
    name: "BodiesView",
    data(){
        return {
        bodies: [
                    {
                    "id": "Soleil",
                    "englishName": "Sun",
                    "isPlanet": false,
                    "bodyType": "Star"
                    },
                    {
                    "id": "Terre",
                    "englishName": "Earth",
                    "isPlanet": true,
                    "bodyType": "Planet"
                    },
                    {
                    "id": "Mars",
                    "englishName": "Mars",
                    "isPlanet": true,
                    "bodyType": "Planet"
                    },
                    {
                    "id": "Vénus",
                    "englishName": "Sun",
                    "isPlanet": false,
                    "bodyType": "Star"
                    },
                    {
                    "id": "Jupiter",
                    "englishName": "Earth",
                    "isPlanet": true,
                    "bodyType": "Planet"
                    },
                    {
                    "id": "Lune",
                    "englishName": "Mars",
                    "isPlanet": true,
                    "bodyType": "Planet"
                    },
                ]
        }
    },
    mounted() {
        //this.getBodies();
    },
    methods:{
        async getBodies(){
        console.log('ok')
        const headers = { "Content-Type": "application/json" };
        axios
        //.get('https://api.le-systeme-solaire.net/rest.php/bodies', {headers})
        .then(
            (response) => {
            this.bodies = response.data.bodies;
            }
        )
        console.log(this.bodies);
        }
    },   
}
</script>


<template>
    <main class="cards-container">
        <div v-for="body in bodies" :key="body.id" >
            <BodyCardComponent :title="body.id" :objectType="body.englishName" :bodyType="body.bodyType"></BodyCardComponent>
        </div>
    </main>
</template>
