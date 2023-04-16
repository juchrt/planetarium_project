<script>
export default{
    name: "BodyCardComponent",
    data(){
        return {
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
    props: { 
        title : {
            type: String,
            default: "Untitled"
        },
        objectType : {
            type: String,
            default: "Planet"
        },
        bodyType : {
            type: String,
        },
    },
    mounted() {
        this.whichImage();
    },
    methods: {
        async whichImage(){
            if (this.planetsKnown.includes(this.objectType.toLowerCase())){
                this.planetType = this.objectType;
            }else if (this.typesKnown.includes(this.bodyType.toLowerCase())) {
                this.planetType = this.bodyType;
            }else{
                this.planetType = "otherType";
            }
        }
    }
}
</script>

<template>
    <!--Rectangle card-->
    <router-link :to="{name: 'yourBody', params: {id: title}}">
        <div class="card">
            <!--Image planet-->
            <span :class="[planetType.toLowerCase()]"></span>
            <!--Name planet-->
            <h3 v-if="title != null" class="card-title">{{ title }}</h3>
        </div>
    </router-link>
</template>