import http from '@/api';
import { ROUTES } from '@/api/routes';

export default {
  getCountries() {
    console.log('hi')
    return http.get(ROUTES.COUNTRIES);
  },
  getStatisticFromDayOne({ country, status }) {
    return http.get(ROUTES.COUNTRIES({ country, status }));
  },
};