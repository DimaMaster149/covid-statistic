export const ROUTES = {
  COUNTRIES: () => `/countries`,
  FROM_DAY_ONE: ({ country, status }) => `dayone/${country}/south-africa/status/${status}`,
  FROM_DAY_ONE_LIVE: ({ country, status }) => `dayone/${country}/south-africa/status/${status}/live`,
};
