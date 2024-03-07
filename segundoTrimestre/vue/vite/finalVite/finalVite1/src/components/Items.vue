<template>
    <div class="mainDiv">
        <div v-for="(formData, index) in formDataList" :key="index" class="card" :class="{ hidden: formData.isHidden }">
            <a :href="formData.formLink" target=”_blank”>
                <img :src='formData.formLink' class="card-img-top"></img>
            </a>
            <h3 class="card-title">{{ formData.formName }}</h3>
            <p class="card-text">{{ formData.formDesc }}</p>
            <button @click="hide(index)">Delete</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['formDataList'],
    data() {
        return {}
    },
    methods: {
        hide(index) {
            this.formDataList[index].isHidden = true;
        }
    },
}
</script>

<style>
.hidden {
    display: none !important;
}

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
}

.card img {
    max-width: 10rem;
}
</style>
