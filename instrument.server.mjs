import * as Sentry from '@sentry/react-router'
import { nodeProfilingIntegration } from '@sentry/profiling-node'

Sentry.init({
  dsn: 'https://5393a5b5b8fbf8c23aedadeeca06f350@o4509946045136896.ingest.us.sentry.io/4509946047430656',

  // Adds request headers and IP for users, for more info visit:
  // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
  sendDefaultPii: true,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  integrations: [nodeProfilingIntegration()],
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  profilesSampleRate: 1.0, // profile every transaction
})
