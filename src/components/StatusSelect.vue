<template>
  <div>
    <v-select v-model="currentStatus"
      :hide-details="true"
      solo
      :items="statuses"
      class="small"
    >
      <template slot="item" slot-scope="data" class="ma-0 pa-0">
        <div class="ma-0 pa-0">{{ data.item }}</div>
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
  name: 'status-select',
  data() {
    return {
      currentStatus: 'confirmed',
      statuses: ['confirmed', 'recovered', 'deaths'],
    };
  },
  watch: {
    currentStatus: {
      handler(status) {
        this.$emit('update-status', status)
      },
      immediate: true,
    },
  },
};
</script>
