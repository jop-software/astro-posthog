// Minimal mock types for Astro's integration hook context
export type InjectScript = (placement: string, script: string) => void;

export interface AstroConfigSetupContext {
  injectScript: InjectScript;
  // The real context has more, but we only need injectScript for this test
}
