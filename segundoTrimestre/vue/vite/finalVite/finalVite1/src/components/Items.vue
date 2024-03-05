<template>
    <div class="mainDiv">
        <div v-for="(formData, index) in formDataList" :key="index" class="card">
            <a :href="formData.formLink">
                <img :src='formData.formLink' class="card-img-top"></img>
            </a>
            <h3 class="card-title">{{ formData.formName }}</h3>
            <p class="card-text">{{ formData.formDesc }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['formDataList'],
};
</script>

<style>
.mainDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card {
    width: 30%;
    margin-bottom: 5%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 10rem;
    }
}
</style>