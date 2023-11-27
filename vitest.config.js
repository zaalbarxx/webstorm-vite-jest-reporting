import { fileURLToPath, URL } from 'node:url';
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config';
import viteConfig from './vite.config';

export default defineConfig(async (configEnv) =>
    mergeConfig(
        viteConfig,
        defineConfig({
            test: {
                globals: true,
                environment: 'jsdom',
                setupFiles: ['./src/tests/setupTests.js'],
                coverage: {
                    reporter: ['text', 'html'],
                    exclude: ['node_modules/', 'tests/unit/setupTests.js'],
                },
                testTimeout: 30000,
                exclude: [...configDefaults.exclude, 'e2e/*'],
                root: fileURLToPath(new URL('./', import.meta.url)),
            },
        })
    )
);

