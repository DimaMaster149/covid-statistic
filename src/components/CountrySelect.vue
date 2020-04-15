<template>
  <div class="country-select">
    <v-select v-model="currentCountry"
      :hide-details="true"
      solo
      :items="countries"
      item-text="Country"
      item-value="Slug"
      class="small"
    >
      <template slot="item" slot-scope="data" class="ma-0 pa-0">
        <div class="ma-0 pa-0">{{ data.item.Country }}</div>
      </template>
      <div slot="append" class="v-select-up-down d-flex flex-column">
        <v-icon size="8">fas fa-caret-up</v-icon>
        <v-icon size="8">fas fa-caret-down</v-icon>
      </div>
    </v-select>
  </div>
</template>

<script>
export default {
  name: 'country-select',
  data() {
    return {
      currentCountry: 'ukraine',
    };
  },
  computed: {
    countries() {
      return this.$store.state.countries;
    },
  },
  watch: {
    currentCountry: {
      handler(country) {
        this.$emit('update-country', country)
      },
      immediate: true,
    },
  },
  created() {
    this.$store.dispatch('fetchCountries');
  },
};
</script>
<style lang="scss">
.country-select {
  width: 250px;
  height: auto;
}
</style>
