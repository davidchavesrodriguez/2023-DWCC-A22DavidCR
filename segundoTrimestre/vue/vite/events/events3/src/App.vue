<script>
import ShowData from "./components/ShowData.vue";
import FormData from "./components/FormData.vue";

export default {
    data() {
        return {
            name: "Darth Maul",
            birthYear: -54
        };
    },
    methods: {
        handleUpdate({ newName, newBirthYear }) {
            this.name = newName;
            this.birthYear = newBirthYear;
        }
    },
    components: {
        ShowData,
        FormData
    }
}
</script>

<template>
  <ShowData :name="name" :birthYear="birthYear"></ShowData>
  <hr>
  <FormData :name="name" :birthYear="birthYear" @update="handleUpdate"></FormData>
</template>

<style></style>
