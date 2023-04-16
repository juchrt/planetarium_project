<script>
import axios from "axios";
export default{
    name: "BodyComponent",
    data(){
        return {
            body: {
                "id": "Soleil",
                "englishName": "Sun",
                "isPlanet": false,
                "bodyType": "Star"
            },
            planetType : "",
            planetsKnown: [
                "sun",
                "mercury",
                "earth",
                "jupiter",
                "uranus",
                "venus",
                "mars",
                "saturn",
                "neptune"
            ],
            typesKnown: [
                "asteroid",
                "moon",
                "dwarf planet"
            ]
        }
    },
    props:{
        id:{
            type: String
        }
    },
    mounted() {
        this.getBody();
        this.whichImage();
    },
    methods:{
        async getBody(){
            console.log('ok')
            const headers = { "Content-Type": "application/json" };
            const url = "https://api.le-systeme-solaire.net/rest.php/bodies/" + this.id;
            axios
            .get(url, {headers})
            .then(
                (response) => {
                    this.body = response.data;
                }
            )
            console.log(this.body);
        },
        async whichImage(){
            if (this.planetsKnown.includes(this.body.englishName.toLowerCase())){
                this.planetType = this.body.englishName.toLowerCase();
            }else if (this.typesKnown.includes(this.body.bodyType.toLowerCase())) {
                this.planetType = this.body.bodyType;
            }else{
                this.planetType = "otherType";
            }
        }
    },
}
</script>

<template>
    <main class="bodyComponent">
        <!--Span planète-->
        <span :class="[body.englishName.toLowerCase()]"></span>

        <!--détails-->
        <div>
            <!--Nom Anglais ("Nom français")-->
            <h1>{{ body.englishName }} ("{{ body.id }}")</h1>

            <!--Description-->
            <p>
                <b>{{ body.englishName }}</b> 
                is a 
                <b>{{ body.bodyType.toLowerCase() }}</b> 
                body type.
            </p>

            <!--In orbit around another planet-->
            <h2>In orbit around another planet</h2>
            <ul>
                <li v-if="body.aroundPlanet != null">
                    {{ body.aroundPlanet.planet }}
                </li>
                <p v-else>None</p>
            </ul>

            <!--Moons-->
            <h2>Moons</h2>
            <ul v-if="body.moons != null" v-for="moon in body.moons" :key="moon.moon">
                <li v-if="moon != null">
                    {{ moon.moon }}
                </li>
            </ul>
            <ul v-else>None</ul>

            <!--Other objects that might interest you-->
            <h2>Other objects that might interest you</h2>

        </div>  
    </main>
</template>


<style>
  .bloc{
    display: block;
  }
</style>