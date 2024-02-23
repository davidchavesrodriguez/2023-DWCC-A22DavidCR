<script>
export default {
  data() {
    return {
      // We don't need this now
      // name: "Miragaya",
      // telephone: "031456777",
      // email: "amoAosLorchos@gaelic.gal",
      areDetailsHidden: true,
      isFavorite: false,
      buttonText: "Show details",
      favoriteButton: "Make favorite"
    };
  },
  props: {
    propName: {
      type: String,
      default: "No name"
    },
    propTelephone: {
      type: Number,
      required: true
    },
    propEmail: {
      type: String,
      required: true
    }
  },
  methods: {
    toggleDetails() {
      this.areDetailsHidden = !this.areDetailsHidden;
      this.buttonText = this.areDetailsHidden ? "Show details" : "Hide details";
    },
    toggleFavorite(){
      this.isFavorite= !this.isFavorite;
      this.favoriteButton= this.isFavorite ? "Fav ⭐" : "Make favorite"
    }
  },
};
</script>

<template>
  <div>
    <h3>{{ propName }}</h3>
    <button type="button" @click="toggleFavorite" :class="{favorite: isFavorite}">{{favoriteButton}}</button>
    <button type="button" @click="toggleDetails">{{ buttonText }}</button>
    <p :class="{ hidden: areDetailsHidden }">
      Phone number:
      <a href="tel:{{propTelephone}}">{{ propTelephone }}</a>
    </p>
    <p :class="{ hidden: areDetailsHidden }">
      Email:
      <a href="mailto:{{ propEmail }}">{{ propEmail }}</a>
    </p>
  </div>
  <hr>
</template>

<style>
.hidden {
  display: none;
}
.favorite {
  background-color: gold;
  color: white;
  font-weight: bolder;
}
</style>
