import 'dotenv/config'

export default {
  expo: {
    name: 'MyApp',
    slug: 'my-app',
    extra: {
      API_URL: process.env.EXPO_PUBLIC_API_URL,
    },
  },
}
