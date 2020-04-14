import axios from 'axios';

export const fetchCountries = async ({ commit }) => {
  const response = await axios.get('https://api.covid19api.com/countries'); 
  commit('setCountries', response.data);
};

export const fetchStatisticFromDayOne = async ({ commit }, { country, status }) => {
  const response = await axios.get(`https://api.covid19api.com/dayone/country/${country}/status/${status}`);
  commit('setStatistic', response.data);
};

export const fetchStatisticFromDayOneLive = async ({ commit }, { country, status }) => {
  const response = await axios.get(`https://api.covid19api.com/dayone/country/${country}/status/${status}/live`);
  commit('setStatisticLive', response.data);
};