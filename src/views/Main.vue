<template>
  <div class="home">
    <country-select @update-country="updateCountry($event)"/>
    <status-select @update-status="updateStatus($event)"/>
  </div>
</template>

<script>
import CountrySelect from '@/components/CountrySelect.vue';
import StatusSelect from '@/components/StatusSelect.vue';

export default {
  name: 'Main',
  data() {
    return {
      country: '',
      status: ''
    };
  },
  components: {
    CountrySelect,
    StatusSelect,
  },
  methods: {
    updateCountry(country) {
      this.country = country;
      this.fetchStatistic()
    },
    updateStatus(status) {
      this.status = status;
      this.fetchStatistic()
    },
    fetchStatistic() {
      if (this.country && this.status) {
        this.$store.dispatch('fetchStatisticFromDayOne', {
          country: this.country,
          status: this.status
        });
      }
    },
  },
}
</script>
