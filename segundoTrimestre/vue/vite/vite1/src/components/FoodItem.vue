<template>
    <div>
        <h2>{{ name }}</h2>
        <p>{{ message }}</p>
    </div>
    <ComponentA />
</template>
<script>
import ComponentA from "./ComponentA.vue"
export default {
    data() {
        return {
            name: 'Pineapples',
            message: 'I like pineapples',
        };
    },
    components: {
        ComponentA
    }
};
</script>
<style>
#app>div {
    border: dashed white 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: goldenrod;
}
</style>