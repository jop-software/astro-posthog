import { describe, it, expect, vi } from 'vitest';
import createPlugin, { type PluginConfig } from '../src/main';
import type { AstroConfigSetupContext } from './astro-mocks';

describe('createPlugin', () => {
  it('returns an AstroIntegration with the correct name', () => {
    const plugin = createPlugin({ posthogKey: 'test-key' });
    expect(plugin.name).toBe('astro-posthog');
    expect(plugin.hooks).toBeTypeOf('object');
    expect(plugin.hooks['astro:config:setup']).toBeTypeOf('function');
  });

  it('calls injectScript with correct arguments', async () => {
    const config: PluginConfig = { posthogKey: 'abc123', api_host: 'https://eu.posthog.com' };
    const plugin = createPlugin(config);
    const injectScript = vi.fn();
    const ctx: Partial<AstroConfigSetupContext> = { injectScript };
    // @ts-expect-error: we only provide injectScript for the test
    await plugin.hooks['astro:config:setup'](ctx);
    expect(injectScript).toHaveBeenCalledTimes(1);
    const [placement, script] = injectScript.mock.calls[0];
    expect(placement).toBe('page');
    expect(script).toContain(`posthog.init('abc123'`);
    expect(script).toContain('api_host');
    expect(script).toContain('https://eu.posthog.com');
  });
});
