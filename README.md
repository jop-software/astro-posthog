<div align=center>
    <h1>Posthog + Astro Integration</h1>
</div>

> GDRP friendly tracking in your astro app / site 🚀

## Installation

### Installation using the Astro CLI

Using the Astro CLI is the [recommended way](https://docs.astro.build/en/guides/integrations-guide/#automatic-integration-setup) to setup integrations in Astro.

```console
# npm
npx astro add astro-posthog

# pnpm
pnpm dlx astro add astro-posthog
```

### Manual Installation

When the automatic setup from Astro is not an option for you, feel free to install the package manually.

```console
# npm
npm install astro-posthog

# pnpm
pnpm add astro-posthog
```
## Usage

```js
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

```

<div align=center>&copy 2025-current, <a href="https://jop-software.de">jop-software Inh. Johannes Przymusinski</a></div>
