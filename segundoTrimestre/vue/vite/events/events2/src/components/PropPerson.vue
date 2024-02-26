<template>
  <div>
    <h3>{{ propName }}</h3>
    <button type="button" @click="toggleFavorite" :class="{ favorite: isFavorite }">{{ favoriteButton }}</button>
    <button type="button" @click="toggleDetails">{{ buttonText }}</button>
    <button type="button" @click="deleteContact">Delete</button> <!-- Add delete button -->
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

<script>
export default {
  props: {
    propName: {
      type: String,
      required: true
    },
    propTelephone: {
      type: Number,
      required: true
    },
    propEmail: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      areDetailsHidden: true,
      isFavorite: false,
      buttonText: "Show details",
      favoriteButton: "Make favorite"
    };
  },
  methods: {
    toggleDetails() {
      this.areDetailsHidden = !this.areDetailsHidden;
      this.buttonText = this.areDetailsHidden ? "Show details" : "Hide details";
    },
    toggleFavorite() {
      this.$emit('toggle-favorite');
      this.isFavorite = !this.isFavorite;
      this.favoriteButton = this.isFavorite ? "Fav ⭐" : "Make favorite";
    },
    deleteContact() {
      this.$emit('delete-contact', this.index); // Emit delete event with index
    }
  }
};
</script>

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
