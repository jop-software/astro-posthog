// @ts-check
import { defineConfig } from 'astro/config';

import posthog from "astro-posthog";

// https://astro.build/config
export default defineConfig({
	integrations: [
		posthog({
			posthogKey: 'phc_your-posthog-key',
			api_host: 'https://eu.i.posthog.com',
			defaults: '2025-05-24',
			person_profiles: 'identified_only',
		}),
	]
});
