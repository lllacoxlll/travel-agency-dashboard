import { reactRouter } from '@react-router/dev/vite'
import { sentryReactRouter, type SentryReactRouterBuildOptions } from '@sentry/react-router'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const sentryConfig: SentryReactRouterBuildOptions = {
  org: 'amanda-cox',
  project: 'javascript-react',
  // An auth token is required for uploading source maps;
  // store it in an environment variable to keep it secure.
  authToken: 'sntrys_eyJpYXQiOjE3NTY3NTY1NzAuMDMxNDE2LCJ1cmwiOiJodHRwczovL3NlbnRyeS5pbyIsInJlZ2lvbl91cmwiOiJodHRwczovL3VzLnNlbnRyeS5pbyIsIm9yZyI6ImFtYW5kYS1jb3gifQ == _3C8vrMVjNZvvWVM69hvWM96szIIKEi2m1YwsZR9Z7P0',
  // ...
}

export default defineConfig((config) => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/],
    },
  }
})
