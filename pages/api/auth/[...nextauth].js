import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
// import TwitterProvider from 'next-auth/providers/twitter'
export default NextAuth({
  secret: 'motionblur',
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async redirect({url, baseUrl}) {
      console.log(`URL: ${url} \n\rbaseURL:${baseUrl}`)
      return baseUrl
    },
  },
  events: {
    async signIn(message) {
      console.log(`Welcome ${message.user.name}`)
    },
  },
  providers: [
    FacebookProvider({
      clientId: process.env.FB_APP_ID,
      clientSecret: process.env.FB_APP_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRETS,
    }),
  ],
})
