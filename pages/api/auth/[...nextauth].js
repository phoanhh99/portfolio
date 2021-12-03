import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from 'next-auth/providers/discord'
import GoogleProvider from 'next-auth/providers/google'
export default NextAuth({
  secret: 'motionblur',
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 12, //12hours
    updateAge: 60 * 60 * 10,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'motionblursickness',
    maxAge: 60 * 60 * 12,
  },
  events: {
    async signIn(props) {
      console.log(`Welcome ${props.profile.name}`)
    },
    async error(message) {
      console.log(message)
    },
  },
  pages: {
    signIn: '/login',
  },
  callbacks: {
    // eslint-disable-next-line no-unused-vars
    async redirect({url, baseUrl}) {
      if (url.startsWith(baseUrl)) return url
      return baseUrl
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
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code',
        },
      },
    }),
  ],
})
