<template>
  <div class="home">
    <country-select @update-country="updateCountry($event)"/>
    <day-one-chart
      v-if="statistic && statistic.length > 0"
      :chartData="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import CountrySelect from '@/components/CountrySelect.vue';
import DayOneChart from '@/components/DayOneChart.vue';

export default {
  name: 'Main',
  components: {
    CountrySelect,
    DayOneChart,
  },
  data() {
    return {
      country: '',
      chartOptions: {},
    };
  },
  computed: {
    statistic() {
      return this.$store.state.statistic;
    },
    dateLabels() {
      return this.statistic.map(obj => obj.Date);
    },
    
    chartData() {
      return {
        labels: this.dateLabels,
        datasets: [
          {
            label: 'Confirmed',
            borderColor: '#F7CC51',
            data: this.statisticByStatus('Confirmed')
          },
          {
            label: 'Recovered',
            borderColor: '#60E388',
            data: this.statisticByStatus('Recovered')
          },
          {
            label: 'Deaths',
            borderColor: '#B04D4D',
            data: this.statisticByStatus('Deaths')
          }
        ]
      }
    },
  },
  methods: {
    statisticByStatus(status) {
      return this.statistic.map(obj => obj[status]);
    },
    updateCountry(country) {
      this.country = country;
      this.fetchStatistic()
    },
    fetchStatistic() {
      if (this.country ) {
        this.$store.dispatch('fetchStatisticFromDayOne', {
          country: this.country,
        });
      }
    },
  },
}
</script>
