import { describe, it, expect } from 'vitest';

// Adjust the import path if your main export is elsewhere
import * as pkg from '../src/main';

describe('astro-posthog package', () => {
  it('should export an object', () => {
    expect(pkg).toBeTypeOf('object');
  });

  // Add more specific tests for your integration here
});
