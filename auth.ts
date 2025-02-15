
// app/auth.ts
import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
})

// import NextAuth from "next-auth";

// import GithubProvider from "next-auth/providers/github";

// const options = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.AUTH_GTIHUB_ID || "",
//       clientSecret: process.env.AUTH_GITHUB_SECRET || "",
//     }),
//   ],
// };

// export const { handlers, signIn, signOut, auth } = NextAuth(options);

