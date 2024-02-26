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
    components: { ShowData , FormData}
}
</script>

<template>
  <ShowData :name="name" :birthYear="birthYear"></ShowData>
  <hr>
  <FormData></FormData>
  
  <img src="https://api.generated.photos/api/v1/faces?per_page=1" alt="">
</template>

<style></style>
