import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://b68c71d37d174890b065bc7d48b1ea15@o1307440.ingest.sentry.io/6551894',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

export function render(oldRender: any) {
  oldRender();
}
