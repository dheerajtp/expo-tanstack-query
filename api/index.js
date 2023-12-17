import sleep from 'sleep-promise';
const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "";

export const getPosts = async () => {
  try {
    await sleep(2000);
    const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
    let result = await response.json();
    return {
      status: true,
      result,
    };
  } catch (error) {
    console.log(error);
    return {
      status: false,
    };
  }
};
