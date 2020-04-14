import ApiService from '@/services/ApiService';

export const fetchCountries = () => {
  return ApiService.getCountries()
    .then((res) => console.log(res, 'countries'))
    .catch(err => console.log(err));
};

export const fetchStatisticFromDayOne = ({ country, status }) => {
  return ApiService.getStatisticFromDayOne({ country, status })
    .then(res => console.log(res, 'statistic'))
    .catch(err => console.log(err));
};