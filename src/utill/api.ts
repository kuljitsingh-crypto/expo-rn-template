export const apiBaseUrl = () => {
  const url = process.env.EXPO_PUBLIC_API_SERVER_BASE_URL;
  if (url) return url;
  return "http://localhost:3500";
};
