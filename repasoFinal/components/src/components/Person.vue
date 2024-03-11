<template>
    <div id="person">
        <h4>Name: {{ name }}</h4>
        <div class="details" :class="{ hidden: areDetailsHidden }">
            <p>Phone: {{ phone }}</p>
            <p>Email: {{ email }}</p>
        </div>
        <button type="button" @click="toggleDetails">Details</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: "Julio",
            phone: "654655678",
            email: "A22JulitoBonito@clase.net",
            areDetailsHidden: false
        }
    },
    methods: {
        toggleDetails() {
            this.areDetailsHidden = !this.areDetailsHidden
        }
    },
}
</script>
<style scoped>
.hidden {
    display: none;
}

#person {
    border: 1px solid gray;
    border-radius: 3px;
    width: fit-content;
}
</style>