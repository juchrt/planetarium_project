<script>
export default{
    name: "BodyCardComponent",
    props: { 
        title : {
            type: String,
            default: "Untitled"
        },
        objectType : {
            type: String,
            default: "Planet"
        },
        body : {
            type: Object
        },
    },
}
</script>

<template>
    <!--Rectangle card-->
    <router-link :to="{name: 'yourBody', params: {id: title}}">
        <div class="card">
            <!--Image planet-->
            <span :class="[objectType.toLowerCase()]"></span>
            <!--Name planet-->
            <h3 v-if="title != null" class="card-title">{{ title }}</h3>
        </div>
    </router-link>
</template>