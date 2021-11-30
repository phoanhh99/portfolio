import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
import DiscordProvider from 'next-auth/providers/discord'
export default NextAuth({
  secret: 'motionblur',
  session: {
    maxAge: 60 * 60 * 12, //12hours
    updateAge: 60 * 60 * 10,
  },
  events: {
    async signIn(message) {
      console.log(`Welcome ${message.user.name}`)
    },
    async error(message) {
      /* on signout */
      console.log(message)
    },
  },
  callbacks: {
    async redirect({url, baseUrl}) {
      console.log(url)
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
  ],
})
