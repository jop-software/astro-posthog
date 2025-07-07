import { type AstroIntegration } from "astro";
import { type PostHogConfig } from "posthog-js";

type PluginConfig = Partial<PostHogConfig> & {
	posthogKey: string;
};

const createPlugin = (config: PluginConfig): AstroIntegration => {
	return {
		name: "astro-posthog",
		hooks: {
			"astro:config:setup": async ({ injectScript }) => {
				injectScript(
					"page",
					`import posthog from 'posthog-js';posthog.init('${
						config.posthogKey
					}', ${JSON.stringify(config)});`
				);
			},
		},
	};
};

export type { PluginConfig };
export default createPlugin;
