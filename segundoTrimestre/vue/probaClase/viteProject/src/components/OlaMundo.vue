<script>
export default {
    data() {
        return {
            message: 'Ola mundo',
            addition: "!!!",
            added: false
        };
    },
    methods: {
        toggleCase() {
            this.message = this.added ? this.message.toUpperCase() :
                this.message.toLowerCase();
            this.added = !this.added;
        },
        addCharacter(){
            this.message+= "!";
        },
    }
};
</script>
<template>
    <p>{{ message }}</p>
    <button type="button" @click="toggleCase">MAYUS/minus</button>
    <button type="button" @click="addCharacter">!!!</button>
</template>
<style></style>