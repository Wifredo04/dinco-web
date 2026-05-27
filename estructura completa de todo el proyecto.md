
--- ARCHIVO: C:\Users\Dell\dinco-web\.gitattributes ---

# Auto detect text files and perform LF normalization
* text=auto


--- ARCHIVO: C:\Users\Dell\dinco-web\.gitignore ---

# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.*
.yarn/*
!.yarn/patches
!.yarn/plugins
!.yarn/releases
!.yarn/versions

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# env files (can opt-in for committing if needed)
.env*

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts


--- ARCHIVO: C:\Users\Dell\dinco-web\AGENTS.md ---

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes â€” APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


--- ARCHIVO: C:\Users\Dell\dinco-web\CLAUDE.md ---

@AGENTS.md


--- ARCHIVO: C:\Users\Dell\dinco-web\CONTRIBUTING.md ---

# Contribuir al repositorio

Por favor sigue estas reglas al crear commits en este repositorio:

- Escribe los mensajes de commit en espaÃ±ol.
- El tÃ­tulo debe ser una lÃ­nea breve en espaÃ±ol.
- AÃ±ade una descripciÃ³n que explique los cambios realizados y por quÃ© se hicieron.

Ejemplo de mensaje de commit:

Resumen breve en espaÃ±ol (una lÃ­nea)

DescripciÃ³n:

- Cambios: Se modificÃ³ `components/Hero.tsx` para corregir un error de hook.
- Por quÃ©: Evitar warnings de ESLint y mejorar la estabilidad del carousel.

Hemos aÃ±adido hooks Git que insertan una plantilla en espaÃ±ol automÃ¡ticamente
y validan que el mensaje contenga una explicaciÃ³n en espaÃ±ol.


--- ARCHIVO: C:\Users\Dell\dinco-web\eslint.config.mjs ---

import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;


--- ARCHIVO: C:\Users\Dell\dinco-web\next-env.d.ts ---

/// <reference types="next" />
/// <reference types="next/image-types/global" />
import "./.next/dev/types/routes.d.ts";

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.


--- ARCHIVO: C:\Users\Dell\dinco-web\next.config.ts ---

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;

--- ARCHIVO: C:\Users\Dell\dinco-web\package-lock.json ---

{
  "name": "dinco-web",
  "version": "0.1.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "dinco-web",
      "version": "0.1.0",
      "dependencies": {
        "next": "16.2.6",
        "react": "19.2.4",
        "react-dom": "19.2.4"
      },
      "devDependencies": {
        "@tailwindcss/postcss": "^4",
        "@types/node": "^20",
        "@types/react": "^19",
        "@types/react-dom": "^19",
        "eslint": "^9",
        "eslint-config-next": "16.2.6",
        "tailwindcss": "^4",
        "typescript": "^5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.0.tgz",
      "integrity": "sha512-9NhCeYjq9+3uxgdtp20LSiJXJvN0FeCtNGpJxuMFZ1Kv3cWUNb6DOhJwUvcVCzKGR66cw4njwM6hrJLqgOwbcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.28.5",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.3",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.3.tgz",
      "integrity": "sha512-LIVqM46zQWZhj17qA8wb4nW/ixr2y1Nw+r1etiAWgRM6U1IqP+LNhL1yg440jYZR72jCWcWbLWzIosH+uP1fqg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.0.tgz",
      "integrity": "sha512-CGOfOJqWjg2qW/Mb6zNsDm+u5vFQ8DxXfbM09z69p5Z6+mE1ikP2jUXw+j42Pf1XTYED2Rni5f95npYeuwMDQA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.0",
        "@babel/generator": "^7.29.0",
        "@babel/helper-compilation-targets": "^7.28.6",
        "@babel/helper-module-transforms": "^7.28.6",
        "@babel/helpers": "^7.28.6",
        "@babel/parser": "^7.29.0",
        "@babel/template": "^7.28.6",
        "@babel/traverse": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.1",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.1.tgz",
      "integrity": "sha512-qsaF+9Qcm2Qv8SRIMMscAvG4O3lJ0F1GuMo5HR/Bp02LopNgnZBC/EkbevHFeGs4ls/oPz9v+Bsmzbkbe+0dUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.0",
        "@babel/types": "^7.29.0",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.28.6.tgz",
      "integrity": "sha512-JYtls3hqi15fcx5GaSNL7SCTJ2MNmjrkHXg4FSpOA/grxK8KwyZ5bubHsCq8FXCkua6xhuaaBit+3b7+VZRfcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.28.6",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.28.6.tgz",
      "integrity": "sha512-l5XkZK7r7wa9LucGw9LwZyyCUscb4x37JWTPz7swwFE/0FMQAGpiWUZn8u9DzkSBWEcK25jmvubfpw2dnAMdbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.28.6",
        "@babel/types": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.6.tgz",
      "integrity": "sha512-67oXFAYr2cDLDVGLXTEABjdBJZ6drElUSI7WKp70NrpyISso3plG9SAGEF6y7zbha/wOzUByWWTJvEDVNIUGcA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.28.6",
        "@babel/helper-validator-identifier": "^7.28.5",
        "@babel/traverse": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.2",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.2.tgz",
      "integrity": "sha512-HoGuUs4sCZNezVEKdVcwqmZN8GoHirLUcLaYVNBK2J0DadGtdcqgr3BCbvH8+XUo4NGjNl3VOtSjEKNzqfFgKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.28.6",
        "@babel/types": "^7.29.0"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.3",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.3.tgz",
      "integrity": "sha512-b3ctpQwp+PROvU/cttc4OYl4MzfJUWy6FZg+PMXfzmt/+39iHVF0sDfqay8TQM3JA2EUOyKcFZt75jWriQijsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.0"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.28.6",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.28.6.tgz",
      "integrity": "sha512-YA6Ma2KsCdGb+WC6UpBVFJGXL58MDA6oyONbjyF/+5sBgxY/dwkhLogbMT2GXXyU84/IhRw/2D1Os1B/giz+BQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.28.6",
        "@babel/parser": "^7.28.6",
        "@babel/types": "^7.28.6"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.0.tgz",
      "integrity": "sha512-4HPiQr0X7+waHfyXPZpWPfWL/J7dcN1mx9gL6WdQVMbPnF3+ZhSMs8tCxN7oHddJE9fhNE7+lxdnlyemKfJRuA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.0",
        "@babel/generator": "^7.29.0",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.29.0",
        "@babel/template": "^7.28.6",
        "@babel/types": "^7.29.0",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.0",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.0.tgz",
      "integrity": "sha512-LwdZHpScM4Qz8Xw2iKSzS+cfglZzJGvofQICy7W7v4caru4EaAmyUuO6BGrbyQ2mYV11W0U8j5mBhd14dd3B0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.10.0.tgz",
      "integrity": "sha512-yq6OkJ4p82CAfPl0u9mQebQHKPJkY7WrIuk205cTYnYe+k2Z8YBh11FrbRG/H6ihirqcacOgl2BIO8oyMQLeXw==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.2.1",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.10.0",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.10.0.tgz",
      "integrity": "sha512-ewvYlk86xUoGI0zQRNq/mC+16R1QeDlKQy21Ki3oSYXNgLb45GV1P6A0M+/s6nyCuNDqe5VpaY84BzXGwVbwFA==",
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.2.1.tgz",
      "integrity": "sha512-uTII7OYF+/Mes/MrcIOYp5yOtSMLBWSIoLPpcgwipoiKbli6k322tcoFsxoIIxPDqW01SQGAgko4EzZi2BNv2w==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.1.tgz",
      "integrity": "sha512-phrYmNiYppR7znFEdqgfWHXR6NCkZEK7hwWDHZUjit/2/U0r6XvkDl0SYnoM51Hq7FhCGdLDT6zxCCOY1hexsQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.2.tgz",
      "integrity": "sha512-nJl2KGTlrf9GjLimgIru+V/mzgSK0ABCDQRvxw5BjURL7WfH5uoWmizbH7QB6MmnMBd8cIC9uceWnezL1VZWWw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.5"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.5.tgz",
      "integrity": "sha512-4IlJx0X0qftVsN5E+/vGujTRIFtwuLbNsVUe7TO6zYPDR1O6nFwvwhIKEKSrl6dZchmYBITazxKoUYOjdtjlRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.14.0",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.5",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.4",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.4.tgz",
      "integrity": "sha512-nE7DEIchvtiFTwBw4Lfbu59PG+kCofhjsKaCWzxTpt4lfRjRMqG6uMBzKXuEcyXhOHoUp9riAm7/aWYGhXZ9cw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.2",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.2.tgz",
      "integrity": "sha512-UhXNm+CFMWcbChXywFwkmhqjs3PRCmcSa/hfBgLIb7oQ5HNb1wS0icWsGtSAUNgefHeI+eBrA8I1fxmbHsGdvA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/types": "^0.15.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.8",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.8.tgz",
      "integrity": "sha512-gE1eQNZ3R++kTzFUpdGlpmy8kDZD/MLyHqDwqjkVQI0JMdI1D51sy1H958PNXYkM2rAac7e5/CnIKZrHtPh3BQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.2",
        "@humanfs/types": "^0.15.0",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/types": {
      "version": "0.15.0",
      "resolved": "https://registry.npmjs.org/@humanfs/types/-/types-0.15.0.tgz",
      "integrity": "sha512-ZZ1w0aoQkwuUuC7Yf+7sdeaNfqQiiLcSRbfI08oAxqLtpXQr9AIVX7Ay7HLDuiLYAaFPu8oBYNq/QIi9URHJ3Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@img/colour": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@img/colour/-/colour-1.1.0.tgz",
      "integrity": "sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@img/sharp-darwin-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-arm64/-/sharp-darwin-arm64-0.34.5.tgz",
      "integrity": "sha512-imtQ3WMJXbMY4fxb/Ndp6HBTNVtWCUI0WdobyheGf5+ad6xX8VIDO8u2xE4qc/fr08CKG/7dDseFtn6M6g/r3w==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-darwin-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-darwin-x64/-/sharp-darwin-x64-0.34.5.tgz",
      "integrity": "sha512-YNEFAF/4KQ/PeW0N+r+aVVsoIY0/qxxikF2SWdp+NRkmMB7y9LBZAVqQ4yhGCm/H3H270OSykqmQMKLBhBJDEw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-darwin-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-arm64/-/sharp-libvips-darwin-arm64-1.2.4.tgz",
      "integrity": "sha512-zqjjo7RatFfFoP0MkQ51jfuFZBnVE2pRiaydKJ1G/rHZvnsrHAOcQALIi9sA5co5xenQdTugCvtb1cuf78Vf4g==",
      "cpu": [
        "arm64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-darwin-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-darwin-x64/-/sharp-libvips-darwin-x64-1.2.4.tgz",
      "integrity": "sha512-1IOd5xfVhlGwX+zXv2N93k0yMONvUlANylbJw1eTah8K/Jtpi15KC+WSiaX/nBmbm2HxRM1gZ0nSdjSsrZbGKg==",
      "cpu": [
        "x64"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "darwin"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm/-/sharp-libvips-linux-arm-1.2.4.tgz",
      "integrity": "sha512-bFI7xcKFELdiNCVov8e44Ia4u2byA+l3XtsAj+Q8tfCwO6BQ8iDojYdvoPMqsKDkuoOo+X6HZA0s0q11ANMQ8A==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-arm64/-/sharp-libvips-linux-arm64-1.2.4.tgz",
      "integrity": "sha512-excjX8DfsIcJ10x1Kzr4RcWe1edC9PquDRRPx3YVCvQv+U5p7Yin2s32ftzikXojb1PIFc/9Mt28/y+iRklkrw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-ppc64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-ppc64/-/sharp-libvips-linux-ppc64-1.2.4.tgz",
      "integrity": "sha512-FMuvGijLDYG6lW+b/UvyilUWu5Ayu+3r2d1S8notiGCIyYU/76eig1UfMmkZ7vwgOrzKzlQbFSuQfgm7GYUPpA==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-riscv64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-riscv64/-/sharp-libvips-linux-riscv64-1.2.4.tgz",
      "integrity": "sha512-oVDbcR4zUC0ce82teubSm+x6ETixtKZBh/qbREIOcI3cULzDyb18Sr/Wcyx7NRQeQzOiHTNbZFF1UwPS2scyGA==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-s390x": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-s390x/-/sharp-libvips-linux-s390x-1.2.4.tgz",
      "integrity": "sha512-qmp9VrzgPgMoGZyPvrQHqk02uyjA0/QrTO26Tqk6l4ZV0MPWIW6LTkqOIov+J1yEu7MbFQaDpwdwJKhbJvuRxQ==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linux-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linux-x64/-/sharp-libvips-linux-x64-1.2.4.tgz",
      "integrity": "sha512-tJxiiLsmHc9Ax1bz3oaOYBURTXGIRDODBqhveVHonrHJ9/+k89qbLl0bcJns+e4t4rvaNBxaEZsFtSfAdquPrw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-arm64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-arm64/-/sharp-libvips-linuxmusl-arm64-1.2.4.tgz",
      "integrity": "sha512-FVQHuwx1IIuNow9QAbYUzJ+En8KcVm9Lk5+uGUQJHaZmMECZmOlix9HnH7n1TRkXMS0pGxIJokIVB9SuqZGGXw==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-libvips-linuxmusl-x64": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/@img/sharp-libvips-linuxmusl-x64/-/sharp-libvips-linuxmusl-x64-1.2.4.tgz",
      "integrity": "sha512-+LpyBk7L44ZIXwz/VYfglaX/okxezESc6UxDSoyo2Ks6Jxc4Y7sGjpgU9s4PMgqgjj1gZCylTieNamqA1MF7Dg==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "linux"
      ],
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-linux-arm": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm/-/sharp-linux-arm-0.34.5.tgz",
      "integrity": "sha512-9dLqsvwtg1uuXBGZKsxem9595+ujv0sJ6Vi8wcTANSFpwV/GONat5eCkzQo/1O6zRIkh0m/8+5BjrRr7jDUSZw==",
      "cpu": [
        "arm"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-arm64/-/sharp-linux-arm64-0.34.5.tgz",
      "integrity": "sha512-bKQzaJRY/bkPOXyKx5EVup7qkaojECG6NLYswgktOZjaXecSAeCWiZwwiFf3/Y+O1HrauiE3FVsGxFg8c24rZg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-ppc64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-ppc64/-/sharp-linux-ppc64-0.34.5.tgz",
      "integrity": "sha512-7zznwNaqW6YtsfrGGDA6BRkISKAAE1Jo0QdpNYXNMHu2+0dTrPflTLNkpc8l7MUP5M16ZJcUvysVWWrMefZquA==",
      "cpu": [
        "ppc64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-ppc64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-riscv64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-riscv64/-/sharp-linux-riscv64-0.34.5.tgz",
      "integrity": "sha512-51gJuLPTKa7piYPaVs8GmByo7/U7/7TZOq+cnXJIHZKavIRHAP77e3N2HEl3dgiqdD/w0yUfiJnII77PuDDFdw==",
      "cpu": [
        "riscv64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-riscv64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-s390x": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-s390x/-/sharp-linux-s390x-0.34.5.tgz",
      "integrity": "sha512-nQtCk0PdKfho3eC5MrbQoigJ2gd1CgddUMkabUj+rBevs8tZ2cULOx46E7oyX+04WGfABgIwmMC0VqieTiR4jg==",
      "cpu": [
        "s390x"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-s390x": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linux-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linux-x64/-/sharp-linux-x64-0.34.5.tgz",
      "integrity": "sha512-MEzd8HPKxVxVenwAa+JRPwEC7QFjoPWuS5NZnBt6B3pu7EG2Ge0id1oLHZpPJdn3OQK+BQDiw9zStiHBTJQQQQ==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linux-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-arm64/-/sharp-linuxmusl-arm64-0.34.5.tgz",
      "integrity": "sha512-fprJR6GtRsMt6Kyfq44IsChVZeGN97gTD331weR1ex1c1rypDEABN6Tm2xa1wE6lYb5DdEnk03NZPqA7Id21yg==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-linuxmusl-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-linuxmusl-x64/-/sharp-linuxmusl-x64-0.34.5.tgz",
      "integrity": "sha512-Jg8wNT1MUzIvhBFxViqrEhWDGzqymo3sV7z7ZsaWbZNDLXRJZoRGrjulp60YYtV4wfY8VIKcWidjojlLcWrd8Q==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "Apache-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4"
      }
    },
    "node_modules/@img/sharp-wasm32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-wasm32/-/sharp-wasm32-0.34.5.tgz",
      "integrity": "sha512-OdWTEiVkY2PHwqkbBI8frFxQQFekHaSSkUIJkwzclWZe64O1X4UlUjqqqLaPbUpMOQk6FBu/HtlGXNblIs0huw==",
      "cpu": [
        "wasm32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later AND MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/runtime": "^1.7.0"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-arm64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-arm64/-/sharp-win32-arm64-0.34.5.tgz",
      "integrity": "sha512-WQ3AgWCWYSb2yt+IG8mnC6Jdk9Whs7O0gxphblsLvdhSpSTtmu69ZG1Gkb6NuvxsNACwiPV6cNSZNzt0KPsw7g==",
      "cpu": [
        "arm64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-ia32": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-ia32/-/sharp-win32-ia32-0.34.5.tgz",
      "integrity": "sha512-FV9m/7NmeCmSHDD5j4+4pNI8Cp3aW+JvLoXcTUo0IqyjSfAZJ8dIUmijx1qaJsIiU+Hosw6xM5KijAWRJCSgNg==",
      "cpu": [
        "ia32"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@img/sharp-win32-x64": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/@img/sharp-win32-x64/-/sharp-win32-x64-0.34.5.tgz",
      "integrity": "sha512-+29YMsqY2/9eFEiW93eqWnuLcWcufowXewwSNIT6UwZdUUCrM3oFjMWH/Z6/TMmb4hlFenmfAVbpWeup2jryCw==",
      "cpu": [
        "x64"
      ],
      "license": "Apache-2.0 AND LGPL-3.0-or-later",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.4.tgz",
      "integrity": "sha512-3NQNNgA1YSlJb/kMH1ildASP9HW7/7kYnRI2szWJaofaS1hWmbGI4H+d3+22aGzXXN9IJ+n+GiFVcGipJP18ow==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@tybys/wasm-util": "^0.10.1"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/Brooooooklyn"
      },
      "peerDependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1"
      }
    },
    "node_modules/@next/env": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/env/-/env-16.2.6.tgz",
      "integrity": "sha512-gd8HoHN4ufj73WmR3JmVolrpJR47ILK6LouP5xElPglaVxir6e1a7VzvTvDWkOoPXT9rkkTzyCxBu4yeZfZwcw==",
      "license": "MIT"
    },
    "node_modules/@next/eslint-plugin-next": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/eslint-plugin-next/-/eslint-plugin-next-16.2.6.tgz",
      "integrity": "sha512-Z8l6o4JWKUl755x4R+wogD86KPeU+Ckw4K+SYG4kHeOJtRenDeK+OSbGcqZpDtbwn9DsJVdir2UxmwXuinUbUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-glob": "3.3.1"
      }
    },
    "node_modules/@next/swc-darwin-arm64": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-arm64/-/swc-darwin-arm64-16.2.6.tgz",
      "integrity": "sha512-ZJGkkcNfYgrrMkqOdZ7zoLa1TOy0qpcMfk/z4Mh/FKUz40gVO+HNQWqmLxf67Z5WB64DRp0dhEbyHfel+6sJUg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-darwin-x64": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/swc-darwin-x64/-/swc-darwin-x64-16.2.6.tgz",
      "integrity": "sha512-v/YLBHIY132Ced3puBJ7YJKw1lqsCrgcNo2aRJlCEyQrrCeRJlvGlnmxhPxNQI3KE3N1DN5r9TPNPvka3nq5RQ==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-gnu": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-gnu/-/swc-linux-arm64-gnu-16.2.6.tgz",
      "integrity": "sha512-RPOvqlYBbcQjkz9VQQDZ2T2bARIjXZV1KFlt+V2Mr6SW/e4I9fcKsaA0hdyf2FHoTlsV2xnBd5Y912rP/1Ce6w==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-arm64-musl": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-arm64-musl/-/swc-linux-arm64-musl-16.2.6.tgz",
      "integrity": "sha512-URUTu1+dMkxJsPFgm+OeEvq9wf5sujw0EvgYy80TDGHTSLTnIHeqb0Eu8A3sC95IRgjejQL+kC4mw+4yPxiAXA==",
      "cpu": [
        "arm64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-gnu": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-16.2.6.tgz",
      "integrity": "sha512-DOj182mPV8G3UkrayLoREM5YEYI+Dk5wv7Ox9xl1fFibAELEsFD0lDPfHIeILlutMMfdyhlzYPELG3peuKaurw==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-linux-x64-musl": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-musl/-/swc-linux-x64-musl-16.2.6.tgz",
      "integrity": "sha512-HKQ5SP/V/ub73UvF7n/zeJlxk2kLmtL7Wzrg4WfmkjmNos5onJ2tKu7yZOPdL18A6Svfn3max29ym+ry7NkK4g==",
      "cpu": [
        "x64"
      ],
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-arm64-msvc": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-arm64-msvc/-/swc-win32-arm64-msvc-16.2.6.tgz",
      "integrity": "sha512-LZXpTlPyS5v7HhSmnvsLGP3iIYgYOBnc8r8ArlT55sGHV89bR2HlDdBjWQ+PY6SJMmk8TuVGFuxalnP3k/0Dwg==",
      "cpu": [
        "arm64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@next/swc-win32-x64-msvc": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/@next/swc-win32-x64-msvc/-/swc-win32-x64-msvc-16.2.6.tgz",
      "integrity": "sha512-F0+4i0h9J6C4eE3EAPWsoCk7UW/dbzOjyzxY0qnDUOYFu6FFmdZ6l97/XdV3/Nz3VYyO7UWjyEJUXkGqcoXfMA==",
      "cpu": [
        "x64"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nolyfill/is-core-module": {
      "version": "1.0.39",
      "resolved": "https://registry.npmjs.org/@nolyfill/is-core-module/-/is-core-module-1.0.39.tgz",
      "integrity": "sha512-nn5ozdjYQpUCZlWGuxcJY/KpxkWQs4DcbMCmKojjyrYDEAGy4Ce19NN4v5MduafTwJlbKc99UA8YhSVqq9yPZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.4.0"
      }
    },
    "node_modules/@rtsao/scc": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@rtsao/scc/-/scc-1.1.0.tgz",
      "integrity": "sha512-zt6OdqaDoOnJ1ZYsCYGt9YmWzDXl4vQdKTyJev62gFhRGKdx7mcT54V9KIjg+d2wi9EXsPvAPKe7i7WjfVWB8g==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@swc/helpers": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@swc/helpers/-/helpers-0.5.15.tgz",
      "integrity": "sha512-JQ5TuMi45Owi4/BIMAJBoSQoOJu12oOk/gADqlcUL9JEdHB8vyjUSsxqeNXnmXHjYKMi2WcYtezGEEhqUI/E2g==",
      "license": "Apache-2.0",
      "dependencies": {
        "tslib": "^2.8.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.3.0.tgz",
      "integrity": "sha512-aFb4gUhFOgdh9AXo4IzBEOzBkkAxm9VigwDJnMIYv3lcfXCJVesNfbEaBl4BNgVRyid92AmdviqwBUBRKSeY3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.5",
        "enhanced-resolve": "^5.21.0",
        "jiti": "^2.6.1",
        "lightningcss": "1.32.0",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.3.0"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.3.0.tgz",
      "integrity": "sha512-F7HZGBeN9I0/AuuJS5PwcD8xayx5ri5GhjYUDBEVYUkexyA/giwbDNjRVrxSezE3T250OU2K/wp/ltWx3UOefg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 20"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.3.0",
        "@tailwindcss/oxide-darwin-arm64": "4.3.0",
        "@tailwindcss/oxide-darwin-x64": "4.3.0",
        "@tailwindcss/oxide-freebsd-x64": "4.3.0",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.3.0",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.3.0",
        "@tailwindcss/oxide-linux-arm64-musl": "4.3.0",
        "@tailwindcss/oxide-linux-x64-gnu": "4.3.0",
        "@tailwindcss/oxide-linux-x64-musl": "4.3.0",
        "@tailwindcss/oxide-wasm32-wasi": "4.3.0",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.3.0",
        "@tailwindcss/oxide-win32-x64-msvc": "4.3.0"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.3.0.tgz",
      "integrity": "sha512-TJPiq67tKlLuObP6RkwvVGDoxCMBVtDgKkLfa/uyj7/FyxvQwHS+UOnVrXXgbEsfUaMgiVvC4KbJnRr26ho4Ng==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.3.0.tgz",
      "integrity": "sha512-oMN/WZRb+SO37BmUElEgeEWuU8E/HXRkiODxJxLe1UTHVXLrdVSgfaJV7pSlhRGMSOiXLuxTIjfsF3wYvz8cgQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.3.0.tgz",
      "integrity": "sha512-N6CUmu4a6bKVADfw77p+iw6Yd9Q3OBhe0veaDX+QazfuVYlQsHfDgxBrsjQ/IW+zywL8mTrNd0SdJT/zgtvMdA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.3.0.tgz",
      "integrity": "sha512-zDL5hBkQdH5C6MpqbK3gQAgP80tsMwSI26vjOzjJtNCMUo0lFgOItzHKBIupOZNQxt3ouPH7RPhvNhiTfCe5CQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.3.0.tgz",
      "integrity": "sha512-R06HdNi7A7OEoMsf6d4tjZ71RCWnZQPHj2mnotSFURjNLdBC+cIgXQ7l81CqeoiQftjf6OOblxXMInMgN2VzMA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.3.0.tgz",
      "integrity": "sha512-qTJHELX8jetjhRQHCLilkVLmybpzNQAtaI/gaoVoidn/ufbNDbAo8KlK2J+yPoc8wQxvDxCmh/5lr8nC1+lTbg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.3.0.tgz",
      "integrity": "sha512-Z6sukiQsngnWO+l39X4pPbiWT81IC+PLKF+PHxIlyZbGNb9MODfYlXEVlFvej5BOZInWX01kVyzeLvHsXhfczQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.3.0.tgz",
      "integrity": "sha512-DRNdQRpSGzRGfARVuVkxvM8Q12nh19l4BF/G7zGA1oe+9wcC6saFBHTISrpIcKzhiXtSrlSrluCfvMuledoCTQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.3.0.tgz",
      "integrity": "sha512-Z0IADbDo8bh6I7h2IQMx601AdXBLfFpEdUotft86evd/8ZPflZe9COPO8Q1vw+pfLWIUo9zN/JGZvwuAJqduqg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.3.0.tgz",
      "integrity": "sha512-HNZGOUxEmElksYR7S6sC5jTeNGpobAsy9u7Gu0AskJ8/20FR9GqebUyB+HBcU/ax6BHuiuJi+Oda4B+YX6H1yA==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.10.0",
        "@emnapi/runtime": "^1.10.0",
        "@emnapi/wasi-threads": "^1.2.1",
        "@napi-rs/wasm-runtime": "^1.1.4",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.8.1"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.3.0.tgz",
      "integrity": "sha512-Pe+RPVTi1T+qymuuRpcdvwSVZjnll/f7n8gBxMMh3xLTctMDKqpdfGimbMyioqtLhUYZxdJ9wGNhV7MKHvgZsQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.3.0.tgz",
      "integrity": "sha512-Mvrf2kXW/yeW/OTezZlCGOirXRcUuLIBx/5Y12BaPM7wJoryG6dfS/NJL8aBPqtTEx/Vm4T4vKzFUcKDT+TKUA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 20"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.3.0.tgz",
      "integrity": "sha512-Jm05Tjx+9yCLGv5qw1c+84Psds8MnyrEQYCB+FFk2lgGiUjlRqdxke4mVTuYrj2xnVZqKim2Apr5ySuQRYAw/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.3.0",
        "@tailwindcss/oxide": "4.3.0",
        "postcss": "^8.5.10",
        "tailwindcss": "4.3.0"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.2",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.2.tgz",
      "integrity": "sha512-RoBvJ2X0wuKlWFIjrwffGw1IqZHKQqzIchKaadZZfnNpsAYp2mM0h36JtPCjNDAHGgYez/15uMBpfGwchhiMgg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.9.tgz",
      "integrity": "sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json5": {
      "version": "0.0.29",
      "resolved": "https://registry.npmjs.org/@types/json5/-/json5-0.0.29.tgz",
      "integrity": "sha512-dRLjCWHYg4oaA77cxO64oO+7JwCwnIzkZPdrrC71jQmQtlhM556pwKo5bUzqvZndkVbeFLIIi+9TC40JNF5hNQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "20.19.41",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-20.19.41.tgz",
      "integrity": "sha512-ECymXOukMnOoVkC2bb1Vc/w/836DXncOg5m8Xj1RH7xSHZJWNYY6Zh7EH477vcnD5egKNNfy2RpNOmuChhFPgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "undici-types": "~6.21.0"
      }
    },
    "node_modules/@types/react": {
      "version": "19.2.15",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.15.tgz",
      "integrity": "sha512-eRwcGNHve+E8qtEQSSRl6urh+rFop4v8gm6O8rGv25CodbvFdLjA1vVQ1KkiFE0w0UPOnb8tDiFKL5lp0rtY5Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-8.59.4.tgz",
      "integrity": "sha512-PegsU+XfyJJNjd4+u/k6f9yTyp0lEXXiPopUNobZcIAUJFGICFLN+sP0Rb3JehVmiij1Ph0dFGYqODoRo/2+6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.12.2",
        "@typescript-eslint/scope-manager": "8.59.4",
        "@typescript-eslint/type-utils": "8.59.4",
        "@typescript-eslint/utils": "8.59.4",
        "@typescript-eslint/visitor-keys": "8.59.4",
        "ignore": "^7.0.5",
        "natural-compare": "^1.4.0",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^8.59.4",
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin/node_modules/ignore": {
      "version": "7.0.5",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-7.0.5.tgz",
      "integrity": "sha512-Hs59xBNfUIunMFgWAbGX5cq6893IbWg4KnrjbYwX3tx0ztorVgTDA6B2sxf8ejHJ4wz8BqGUMYlnzNBer5NvGg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-8.59.4.tgz",
      "integrity": "sha512-zORHqO/tuhxY1zWuTvMUqddRxpiFJ72xVfcNoWpqdLjs6lfPbuQBJuW4pk+49/uBMy7Ssr4bzgjiKmmDB1UbZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/scope-manager": "8.59.4",
        "@typescript-eslint/types": "8.59.4",
        "@typescript-eslint/typescript-estree": "8.59.4",
        "@typescript-eslint/visitor-keys": "8.59.4",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/project-service": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/project-service/-/project-service-8.59.4.tgz",
      "integrity": "sha512-Ly00Vu4oAacfDeHp2Zg85ioNG6l8HG+tN1D7J+xTHSxu9y0awYKJ2zH1rFBn8ZSfuGK+7FxK3Cgl3uAz0aZZLg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/tsconfig-utils": "^8.59.4",
        "@typescript-eslint/types": "^8.59.4",
        "debug": "^4.4.3"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-8.59.4.tgz",
      "integrity": "sha512-mUeR/3H1WrTAddJrwut8OoPjfauaztMQmRwV5fQTUyNVJCLiUXXe4lGEyYIL2oFDpP7UtgbGJXCt72wT0z2S3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.59.4",
        "@typescript-eslint/visitor-keys": "8.59.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/tsconfig-utils": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/tsconfig-utils/-/tsconfig-utils-8.59.4.tgz",
      "integrity": "sha512-DLCpnKgD4alVxTBSKulK+gU1KCqOgUXfDRDXh2mZgzokQKa/70ax93I2uVO3m/LLvIAtWZIFoiifudmIqAxpMA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-8.59.4.tgz",
      "integrity": "sha512-uonTuPAAKr9XaBGqJ3LjYTh72zy5DyGesljO9gtmk/eFW0W1fRHjnwVYKB35Lm8d5Q5CluEW3gPHjTvZTmgrfA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.59.4",
        "@typescript-eslint/typescript-estree": "8.59.4",
        "@typescript-eslint/utils": "8.59.4",
        "debug": "^4.4.3",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-8.59.4.tgz",
      "integrity": "sha512-F1o7WJcCq+bc8dwcO/YsSEOudAH8RDtaOhM6wcAQhcUsFhnWQl81JKy48q1hoxAU0qrzM89+31GYh1515Zde3Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-8.59.4.tgz",
      "integrity": "sha512-F+RuOmcDXo4+TPdfd/TCLS3m2nw8gE9XXyZLrA3JBfaA5tz9TtdkyD3YJFmPxulyc2cKbEok/CvFE3MgSLWnag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/project-service": "8.59.4",
        "@typescript-eslint/tsconfig-utils": "8.59.4",
        "@typescript-eslint/types": "8.59.4",
        "@typescript-eslint/visitor-keys": "8.59.4",
        "debug": "^4.4.3",
        "minimatch": "^10.2.2",
        "semver": "^7.7.3",
        "tinyglobby": "^0.2.15",
        "ts-api-utils": "^2.5.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/balanced-match": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-4.0.4.tgz",
      "integrity": "sha512-BLrgEcRTwX2o6gGxGOCNyMvGSp35YofuYzw9h1IMTRmKqttAZZVU67bdb9Pr2vUHA8+j3i2tJfjO6C6+4myGTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/brace-expansion": {
      "version": "5.0.6",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-5.0.6.tgz",
      "integrity": "sha512-kLpxurY4Z4r9sgMsyG0Z9uzsBlgiU/EFKhj/h91/8yHu0edo7XuixOIH3VcJ8kkxs6/jPzoI6U9Vj3WqbMQ94g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^4.0.2"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/minimatch": {
      "version": "10.2.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-10.2.5.tgz",
      "integrity": "sha512-MULkVLfKGYDFYejP07QOurDLLQpcjk7Fw+7jXS2R2czRQzR56yHRveU5NDJEOviH+hETZKSkIk5c+T23GjFUMg==",
      "dev": true,
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "brace-expansion": "^5.0.5"
      },
      "engines": {
        "node": "18 || 20 || >=22"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree/node_modules/semver": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.0.tgz",
      "integrity": "sha512-AcM7dV/5ul4EekoQ29Agm5vri8JNqRyj39o0qpX6vDF2GZrtutZl5RwgD1XnZjiTAfncsJhMI48QQH3sN87YNA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-8.59.4.tgz",
      "integrity": "sha512-cYXeNAUsG4lJo5dbc1FcKm+JwIWrj1/UpTORsC6tGMjEZ81DYcvIr9/ueikhMa/Y/gDQYGp+YX9/xQrXje5BJw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.9.1",
        "@typescript-eslint/scope-manager": "8.59.4",
        "@typescript-eslint/types": "8.59.4",
        "@typescript-eslint/typescript-estree": "8.59.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-8.59.4.tgz",
      "integrity": "sha512-U3gxVaDVnuZKhSspW/MzMxE1kq7zOdc072FcSNoqA1I9p8HyKbBFfEHoWckBAMgNMph4MamwS5iTVzFmrnt8TQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "8.59.4",
        "eslint-visitor-keys": "^5.0.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys/node_modules/eslint-visitor-keys": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-5.0.1.tgz",
      "integrity": "sha512-tD40eHxA35h0PEIZNeIjkHoDR4YjjJp34biM0mDvplBe//mB+IHCqHDGV7pxF+7MklTvighcCPPZC7ynWyjdTA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^20.19.0 || ^22.13.0 || >=24"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@unrs/resolver-binding-android-arm-eabi": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm-eabi/-/resolver-binding-android-arm-eabi-1.12.2.tgz",
      "integrity": "sha512-g5T90pqg1bo/7mytQx6F4iBNC0Wsh9cu+z9veDbFjc7HjpesJFWD7QMS0NGStXM075+7dJPPVvBbpZlnrdpi/w==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-android-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-android-arm64/-/resolver-binding-android-arm64-1.12.2.tgz",
      "integrity": "sha512-YGCRZv/9GLhwmz6mYDeTsm/92BAyR28l6c2ReweVW5pWgfsitWLY8upvfRlGdoyD8HjeTHSYJWyZGD4KJA/nFQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-arm64/-/resolver-binding-darwin-arm64-1.12.2.tgz",
      "integrity": "sha512-u9DiNT1auQMO20A9SyTuG3wUgQWB9Z7KjAg0uFuCDR1FsAY8A0CG2S6JpHS1xwm/w1G08bjXZDcyOCjv1WAm2w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-darwin-x64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-darwin-x64/-/resolver-binding-darwin-x64-1.12.2.tgz",
      "integrity": "sha512-f7rPLi/T1HVKZu/u6t87lroib16n8vrSzcyxI7lg4BGO9UF26KhQL44sd9eOUgrTYhvRXtWOIZT5PejdPyJfUA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@unrs/resolver-binding-freebsd-x64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-freebsd-x64/-/resolver-binding-freebsd-x64-1.12.2.tgz",
      "integrity": "sha512-BpcOjWCJub6nRZUS2zA20pmLvjtqAtGejETaIyRLiZiQf++cbrjltLA5NN/xaXfqeOBOSlMFbemIl5/S5tljmg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-gnueabihf": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-gnueabihf/-/resolver-binding-linux-arm-gnueabihf-1.12.2.tgz",
      "integrity": "sha512-vZTDvdSISZjJx66OzJqtsOhzifbqRjbmI1Mnu49fQDwog5GtDI4QidRiEAYbZCRj9C8YZEW+3ZjqsyS9GR4k2A==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm-musleabihf": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm-musleabihf/-/resolver-binding-linux-arm-musleabihf-1.12.2.tgz",
      "integrity": "sha512-BiPI+IrIlwcW4nLLMM21+B1dFPzd55yAVgVGrdgDjNef+ch03GdxrcyaIz8X9SsQirh/kCQ7mviyWlMxdh2D7g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-gnu/-/resolver-binding-linux-arm64-gnu-1.12.2.tgz",
      "integrity": "sha512-zJc0H99FEPoFfSrNpa91HYfxzfAJCr502oxNK1cfdC9hlaFI43RT+JFCann9JUgZmLzzntChHyn13Sgn9ljHNg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-arm64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-arm64-musl/-/resolver-binding-linux-arm64-musl-1.12.2.tgz",
      "integrity": "sha512-KQ3Lki6l+Pz1k/eBipN41ES+YUK30beLGb9YqcB1O542cyLCNE6GaxrfcY3T6EezmGGk84wb5XyO9loTM9tkcA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-loong64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-loong64-gnu/-/resolver-binding-linux-loong64-gnu-1.12.2.tgz",
      "integrity": "sha512-3SJGEh1DborhG6pyxvhPzCT4bbSIVihsvgJc13P1bHG7KLdNDaF9T3gsTwFc7Jw/5Y5/iWOjkEx7Zy0NvCGX3Q==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-loong64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-loong64-musl/-/resolver-binding-linux-loong64-musl-1.12.2.tgz",
      "integrity": "sha512-jiuG/Obbel7uw1PwHNFfrkiKhLAF6mnyZ6aWlOAVN9WqKm8v0OFGnciJIHu8+CMvXLQ8AD51LPzAoUfT21D5Ew==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-ppc64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-ppc64-gnu/-/resolver-binding-linux-ppc64-gnu-1.12.2.tgz",
      "integrity": "sha512-q7xRvVpmcfeL+LlZg8Pbbo6QaTZwDU5BaGZbwfhkEsXJn3Was8xYfE0RBH266xZt0rM6B7i8xAYIvjthuUIWHg==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-gnu/-/resolver-binding-linux-riscv64-gnu-1.12.2.tgz",
      "integrity": "sha512-0CVdx6lcnT3Q9inOH8tsMIOJ6ImndllMjqJHg8RLVdB7Vq4SfkEXl9mCSsVNuNA4MCYycRicCUxPCabVHJRr6A==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-riscv64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-riscv64-musl/-/resolver-binding-linux-riscv64-musl-1.12.2.tgz",
      "integrity": "sha512-iOwlRo9vnp6R6ohHQS11n0NnfdXx/omhkocmIfaPRpQhKZ+3BDMkkdRVh53qjkFkpPddf+FETA28NwGN7l5l+w==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-s390x-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-s390x-gnu/-/resolver-binding-linux-s390x-gnu-1.12.2.tgz",
      "integrity": "sha512-HYJtLfXq94q8iZNFT1lknx258wlkkWhZeUXJRqzKBBUJ00CvZ+N33zgbCqimLjsyw5Va6uUxhVa12mI+kaveEw==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-gnu": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-gnu/-/resolver-binding-linux-x64-gnu-1.12.2.tgz",
      "integrity": "sha512-mPsUhunKKDih5O96Y6enDQyHc1SqBPlY1E/SfMWDM3EdJ95Z9CArPeCVwCCqbP45ljvivdEk8Fxn+SIb1rDAJQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-linux-x64-musl": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-linux-x64-musl/-/resolver-binding-linux-x64-musl-1.12.2.tgz",
      "integrity": "sha512-azrt6+5ydLd8Vt210AAFis/lZevSfPw93EJRIJG+xPu4WCJ8K0kppCTpMyLPcKT7H15M4Jnt2tMp5bOvCkRC6A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@unrs/resolver-binding-openharmony-arm64": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-openharmony-arm64/-/resolver-binding-openharmony-arm64-1.12.2.tgz",
      "integrity": "sha512-YZ9hP4O0X9PQb8eO980qmLNGH4zT3I9+SZTdt0Pr0YyuGQhYKoOZkV02VzrzyOZJ5xIJ3UFIenKkUkGg8GjgWQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ]
    },
    "node_modules/@unrs/resolver-binding-wasm32-wasi": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-wasm32-wasi/-/resolver-binding-wasm32-wasi-1.12.2.tgz",
      "integrity": "sha512-tYFDIkMxSflfEc/h92ZWNsZlHSwgimbNHSO3PL2JWQHfCuC2q316jMyYU9TIWZsFK2bQwyK5VAdYgn8ygPj69A==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "1.10.0",
        "@emnapi/runtime": "1.10.0",
        "@napi-rs/wasm-runtime": "^1.1.4"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@unrs/resolver-binding-win32-arm64-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-arm64-msvc/-/resolver-binding-win32-arm64-msvc-1.12.2.tgz",
      "integrity": "sha512-qzNyg3xL0VPQmCaUh+N5jSitce6k+uCBfMDesWRnlULOZaqUkaJ0ybdT+UqlAWJoQjuqfIU/0Ptx9bteN4D82g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-ia32-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-ia32-msvc/-/resolver-binding-win32-ia32-msvc-1.12.2.tgz",
      "integrity": "sha512-WD9sY00OfpHVGfsnHZoA8jVT+esS/Bg8z8jzxp5BnDCjjwsuKsPQrzswwpFy4J1AUJbXPRfkpcX0mXrzeXW79g==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@unrs/resolver-binding-win32-x64-msvc": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/@unrs/resolver-binding-win32-x64-msvc/-/resolver-binding-win32-x64-msvc-1.12.2.tgz",
      "integrity": "sha512-nAB74NfSNKknqQ1RrYj6uz8FcXEomu/MATJZxh/x+BArzN2U3JbOYC0APYzUIGhVY3m5hRxA8VPNdPBoG8txlA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/acorn": {
      "version": "8.16.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.16.0.tgz",
      "integrity": "sha512-UVJyE9MttOsBQIDKw1skb9nAwQuR5wuGD3+82K6JgJlm/Y+KI92oNsMNGZCYdDsVtRHSak0pcV5Dno5+4jh9sw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.15.0",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.15.0.tgz",
      "integrity": "sha512-fgFx7Hfoq60ytK2c7DhnF8jIvzYgOMxfugjLOSMHjLIPgenqa7S7oaagATUq99mV6IYvN2tRmC0wnTYX6iPbMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-buffer-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/array-buffer-byte-length/-/array-buffer-byte-length-1.0.2.tgz",
      "integrity": "sha512-LHE+8BuR7RYGDKvnrmcuSq3tDcKv9OFEXQt/HpbZhY7V6h0zlUXutnAD82GiFx9rdieCMjkvtcsPqBwgUl1Iiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "is-array-buffer": "^3.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array-includes": {
      "version": "3.1.9",
      "resolved": "https://registry.npmjs.org/array-includes/-/array-includes-3.1.9.tgz",
      "integrity": "sha512-FmeCCAenzH0KH381SPT5FZmiA/TmpndpcaShhfgEN9eCVjnFBqq3l1xrI42y8+PPLI6hypzou4GXw00WHmPBLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.0",
        "es-object-atoms": "^1.1.1",
        "get-intrinsic": "^1.3.0",
        "is-string": "^1.1.1",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlast": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/array.prototype.findlast/-/array.prototype.findlast-1.2.5.tgz",
      "integrity": "sha512-CVvd6FHg1Z3POpBLxO6E6zr+rSKEQ9L6rZHAaY7lLfhKsWYUBBOuMs0e9o24oopj6H+geRCX0YJ+TJLBK2eHyQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.findlastindex": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/array.prototype.findlastindex/-/array.prototype.findlastindex-1.2.6.tgz",
      "integrity": "sha512-F/TKATkzseUExPlfvmwQKGITM3DGTK+vkAsCZoDc5daVygbJBnjEUCbgkAvVFsgfXfX4YIqZ/27G3k3tdXrTxQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-shim-unscopables": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flat": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flat/-/array.prototype.flat-1.3.3.tgz",
      "integrity": "sha512-rwG/ja1neyLqCuGZ5YYrznA62D4mZXg0i1cIskIUKSiqF3Cje9/wXAls9B9s1Wa2fomMsIv8czB8jZcPmxCXFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.flatmap": {
      "version": "1.3.3",
      "resolved": "https://registry.npmjs.org/array.prototype.flatmap/-/array.prototype.flatmap-1.3.3.tgz",
      "integrity": "sha512-Y7Wt51eKJSyi80hFrJCePGGNo5ktJCslFuboqJsbf57CCPcm5zztluPlc4/aD8sWsKvlwatezpV4U1efk8kpjg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/array.prototype.tosorted": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/array.prototype.tosorted/-/array.prototype.tosorted-1.1.4.tgz",
      "integrity": "sha512-p6Fx8B7b7ZhL/gmUsAy0D15WhvDccw3mnGNbZpi3pmeJdxtWsj2jEaI4Y6oo3XiHfzuSgPwKc04MYt6KgvC/wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3",
        "es-errors": "^1.3.0",
        "es-shim-unscopables": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/arraybuffer.prototype.slice": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/arraybuffer.prototype.slice/-/arraybuffer.prototype.slice-1.0.4.tgz",
      "integrity": "sha512-BNoCY6SXXPQ7gF2opIP4GBE+Xw7U+pHMYKuzjgCN3GwiaIR09UUeKfheyIry77QtrCBlC0KK0q5/TER/tYh3PQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.1",
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "is-array-buffer": "^3.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ast-types-flow": {
      "version": "0.0.8",
      "resolved": "https://registry.npmjs.org/ast-types-flow/-/ast-types-flow-0.0.8.tgz",
      "integrity": "sha512-OH/2E5Fg20h2aPrbe+QL8JZQFko0YZaF+j4mnQ7BGhfavO7OpSLa8a0y9sBwomHdSbkhTS8TQNayBfnW5DwbvQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/async-function": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/async-function/-/async-function-1.0.0.tgz",
      "integrity": "sha512-hsU18Ae8CDTR6Kgu9DYf0EbCr/a5iGL0rytQDobUcdpYOKokk8LEjVphnXkDkgpi0wYVsqrXuP0bZxJaTqdgoA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/available-typed-arrays": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.7.tgz",
      "integrity": "sha512-wvUjBtSGN7+7SjNpq/9M2Tg350UZD3q62IFZLbRAR1bSMlCo1ZaeW+BJ+D090e4hIIZLBcTDWe4Mh4jvUDajzQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "possible-typed-array-names": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/axe-core": {
      "version": "4.11.4",
      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.11.4.tgz",
      "integrity": "sha512-KunSNx+TVpkAw/6ULfhnx+HWRecjqZGTOyquAoWHYLRSdK1tB5Ihce1ZW+UY3fj33bYAFWPu7W/GRSmmrCGuxA==",
      "dev": true,
      "license": "MPL-2.0",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.10.31",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.10.31.tgz",
      "integrity": "sha512-MujYO3eP72uvmSE0i4wltsodRfIpZATP3jvzRNRGGxgzId7aVocVJJV3nf01qnzzKFGxQVC9bpWxl5cjxTr/7Q==",
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.cjs"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.14",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.14.tgz",
      "integrity": "sha512-MWPGfDxnyzKU7rNOW9SP/c50vi3xrmrua/+6hfPbCS2ABNWfx24vPidzvC7krjU/RTo235sV776ymlsMtGKj8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.2",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.2.tgz",
      "integrity": "sha512-48xSriZYYg+8qXna9kwqjIVzuQxi+KYWp2+5nCYnYKPTr0LvD89Jqk2Or5ogxz0NUMfIjhh2lIUX/LyX9B4oIg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "baseline-browser-mapping": "^2.10.12",
        "caniuse-lite": "^1.0.30001782",
        "electron-to-chromium": "^1.5.328",
        "node-releases": "^2.0.36",
        "update-browserslist-db": "^1.2.3"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.9.tgz",
      "integrity": "sha512-a/hy+pNsFUTR+Iz8TCJvXudKVLAnz/DyeSUo10I5yvFDQJBFU2s9uqQpoSrJlroHUKoKqzg+epxyP9lqFdzfBQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "get-intrinsic": "^1.3.0",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.2.tgz",
      "integrity": "sha512-Sp1ablJ0ivDkSzjcaJdxEunN5/XvksFJ2sMBFfq6x0ryhQV/2b/KwFe21cMpmHtPOSij8K99/wSfoEuTObmuMQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.4.tgz",
      "integrity": "sha512-+ys997U96po4Kx/ABpBCqhA9EuxJaQWDQg7295H4hBphv3IZg0boBKuwYpt4YXp6MZ5AmZQnU/tyMTlRpaSejg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "get-intrinsic": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001793",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001793.tgz",
      "integrity": "sha512-iwSsYWaCOoh26cV8NwNRViHlrfUvYsHDfRVcbtmw0Kg6PJIZZXwMkj1442FYLBGkeUf1juAsU3DTfxW579mrPA==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/client-only": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",
      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",
      "license": "MIT"
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/damerau-levenshtein": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/damerau-levenshtein/-/damerau-levenshtein-1.0.8.tgz",
      "integrity": "sha512-sdQSFB7+llfUcQHUQO3+B8ERRj0Oa4w9POWMI/puGtuf7gFywGmkaLCElnudfTiKZV+NvHqL0ifzdrI8Ro7ESA==",
      "dev": true,
      "license": "BSD-2-Clause"
    },
    "node_modules/data-view-buffer": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-buffer/-/data-view-buffer-1.0.2.tgz",
      "integrity": "sha512-EmKO5V3OLXh1rtK2wgXRansaK1/mtVdTUEiEI0W8RkvgT05kfxaH29PliLnpLP73yYO6142Q72QNa8Wx/A5CqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/data-view-byte-length": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/data-view-byte-length/-/data-view-byte-length-1.0.2.tgz",
      "integrity": "sha512-tuhGbE6CfTM9+5ANGf+oQb72Ky/0+s3xKUpHvShfiz2RxMFgFPjsXuRLBVMtvMs15awe45SRb83D6wH4ew6wlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/inspect-js"
      }
    },
    "node_modules/data-view-byte-offset": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/data-view-byte-offset/-/data-view-byte-offset-1.0.1.tgz",
      "integrity": "sha512-BS8PfmtDGnrgYdOonGZQdLZslWIeCGFP9tpan0hi1Co2Zr2NKADsvGYA8XxuG/4UWgJ6Cjtv+YJnB6MM69QGlQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-data-view": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/define-properties": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.2.1.tgz",
      "integrity": "sha512-8QmQKqEASLd5nx0U1B1okLElbUuuttJ/AnYmRXbbbGDWh6uS208EjD4Xqq/I9wK7u0v6O08XhTWnt5XtEbR6Dg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.0.1",
        "has-property-descriptors": "^1.0.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "devOptional": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/doctrine": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.1.tgz",
      "integrity": "sha512-KIN/nDJBQRcXw0MLVhZE9iQHmG68qAVIBg9CqmUYjmQIhgij9U5MFvrqkUL5FbtyyzZuOeOt0zdeRe4UY7ct+A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.360",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.360.tgz",
      "integrity": "sha512-GkcBt6YYAw9SxFWn+xVar4cLVGlXVuswwtRLBozi2zp0GjXs4ZnOrqV4zbXzg35n7w81hCkyJNYicgXlVHAmBA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.21.6",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.21.6.tgz",
      "integrity": "sha512-aNnGCvbJ/RIyWo1IuhNdVjnNF+EjH9wpzpNHt+ci/m9He9LJvUN8wrCcXjp9cWsGNAuvSpVFTx/vraAFQ8qGjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.3.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/es-abstract": {
      "version": "1.24.2",
      "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.24.2.tgz",
      "integrity": "sha512-2FpH9Q5i2RRwyEP1AylXe6nYLR5OhaJTZwmlcP0dL/+JCbgg7yyEo/sEK6HeGZRf3dFpWwThaRHVApXSkW3xeg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-buffer-byte-length": "^1.0.2",
        "arraybuffer.prototype.slice": "^1.0.4",
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "data-view-buffer": "^1.0.2",
        "data-view-byte-length": "^1.0.2",
        "data-view-byte-offset": "^1.0.1",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "es-set-tostringtag": "^2.1.0",
        "es-to-primitive": "^1.3.0",
        "function.prototype.name": "^1.1.8",
        "get-intrinsic": "^1.3.0",
        "get-proto": "^1.0.1",
        "get-symbol-description": "^1.1.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "internal-slot": "^1.1.0",
        "is-array-buffer": "^3.0.5",
        "is-callable": "^1.2.7",
        "is-data-view": "^1.0.2",
        "is-negative-zero": "^2.0.3",
        "is-regex": "^1.2.1",
        "is-set": "^2.0.3",
        "is-shared-array-buffer": "^1.0.4",
        "is-string": "^1.1.1",
        "is-typed-array": "^1.1.15",
        "is-weakref": "^1.1.1",
        "math-intrinsics": "^1.1.0",
        "object-inspect": "^1.13.4",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.7",
        "own-keys": "^1.0.1",
        "regexp.prototype.flags": "^1.5.4",
        "safe-array-concat": "^1.1.3",
        "safe-push-apply": "^1.0.0",
        "safe-regex-test": "^1.1.0",
        "set-proto": "^1.0.0",
        "stop-iteration-iterator": "^1.1.0",
        "string.prototype.trim": "^1.2.10",
        "string.prototype.trimend": "^1.0.9",
        "string.prototype.trimstart": "^1.0.8",
        "typed-array-buffer": "^1.0.3",
        "typed-array-byte-length": "^1.0.3",
        "typed-array-byte-offset": "^1.0.4",
        "typed-array-length": "^1.0.7",
        "unbox-primitive": "^1.1.0",
        "which-typed-array": "^1.1.19"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-iterator-helpers": {
      "version": "1.3.2",
      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.3.2.tgz",
      "integrity": "sha512-HVLACW1TppGYjJ8H6/jqH/pqOtKRw6wMlrB23xfExmFWxFquAIWCmwoLsOyN96K4a5KbmOf5At9ZUO3GZbetAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.24.2",
        "es-errors": "^1.3.0",
        "es-set-tostringtag": "^2.1.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.3.0",
        "globalthis": "^1.0.4",
        "gopd": "^1.2.0",
        "has-property-descriptors": "^1.0.2",
        "has-proto": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "iterator.prototype": "^1.1.5",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-object-atoms": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.1.1.tgz",
      "integrity": "sha512-FGgH2h8zKNim9ljj7dankFPcICIK9Cp5bm+c2gQSYePhpaG5+esrLODihIorn+Pe6FGJzWhXQotPv73jTaldXA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-set-tostringtag": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/es-set-tostringtag/-/es-set-tostringtag-2.1.0.tgz",
      "integrity": "sha512-j6vWzfrGVfyXxge+O0x5sh6cvxAog0a/4Rdd2K36zCMV5eJ+/+tOAngRO8cODMNWbVRdVlmGZQL2YS3yR8bIUA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-shim-unscopables": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/es-shim-unscopables/-/es-shim-unscopables-1.1.0.tgz",
      "integrity": "sha512-d9T8ucsEhh8Bi1woXCf+TIKDIROLG5WCkxg8geBCbvk22kzwC5G2OnXVMO6FUsvQlgUUXQ2itephWDLqDzbeCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-to-primitive": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.3.0.tgz",
      "integrity": "sha512-w+5mJ3GuFL+NjVtJlvydShqE1eN3h3PbI7/5LAsYJP/2qtuMXjfL2LpHSRqo4b4eSF5K/DH1JXKUAHSB2UW50g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7",
        "is-date-object": "^1.0.5",
        "is-symbol": "^1.0.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.4",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.4.tgz",
      "integrity": "sha512-XoMjdBOwe/esVgEvLmNsD3IRHkm7fbKIUGvrleloJXUZgDHig2IPWNniv+GwjyJXzuNqVjlr5+4yVUZjycJwfQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.2",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.5",
        "@eslint/js": "9.39.4",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.14.0",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.5",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/eslint-config-next/-/eslint-config-next-16.2.6.tgz",
      "integrity": "sha512-z2ELYSkyrrJ6cuunTU8vhsT/RpouPkjaSah06nVW6Rg2Hpg0Vs8s497/e5s8G8qtdp4ccsiovz5P1rv+5VSW2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@next/eslint-plugin-next": "16.2.6",
        "eslint-import-resolver-node": "^0.3.6",
        "eslint-import-resolver-typescript": "^3.5.2",
        "eslint-plugin-import": "^2.32.0",
        "eslint-plugin-jsx-a11y": "^6.10.0",
        "eslint-plugin-react": "^7.37.0",
        "eslint-plugin-react-hooks": "^7.0.0",
        "globals": "16.4.0",
        "typescript-eslint": "^8.46.0"
      },
      "peerDependencies": {
        "eslint": ">=9.0.0",
        "typescript": ">=3.3.1"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-config-next/node_modules/globals": {
      "version": "16.4.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.4.0.tgz",
      "integrity": "sha512-ob/2LcVVaVGCYN+r14cnwnoDPUufjiYgSqRhiFD0Q1iI4Odora5RE8Iv1D24hAz5oMophRGkGz+yuvQmmUMnMw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint-import-resolver-node": {
      "version": "0.3.10",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.10.tgz",
      "integrity": "sha512-tRrKqFyCaKict5hOd244sL6EQFNycnMQnBe+j8uqGNXYzsImGbGUU4ibtoaBmv5FLwJwcFJNeg1GeVjQfbMrDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7",
        "is-core-module": "^2.16.1",
        "resolve": "^2.0.0-next.6"
      }
    },
    "node_modules/eslint-import-resolver-node/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-import-resolver-typescript": {
      "version": "3.10.1",
      "resolved": "https://registry.npmjs.org/eslint-import-resolver-typescript/-/eslint-import-resolver-typescript-3.10.1.tgz",
      "integrity": "sha512-A1rHYb06zjMGAxdLSkN2fXPBwuSaQ0iO5M/hdyS0Ajj1VBaRp0sPD3dn1FhME3c/JluGFbwSxyCfqdSbtQLAHQ==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "@nolyfill/is-core-module": "1.0.39",
        "debug": "^4.4.0",
        "get-tsconfig": "^4.10.0",
        "is-bun-module": "^2.0.0",
        "stable-hash": "^0.0.5",
        "tinyglobby": "^0.2.13",
        "unrs-resolver": "^1.6.2"
      },
      "engines": {
        "node": "^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint-import-resolver-typescript"
      },
      "peerDependencies": {
        "eslint": "*",
        "eslint-plugin-import": "*",
        "eslint-plugin-import-x": "*"
      },
      "peerDependenciesMeta": {
        "eslint-plugin-import": {
          "optional": true
        },
        "eslint-plugin-import-x": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils": {
      "version": "2.12.1",
      "resolved": "https://registry.npmjs.org/eslint-module-utils/-/eslint-module-utils-2.12.1.tgz",
      "integrity": "sha512-L8jSWTze7K2mTg0vos/RuLRS5soomksDPoJLXIslC7c8Wmut3bx7CPpJijDcBZtxQ5lrbUdM+s0OlNbz0DCDNw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^3.2.7"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependenciesMeta": {
        "eslint": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-module-utils/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-import": {
      "version": "2.32.0",
      "resolved": "https://registry.npmjs.org/eslint-plugin-import/-/eslint-plugin-import-2.32.0.tgz",
      "integrity": "sha512-whOE1HFo/qJDyX4SnXzP4N6zOWn79WhnCUY/iDR0mPfQZO8wcYE4JClzI2oZrhBnnMUCBCHZhO6VQyoBU95mZA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@rtsao/scc": "^1.1.0",
        "array-includes": "^3.1.9",
        "array.prototype.findlastindex": "^1.2.6",
        "array.prototype.flat": "^1.3.3",
        "array.prototype.flatmap": "^1.3.3",
        "debug": "^3.2.7",
        "doctrine": "^2.1.0",
        "eslint-import-resolver-node": "^0.3.9",
        "eslint-module-utils": "^2.12.1",
        "hasown": "^2.0.2",
        "is-core-module": "^2.16.1",
        "is-glob": "^4.0.3",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "object.groupby": "^1.0.3",
        "object.values": "^1.2.1",
        "semver": "^6.3.1",
        "string.prototype.trimend": "^1.0.9",
        "tsconfig-paths": "^3.15.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-import/node_modules/debug": {
      "version": "3.2.7",
      "resolved": "https://registry.npmjs.org/debug/-/debug-3.2.7.tgz",
      "integrity": "sha512-CFjzYYAi4ThfiQvizrFQevTTXHtnCqWfe7x1AhgEscTz6ZbLbfoLRLPugTQyBth6f8ZERVUSyWHFD/7Wu4t1XQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.1"
      }
    },
    "node_modules/eslint-plugin-jsx-a11y": {
      "version": "6.10.2",
      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",
      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "aria-query": "^5.3.2",
        "array-includes": "^3.1.8",
        "array.prototype.flatmap": "^1.3.2",
        "ast-types-flow": "^0.0.8",
        "axe-core": "^4.10.0",
        "axobject-query": "^4.1.0",
        "damerau-levenshtein": "^1.0.8",
        "emoji-regex": "^9.2.2",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^3.3.5",
        "language-tags": "^1.0.9",
        "minimatch": "^3.1.2",
        "object.fromentries": "^2.0.8",
        "safe-regex-test": "^1.0.3",
        "string.prototype.includes": "^2.0.1"
      },
      "engines": {
        "node": ">=4.0"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9"
      }
    },
    "node_modules/eslint-plugin-react": {
      "version": "7.37.5",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react/-/eslint-plugin-react-7.37.5.tgz",
      "integrity": "sha512-Qteup0SqU15kdocexFNAJMvCJEfa2xUKNV4CC1xsVMrIIqEy3SQ/rqyxCWNzfrd3/ldy6HMlD2e0JDVpDg2qIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.8",
        "array.prototype.findlast": "^1.2.5",
        "array.prototype.flatmap": "^1.3.3",
        "array.prototype.tosorted": "^1.1.4",
        "doctrine": "^2.1.0",
        "es-iterator-helpers": "^1.2.1",
        "estraverse": "^5.3.0",
        "hasown": "^2.0.2",
        "jsx-ast-utils": "^2.4.1 || ^3.0.0",
        "minimatch": "^3.1.2",
        "object.entries": "^1.1.9",
        "object.fromentries": "^2.0.8",
        "object.values": "^1.2.1",
        "prop-types": "^15.8.1",
        "resolve": "^2.0.0-next.5",
        "semver": "^6.3.1",
        "string.prototype.matchall": "^4.0.12",
        "string.prototype.repeat": "^1.0.0"
      },
      "engines": {
        "node": ">=4"
      },
      "peerDependencies": {
        "eslint": "^3 || ^4 || ^5 || ^6 || ^7 || ^8 || ^9.7"
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.1.1.tgz",
      "integrity": "sha512-f2I7Gw6JbvCexzIInuSbZpfdQ44D7iqdWX01FKLvrPgqxoE7oMj8clOfto8U6vYiz4yd5oKu39rRSVOe1zRu0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0 || ^10.0.0"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.7.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.7.0.tgz",
      "integrity": "sha512-Ap6G0WQwcU/LHsvLwON1fAQX9Zp0A2Y6Y/cJBl9r/JbW90Zyg4/zbG6zzKa2OTALELarYHmKu0GhpM5EO+7T0g==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.1.tgz",
      "integrity": "sha512-kNFPyjhh5cKjrUltxs+wFx+ZkbRaxxmZ+X0ZU31SOsxCEtP9VPgtq2teZw1DebupL5GmDaNQ6yKMMVcM41iqDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fastq": {
      "version": "1.20.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.20.1.tgz",
      "integrity": "sha512-GGToxJ/w1x32s/D2EKND7kTil4n8OVk/9mycTc4VDza13lOvpUZTGX3mFSCtV9ksdGBVzvsyAVLM6mHFThxXxw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.4.2.tgz",
      "integrity": "sha512-PjDse7RzhcPkIJwy5t7KPWQSZ9cAbzQXcafsetQoD7sOJRQlGikNbx7yZp2OotDnJyrDcbyRq3Ttb18iYOqkxA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/for-each": {
      "version": "0.3.5",
      "resolved": "https://registry.npmjs.org/for-each/-/for-each-0.3.5.tgz",
      "integrity": "sha512-dKx12eRCVIzqCxFGplyFKJMPvLEWgmNtUrpTiJIR5u97zEhRG8ySrtboPHZXx7daLxQVrl643cTzbab2tkQjxg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/function.prototype.name": {
      "version": "1.1.8",
      "resolved": "https://registry.npmjs.org/function.prototype.name/-/function.prototype.name-1.1.8.tgz",
      "integrity": "sha512-e5iwyodOHhbMr/yNrc7fDYG4qlbIvI5gajyzPnb5TCwyhjApznQh1BMFou9b30SevY43gCJKXycoCBjMbsuW0Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "functions-have-names": "^1.2.3",
        "hasown": "^2.0.2",
        "is-callable": "^1.2.7"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/functions-have-names": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/functions-have-names/-/functions-have-names-1.2.3.tgz",
      "integrity": "sha512-xckBUXyTIqT97tq2x2AMb+g163b5JFysYk0x4qxNFwbfQkmNZoiRHb6sPzI9/QV33WeuvVYBUIiD4NzNIyqaRQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/generator-function": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/generator-function/-/generator-function-2.0.1.tgz",
      "integrity": "sha512-SFdFmIJi+ybC0vjlHN0ZGVGHc3lgE0DxPAT0djjVg+kjOnSqclqmj0KQ7ykTOLP6YxoqOvuAODGdcHJn+43q3g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.3.0.tgz",
      "integrity": "sha512-9fSjSaos/fRIVIp+xSJlE6lfwhES7LNtKaCBIamHsjr2na1BiABJPo0mOjjz8GJDURarmCPGqaiVg5mfjb98CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.2",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.1.1",
        "function-bind": "^1.1.2",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-proto": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/get-proto/-/get-proto-1.0.1.tgz",
      "integrity": "sha512-sTSfBjoXBp89JvIKIefqw7U2CCebsc74kiY6awiGogKtoSGbgjYE/G/+l9sF3MWFPNc9IcoOC4ODfKHfxFmp0g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/get-symbol-description": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.1.0.tgz",
      "integrity": "sha512-w9UMqWwJxHNOvoNzSJ2oPF5wvYcvP7jUvYzhp67yEhTi17ZDBBC1z9pTdGuzjD+EFIqLSYRweZjqfiPzQ06Ebg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/get-tsconfig": {
      "version": "4.14.0",
      "resolved": "https://registry.npmjs.org/get-tsconfig/-/get-tsconfig-4.14.0.tgz",
      "integrity": "sha512-yTb+8DXzDREzgvYmh6s9vHsSVCHeC0G3PI5bEXNBHtmshPnO+S5O7qgLEOn0I5QvMy6kpZN8K1NKGyilLb93wA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "resolve-pkg-maps": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/privatenumber/get-tsconfig?sponsor=1"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globalthis": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/globalthis/-/globalthis-1.0.4.tgz",
      "integrity": "sha512-DpLKbNU4WylpxJykQujfCcwYWiV/Jhm50Goo0wrVILAv5jOr9d+H+UR3PhSCD2rCCEIg0uc+G+muBTwD54JhDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.2.1",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/has-bigints": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.1.0.tgz",
      "integrity": "sha512-R3pbpkcIqv2Pm3dUwgjclDRVmWpTJW2DcMzcIhEXEx1oh/CEMObMm3KLmRJOdvhM7o4uQBnwr8pzRK2sJWIqfg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-proto": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/has-proto/-/has-proto-1.2.0.tgz",
      "integrity": "sha512-KIL7eQPfHQRC8+XluaIw7BHUwwqL19bQn4hzNgdr+1wXoU0KKj6rufu47lhY7KbJR2C6T6+PfyN0Ea7wkSS+qQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-tostringtag": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.2.tgz",
      "integrity": "sha512-NqADB8VjPFLM2V0VvHUewwwsw0ZWBaIdgo+ieHtK3hasLz4qeCRjYcqfB6AQrBggRKppKF8L52/VqdVsO47Dlw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-symbols": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.3.tgz",
      "integrity": "sha512-ej4AhfhfL2Q2zpMmLo7U1Uv9+PyhIZpgQLGT1F9miIGmiCJIoCgSmczFdrc97mWT4kVY72KA+WnnhJ5pghSvSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/internal-slot": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.1.0.tgz",
      "integrity": "sha512-4gd7VpWNQNB4UKKCFFVcp1AVv+FMOgs9NKzjHKusc8jTMhd5eL1NqQqOpE0KzMds804/yHlglp3uxgluOqAPLw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "hasown": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/is-array-buffer": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/is-array-buffer/-/is-array-buffer-3.0.5.tgz",
      "integrity": "sha512-DDfANUiiG2wC1qawP66qlTugJeL5HyzMpfr8lLK+jMQirGzNod0B12cFB/9q838Ru27sBwfw78/rdoU7RERz6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-async-function": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-async-function/-/is-async-function-2.1.1.tgz",
      "integrity": "sha512-9dgM/cZBnNvjzaMYHVoxxfPj2QXt22Ev7SuuPrs+xav0ukGB0S6d4ydZdEiM48kLx5kDV+QBPrpVnFyefL8kkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "async-function": "^1.0.0",
        "call-bound": "^1.0.3",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bigint": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.1.0.tgz",
      "integrity": "sha512-n4ZT37wG78iz03xPRKJrHTdZbe3IicyucEtdRsV5yglwc3GyUfbAfpSeD0FJ41NbUNSt5wbhqfp1fS+BgnvDFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-bigints": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-boolean-object": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.2.2.tgz",
      "integrity": "sha512-wa56o2/ElJMYqjCjGkXri7it5FbebW5usLw/nPmCMs5DeZ7eziSYZhSmPRn0txqeW4LnAmQQU7FgqLpsEFKM4A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-bun-module": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/is-bun-module/-/is-bun-module-2.0.0.tgz",
      "integrity": "sha512-gNCGbnnnnFAUGKeZ9PdbyeGYJqewpmc2aKHUEMO5nQPWU9lOmv7jcmQIv+qHD8fXW6W7qfuCwX4rY9LNRjXrkQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.7.1"
      }
    },
    "node_modules/is-bun-module/node_modules/semver": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.0.tgz",
      "integrity": "sha512-AcM7dV/5ul4EekoQ29Agm5vri8JNqRyj39o0qpX6vDF2GZrtutZl5RwgD1XnZjiTAfncsJhMI48QQH3sN87YNA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/is-callable": {
      "version": "1.2.7",
      "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.7.tgz",
      "integrity": "sha512-1BC0BVFhS/p0qtw6enp8e+8OD0UrK0oFLztSjNzhcKA3WDuJxxAPXzPuPtKkjEY9UUoEWlX/8fgKeu2S8i9JTA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-core-module": {
      "version": "2.16.2",
      "resolved": "https://registry.npmjs.org/is-core-module/-/is-core-module-2.16.2.tgz",
      "integrity": "sha512-evOr8xfXKxE6qSR0hSXL2r3sd7ALj8+7jQEUvPYcm5sgZFdJ+AYzT6yNmJenvIYQBgIGwfwz08sL8zoL7yq2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hasown": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-data-view": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/is-data-view/-/is-data-view-1.0.2.tgz",
      "integrity": "sha512-RKtWF8pGmS87i2D6gqQu/l7EYRlVdfzemCJN/P3UOs//x1QE7mfhvzHIApBTRf7axvT6DMGwSwBXYCT0nfB9xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "get-intrinsic": "^1.2.6",
        "is-typed-array": "^1.1.13"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-date-object": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.1.0.tgz",
      "integrity": "sha512-PwwhEakHVKTdRNVOw+/Gyh0+MzlCl4R6qKvkhuvLtPMggI1WAHt9sOwZxQLSGpUaDnrdyDsomoRgNnCfKNSXXg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-finalizationregistry": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-finalizationregistry/-/is-finalizationregistry-1.1.1.tgz",
      "integrity": "sha512-1pC6N8qWJbWoPtEjgcL2xyhQOP491EQjeUo3qTKcmV8YSDDJrOepfG8pcC7h/QgnQHYSv0mJ3Z/ZWxmatVrysg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-generator-function": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.1.2.tgz",
      "integrity": "sha512-upqt1SkGkODW9tsGNG5mtXTXtECizwtS2kA161M+gJPc1xdb/Ax629af6YrTwcOeQHbewrPNlE5Dx7kzvXTizA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.4",
        "generator-function": "^2.0.0",
        "get-proto": "^1.0.1",
        "has-tostringtag": "^1.0.2",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-map": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-map/-/is-map-2.0.3.tgz",
      "integrity": "sha512-1Qed0/Hr2m+YqxnM09CjA2d/i6YZNfF6R2oRAOj36eUdS6qIV/huPJNSEpKbupewFs+ZsJlxsjjPbc0/afW6Lw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-negative-zero": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.3.tgz",
      "integrity": "sha512-5KoIu2Ngpyek75jXodFvnafB6DJgr3u8uuK0LEZJjrU19DrMD3EVERaR8sjz8CCGgpZvxPl9SuE1GMVPFHx1mw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-number-object": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.1.1.tgz",
      "integrity": "sha512-lZhclumE1G6VYD8VHe35wFaIif+CTy5SJIi5+3y4psDgWu4wPDoBhF8NxUOinEc7pHgiTsT6MaBb92rKhhD+Xw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-regex": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.2.1.tgz",
      "integrity": "sha512-MjYsKHO5O7mCsmRGxWcLWheFqN9DJ/2TmngvjKXihe6efViPqc274+Fx/4fYj/r03+ESvBdTXK0V6tA3rgez1g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2",
        "hasown": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-set": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/is-set/-/is-set-2.0.3.tgz",
      "integrity": "sha512-iPAjerrse27/ygGLxw+EBR9agv9Y6uLeYVJMu+QNCoouJ1/1ri0mGrcWpfCqFZuzzx3WjtwxG098X+n4OuRkPg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-shared-array-buffer": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.4.tgz",
      "integrity": "sha512-ISWac8drv4ZGfwKl5slpHG9OwPNty4jOWPRIhBpxOoD+hqITiwuipOQ2bNthAzwA3B4fIjO4Nln74N0S9byq8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-string": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.1.1.tgz",
      "integrity": "sha512-BtEeSsoaQjlSPBemMQIrY1MY0uM6vnS1g5fmufYOtnxLGUZM2178PKbhsk7Ffv58IX+ZtcvoGwccYsh0PglkAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-symbol": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.1.1.tgz",
      "integrity": "sha512-9gGx6GTtCQM73BgmHQXfDmLtfjjTUDSyoxTCbp5WtoixAhfgsDirWIcVQ/IHpvI5Vgd5i/J5F7B9cN/WlVbC/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "has-symbols": "^1.1.0",
        "safe-regex-test": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-typed-array": {
      "version": "1.1.15",
      "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.15.tgz",
      "integrity": "sha512-p3EcsicXjit7SaskXHs1hA91QxgTw46Fv6EFKKGS5DRFLD8yKnohjF3hxoju94b/OcMZoQukzpPpBE9uLVKzgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakmap": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/is-weakmap/-/is-weakmap-2.0.2.tgz",
      "integrity": "sha512-K5pXYOm9wqY1RgjpL3YTkF39tni1XajUIkawTLUo9EZEVUFga5gSQJF8nNS7ZwJQ02y+1YCNYcMh+HIf1ZqE+w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakref": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.1.1.tgz",
      "integrity": "sha512-6i9mGWSlqzNMEqpCp93KwRS1uUOodk2OJ6b+sq7ZPDSy2WuI5NFIxp/254TytR8ftefexkWn5xNiHUNpPOfSew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/is-weakset": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/is-weakset/-/is-weakset-2.0.4.tgz",
      "integrity": "sha512-mfcwb6IzQyOKTs84CQMrOwW4gQcaTOAWJ0zzJCl2WSPDrWk/OzDaImWFH3djXhb24g4eudZfLRozAvPGw4d9hQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "get-intrinsic": "^1.2.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/isarray": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/isarray/-/isarray-2.0.5.tgz",
      "integrity": "sha512-xHjhDr3cNBK0BzdUJSPXZntQUx/mwMS5Rw4A7lPJ90XGAO6ISP/ePDNuo0vhqOZU+UD5JoodwCAAoZQd3FeAKw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/iterator.prototype": {
      "version": "1.1.5",
      "resolved": "https://registry.npmjs.org/iterator.prototype/-/iterator.prototype-1.1.5.tgz",
      "integrity": "sha512-H0dkQoCa3b2VEeKQBOxFph+JAbcrQdE7KC0UkqwpLmv2EC4P41QXP+rqo9wYodACiG5/WM5s9oDApTU8utwj9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "get-proto": "^1.0.0",
        "has-symbols": "^1.1.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/jiti": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.7.0.tgz",
      "integrity": "sha512-AC/7JofJvZGrrneWNaEnJeOLUx+JlGt7tNa0wZiRPT4MY1wmfKjt2+6O2p2uz2+skll8OZZmJMNqeke7kKbNgQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/jsx-ast-utils": {
      "version": "3.3.5",
      "resolved": "https://registry.npmjs.org/jsx-ast-utils/-/jsx-ast-utils-3.3.5.tgz",
      "integrity": "sha512-ZZow9HBI5O6EPgSJLUb8n2NKgmVWTwCvHGwFuJlMjvLFqlGG6pjirPhtdsseaLZjSibD8eegzmYpUZwoIlj2cQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-includes": "^3.1.6",
        "array.prototype.flat": "^1.3.1",
        "object.assign": "^4.1.4",
        "object.values": "^1.1.6"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/language-subtag-registry": {
      "version": "0.3.23",
      "resolved": "https://registry.npmjs.org/language-subtag-registry/-/language-subtag-registry-0.3.23.tgz",
      "integrity": "sha512-0K65Lea881pHotoGEa5gDlMxt3pctLi2RplBb7Ezh4rRdLEOtgi7n4EwK9lamnUCkKBqaeKRVebTq6BAxSkpXQ==",
      "dev": true,
      "license": "CC0-1.0"
    },
    "node_modules/language-tags": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/language-tags/-/language-tags-1.0.9.tgz",
      "integrity": "sha512-MbjN408fEndfiQXbFQ1vnd+1NoLDsnQW41410oQBXiyXDMYH5z505juWa4KUE1LqxRC7DgOgZDbKLxHIwm27hA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "language-subtag-registry": "^0.3.20"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.32.0.tgz",
      "integrity": "sha512-NXYBzinNrblfraPGyrbPoD19C1h9lfI/1mzgWYvXUTe414Gz/X1FD2XBZSZM7rRTrMA8JL3OtAaGifrIKhQ5yQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.32.0",
        "lightningcss-darwin-arm64": "1.32.0",
        "lightningcss-darwin-x64": "1.32.0",
        "lightningcss-freebsd-x64": "1.32.0",
        "lightningcss-linux-arm-gnueabihf": "1.32.0",
        "lightningcss-linux-arm64-gnu": "1.32.0",
        "lightningcss-linux-arm64-musl": "1.32.0",
        "lightningcss-linux-x64-gnu": "1.32.0",
        "lightningcss-linux-x64-musl": "1.32.0",
        "lightningcss-win32-arm64-msvc": "1.32.0",
        "lightningcss-win32-x64-msvc": "1.32.0"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.32.0.tgz",
      "integrity": "sha512-YK7/ClTt4kAK0vo6w3X+Pnm0D2cf2vPHbhOXdoNti1Ga0al1P4TBZhwjATvjNwLEBCnKvjJc2jQgHXH0NEwlAg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.32.0.tgz",
      "integrity": "sha512-RzeG9Ju5bag2Bv1/lwlVJvBE3q6TtXskdZLLCyfg5pt+HLz9BqlICO7LZM7VHNTTn/5PRhHFBSjk5lc4cmscPQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.32.0.tgz",
      "integrity": "sha512-U+QsBp2m/s2wqpUYT/6wnlagdZbtZdndSmut/NJqlCcMLTWp5muCrID+K5UJ6jqD2BFshejCYXniPDbNh73V8w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.32.0.tgz",
      "integrity": "sha512-JCTigedEksZk3tHTTthnMdVfGf61Fky8Ji2E4YjUTEQX14xiy/lTzXnu1vwiZe3bYe0q+SpsSH/CTeDXK6WHig==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.32.0.tgz",
      "integrity": "sha512-x6rnnpRa2GL0zQOkt6rts3YDPzduLpWvwAF6EMhXFVZXD4tPrBkEFqzGowzCsIWsPjqSK+tyNEODUBXeeVHSkw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.32.0.tgz",
      "integrity": "sha512-0nnMyoyOLRJXfbMOilaSRcLH3Jw5z9HDNGfT/gwCPgaDjnx0i8w7vBzFLFR1f6CMLKF8gVbebmkUN3fa/kQJpQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.32.0.tgz",
      "integrity": "sha512-UpQkoenr4UJEzgVIYpI80lDFvRmPVg6oqboNHfoH4CQIfNA+HOrZ7Mo7KZP02dC6LjghPQJeBsvXhJod/wnIBg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.32.0.tgz",
      "integrity": "sha512-V7Qr52IhZmdKPVr+Vtw8o+WLsQJYCTd8loIfpDaMRWGUZfBOYEJeyJIkqGIDMZPwPx24pUMfwSxxI8phr/MbOA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "glibc"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.32.0.tgz",
      "integrity": "sha512-bYcLp+Vb0awsiXg/80uCRezCYHNg1/l3mt0gzHnWV9XP1W5sKa5/TCdGWaR/zBM2PeF/HbsQv/j2URNOiVuxWg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "libc": [
        "musl"
      ],
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.32.0.tgz",
      "integrity": "sha512-8SbC8BR40pS6baCM8sbtYDSwEVQd4JlFTOlaD3gWGHfThTcABnNDBda6eTZeqbofalIJhFx0qKzgHJmcPTnGdw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.32.0",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.32.0.tgz",
      "integrity": "sha512-Amq9B/SoZYdDi1kFrojnoqPLxYhQ4Wo5XiL8EVJrVsB8ARoC1PWW6VGtT0WKCemjy8aC+louJnjS7U18x3b06Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.1.0.tgz",
      "integrity": "sha512-/IXtbwEk5HTPyEwyKX6hGkYXxM9nbj64B+ilVJnC/R6B0pH5G4V3b0pVbL7DBj4tkhBAppbQUlf6F6Xl9LHu1g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.5.tgz",
      "integrity": "sha512-VgjWUsnnT6n+NUk6eZq77zeFdpW2LWDzP6zFGrCbHXiYNul5Dzqk2HHQ5uFH2DNW5Xbp8+jVzaeNt94ssEEl4w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.12",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.12.tgz",
      "integrity": "sha512-ZB9RH/39qpq5Vu6Y+NmUaFhQR6pp+M2Xt76XBnEwDaGcVAqhlvxrl3B2bKS5D3NH3QR76v3aSrKaF/Kiy7lEtQ==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/napi-postinstall": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/napi-postinstall/-/napi-postinstall-0.3.4.tgz",
      "integrity": "sha512-PHI5f1O0EP5xJ9gQmFGMS6IZcrVvTjpXjz7Na41gTE7eE2hK11lg04CECCYEEjdc17EV4DO+fkGEtt7TpTaTiQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "napi-postinstall": "lib/cli.js"
      },
      "engines": {
        "node": "^12.20.0 || ^14.18.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/napi-postinstall"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/next": {
      "version": "16.2.6",
      "resolved": "https://registry.npmjs.org/next/-/next-16.2.6.tgz",
      "integrity": "sha512-qOVgKJg1+At15NpeUP+eJgCHvTCgXsogweq87Ri/Ix7PkqQHg4sdaXmSFqKlgaIXE4kW0g25LE68W87UANlHtw==",
      "license": "MIT",
      "dependencies": {
        "@next/env": "16.2.6",
        "@swc/helpers": "0.5.15",
        "baseline-browser-mapping": "^2.9.19",
        "caniuse-lite": "^1.0.30001579",
        "postcss": "8.4.31",
        "styled-jsx": "5.1.6"
      },
      "bin": {
        "next": "dist/bin/next"
      },
      "engines": {
        "node": ">=20.9.0"
      },
      "optionalDependencies": {
        "@next/swc-darwin-arm64": "16.2.6",
        "@next/swc-darwin-x64": "16.2.6",
        "@next/swc-linux-arm64-gnu": "16.2.6",
        "@next/swc-linux-arm64-musl": "16.2.6",
        "@next/swc-linux-x64-gnu": "16.2.6",
        "@next/swc-linux-x64-musl": "16.2.6",
        "@next/swc-win32-arm64-msvc": "16.2.6",
        "@next/swc-win32-x64-msvc": "16.2.6",
        "sharp": "^0.34.5"
      },
      "peerDependencies": {
        "@opentelemetry/api": "^1.1.0",
        "@playwright/test": "^1.51.1",
        "babel-plugin-react-compiler": "*",
        "react": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "react-dom": "^18.2.0 || 19.0.0-rc-de68d2f4-20241204 || ^19.0.0",
        "sass": "^1.3.0"
      },
      "peerDependenciesMeta": {
        "@opentelemetry/api": {
          "optional": true
        },
        "@playwright/test": {
          "optional": true
        },
        "babel-plugin-react-compiler": {
          "optional": true
        },
        "sass": {
          "optional": true
        }
      }
    },
    "node_modules/next/node_modules/postcss": {
      "version": "8.4.31",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.4.31.tgz",
      "integrity": "sha512-PS08Iboia9mts/2ygV3eLpY5ghnUcfLV/EXTOW1E2qYxJKGGBUtNjN76FYHnMs36RmARn41bC0AZmn+rR0OVpQ==",
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.6",
        "picocolors": "^1.0.0",
        "source-map-js": "^1.0.2"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/node-exports-info": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/node-exports-info/-/node-exports-info-1.6.0.tgz",
      "integrity": "sha512-pyFS63ptit/P5WqUkt+UUfe+4oevH+bFeIiPPdfb0pFeYEu/1ELnJu5l+5EcTKYL5M7zaAa7S8ddywgXypqKCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array.prototype.flatmap": "^1.3.3",
        "es-errors": "^1.3.0",
        "object.entries": "^1.1.9",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/node-releases": {
      "version": "2.0.44",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.44.tgz",
      "integrity": "sha512-5WUyunoPMsvvEhS8AxHtRzP+oA8UCkJ7YRxatWKjngndhDGLiqEVAQKWjFAiAiuL8zMRGzGSJxFnLetoa43qGQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/object-assign": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha512-rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/object-inspect": {
      "version": "1.13.4",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.4.tgz",
      "integrity": "sha512-W67iLl4J2EXEGTbfeHCffrjDfitvLANg0UlX3wFUUSTx92KXRFegMHUVgSqE+wvhAbi4WqjGg9czysTV2Epbew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object-keys": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.assign": {
      "version": "4.1.7",
      "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.7.tgz",
      "integrity": "sha512-nK28WOo+QIjBkDduTINE4JkF/UJJKyf2EJxvJKfblDpyg0Q+pkOHNTL0Qwy6NP6FhE/EnzV73BxxqcJaXY9anw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0",
        "has-symbols": "^1.1.0",
        "object-keys": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.entries": {
      "version": "1.1.9",
      "resolved": "https://registry.npmjs.org/object.entries/-/object.entries-1.1.9.tgz",
      "integrity": "sha512-8u/hfXFRBD1O0hPUjioLhoWFHRmt6tKA4/vZPyckBr18l1KE9uHrFaFaUi8MDRTpi4uak2goyPTSNJLXX2k2Hw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.fromentries": {
      "version": "2.0.8",
      "resolved": "https://registry.npmjs.org/object.fromentries/-/object.fromentries-2.0.8.tgz",
      "integrity": "sha512-k6E21FzySsSK5a21KRADBd/NGneRegFO5pLHfdQLpRDETUNJueLXs3WCzyQ3tFRDYgbq3KHGXfTbi2bs8WQ6rQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/object.groupby": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/object.groupby/-/object.groupby-1.0.3.tgz",
      "integrity": "sha512-+Lhy3TQTuzXI5hevh8sBGqbmurHbbIjAi0Z4S63nthVLmLxfbj4T54a4CfZrXIrt9iP4mVAPYMo/v99taj3wjQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/object.values": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/object.values/-/object.values-1.2.1.tgz",
      "integrity": "sha512-gXah6aZrcUxjWg2zR2MwouP2eHlCBzdV4pygudehaKXSGW4v2AsRQUK+lwwXhii6KFZcunEnmSUoYp5CXibxtA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/own-keys": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/own-keys/-/own-keys-1.0.1.tgz",
      "integrity": "sha512-qFOyK5PjiWZd+QQIh+1jhdb9LpxTF0qs7Pm8o5QHYZ0M3vKqSqzsZaEB6oWlxZ+q2sJBMI/Ktgd2N5ZwQoRHfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "get-intrinsic": "^1.2.6",
        "object-keys": "^1.1.1",
        "safe-push-apply": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-parse": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/path-parse/-/path-parse-1.0.7.tgz",
      "integrity": "sha512-LDJzPVEEEPR+y48z93A0Ed0yXb8pAByGWo/k5YYdYgpY2/2EsOsksJrq7lOHxryrVOn1ejG6oAp8ahvOIQD8sw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.2.tgz",
      "integrity": "sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/possible-typed-array-names": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/possible-typed-array-names/-/possible-typed-array-names-1.1.0.tgz",
      "integrity": "sha512-/+5VFTchJDoVj3bhoqi6UeymcD00DAwb1nJwamzPvHEszJ4FpF6SNNbUbOS8yI56qHzdV8eK0qEfOSiodkTdxg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.15",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.15.tgz",
      "integrity": "sha512-FfR8sjd4em2T6fb3I2MwAJU7HWVMr9zba+enmQeeWFfCbm+UOC/0X4DS8XtpUTMwWMGbjKYP7xjfNekzyGmB3A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.12",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prop-types": {
      "version": "15.8.1",
      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.8.1.tgz",
      "integrity": "sha512-oj87CgZICdulUohogVAR7AjlC0327U4el4L6eAvOqCeudMDVU0NThNaV+b9Df4dXgSP1gXMTnPdhfe/2qDH5cg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "loose-envify": "^1.4.0",
        "object-assign": "^4.1.1",
        "react-is": "^16.13.1"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "19.2.4",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.4.tgz",
      "integrity": "sha512-9nfp2hYpCwOjAN+8TZFGhtWEwgvWHXqESH8qT89AT/lWklpLON22Lc8pEtnpsZz7VmawabSU0gCjnj8aC0euHQ==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.4",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.4.tgz",
      "integrity": "sha512-AXJdLo8kgMbimY95O2aKQqsz2iWi9jMgKJhRBAxECE4IFxfcazB2LmzloIoibJI3C12IlY20+KFaLv+71bUJeQ==",
      "license": "MIT",
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.4"
      }
    },
    "node_modules/react-is": {
      "version": "16.13.1",
      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",
      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/reflect.getprototypeof": {
      "version": "1.0.10",
      "resolved": "https://registry.npmjs.org/reflect.getprototypeof/-/reflect.getprototypeof-1.0.10.tgz",
      "integrity": "sha512-00o4I+DVrefhv+nX0ulyi3biSHCPDe+yLv5o/p6d/UVlirijB8E16FtfwSAi4g3tcqrQ4lRAqQSoFEZJehYEcw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.9",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.7",
        "get-proto": "^1.0.1",
        "which-builtin-type": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/regexp.prototype.flags": {
      "version": "1.5.4",
      "resolved": "https://registry.npmjs.org/regexp.prototype.flags/-/regexp.prototype.flags-1.5.4.tgz",
      "integrity": "sha512-dYqgNSZbDwkaJ2ceRd9ojCGjBq+mOm9LmtXnAnEGyHhN/5R7iDW2TRw3h+o/jCFxus3P2LfWIIiwowAjANm7IA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "define-properties": "^1.2.1",
        "es-errors": "^1.3.0",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "set-function-name": "^2.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve": {
      "version": "2.0.0-next.7",
      "resolved": "https://registry.npmjs.org/resolve/-/resolve-2.0.0-next.7.tgz",
      "integrity": "sha512-tqt+NBWwyaMgw3zDsnygx4CByWjQEJHOPMdslYhppaQSJUtL/D4JO9CcBBlhPoI8lz9oJIDXkwXfhF4aWqP8xQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "is-core-module": "^2.16.2",
        "node-exports-info": "^1.6.0",
        "object-keys": "^1.1.1",
        "path-parse": "^1.0.7",
        "supports-preserve-symlinks-flag": "^1.0.0"
      },
      "bin": {
        "resolve": "bin/resolve"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/resolve-pkg-maps": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/resolve-pkg-maps/-/resolve-pkg-maps-1.0.0.tgz",
      "integrity": "sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/privatenumber/resolve-pkg-maps?sponsor=1"
      }
    },
    "node_modules/reusify": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.1.0.tgz",
      "integrity": "sha512-g6QUff04oZpHs0eG5p83rFLhHeV00ug/Yf9nZM6fLeUrPguBTkTQOdpAWWspMh55TZfVQDPaN3NQJfbVRAxdIw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/safe-array-concat": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/safe-array-concat/-/safe-array-concat-1.1.4.tgz",
      "integrity": "sha512-wtZlHyOje6OZTGqAoaDKxFkgRtkF9CnHAVnCHKfuj200wAgL+bSJhdsCD2l0Qx/2ekEXjPWcyKkfGb5CPboslg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.9",
        "call-bound": "^1.0.4",
        "get-intrinsic": "^1.3.0",
        "has-symbols": "^1.1.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">=0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-push-apply": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/safe-push-apply/-/safe-push-apply-1.0.0.tgz",
      "integrity": "sha512-iKE9w/Z7xCzUMIZqdBsp6pEQvwuEebH4vdpjcDWnyzaI6yl6O9FHvVpmGelvEHNsoY6wGblkxR6Zty/h00WiSA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "isarray": "^2.0.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/safe-regex-test": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/safe-regex-test/-/safe-regex-test-1.1.0.tgz",
      "integrity": "sha512-x/+Cz4YrimQxQccJf5mKEbIa1NzeCRNI5Ecl/ekmlYaampdNLPalVyIcCZNNH3MvmqBugV5TMYZXv0ljslUlaw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "is-regex": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-function-name": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/set-function-name/-/set-function-name-2.0.2.tgz",
      "integrity": "sha512-7PGFlmtwsEADb0WYyvCMa1t+yke6daIG4Wirafur5kcf+MhUnPms1UeR0CKQdTZD81yESwMHbtn+TR+dMviakQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "functions-have-names": "^1.2.3",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/set-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/set-proto/-/set-proto-1.0.0.tgz",
      "integrity": "sha512-RJRdvCo6IAnPdsvP/7m6bsQqNnn1FCBX5ZNtFL98MmFF/4xAIJTIg1YbHW5DC2W5SKZanrC6i4HsJqlajw/dZw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "dunder-proto": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/sharp": {
      "version": "0.34.5",
      "resolved": "https://registry.npmjs.org/sharp/-/sharp-0.34.5.tgz",
      "integrity": "sha512-Ou9I5Ft9WNcCbXrU9cMgPBcCK8LiwLqcbywW3t4oDV37n1pzpuNLsYiAV8eODnjbtQlSDwZ2cUEeQz4E54Hltg==",
      "hasInstallScript": true,
      "license": "Apache-2.0",
      "optional": true,
      "dependencies": {
        "@img/colour": "^1.0.0",
        "detect-libc": "^2.1.2",
        "semver": "^7.7.3"
      },
      "engines": {
        "node": "^18.17.0 || ^20.3.0 || >=21.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/libvips"
      },
      "optionalDependencies": {
        "@img/sharp-darwin-arm64": "0.34.5",
        "@img/sharp-darwin-x64": "0.34.5",
        "@img/sharp-libvips-darwin-arm64": "1.2.4",
        "@img/sharp-libvips-darwin-x64": "1.2.4",
        "@img/sharp-libvips-linux-arm": "1.2.4",
        "@img/sharp-libvips-linux-arm64": "1.2.4",
        "@img/sharp-libvips-linux-ppc64": "1.2.4",
        "@img/sharp-libvips-linux-riscv64": "1.2.4",
        "@img/sharp-libvips-linux-s390x": "1.2.4",
        "@img/sharp-libvips-linux-x64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-arm64": "1.2.4",
        "@img/sharp-libvips-linuxmusl-x64": "1.2.4",
        "@img/sharp-linux-arm": "0.34.5",
        "@img/sharp-linux-arm64": "0.34.5",
        "@img/sharp-linux-ppc64": "0.34.5",
        "@img/sharp-linux-riscv64": "0.34.5",
        "@img/sharp-linux-s390x": "0.34.5",
        "@img/sharp-linux-x64": "0.34.5",
        "@img/sharp-linuxmusl-arm64": "0.34.5",
        "@img/sharp-linuxmusl-x64": "0.34.5",
        "@img/sharp-wasm32": "0.34.5",
        "@img/sharp-win32-arm64": "0.34.5",
        "@img/sharp-win32-ia32": "0.34.5",
        "@img/sharp-win32-x64": "0.34.5"
      }
    },
    "node_modules/sharp/node_modules/semver": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.8.0.tgz",
      "integrity": "sha512-AcM7dV/5ul4EekoQ29Agm5vri8JNqRyj39o0qpX6vDF2GZrtutZl5RwgD1XnZjiTAfncsJhMI48QQH3sN87YNA==",
      "license": "ISC",
      "optional": true,
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.1.tgz",
      "integrity": "sha512-mjn/0bi/oUURjc5Xl7IaWi/OJJJumuoJFQJfDDyO46+hBWsfaVM65TBHq2eoZBhzl9EchxOijpkbRC8SVBQU0w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.4"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stable-hash": {
      "version": "0.0.5",
      "resolved": "https://registry.npmjs.org/stable-hash/-/stable-hash-0.0.5.tgz",
      "integrity": "sha512-+L3ccpzibovGXFK+Ap/f8LOS0ahMrHTf3xu7mMLSpEGU0EO9ucaysSylKo9eRDFNhWve/y275iPmIZ4z39a9iA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/stop-iteration-iterator": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/stop-iteration-iterator/-/stop-iteration-iterator-1.1.0.tgz",
      "integrity": "sha512-eLoXW/DHyl62zxY4SCaIgnRhuMr6ri4juEYARS8E6sCEqzKpOiE521Ucofdx+KnDZl5xmvGYaaKCk5FEOxJCoQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "internal-slot": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.includes": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/string.prototype.includes/-/string.prototype.includes-2.0.1.tgz",
      "integrity": "sha512-o7+c9bW6zpAdJHTtujeePODAhkuicdAryFsfVKwA+wGw89wJ4GTY484WTucM9hLtDEOpOvI+aHnzqnC5lHp4Rg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.3"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/string.prototype.matchall": {
      "version": "4.0.12",
      "resolved": "https://registry.npmjs.org/string.prototype.matchall/-/string.prototype.matchall-4.0.12.tgz",
      "integrity": "sha512-6CC9uyBL+/48dYizRf7H7VAYCMCNTBeM78x/VTUe9bFEaxBepPJDa1Ow99LqI/1yF7kuy7Q3cQsYMrcjGUcskA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.3",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.6",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "get-intrinsic": "^1.2.6",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "internal-slot": "^1.1.0",
        "regexp.prototype.flags": "^1.5.3",
        "set-function-name": "^2.0.2",
        "side-channel": "^1.1.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.repeat": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/string.prototype.repeat/-/string.prototype.repeat-1.0.0.tgz",
      "integrity": "sha512-0u/TldDbKD8bFCQ/4f5+mNRrXwZ8hg2w7ZR8wa16e8z9XpePWl3eGEcUD0OXpEH/VJH/2G3gjUtR3ZOiBe2S/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.5"
      }
    },
    "node_modules/string.prototype.trim": {
      "version": "1.2.10",
      "resolved": "https://registry.npmjs.org/string.prototype.trim/-/string.prototype.trim-1.2.10.tgz",
      "integrity": "sha512-Rs66F0P/1kedk5lyYyH9uBzuiI/kNRmwJAR9quK6VOtIpZ2G+hMZd+HQbbv25MgCA6gEffoMZYxlTod4WcdrKA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-data-property": "^1.1.4",
        "define-properties": "^1.2.1",
        "es-abstract": "^1.23.5",
        "es-object-atoms": "^1.0.0",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimend": {
      "version": "1.0.9",
      "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.9.tgz",
      "integrity": "sha512-G7Ok5C6E/j4SGfyLCloXTrngQIQU3PWtXGst3yM7Bea9FRURf1S42ZHlZZtsNque2FN2PoUhfZXYLNWwEr4dLQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.2",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/string.prototype.trimstart": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.8.tgz",
      "integrity": "sha512-UXSH262CSZY1tfu3G3Secr6uGLCFVPMhIqHjlgCUtCCcgihYc/xKs9djMTMUOb2j1mVSeU8EU6NWc/iQKU6Gfg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "define-properties": "^1.2.1",
        "es-object-atoms": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/strip-bom": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha512-vavAMRXOgBVNF6nyEEmL3DBK19iRpDcoIwW+swQ+CbGiu7lju6t+JklA1MHweoWtadgt4ISVUsXLyDq34ddcwA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/styled-jsx": {
      "version": "5.1.6",
      "resolved": "https://registry.npmjs.org/styled-jsx/-/styled-jsx-5.1.6.tgz",
      "integrity": "sha512-qSVyDTeMotdvQYoHWLNGwRFJHC+i+ZvdBRYosOFgC+Wg1vx4frN2/RG/NA7SYqqvKNLf39P2LSRA2pu6n0XYZA==",
      "license": "MIT",
      "dependencies": {
        "client-only": "0.0.1"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "peerDependencies": {
        "react": ">= 16.8.0 || 17.x.x || ^18.0.0-0 || ^19.0.0-0"
      },
      "peerDependenciesMeta": {
        "@babel/core": {
          "optional": true
        },
        "babel-plugin-macros": {
          "optional": true
        }
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-preserve-symlinks-flag": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/supports-preserve-symlinks-flag/-/supports-preserve-symlinks-flag-1.0.0.tgz",
      "integrity": "sha512-ot0WnXS9fgdkgIcePe6RHNk1WA8+muPa6cSjeR3V8K27q9BB1rTE3R1p7Hv0z1ZyAc8s6Vvv8DIyWf681MAt0w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.3.0.tgz",
      "integrity": "sha512-y6nxMGB1nMW9R6k96e5gdIFzcfL/gTJRNaqGes1YvkLnPVXzWgbqFF2yLC0T8G774n24cx3Pe8XrKoniCOAH+Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.3.tgz",
      "integrity": "sha512-uxc/zpqFg6x7C8vOE7lh6Lbda8eEL9zmVm/PLeTPBRhh1xCgdWaQ+J1CUieGpIfm2HdtsUpRv+HshiasBMcc6A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.16",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.16.tgz",
      "integrity": "sha512-pn99VhoACYR8nFHhxqix+uvsbXineAasWm5ojXoN8xEwK5Kd3/TrhNn1wByuD52UxWRLy8pu+kRMniEi6Eq9Zg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.4"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.4",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.4.tgz",
      "integrity": "sha512-QP88BAKvMam/3NxH6vj2o21R6MjxZUAd6nlwAS/pnGvN9IVLocLHxGYIzFhg6fUQ+5th6P4dv4eW9jX3DSIj7A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/ts-api-utils": {
      "version": "2.5.0",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-2.5.0.tgz",
      "integrity": "sha512-OJ/ibxhPlqrMM0UiNHJ/0CKQkoKF243/AEmplt3qpRgkW8VG7IfOS41h7V8TjITqdByHzrjcS/2si+y4lIh8NA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.12"
      },
      "peerDependencies": {
        "typescript": ">=4.8.4"
      }
    },
    "node_modules/tsconfig-paths": {
      "version": "3.15.0",
      "resolved": "https://registry.npmjs.org/tsconfig-paths/-/tsconfig-paths-3.15.0.tgz",
      "integrity": "sha512-2Ac2RgzDe/cn48GvOe3M+o82pEFewD3UPbyoUHHdKasHwJKjds4fLXWf/Ux5kATBKN20oaFGu+jbElp1pos0mg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/json5": "^0.0.29",
        "json5": "^1.0.2",
        "minimist": "^1.2.6",
        "strip-bom": "^3.0.0"
      }
    },
    "node_modules/tsconfig-paths/node_modules/json5": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/json5/-/json5-1.0.2.tgz",
      "integrity": "sha512-g1MWMLBiz8FKi1e4w0UyVL3w+iJceWAFBAaBnnGKOpNa5f8TLktkbre1+s6oICydWAm+HRUGTmI+//xv2hvXYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.0"
      },
      "bin": {
        "json5": "lib/cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/typed-array-buffer": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-buffer/-/typed-array-buffer-1.0.3.tgz",
      "integrity": "sha512-nAYYwfY3qnzX30IkA6AQZjVbtK6duGontcQm1WSG1MD94YLqK0515GNApXkoxKOWMusVssAHWLh9SeaoefYFGw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "es-errors": "^1.3.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/typed-array-byte-length": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/typed-array-byte-length/-/typed-array-byte-length-1.0.3.tgz",
      "integrity": "sha512-BaXgOuIxz8n8pIq3e7Atg/7s+DpiYrxn4vdot3w9KbnBhcRQq6o3xemQdIfynqSeXeDrF32x+WvfzmOjPiY9lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.14"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-byte-offset": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/typed-array-byte-offset/-/typed-array-byte-offset-1.0.4.tgz",
      "integrity": "sha512-bTlAFB/FBYMcuX81gbL4OcpH5PmlFHqlCCpAl8AlEzMz5k53oNDvN8p1PNOWLEmI2x4orp3raOFB51tv9X+MFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "for-each": "^0.3.3",
        "gopd": "^1.2.0",
        "has-proto": "^1.2.0",
        "is-typed-array": "^1.1.15",
        "reflect.getprototypeof": "^1.0.9"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typed-array-length": {
      "version": "1.0.7",
      "resolved": "https://registry.npmjs.org/typed-array-length/-/typed-array-length-1.0.7.tgz",
      "integrity": "sha512-3KS2b+kL7fsuk/eJZ7EQdnEmQoaho/r6KUef7hxvltNA5DR8NAUM+8wJMbJyZ4G9/7i3v5zPBIMN5aybAh2/Jg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.7",
        "for-each": "^0.3.3",
        "gopd": "^1.0.1",
        "is-typed-array": "^1.1.13",
        "possible-typed-array-names": "^1.0.0",
        "reflect.getprototypeof": "^1.0.6"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.3",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.3.tgz",
      "integrity": "sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typescript-eslint": {
      "version": "8.59.4",
      "resolved": "https://registry.npmjs.org/typescript-eslint/-/typescript-eslint-8.59.4.tgz",
      "integrity": "sha512-Rw6+44QNFaXtgHSjPy+Kw8hrJniMYzR85E9yLmOLcfZ91/rz+JXQbDTCmc6ccxMPY6K6PgAq26f0JCBfR7LIPQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/eslint-plugin": "8.59.4",
        "@typescript-eslint/parser": "8.59.4",
        "@typescript-eslint/typescript-estree": "8.59.4",
        "@typescript-eslint/utils": "8.59.4"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^8.57.0 || ^9.0.0 || ^10.0.0",
        "typescript": ">=4.8.4 <6.1.0"
      }
    },
    "node_modules/unbox-primitive": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.1.0.tgz",
      "integrity": "sha512-nWJ91DjeOkej/TA8pXQ3myruKpKEYgqvpw9lz4OPHj/NWFNluYrjbz9j01CJ8yKQd2g4jFoOkINCTW2I5LEEyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.3",
        "has-bigints": "^1.0.2",
        "has-symbols": "^1.1.0",
        "which-boxed-primitive": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/undici-types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-6.21.0.tgz",
      "integrity": "sha512-iwDZqg0QAGrg9Rav5H4n0M64c3mkR59cJ6wQp+7C4nI0gsmExaedaYLNO44eT4AtBBwjbTiGPMlt2Md0T9H9JQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/unrs-resolver": {
      "version": "1.12.2",
      "resolved": "https://registry.npmjs.org/unrs-resolver/-/unrs-resolver-1.12.2.tgz",
      "integrity": "sha512-dmlRxBJJayXjqTwC+JtF1HhJmgf3ftQ3YejFcZrf4+KKtJv0qDsK1pjqaaVjG7wJ5NJ6UVP1OqRMQ71Z4C3rxQ==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "dependencies": {
        "napi-postinstall": "^0.3.4"
      },
      "funding": {
        "url": "https://opencollective.com/unrs-resolver"
      },
      "optionalDependencies": {
        "@unrs/resolver-binding-android-arm-eabi": "1.12.2",
        "@unrs/resolver-binding-android-arm64": "1.12.2",
        "@unrs/resolver-binding-darwin-arm64": "1.12.2",
        "@unrs/resolver-binding-darwin-x64": "1.12.2",
        "@unrs/resolver-binding-freebsd-x64": "1.12.2",
        "@unrs/resolver-binding-linux-arm-gnueabihf": "1.12.2",
        "@unrs/resolver-binding-linux-arm-musleabihf": "1.12.2",
        "@unrs/resolver-binding-linux-arm64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-arm64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-loong64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-loong64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-ppc64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-riscv64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-riscv64-musl": "1.12.2",
        "@unrs/resolver-binding-linux-s390x-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-x64-gnu": "1.12.2",
        "@unrs/resolver-binding-linux-x64-musl": "1.12.2",
        "@unrs/resolver-binding-openharmony-arm64": "1.12.2",
        "@unrs/resolver-binding-wasm32-wasi": "1.12.2",
        "@unrs/resolver-binding-win32-arm64-msvc": "1.12.2",
        "@unrs/resolver-binding-win32-ia32-msvc": "1.12.2",
        "@unrs/resolver-binding-win32-x64-msvc": "1.12.2"
      }
    },
    "node_modules/update-browserslist-db": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.2.3.tgz",
      "integrity": "sha512-Js0m9cx+qOgDxo0eMiFGEueWztz+d4+M3rGlmKPT+T4IS/jP4ylw3Nwpu6cpTTP8R1MAC1kF4VbdLt3ARf209w==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/which-boxed-primitive": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.1.1.tgz",
      "integrity": "sha512-TbX3mj8n0odCBFVlY8AxkqcHASw3L60jIuF8jFP78az3C2YhmGvqbHBpAjTRH2/xqYunrJ9g1jSyjCjpoWzIAA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-bigint": "^1.1.0",
        "is-boolean-object": "^1.2.1",
        "is-number-object": "^1.1.1",
        "is-string": "^1.1.1",
        "is-symbol": "^1.1.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-builtin-type": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/which-builtin-type/-/which-builtin-type-1.2.1.tgz",
      "integrity": "sha512-6iBczoX+kDQ7a3+YJBnh3T+KZRxM/iYNPXicqk66/Qfm1b93iu+yOImkg0zHbj5LNOcNv1TEADiZ0xa34B4q6Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "function.prototype.name": "^1.1.6",
        "has-tostringtag": "^1.0.2",
        "is-async-function": "^2.0.0",
        "is-date-object": "^1.1.0",
        "is-finalizationregistry": "^1.1.0",
        "is-generator-function": "^1.0.10",
        "is-regex": "^1.2.1",
        "is-weakref": "^1.0.2",
        "isarray": "^2.0.5",
        "which-boxed-primitive": "^1.1.0",
        "which-collection": "^1.0.2",
        "which-typed-array": "^1.1.16"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-collection": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/which-collection/-/which-collection-1.0.2.tgz",
      "integrity": "sha512-K4jVyjnBdgvc86Y6BkaLZEN933SwYOuBFkdmBu9ZfkcAbdVbpITnDmjvZ/aQjRXQrv5EPkTnD1s39GiiqbngCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-map": "^2.0.3",
        "is-set": "^2.0.3",
        "is-weakmap": "^2.0.2",
        "is-weakset": "^2.0.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/which-typed-array": {
      "version": "1.1.20",
      "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.20.tgz",
      "integrity": "sha512-LYfpUkmqwl0h9A2HL09Mms427Q1RZWuOHsukfVcKRq9q95iQxdw0ix1JQrqbcDR9PH1QDwf5Qo8OZb5lksZ8Xg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "available-typed-arrays": "^1.0.7",
        "call-bind": "^1.0.8",
        "call-bound": "^1.0.4",
        "for-each": "^0.3.5",
        "get-proto": "^1.0.1",
        "gopd": "^1.2.0",
        "has-tostringtag": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.4.3.tgz",
      "integrity": "sha512-ytENFjIJFl2UwYglde2jchW2Hwm4GJFLDiSXWdTrJQBIN9Fcyp7n4DhxJEiWNAJMV1/BqWfW/kkg71UDcHJyTQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}


--- ARCHIVO: C:\Users\Dell\dinco-web\package.json ---

{
  "name": "dinco-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "next": "16.2.6",
    "react": "19.2.4",
    "react-dom": "19.2.4"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.2.6",
    "tailwindcss": "^4",
    "typescript": "^5"
  }
}


--- ARCHIVO: C:\Users\Dell\dinco-web\postcss.config.mjs ---

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;


--- ARCHIVO: C:\Users\Dell\dinco-web\README.md ---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


--- ARCHIVO: C:\Users\Dell\dinco-web\tsconfig.json ---

{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}


--- ARCHIVO: C:\Users\Dell\dinco-web\tsconfig.tsbuildinfo ---

{"fileNames":["./node_modules/typescript/lib/lib.es5.d.ts","./node_modules/typescript/lib/lib.es2015.d.ts","./node_modules/typescript/lib/lib.es2016.d.ts","./node_modules/typescript/lib/lib.es2017.d.ts","./node_modules/typescript/lib/lib.es2018.d.ts","./node_modules/typescript/lib/lib.es2019.d.ts","./node_modules/typescript/lib/lib.es2020.d.ts","./node_modules/typescript/lib/lib.es2021.d.ts","./node_modules/typescript/lib/lib.es2022.d.ts","./node_modules/typescript/lib/lib.es2023.d.ts","./node_modules/typescript/lib/lib.es2024.d.ts","./node_modules/typescript/lib/lib.esnext.d.ts","./node_modules/typescript/lib/lib.dom.d.ts","./node_modules/typescript/lib/lib.dom.iterable.d.ts","./node_modules/typescript/lib/lib.es2015.core.d.ts","./node_modules/typescript/lib/lib.es2015.collection.d.ts","./node_modules/typescript/lib/lib.es2015.generator.d.ts","./node_modules/typescript/lib/lib.es2015.iterable.d.ts","./node_modules/typescript/lib/lib.es2015.promise.d.ts","./node_modules/typescript/lib/lib.es2015.proxy.d.ts","./node_modules/typescript/lib/lib.es2015.reflect.d.ts","./node_modules/typescript/lib/lib.es2015.symbol.d.ts","./node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts","./node_modules/typescript/lib/lib.es2016.array.include.d.ts","./node_modules/typescript/lib/lib.es2016.intl.d.ts","./node_modules/typescript/lib/lib.es2017.arraybuffer.d.ts","./node_modules/typescript/lib/lib.es2017.date.d.ts","./node_modules/typescript/lib/lib.es2017.object.d.ts","./node_modules/typescript/lib/lib.es2017.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2017.string.d.ts","./node_modules/typescript/lib/lib.es2017.intl.d.ts","./node_modules/typescript/lib/lib.es2017.typedarrays.d.ts","./node_modules/typescript/lib/lib.es2018.asyncgenerator.d.ts","./node_modules/typescript/lib/lib.es2018.asynciterable.d.ts","./node_modules/typescript/lib/lib.es2018.intl.d.ts","./node_modules/typescript/lib/lib.es2018.promise.d.ts","./node_modules/typescript/lib/lib.es2018.regexp.d.ts","./node_modules/typescript/lib/lib.es2019.array.d.ts","./node_modules/typescript/lib/lib.es2019.object.d.ts","./node_modules/typescript/lib/lib.es2019.string.d.ts","./node_modules/typescript/lib/lib.es2019.symbol.d.ts","./node_modules/typescript/lib/lib.es2019.intl.d.ts","./node_modules/typescript/lib/lib.es2020.bigint.d.ts","./node_modules/typescript/lib/lib.es2020.date.d.ts","./node_modules/typescript/lib/lib.es2020.promise.d.ts","./node_modules/typescript/lib/lib.es2020.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2020.string.d.ts","./node_modules/typescript/lib/lib.es2020.symbol.wellknown.d.ts","./node_modules/typescript/lib/lib.es2020.intl.d.ts","./node_modules/typescript/lib/lib.es2020.number.d.ts","./node_modules/typescript/lib/lib.es2021.promise.d.ts","./node_modules/typescript/lib/lib.es2021.string.d.ts","./node_modules/typescript/lib/lib.es2021.weakref.d.ts","./node_modules/typescript/lib/lib.es2021.intl.d.ts","./node_modules/typescript/lib/lib.es2022.array.d.ts","./node_modules/typescript/lib/lib.es2022.error.d.ts","./node_modules/typescript/lib/lib.es2022.intl.d.ts","./node_modules/typescript/lib/lib.es2022.object.d.ts","./node_modules/typescript/lib/lib.es2022.string.d.ts","./node_modules/typescript/lib/lib.es2022.regexp.d.ts","./node_modules/typescript/lib/lib.es2023.array.d.ts","./node_modules/typescript/lib/lib.es2023.collection.d.ts","./node_modules/typescript/lib/lib.es2023.intl.d.ts","./node_modules/typescript/lib/lib.es2024.arraybuffer.d.ts","./node_modules/typescript/lib/lib.es2024.collection.d.ts","./node_modules/typescript/lib/lib.es2024.object.d.ts","./node_modules/typescript/lib/lib.es2024.promise.d.ts","./node_modules/typescript/lib/lib.es2024.regexp.d.ts","./node_modules/typescript/lib/lib.es2024.sharedmemory.d.ts","./node_modules/typescript/lib/lib.es2024.string.d.ts","./node_modules/typescript/lib/lib.esnext.array.d.ts","./node_modules/typescript/lib/lib.esnext.collection.d.ts","./node_modules/typescript/lib/lib.esnext.intl.d.ts","./node_modules/typescript/lib/lib.esnext.disposable.d.ts","./node_modules/typescript/lib/lib.esnext.promise.d.ts","./node_modules/typescript/lib/lib.esnext.decorators.d.ts","./node_modules/typescript/lib/lib.esnext.iterator.d.ts","./node_modules/typescript/lib/lib.esnext.float16.d.ts","./node_modules/typescript/lib/lib.esnext.error.d.ts","./node_modules/typescript/lib/lib.esnext.sharedmemory.d.ts","./node_modules/typescript/lib/lib.decorators.d.ts","./node_modules/typescript/lib/lib.decorators.legacy.d.ts","./node_modules/@types/react/global.d.ts","./node_modules/csstype/index.d.ts","./node_modules/@types/react/index.d.ts","./node_modules/next/dist/styled-jsx/types/css.d.ts","./node_modules/next/dist/styled-jsx/types/macro.d.ts","./node_modules/next/dist/styled-jsx/types/style.d.ts","./node_modules/next/dist/styled-jsx/types/global.d.ts","./node_modules/next/dist/styled-jsx/types/index.d.ts","./node_modules/next/dist/server/get-page-files.d.ts","./node_modules/@types/node/compatibility/disposable.d.ts","./node_modules/@types/node/compatibility/indexable.d.ts","./node_modules/@types/node/compatibility/iterators.d.ts","./node_modules/@types/node/compatibility/index.d.ts","./node_modules/@types/node/globals.typedarray.d.ts","./node_modules/@types/node/buffer.buffer.d.ts","./node_modules/@types/node/globals.d.ts","./node_modules/@types/node/web-globals/abortcontroller.d.ts","./node_modules/@types/node/web-globals/domexception.d.ts","./node_modules/@types/node/web-globals/events.d.ts","./node_modules/undici-types/header.d.ts","./node_modules/undici-types/readable.d.ts","./node_modules/undici-types/file.d.ts","./node_modules/undici-types/fetch.d.ts","./node_modules/undici-types/formdata.d.ts","./node_modules/undici-types/connector.d.ts","./node_modules/undici-types/client.d.ts","./node_modules/undici-types/errors.d.ts","./node_modules/undici-types/dispatcher.d.ts","./node_modules/undici-types/global-dispatcher.d.ts","./node_modules/undici-types/global-origin.d.ts","./node_modules/undici-types/pool-stats.d.ts","./node_modules/undici-types/pool.d.ts","./node_modules/undici-types/handlers.d.ts","./node_modules/undici-types/balanced-pool.d.ts","./node_modules/undici-types/agent.d.ts","./node_modules/undici-types/mock-interceptor.d.ts","./node_modules/undici-types/mock-agent.d.ts","./node_modules/undici-types/mock-client.d.ts","./node_modules/undici-types/mock-pool.d.ts","./node_modules/undici-types/mock-errors.d.ts","./node_modules/undici-types/proxy-agent.d.ts","./node_modules/undici-types/env-http-proxy-agent.d.ts","./node_modules/undici-types/retry-handler.d.ts","./node_modules/undici-types/retry-agent.d.ts","./node_modules/undici-types/api.d.ts","./node_modules/undici-types/interceptors.d.ts","./node_modules/undici-types/util.d.ts","./node_modules/undici-types/cookies.d.ts","./node_modules/undici-types/patch.d.ts","./node_modules/undici-types/websocket.d.ts","./node_modules/undici-types/eventsource.d.ts","./node_modules/undici-types/filereader.d.ts","./node_modules/undici-types/diagnostics-channel.d.ts","./node_modules/undici-types/content-type.d.ts","./node_modules/undici-types/cache.d.ts","./node_modules/undici-types/index.d.ts","./node_modules/@types/node/web-globals/fetch.d.ts","./node_modules/@types/node/assert.d.ts","./node_modules/@types/node/assert/strict.d.ts","./node_modules/@types/node/async_hooks.d.ts","./node_modules/@types/node/buffer.d.ts","./node_modules/@types/node/child_process.d.ts","./node_modules/@types/node/cluster.d.ts","./node_modules/@types/node/console.d.ts","./node_modules/@types/node/constants.d.ts","./node_modules/@types/node/crypto.d.ts","./node_modules/@types/node/dgram.d.ts","./node_modules/@types/node/diagnostics_channel.d.ts","./node_modules/@types/node/dns.d.ts","./node_modules/@types/node/dns/promises.d.ts","./node_modules/@types/node/domain.d.ts","./node_modules/@types/node/events.d.ts","./node_modules/@types/node/fs.d.ts","./node_modules/@types/node/fs/promises.d.ts","./node_modules/@types/node/http.d.ts","./node_modules/@types/node/http2.d.ts","./node_modules/@types/node/https.d.ts","./node_modules/@types/node/inspector.generated.d.ts","./node_modules/@types/node/module.d.ts","./node_modules/@types/node/net.d.ts","./node_modules/@types/node/os.d.ts","./node_modules/@types/node/path.d.ts","./node_modules/@types/node/perf_hooks.d.ts","./node_modules/@types/node/process.d.ts","./node_modules/@types/node/punycode.d.ts","./node_modules/@types/node/querystring.d.ts","./node_modules/@types/node/readline.d.ts","./node_modules/@types/node/readline/promises.d.ts","./node_modules/@types/node/repl.d.ts","./node_modules/@types/node/sea.d.ts","./node_modules/@types/node/stream.d.ts","./node_modules/@types/node/stream/promises.d.ts","./node_modules/@types/node/stream/consumers.d.ts","./node_modules/@types/node/stream/web.d.ts","./node_modules/@types/node/string_decoder.d.ts","./node_modules/@types/node/test.d.ts","./node_modules/@types/node/timers.d.ts","./node_modules/@types/node/timers/promises.d.ts","./node_modules/@types/node/tls.d.ts","./node_modules/@types/node/trace_events.d.ts","./node_modules/@types/node/tty.d.ts","./node_modules/@types/node/url.d.ts","./node_modules/@types/node/util.d.ts","./node_modules/@types/node/v8.d.ts","./node_modules/@types/node/vm.d.ts","./node_modules/@types/node/wasi.d.ts","./node_modules/@types/node/worker_threads.d.ts","./node_modules/@types/node/zlib.d.ts","./node_modules/@types/node/index.d.ts","./node_modules/@types/react/canary.d.ts","./node_modules/@types/react/experimental.d.ts","./node_modules/@types/react-dom/index.d.ts","./node_modules/@types/react-dom/canary.d.ts","./node_modules/@types/react-dom/experimental.d.ts","./node_modules/next/dist/lib/fallback.d.ts","./node_modules/next/dist/compiled/webpack/webpack.d.ts","./node_modules/next/dist/shared/lib/modern-browserslist-target.d.ts","./node_modules/next/dist/shared/lib/entry-constants.d.ts","./node_modules/next/dist/shared/lib/constants.d.ts","./node_modules/next/dist/lib/bundler.d.ts","./node_modules/next/dist/server/config.d.ts","./node_modules/next/dist/lib/load-custom-routes.d.ts","./node_modules/next/dist/shared/lib/image-config.d.ts","./node_modules/next/dist/build/webpack/plugins/subresource-integrity-plugin.d.ts","./node_modules/next/dist/server/body-streams.d.ts","./node_modules/next/dist/server/request/search-params.d.ts","./node_modules/next/dist/shared/lib/segment-cache/vary-params-decoding.d.ts","./node_modules/next/dist/server/app-render/vary-params.d.ts","./node_modules/next/dist/server/request/params.d.ts","./node_modules/next/dist/server/route-kind.d.ts","./node_modules/next/dist/server/route-definitions/route-definition.d.ts","./node_modules/next/dist/server/route-matches/route-match.d.ts","./node_modules/next/dist/client/components/app-router-headers.d.ts","./node_modules/next/dist/server/lib/cache-control.d.ts","./node_modules/next/dist/shared/lib/app-router-types.d.ts","./node_modules/next/dist/server/lib/cache-handlers/types.d.ts","./node_modules/next/dist/server/use-cache/use-cache-wrapper.d.ts","./node_modules/next/dist/server/resume-data-cache/cache-store.d.ts","./node_modules/next/dist/server/resume-data-cache/resume-data-cache.d.ts","./node_modules/next/dist/lib/constants.d.ts","./node_modules/next/dist/server/render-result.d.ts","./node_modules/next/dist/server/response-cache/types.d.ts","./node_modules/next/dist/server/response-cache/index.d.ts","./node_modules/@types/react/jsx-runtime.d.ts","./node_modules/next/dist/next-devtools/userspace/pages/pages-dev-overlay-setup.d.ts","./node_modules/next/dist/build/static-paths/types.d.ts","./node_modules/next/dist/server/route-definitions/app-page-route-definition.d.ts","./node_modules/next/dist/build/adapter/setup-node-env.external.d.ts","./node_modules/next/dist/server/instrumentation/types.d.ts","./node_modules/next/dist/lib/setup-exception-listeners.d.ts","./node_modules/next/dist/lib/worker.d.ts","./node_modules/next/dist/server/lib/experimental/ppr.d.ts","./node_modules/next/dist/lib/page-types.d.ts","./node_modules/next/dist/build/segment-config/app/app-segment-config.d.ts","./node_modules/next/dist/build/segment-config/pages/pages-segment-config.d.ts","./node_modules/next/dist/build/analysis/get-page-static-info.d.ts","./node_modules/next/dist/build/webpack/loaders/get-module-build-info.d.ts","./node_modules/next/dist/build/webpack/plugins/middleware-plugin.d.ts","./node_modules/next/dist/server/require-hook.d.ts","./node_modules/next/dist/server/node-polyfill-crypto.d.ts","./node_modules/next/dist/server/node-environment-baseline.d.ts","./node_modules/next/dist/server/node-environment-extensions/error-inspect.d.ts","./node_modules/next/dist/server/node-environment-extensions/console-file.d.ts","./node_modules/next/dist/server/node-environment-extensions/console-exit.d.ts","./node_modules/next/dist/server/node-environment-extensions/console-dim.external.d.ts","./node_modules/next/dist/server/node-environment-extensions/unhandled-rejection.external.d.ts","./node_modules/next/dist/server/node-environment-extensions/random.d.ts","./node_modules/next/dist/server/node-environment-extensions/date.d.ts","./node_modules/next/dist/server/node-environment-extensions/web-crypto.d.ts","./node_modules/next/dist/server/node-environment-extensions/node-crypto.d.ts","./node_modules/next/dist/server/node-environment-extensions/fast-set-immediate.external.d.ts","./node_modules/next/dist/server/node-environment.d.ts","./node_modules/next/dist/build/page-extensions-type.d.ts","./node_modules/next/dist/server/route-modules/app-page/module.compiled.d.ts","./node_modules/next/dist/server/route-definitions/app-route-route-definition.d.ts","./node_modules/next/dist/server/lib/i18n-provider.d.ts","./node_modules/next/dist/server/web/next-url.d.ts","./node_modules/next/dist/compiled/@edge-runtime/cookies/index.d.ts","./node_modules/next/dist/server/web/spec-extension/cookies.d.ts","./node_modules/next/dist/server/web/spec-extension/request.d.ts","./node_modules/next/dist/shared/lib/deep-readonly.d.ts","./node_modules/next/dist/server/lib/incremental-cache/index.d.ts","./node_modules/next/dist/shared/lib/router/utils/middleware-route-matcher.d.ts","./node_modules/next/dist/build/webpack/plugins/flight-manifest-plugin.d.ts","./node_modules/next/dist/build/webpack/plugins/next-font-manifest-plugin.d.ts","./node_modules/next/dist/server/route-definitions/locale-route-definition.d.ts","./node_modules/next/dist/server/route-definitions/pages-route-definition.d.ts","./node_modules/next/dist/shared/lib/mitt.d.ts","./node_modules/next/dist/client/with-router.d.ts","./node_modules/next/dist/client/router.d.ts","./node_modules/next/dist/client/route-loader.d.ts","./node_modules/next/dist/client/page-loader.d.ts","./node_modules/next/dist/shared/lib/bloom-filter.d.ts","./node_modules/next/dist/shared/lib/router/router.d.ts","./node_modules/next/dist/shared/lib/router-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/loadable.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/image-config-context.shared-runtime.d.ts","./node_modules/next/dist/client/components/readonly-url-search-params.d.ts","./node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.d.ts","./node_modules/next/dist/client/flight-data-helpers.d.ts","./node_modules/next/dist/client/components/segment-cache/cache-key.d.ts","./node_modules/next/dist/client/components/router-reducer/fetch-server-response.d.ts","./node_modules/next/dist/client/components/segment-cache/types.d.ts","./node_modules/next/dist/shared/lib/segment-cache/segment-value-encoding.d.ts","./node_modules/next/dist/client/components/segment-cache/scheduler.d.ts","./node_modules/next/dist/client/components/segment-cache/cache-map.d.ts","./node_modules/next/dist/client/components/segment-cache/vary-path.d.ts","./node_modules/next/dist/client/components/segment-cache/cache.d.ts","./node_modules/next/dist/client/components/router-reducer/ppr-navigations.d.ts","./node_modules/next/dist/client/components/segment-cache/navigation.d.ts","./node_modules/next/dist/client/components/router-reducer/router-reducer-types.d.ts","./node_modules/next/dist/shared/lib/app-router-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.d.ts","./node_modules/next/dist/server/route-modules/pages/vendored/contexts/entrypoints.d.ts","./node_modules/next/dist/server/route-modules/pages/module.compiled.d.ts","./node_modules/next/dist/build/templates/pages.d.ts","./node_modules/next/dist/server/route-modules/pages/module.d.ts","./node_modules/next/dist/server/render.d.ts","./node_modules/next/dist/build/webpack/plugins/pages-manifest-plugin.d.ts","./node_modules/next/dist/server/route-definitions/pages-api-route-definition.d.ts","./node_modules/next/dist/server/route-matches/pages-api-route-match.d.ts","./node_modules/next/dist/server/route-matchers/route-matcher.d.ts","./node_modules/next/dist/server/route-matcher-providers/route-matcher-provider.d.ts","./node_modules/next/dist/server/route-matcher-managers/route-matcher-manager.d.ts","./node_modules/next/dist/server/normalizers/normalizer.d.ts","./node_modules/next/dist/server/normalizers/locale-route-normalizer.d.ts","./node_modules/next/dist/server/normalizers/request/pathname-normalizer.d.ts","./node_modules/next/dist/server/normalizers/request/suffix.d.ts","./node_modules/next/dist/server/normalizers/request/rsc.d.ts","./node_modules/next/dist/server/normalizers/request/next-data.d.ts","./node_modules/next/dist/server/after/builtin-request-context.d.ts","./node_modules/next/dist/server/normalizers/request/segment-prefix-rsc.d.ts","./node_modules/next/dist/server/route-modules/pages/builtin/_error.d.ts","./node_modules/next/dist/server/load-default-error-components.d.ts","./node_modules/next/dist/server/base-server.d.ts","./node_modules/next/dist/server/after/after.d.ts","./node_modules/next/dist/server/after/after-context.d.ts","./node_modules/next/dist/server/use-cache/cache-life.d.ts","./node_modules/next/dist/server/app-render/work-async-storage-instance.d.ts","./node_modules/next/dist/server/lib/lazy-result.d.ts","./node_modules/next/dist/server/app-render/create-error-handler.d.ts","./node_modules/next/dist/shared/lib/action-revalidation-kind.d.ts","./node_modules/next/dist/server/app-render/work-async-storage.external.d.ts","./node_modules/next/dist/server/async-storage/work-store.d.ts","./node_modules/next/dist/server/web/http.d.ts","./node_modules/next/dist/client/components/hooks-server-context.d.ts","./node_modules/next/dist/server/route-modules/app-route/shared-modules.d.ts","./node_modules/next/dist/client/components/redirect-status-code.d.ts","./node_modules/next/dist/client/components/redirect-error.d.ts","./node_modules/next/dist/server/web/spec-extension/adapters/request-cookies.d.ts","./node_modules/next/dist/server/async-storage/draft-mode-provider.d.ts","./node_modules/next/dist/server/web/spec-extension/adapters/headers.d.ts","./node_modules/next/dist/server/app-render/cache-signal.d.ts","./node_modules/next/dist/server/app-render/instant-validation/boundary-tracking.d.ts","./node_modules/next/dist/server/app-render/instant-validation/instant-validation-error.d.ts","./node_modules/next/dist/shared/lib/router/utils/parse-relative-url.d.ts","./node_modules/next/dist/server/app-render/instant-validation/instant-samples.d.ts","./node_modules/next/dist/server/app-render/dynamic-rendering.d.ts","./node_modules/next/dist/server/app-render/work-unit-async-storage-instance.d.ts","./node_modules/next/dist/server/lib/implicit-tags.d.ts","./node_modules/next/dist/server/app-render/staged-rendering.d.ts","./node_modules/next/dist/server/app-render/work-unit-async-storage.external.d.ts","./node_modules/next/dist/build/templates/app-route.d.ts","./node_modules/next/dist/server/app-render/action-async-storage-instance.d.ts","./node_modules/next/dist/server/app-render/action-async-storage.external.d.ts","./node_modules/next/dist/server/route-modules/app-route/module.d.ts","./node_modules/next/dist/server/route-modules/app-route/module.compiled.d.ts","./node_modules/next/dist/build/segment-config/app/app-segments.d.ts","./node_modules/next/dist/build/get-supported-browsers.d.ts","./node_modules/next/dist/build/utils.d.ts","./node_modules/next/dist/build/rendering-mode.d.ts","./node_modules/next/dist/server/lib/router-utils/build-prefetch-segment-data-route.d.ts","./node_modules/next/dist/server/lib/cpu-profile.d.ts","./node_modules/next/dist/build/turborepo-access-trace/types.d.ts","./node_modules/next/dist/build/turborepo-access-trace/result.d.ts","./node_modules/next/dist/build/turborepo-access-trace/helpers.d.ts","./node_modules/next/dist/build/turborepo-access-trace/index.d.ts","./node_modules/next/dist/export/routes/types.d.ts","./node_modules/next/dist/export/types.d.ts","./node_modules/next/dist/export/worker.d.ts","./node_modules/next/dist/build/worker.d.ts","./node_modules/next/dist/build/index.d.ts","./node_modules/next/dist/lib/coalesced-function.d.ts","./node_modules/next/dist/server/lib/router-utils/types.d.ts","./node_modules/next/dist/trace/types.d.ts","./node_modules/next/dist/trace/trace.d.ts","./node_modules/next/dist/trace/shared.d.ts","./node_modules/next/dist/trace/index.d.ts","./node_modules/next/dist/build/load-jsconfig.d.ts","./node_modules/@next/env/dist/index.d.ts","./node_modules/next/dist/build/webpack/plugins/telemetry-plugin/use-cache-tracker-utils.d.ts","./node_modules/next/dist/build/webpack/plugins/telemetry-plugin/telemetry-plugin.d.ts","./node_modules/next/dist/telemetry/storage.d.ts","./node_modules/next/dist/build/build-context.d.ts","./node_modules/next/dist/build/webpack-config.d.ts","./node_modules/next/dist/build/swc/generated-native.d.ts","./node_modules/next/dist/build/define-env.d.ts","./node_modules/next/dist/build/swc/index.d.ts","./node_modules/next/dist/build/swc/types.d.ts","./node_modules/next/dist/server/dev/parse-version-info.d.ts","./node_modules/next/dist/next-devtools/shared/types.d.ts","./node_modules/next/dist/server/dev/dev-indicator-server-state.d.ts","./node_modules/next/dist/next-devtools/dev-overlay/cache-indicator.d.ts","./node_modules/next/dist/server/lib/parse-stack.d.ts","./node_modules/next/dist/next-devtools/server/shared.d.ts","./node_modules/next/dist/next-devtools/shared/stack-frame.d.ts","./node_modules/next/dist/next-devtools/dev-overlay/utils/get-error-by-type.d.ts","./node_modules/next/dist/next-devtools/dev-overlay/container/runtime-error/render-error.d.ts","./node_modules/next/dist/next-devtools/dev-overlay/shared.d.ts","./node_modules/next/dist/server/dev/debug-channel.d.ts","./node_modules/next/dist/server/dev/hot-reloader-types.d.ts","./node_modules/next/dist/server/web/spec-extension/fetch-event.d.ts","./node_modules/next/dist/server/web/spec-extension/response.d.ts","./node_modules/next/dist/build/segment-config/middleware/middleware-config.d.ts","./node_modules/next/dist/server/web/types.d.ts","./node_modules/next/dist/shared/lib/router/utils/parse-url.d.ts","./node_modules/next/dist/server/base-http/node.d.ts","./node_modules/next/dist/server/lib/async-callback-set.d.ts","./node_modules/next/dist/shared/lib/router/utils/route-regex.d.ts","./node_modules/next/dist/shared/lib/router/utils/route-matcher.d.ts","./node_modules/sharp/lib/index.d.ts","./node_modules/next/dist/server/image-optimizer.d.ts","./node_modules/next/dist/server/next-server.d.ts","./node_modules/next/dist/server/lib/types.d.ts","./node_modules/next/dist/server/lib/lru-cache.d.ts","./node_modules/next/dist/server/lib/dev-bundler-service.d.ts","./node_modules/next/dist/server/dev/static-paths-worker.d.ts","./node_modules/next/dist/server/dev/next-dev-server.d.ts","./node_modules/next/dist/server/next.d.ts","./node_modules/next/dist/server/lib/render-server.d.ts","./node_modules/next/dist/server/lib/router-server.d.ts","./node_modules/next/dist/shared/lib/router/utils/path-match.d.ts","./node_modules/next/dist/server/lib/router-utils/filesystem.d.ts","./node_modules/next/dist/server/lib/router-utils/setup-dev-bundler.d.ts","./node_modules/next/dist/server/lib/router-utils/router-server-context.d.ts","./node_modules/next/dist/server/route-modules/route-module.d.ts","./node_modules/next/dist/server/load-components.d.ts","./node_modules/next/dist/server/web/adapter.d.ts","./node_modules/next/dist/server/app-render/types.d.ts","./node_modules/next/dist/build/webpack/loaders/metadata/types.d.ts","./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.d.ts","./node_modules/next/dist/server/lib/app-dir-module.d.ts","./node_modules/next/dist/server/app-render/app-render.d.ts","./node_modules/next/dist/server/route-modules/app-page/vendored/contexts/entrypoints.d.ts","./node_modules/next/dist/client/components/error-boundary.d.ts","./node_modules/next/dist/client/components/layout-router.d.ts","./node_modules/next/dist/client/components/render-from-template-context.d.ts","./node_modules/next/dist/client/components/client-page.d.ts","./node_modules/next/dist/client/components/client-segment.d.ts","./node_modules/next/dist/client/components/http-access-fallback/error-boundary.d.ts","./node_modules/next/dist/lib/metadata/types/alternative-urls-types.d.ts","./node_modules/next/dist/lib/metadata/types/extra-types.d.ts","./node_modules/next/dist/lib/metadata/types/metadata-types.d.ts","./node_modules/next/dist/lib/metadata/types/manifest-types.d.ts","./node_modules/next/dist/lib/metadata/types/opengraph-types.d.ts","./node_modules/next/dist/lib/metadata/types/twitter-types.d.ts","./node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts","./node_modules/next/dist/lib/metadata/types/resolvers.d.ts","./node_modules/next/dist/lib/metadata/types/icons.d.ts","./node_modules/next/dist/lib/metadata/resolve-metadata.d.ts","./node_modules/next/dist/lib/metadata/metadata.d.ts","./node_modules/next/dist/lib/framework/boundary-components.d.ts","./node_modules/next/dist/server/app-render/rsc/preloads.d.ts","./node_modules/next/dist/server/app-render/rsc/postpone.d.ts","./node_modules/next/dist/server/app-render/rsc/taint.d.ts","./node_modules/next/dist/server/app-render/collect-segment-data.d.ts","./node_modules/next/dist/server/app-render/instant-validation/instant-validation.d.ts","./node_modules/next/dist/next-devtools/userspace/app/segment-explorer-node.d.ts","./node_modules/next/dist/server/app-render/entry-base.d.ts","./node_modules/next/dist/build/templates/app-page.d.ts","./node_modules/next/dist/server/route-modules/app-page/helpers/prerender-manifest-matcher.d.ts","./node_modules/@types/react/jsx-dev-runtime.d.ts","./node_modules/@types/react/compiler-runtime.d.ts","./node_modules/next/dist/server/route-modules/app-page/vendored/rsc/entrypoints.d.ts","./node_modules/@types/react-dom/client.d.ts","./node_modules/@types/react-dom/static.d.ts","./node_modules/@types/react-dom/server.d.ts","./node_modules/next/dist/server/route-modules/app-page/vendored/ssr/entrypoints.d.ts","./node_modules/next/dist/server/route-modules/app-page/module.d.ts","./node_modules/next/dist/server/request/fallback-params.d.ts","./node_modules/next/dist/server/web/spec-extension/image-response.d.ts","./node_modules/next/dist/server/web/spec-extension/user-agent.d.ts","./node_modules/next/dist/server/web/spec-extension/url-pattern.d.ts","./node_modules/next/dist/server/after/index.d.ts","./node_modules/next/dist/server/request/connection.d.ts","./node_modules/next/dist/server/web/exports/index.d.ts","./node_modules/next/dist/server/request-meta.d.ts","./node_modules/next/dist/cli/next-test.d.ts","./node_modules/next/dist/shared/lib/size-limit.d.ts","./node_modules/next/dist/server/config-shared.d.ts","./node_modules/next/dist/server/base-http/index.d.ts","./node_modules/next/dist/server/api-utils/index.d.ts","./node_modules/next/dist/build/adapter/build-complete.d.ts","./node_modules/next/dist/types.d.ts","./node_modules/next/dist/shared/lib/html-context.shared-runtime.d.ts","./node_modules/next/dist/shared/lib/utils.d.ts","./node_modules/next/dist/pages/_app.d.ts","./node_modules/next/app.d.ts","./node_modules/next/dist/server/web/spec-extension/unstable-cache.d.ts","./node_modules/next/dist/server/web/spec-extension/revalidate.d.ts","./node_modules/next/dist/server/web/spec-extension/unstable-no-store.d.ts","./node_modules/next/dist/server/use-cache/cache-tag.d.ts","./node_modules/next/cache.d.ts","./node_modules/next/dist/pages/_document.d.ts","./node_modules/next/document.d.ts","./node_modules/next/dist/shared/lib/dynamic.d.ts","./node_modules/next/dynamic.d.ts","./node_modules/next/dist/pages/_error.d.ts","./node_modules/next/dist/client/components/catch-error.d.ts","./node_modules/next/dist/api/error.d.ts","./node_modules/next/error.d.ts","./node_modules/next/dist/shared/lib/head.d.ts","./node_modules/next/head.d.ts","./node_modules/next/dist/server/request/cookies.d.ts","./node_modules/next/dist/server/request/headers.d.ts","./node_modules/next/dist/server/request/draft-mode.d.ts","./node_modules/next/headers.d.ts","./node_modules/next/dist/shared/lib/get-img-props.d.ts","./node_modules/next/dist/client/image-component.d.ts","./node_modules/next/dist/shared/lib/image-external.d.ts","./node_modules/next/image.d.ts","./node_modules/next/dist/client/link.d.ts","./node_modules/next/link.d.ts","./node_modules/next/dist/client/components/unrecognized-action-error.d.ts","./node_modules/next/dist/client/components/redirect.d.ts","./node_modules/next/dist/client/components/not-found.d.ts","./node_modules/next/dist/client/components/forbidden.d.ts","./node_modules/next/dist/client/components/unauthorized.d.ts","./node_modules/next/dist/client/components/unstable-rethrow.server.d.ts","./node_modules/next/dist/client/components/unstable-rethrow.d.ts","./node_modules/next/dist/client/components/navigation.react-server.d.ts","./node_modules/next/dist/client/components/navigation.d.ts","./node_modules/next/navigation.d.ts","./node_modules/next/router.d.ts","./node_modules/next/dist/client/script.d.ts","./node_modules/next/script.d.ts","./node_modules/next/dist/compiled/@edge-runtime/primitives/url.d.ts","./node_modules/next/dist/compiled/@vercel/og/satori/index.d.ts","./node_modules/next/dist/compiled/@vercel/og/types.d.ts","./node_modules/next/server.d.ts","./node_modules/next/types/global.d.ts","./node_modules/next/types/compiled.d.ts","./node_modules/next/types.d.ts","./node_modules/next/index.d.ts","./node_modules/next/image-types/global.d.ts","./.next/dev/types/routes.d.ts","./next-env.d.ts","./next.config.ts","./node_modules/next/dist/compiled/@next/font/dist/types.d.ts","./node_modules/next/dist/compiled/@next/font/dist/google/index.d.ts","./node_modules/next/font/google/index.d.ts","./app/layout.tsx","./components/navbar.tsx","./components/hero.tsx","./components/seccionregiones.tsx","./components/propiedadesdestacadas.tsx","./components/seccionagentes.tsx","./components/seccionpostulacion.tsx","./components/presenciasocial.tsx","./app/page.tsx","./components/footer.tsx","./components/testimonios.tsx","./.next/types/cache-life.d.ts","./.next/types/routes.d.ts","./.next/types/validator.ts","./.next/dev/types/cache-life.d.ts","./.next/dev/types/validator.ts","./node_modules/@types/estree/index.d.ts","./node_modules/@types/json-schema/index.d.ts","./node_modules/@types/json5/index.d.ts"],"fileIdsList":[[97,143,483,484,485,486,547],[97,143,547,550],[97,143,226,527,530,536,544,547,550],[97,143,483,484,485,486,550],[97,143,226,527,536,544,547,548,550],[97,143,226,525,528,535,547,550],[97,143,226,537,538,539,540,541,542,543,547,550],[97,143,226,507,547,550],[85,97,143,226,547,550],[85,97,143,226,505,507,547,550],[97,143,528,529,530,547,550],[97,143,226,528,547,550],[97,140,143,547,550],[97,142,143,547,550],[143,547,550],[97,143,148,176,547,550],[97,143,144,149,154,162,173,184,547,550],[97,143,144,145,154,162,547,550],[92,93,94,97,143,547,550],[97,143,146,185,547,550],[97,143,147,148,155,163,547,550],[97,143,148,173,181,547,550],[97,143,149,151,154,162,547,550],[97,142,143,150,547,550],[97,143,151,152,547,550],[97,143,153,154,547,550],[97,142,143,154,547,550],[97,143,154,155,156,173,184,547,550],[97,143,154,155,156,169,173,176,547,550],[97,143,151,154,157,162,173,184,547,550],[97,143,154,155,157,158,162,173,181,184,547,550],[97,143,157,159,173,181,184,547,550],[95,96,97,98,99,100,101,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,547,550],[97,143,154,160,547,550],[97,143,161,184,189,547,550],[97,143,151,154,162,173,547,550],[97,143,163,547,550],[97,143,164,547,550],[97,142,143,165,547,550],[97,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,547,550],[97,143,167,547,550],[97,143,168,547,550],[97,143,154,169,170,547,550],[97,143,169,171,185,187,547,550],[97,143,154,173,174,176,547,550],[97,143,175,176,547,550],[97,143,173,174,547,550],[97,143,176,547,550],[97,143,177,547,550],[97,140,143,173,178,547,550],[97,143,154,179,180,547,550],[97,143,179,180,547,550],[97,143,148,162,173,181,547,550],[97,143,182,547,550],[97,143,162,183,547,550],[97,143,157,168,184,547,550],[97,143,148,185,547,550],[97,143,173,186,547,550],[97,143,161,187,547,550],[97,143,188,547,550],[97,138,143,547,550],[97,138,143,154,156,165,173,176,184,187,189,547,550],[97,143,173,190,547,550],[85,89,97,143,192,193,194,196,478,523,547,550],[85,97,143,547,550],[85,89,97,143,192,193,194,195,459,478,523,547,550],[85,89,97,143,192,193,195,196,478,523,547,550],[85,97,143,196,459,460,547,550],[85,97,143,196,459,547,550],[85,89,97,143,193,194,195,196,478,523,547,550],[85,89,97,143,192,194,195,196,478,523,547,550],[83,84,97,143,547,550],[97,143,481,547,550],[97,143,483,484,485,486,547,550],[97,143,429,492,493,547,550],[97,143,201,202,204,216,240,355,366,474,547,550],[97,143,204,235,236,237,239,474,547,550],[97,143,204,372,374,376,377,379,474,476,547,550],[97,143,204,238,275,474,547,550],[97,143,202,204,215,216,222,228,233,354,355,356,365,474,476,547,550],[97,143,474,547,550],[97,143,211,217,236,256,351,547,550],[97,143,204,547,550],[97,143,197,211,217,547,550],[97,143,383,547,550],[97,143,380,381,383,547,550],[97,143,380,382,474,547,550],[97,143,157,256,453,471,547,550],[97,143,157,327,330,346,351,471,547,550],[97,143,157,299,471,547,550],[97,143,359,547,550],[97,143,358,359,360,547,550],[97,143,358,547,550],[91,97,143,157,197,204,216,222,228,234,236,240,241,254,255,322,352,353,366,474,478,547,550],[97,143,201,204,238,275,372,373,378,474,526,547,550],[97,143,238,526,547,550],[97,143,201,255,424,474,526,547,550],[97,143,526,547,550],[97,143,204,238,239,526,547,550],[97,143,375,526,547,550],[97,143,241,354,357,364,547,550],[85,97,143,429,547,550],[97,143,168,211,226,547,550],[97,143,211,226,547,550],[85,97,143,296,547,550],[85,97,143,217,226,429,547,550],[97,143,211,282,296,297,508,515,547,550],[97,143,281,509,510,511,512,514,547,550],[97,143,332,547,550],[97,143,332,333,547,550],[97,143,215,217,284,285,547,550],[97,143,217,291,292,547,550],[97,143,217,286,294,547,550],[97,143,291,547,550],[97,143,209,217,284,285,286,287,288,289,290,291,294,547,550],[97,143,217,284,291,292,293,295,547,550],[97,143,217,285,287,288,547,550],[97,143,285,287,290,292,547,550],[97,143,513,547,550],[97,143,217,547,550],[85,97,143,205,502,547,550],[85,97,143,184,547,550],[85,97,143,238,273,547,550],[85,97,143,238,366,547,550],[97,143,271,276,547,550],[85,97,143,272,480,547,550],[97,143,533,547,550],[85,89,97,143,157,192,193,194,195,196,478,522,547,550],[97,143,157,217,547,550],[97,143,157,216,221,302,319,361,362,366,421,423,474,475,547,550],[97,143,254,363,547,550],[97,143,478,547,550],[97,143,203,547,550],[85,97,143,208,211,426,442,444,547,550],[97,143,168,211,426,441,442,443,525,547,550],[97,143,435,436,437,438,439,440,547,550],[97,143,437,547,550],[97,143,441,547,550],[97,143,226,390,391,393,547,550],[85,97,143,217,384,385,386,387,392,547,550],[97,143,390,392,547,550],[97,143,388,547,550],[97,143,389,547,550],[85,97,143,226,272,480,547,550],[85,97,143,226,479,480,547,550],[85,97,143,226,480,547,550],[97,143,319,320,547,550],[97,143,320,547,550],[97,143,157,475,480,547,550],[97,143,349,547,550],[97,142,143,348,547,550],[97,143,211,217,223,225,327,340,344,346,423,426,463,464,471,475,547,550],[97,143,217,266,288,547,550],[97,143,327,338,341,346,547,550],[85,97,143,208,211,327,330,346,349,383,430,431,432,433,434,445,446,447,448,449,450,451,452,526,547,550],[97,143,208,211,236,327,334,335,336,339,340,547,550],[97,143,173,217,236,338,345,426,427,471,547,550],[97,143,342,547,550],[97,143,157,168,205,217,221,231,263,264,267,319,322,387,421,422,463,474,475,476,478,526,547,550],[97,143,208,209,211,547,550],[97,143,327,547,550],[97,142,143,236,263,264,321,322,323,324,325,326,475,547,550],[97,143,346,547,550],[97,142,143,210,211,221,225,261,327,334,335,336,337,338,341,342,343,344,345,464,547,550],[97,143,157,261,262,334,475,476,547,550],[97,143,236,264,319,322,327,423,475,547,550],[97,143,157,474,476,547,550],[97,143,157,173,471,475,476,547,550],[97,143,157,168,197,211,216,223,225,228,231,238,258,263,264,265,266,267,302,303,305,308,310,313,314,315,316,318,366,421,423,471,474,475,476,547,550],[97,143,157,173,547,550],[97,143,204,205,206,234,471,472,473,478,480,526,547,550],[97,143,201,202,474,547,550],[97,143,395,547,550],[97,143,157,173,184,213,379,383,384,385,386,387,393,394,526,547,550],[97,143,168,184,197,211,213,225,228,264,303,308,318,319,372,399,400,401,407,410,411,421,423,471,474,547,550],[97,143,228,234,241,254,264,322,474,547,550],[97,143,157,184,205,216,225,264,405,471,474,547,550],[97,143,425,547,550],[97,143,157,395,408,409,418,547,550],[97,143,471,474,547,550],[97,143,324,464,547,550],[97,143,225,263,366,480,547,550],[97,143,157,168,203,308,368,372,401,407,410,413,471,547,550],[97,143,157,241,254,372,414,547,550],[97,143,204,265,366,416,474,476,547,550],[97,143,157,184,387,474,547,550],[97,143,157,238,265,366,367,368,377,395,415,417,474,547,550],[91,97,143,157,263,420,478,480,547,550],[97,143,317,421,547,550],[97,143,157,168,211,214,216,217,223,225,231,240,241,254,264,267,303,305,315,318,319,366,399,400,401,402,404,406,421,423,471,480,547,550],[97,143,157,173,241,407,412,418,471,547,550],[97,143,244,245,246,247,248,249,250,251,252,253,547,550],[97,143,258,309,547,550],[97,143,311,547,550],[97,143,309,547,550],[97,143,311,312,547,550],[97,143,157,215,216,217,221,222,475,547,550],[97,143,157,168,203,205,223,227,263,266,267,301,421,471,476,478,480,547,550],[97,143,157,168,184,207,214,215,225,227,264,419,464,470,475,547,550],[97,143,334,547,550],[97,143,335,547,550],[97,143,217,228,463,547,550],[97,143,336,547,550],[97,143,210,547,550],[97,143,212,224,547,550],[97,143,157,212,216,223,547,550],[97,143,219,224,547,550],[97,143,220,547,550],[97,143,212,213,547,550],[97,143,212,268,547,550],[97,143,212,547,550],[97,143,214,258,307,547,550],[97,143,306,547,550],[97,143,211,213,214,547,550],[97,143,214,304,547,550],[97,143,211,213,547,550],[97,143,263,366,547,550],[97,143,463,547,550],[97,143,157,184,223,225,229,263,366,420,423,426,427,428,454,455,458,462,464,471,475,547,550],[97,143,277,280,282,283,296,297,547,550],[85,97,143,194,196,226,456,457,547,550],[85,97,143,194,196,226,456,457,461,547,550],[97,143,350,547,550],[97,143,236,257,262,263,327,328,329,330,331,333,346,347,349,352,420,423,474,476,547,550],[97,143,296,547,550],[97,143,157,301,471,547,550],[97,143,301,547,550],[97,143,157,223,269,298,300,302,420,471,478,480,547,550],[97,143,277,278,279,280,282,283,296,297,479,547,550],[91,97,143,157,168,184,212,213,225,231,263,264,267,366,418,419,421,471,474,475,478,547,550],[97,143,208,211,218,547,550],[97,143,262,264,396,399,547,550],[97,143,262,397,465,466,467,468,469,547,550],[97,143,157,258,474,547,550],[97,143,157,547,550],[97,143,261,346,547,550],[97,143,260,547,550],[97,143,262,315,547,550],[97,143,259,261,474,547,550],[97,143,157,207,262,396,397,398,471,474,475,547,550],[85,97,143,211,217,295,547,550],[85,97,143,209,547,550],[97,143,199,200,547,550],[85,97,143,205,547,550],[85,97,143,211,281,547,550],[85,91,97,143,263,267,478,480,547,550],[97,143,205,502,503,547,550],[85,97,143,276,547,550],[85,97,143,168,184,203,270,272,274,275,480,547,550],[97,143,211,238,475,547,550],[97,143,211,403,547,550],[85,97,143,155,157,168,201,203,276,374,478,479,547,550],[85,97,143,192,193,194,195,196,478,523,547,550],[85,86,87,88,89,97,143,547,550],[97,143,148,547,550],[97,143,369,370,371,547,550],[97,143,369,547,550],[85,89,97,143,157,159,168,191,192,193,194,195,196,197,203,231,236,413,441,476,477,480,523,547,550],[97,143,488,547,550],[97,143,490,547,550],[97,143,494,547,550],[97,143,534,547,550],[97,143,496,547,550],[97,143,498,499,500,547,550],[97,143,504,547,550],[90,97,143,482,487,489,491,495,497,501,505,507,517,518,520,524,525,526,527,547,550],[97,143,506,547,550],[97,143,516,547,550],[97,143,272,547,550],[97,143,519,547,550],[97,142,143,262,396,397,399,465,466,468,469,521,523,547,550],[97,143,191,547,550],[97,143,173,191,547,550],[97,110,114,143,184,547,550],[97,110,143,173,184,547,550],[97,105,143,547,550],[97,107,110,143,181,184,547,550],[97,143,162,181,547,550],[97,105,143,191,547,550],[97,107,110,143,162,184,547,550],[97,102,103,106,109,143,154,173,184,547,550],[97,110,117,143,547,550],[97,102,108,143,547,550],[97,110,131,132,143,547,550],[97,106,110,143,176,184,191,547,550],[97,131,143,191,547,550],[97,104,105,143,191,547,550],[97,110,143,547,550],[97,104,105,106,107,108,109,110,111,112,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,132,133,134,135,136,137,143,547,550],[97,110,125,143,547,550],[97,110,117,118,143,547,550],[97,108,110,118,119,143,547,550],[97,109,143,547,550],[97,102,105,110,143,547,550],[97,110,114,118,119,143,547,550],[97,114,143,547,550],[97,108,110,113,143,184,547,550],[97,102,107,110,117,143,547,550],[97,143,173,547,550],[97,105,110,131,143,189,191,547,550]],"fileInfos":[{"version":"c430d44666289dae81f30fa7b2edebf186ecc91a2d4c71266ea6ae76388792e1","affectsGlobalScope":true,"impliedFormat":1},{"version":"45b7ab580deca34ae9729e97c13cfd999df04416a79116c3bfb483804f85ded4","impliedFormat":1},{"version":"3facaf05f0c5fc569c5649dd359892c98a85557e3e0c847964caeb67076f4d75","impliedFormat":1},{"version":"e44bb8bbac7f10ecc786703fe0a6a4b952189f908707980ba8f3c8975a760962","impliedFormat":1},{"version":"5e1c4c362065a6b95ff952c0eab010f04dcd2c3494e813b493ecfd4fcb9fc0d8","impliedFormat":1},{"version":"68d73b4a11549f9c0b7d352d10e91e5dca8faa3322bfb77b661839c42b1ddec7","impliedFormat":1},{"version":"5efce4fc3c29ea84e8928f97adec086e3dc876365e0982cc8479a07954a3efd4","impliedFormat":1},{"version":"feecb1be483ed332fad555aff858affd90a48ab19ba7272ee084704eb7167569","impliedFormat":1},{"version":"ee7bad0c15b58988daa84371e0b89d313b762ab83cb5b31b8a2d1162e8eb41c2","impliedFormat":1},{"version":"27bdc30a0e32783366a5abeda841bc22757c1797de8681bbe81fbc735eeb1c10","impliedFormat":1},{"version":"8fd575e12870e9944c7e1d62e1f5a73fcf23dd8d3a321f2a2c74c20d022283fe","impliedFormat":1},{"version":"2ab096661c711e4a81cc464fa1e6feb929a54f5340b46b0a07ac6bbf857471f0","impliedFormat":1},{"version":"080941d9f9ff9307f7e27a83bcd888b7c8270716c39af943532438932ec1d0b9","affectsGlobalScope":true,"impliedFormat":1},{"version":"2e80ee7a49e8ac312cc11b77f1475804bee36b3b2bc896bead8b6e1266befb43","affectsGlobalScope":true,"impliedFormat":1},{"version":"c57796738e7f83dbc4b8e65132f11a377649c00dd3eee333f672b8f0a6bea671","affectsGlobalScope":true,"impliedFormat":1},{"version":"dc2df20b1bcdc8c2d34af4926e2c3ab15ffe1160a63e58b7e09833f616efff44","affectsGlobalScope":true,"impliedFormat":1},{"version":"515d0b7b9bea2e31ea4ec968e9edd2c39d3eebf4a2d5cbd04e88639819ae3b71","affectsGlobalScope":true,"impliedFormat":1},{"version":"0559b1f683ac7505ae451f9a96ce4c3c92bdc71411651ca6ddb0e88baaaad6a3","affectsGlobalScope":true,"impliedFormat":1},{"version":"0dc1e7ceda9b8b9b455c3a2d67b0412feab00bd2f66656cd8850e8831b08b537","affectsGlobalScope":true,"impliedFormat":1},{"version":"ce691fb9e5c64efb9547083e4a34091bcbe5bdb41027e310ebba8f7d96a98671","affectsGlobalScope":true,"impliedFormat":1},{"version":"8d697a2a929a5fcb38b7a65594020fcef05ec1630804a33748829c5ff53640d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ff2a353abf8a80ee399af572debb8faab2d33ad38c4b4474cff7f26e7653b8d","affectsGlobalScope":true,"impliedFormat":1},{"version":"fb0f136d372979348d59b3f5020b4cdb81b5504192b1cacff5d1fbba29378aa1","affectsGlobalScope":true,"impliedFormat":1},{"version":"d15bea3d62cbbdb9797079416b8ac375ae99162a7fba5de2c6c505446486ac0a","affectsGlobalScope":true,"impliedFormat":1},{"version":"68d18b664c9d32a7336a70235958b8997ebc1c3b8505f4f1ae2b7e7753b87618","affectsGlobalScope":true,"impliedFormat":1},{"version":"eb3d66c8327153d8fa7dd03f9c58d351107fe824c79e9b56b462935176cdf12a","affectsGlobalScope":true,"impliedFormat":1},{"version":"38f0219c9e23c915ef9790ab1d680440d95419ad264816fa15009a8851e79119","affectsGlobalScope":true,"impliedFormat":1},{"version":"69ab18c3b76cd9b1be3d188eaf8bba06112ebbe2f47f6c322b5105a6fbc45a2e","affectsGlobalScope":true,"impliedFormat":1},{"version":"a680117f487a4d2f30ea46f1b4b7f58bef1480456e18ba53ee85c2746eeca012","affectsGlobalScope":true,"impliedFormat":1},{"version":"2f11ff796926e0832f9ae148008138ad583bd181899ab7dd768a2666700b1893","affectsGlobalScope":true,"impliedFormat":1},{"version":"4de680d5bb41c17f7f68e0419412ca23c98d5749dcaaea1896172f06435891fc","affectsGlobalScope":true,"impliedFormat":1},{"version":"954296b30da6d508a104a3a0b5d96b76495c709785c1d11610908e63481ee667","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac9538681b19688c8eae65811b329d3744af679e0bdfa5d842d0e32524c73e1c","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a969edff4bd52585473d24995c5ef223f6652d6ef46193309b3921d65dd4376","affectsGlobalScope":true,"impliedFormat":1},{"version":"9e9fbd7030c440b33d021da145d3232984c8bb7916f277e8ffd3dc2e3eae2bdb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811ec78f7fefcabbda4bfa93b3eb67d9ae166ef95f9bff989d964061cbf81a0c","affectsGlobalScope":true,"impliedFormat":1},{"version":"717937616a17072082152a2ef351cb51f98802fb4b2fdabd32399843875974ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"d7e7d9b7b50e5f22c915b525acc5a49a7a6584cf8f62d0569e557c5cfc4b2ac2","affectsGlobalScope":true,"impliedFormat":1},{"version":"71c37f4c9543f31dfced6c7840e068c5a5aacb7b89111a4364b1d5276b852557","affectsGlobalScope":true,"impliedFormat":1},{"version":"576711e016cf4f1804676043e6a0a5414252560eb57de9faceee34d79798c850","affectsGlobalScope":true,"impliedFormat":1},{"version":"89c1b1281ba7b8a96efc676b11b264de7a8374c5ea1e6617f11880a13fc56dc6","affectsGlobalScope":true,"impliedFormat":1},{"version":"74f7fa2d027d5b33eb0471c8e82a6c87216223181ec31247c357a3e8e2fddc5b","affectsGlobalScope":true,"impliedFormat":1},{"version":"d6d7ae4d1f1f3772e2a3cde568ed08991a8ae34a080ff1151af28b7f798e22ca","affectsGlobalScope":true,"impliedFormat":1},{"version":"063600664504610fe3e99b717a1223f8b1900087fab0b4cad1496a114744f8df","affectsGlobalScope":true,"impliedFormat":1},{"version":"934019d7e3c81950f9a8426d093458b65d5aff2c7c1511233c0fd5b941e608ab","affectsGlobalScope":true,"impliedFormat":1},{"version":"52ada8e0b6e0482b728070b7639ee42e83a9b1c22d205992756fe020fd9f4a47","affectsGlobalScope":true,"impliedFormat":1},{"version":"3bdefe1bfd4d6dee0e26f928f93ccc128f1b64d5d501ff4a8cf3c6371200e5e6","affectsGlobalScope":true,"impliedFormat":1},{"version":"59fb2c069260b4ba00b5643b907ef5d5341b167e7d1dbf58dfd895658bda2867","affectsGlobalScope":true,"impliedFormat":1},{"version":"639e512c0dfc3fad96a84caad71b8834d66329a1f28dc95e3946c9b58176c73a","affectsGlobalScope":true,"impliedFormat":1},{"version":"368af93f74c9c932edd84c58883e736c9e3d53cec1fe24c0b0ff451f529ceab1","affectsGlobalScope":true,"impliedFormat":1},{"version":"af3dd424cf267428f30ccfc376f47a2c0114546b55c44d8c0f1d57d841e28d74","affectsGlobalScope":true,"impliedFormat":1},{"version":"995c005ab91a498455ea8dfb63aa9f83fa2ea793c3d8aa344be4a1678d06d399","affectsGlobalScope":true,"impliedFormat":1},{"version":"959d36cddf5e7d572a65045b876f2956c973a586da58e5d26cde519184fd9b8a","affectsGlobalScope":true,"impliedFormat":1},{"version":"965f36eae237dd74e6cca203a43e9ca801ce38824ead814728a2807b1910117d","affectsGlobalScope":true,"impliedFormat":1},{"version":"3925a6c820dcb1a06506c90b1577db1fdbf7705d65b62b99dce4be75c637e26b","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a3d63ef2b853447ec4f749d3f368ce642264246e02911fcb1590d8c161b8005","affectsGlobalScope":true,"impliedFormat":1},{"version":"8cdf8847677ac7d20486e54dd3fcf09eda95812ac8ace44b4418da1bbbab6eb8","affectsGlobalScope":true,"impliedFormat":1},{"version":"8444af78980e3b20b49324f4a16ba35024fef3ee069a0eb67616ea6ca821c47a","affectsGlobalScope":true,"impliedFormat":1},{"version":"3287d9d085fbd618c3971944b65b4be57859f5415f495b33a6adc994edd2f004","affectsGlobalScope":true,"impliedFormat":1},{"version":"b4b67b1a91182421f5df999988c690f14d813b9850b40acd06ed44691f6727ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"df83c2a6c73228b625b0beb6669c7ee2a09c914637e2d35170723ad49c0f5cd4","affectsGlobalScope":true,"impliedFormat":1},{"version":"436aaf437562f276ec2ddbee2f2cdedac7664c1e4c1d2c36839ddd582eeb3d0a","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e3c06ea092138bf9fa5e874a1fdbc9d54805d074bee1de31b99a11e2fec239d","affectsGlobalScope":true,"impliedFormat":1},{"version":"87dc0f382502f5bbce5129bdc0aea21e19a3abbc19259e0b43ae038a9fc4e326","affectsGlobalScope":true,"impliedFormat":1},{"version":"b1cb28af0c891c8c96b2d6b7be76bd394fddcfdb4709a20ba05a7c1605eea0f9","affectsGlobalScope":true,"impliedFormat":1},{"version":"2fef54945a13095fdb9b84f705f2b5994597640c46afeb2ce78352fab4cb3279","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac77cb3e8c6d3565793eb90a8373ee8033146315a3dbead3bde8db5eaf5e5ec6","affectsGlobalScope":true,"impliedFormat":1},{"version":"56e4ed5aab5f5920980066a9409bfaf53e6d21d3f8d020c17e4de584d29600ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"4ece9f17b3866cc077099c73f4983bddbcb1dc7ddb943227f1ec070f529dedd1","affectsGlobalScope":true,"impliedFormat":1},{"version":"0a6282c8827e4b9a95f4bf4f5c205673ada31b982f50572d27103df8ceb8013c","affectsGlobalScope":true,"impliedFormat":1},{"version":"1c9319a09485199c1f7b0498f2988d6d2249793ef67edda49d1e584746be9032","affectsGlobalScope":true,"impliedFormat":1},{"version":"e3a2a0cee0f03ffdde24d89660eba2685bfbdeae955a6c67e8c4c9fd28928eeb","affectsGlobalScope":true,"impliedFormat":1},{"version":"811c71eee4aa0ac5f7adf713323a5c41b0cf6c4e17367a34fbce379e12bbf0a4","affectsGlobalScope":true,"impliedFormat":1},{"version":"51ad4c928303041605b4d7ae32e0c1ee387d43a24cd6f1ebf4a2699e1076d4fa","affectsGlobalScope":true,"impliedFormat":1},{"version":"60037901da1a425516449b9a20073aa03386cce92f7a1fd902d7602be3a7c2e9","affectsGlobalScope":true,"impliedFormat":1},{"version":"d4b1d2c51d058fc21ec2629fff7a76249dec2e36e12960ea056e3ef89174080f","affectsGlobalScope":true,"impliedFormat":1},{"version":"22adec94ef7047a6c9d1af3cb96be87a335908bf9ef386ae9fd50eeb37f44c47","affectsGlobalScope":true,"impliedFormat":1},{"version":"196cb558a13d4533a5163286f30b0509ce0210e4b316c56c38d4c0fd2fb38405","affectsGlobalScope":true,"impliedFormat":1},{"version":"73f78680d4c08509933daf80947902f6ff41b6230f94dd002ae372620adb0f60","affectsGlobalScope":true,"impliedFormat":1},{"version":"c5239f5c01bcfa9cd32f37c496cf19c61d69d37e48be9de612b541aac915805b","affectsGlobalScope":true,"impliedFormat":1},{"version":"8e7f8264d0fb4c5339605a15daadb037bf238c10b654bb3eee14208f860a32ea","affectsGlobalScope":true,"impliedFormat":1},{"version":"782dec38049b92d4e85c1585fbea5474a219c6984a35b004963b00beb1aab538","affectsGlobalScope":true,"impliedFormat":1},{"version":"7e29f41b158de217f94cb9676bf9cbd0cd9b5a46e1985141ed36e075c52bf6ad","affectsGlobalScope":true,"impliedFormat":1},{"version":"ac51dd7d31333793807a6abaa5ae168512b6131bd41d9c5b98477fc3b7800f9f","impliedFormat":1},{"version":"bd7dee3446a5b94651d58000ddfda40296f073e9372891f65003a524b4620697","impliedFormat":1},{"version":"acd8fd5090ac73902278889c38336ff3f48af6ba03aa665eb34a75e7ba1dccc4","impliedFormat":1},{"version":"d6258883868fb2680d2ca96bc8b1352cab69874581493e6d52680c5ffecdb6cc","impliedFormat":1},{"version":"1b61d259de5350f8b1e5db06290d31eaebebc6baafd5f79d314b5af9256d7153","impliedFormat":1},{"version":"f258e3960f324a956fc76a3d3d9e964fff2244ff5859dcc6ce5951e5413ca826","impliedFormat":1},{"version":"643f7232d07bf75e15bd8f658f664d6183a0efaca5eb84b48201c7671a266979","impliedFormat":1},{"version":"21da358700a3893281ce0c517a7a30cbd46be020d9f0c3f2834d0a8ad1f5fc75","impliedFormat":1},{"version":"70521b6ab0dcba37539e5303104f29b721bfb2940b2776da4cc818c07e1fefc1","affectsGlobalScope":true,"impliedFormat":1},{"version":"ab41ef1f2cdafb8df48be20cd969d875602483859dc194e9c97c8a576892c052","affectsGlobalScope":true,"impliedFormat":1},{"version":"d153a11543fd884b596587ccd97aebbeed950b26933ee000f94009f1ab142848","affectsGlobalScope":true,"impliedFormat":1},{"version":"21d819c173c0cf7cc3ce57c3276e77fd9a8a01d35a06ad87158781515c9a438a","impliedFormat":1},{"version":"98cffbf06d6bab333473c70a893770dbe990783904002c4f1a960447b4b53dca","affectsGlobalScope":true,"impliedFormat":1},{"version":"ba481bca06f37d3f2c137ce343c7d5937029b2468f8e26111f3c9d9963d6568d","affectsGlobalScope":true,"impliedFormat":1},{"version":"6d9ef24f9a22a88e3e9b3b3d8c40ab1ddb0853f1bfbd5c843c37800138437b61","affectsGlobalScope":true,"impliedFormat":1},{"version":"1db0b7dca579049ca4193d034d835f6bfe73096c73663e5ef9a0b5779939f3d0","affectsGlobalScope":true,"impliedFormat":1},{"version":"9798340ffb0d067d69b1ae5b32faa17ab31b82466a3fc00d8f2f2df0c8554aaa","affectsGlobalScope":true,"impliedFormat":1},{"version":"f26b11d8d8e4b8028f1c7d618b22274c892e4b0ef5b3678a8ccbad85419aef43","affectsGlobalScope":true,"impliedFormat":1},{"version":"5929864ce17fba74232584d90cb721a89b7ad277220627cc97054ba15a98ea8f","impliedFormat":1},{"version":"763fe0f42b3d79b440a9b6e51e9ba3f3f91352469c1e4b3b67bfa4ff6352f3f4","impliedFormat":1},{"version":"25c8056edf4314820382a5fdb4bb7816999acdcb929c8f75e3f39473b87e85bc","impliedFormat":1},{"version":"c464d66b20788266e5353b48dc4aa6bc0dc4a707276df1e7152ab0c9ae21fad8","impliedFormat":1},{"version":"78d0d27c130d35c60b5e5566c9f1e5be77caf39804636bc1a40133919a949f21","impliedFormat":1},{"version":"c6fd2c5a395f2432786c9cb8deb870b9b0e8ff7e22c029954fabdd692bff6195","impliedFormat":1},{"version":"1d6e127068ea8e104a912e42fc0a110e2aa5a66a356a917a163e8cf9a65e4a75","impliedFormat":1},{"version":"5ded6427296cdf3b9542de4471d2aa8d3983671d4cac0f4bf9c637208d1ced43","impliedFormat":1},{"version":"7f182617db458e98fc18dfb272d40aa2fff3a353c44a89b2c0ccb3937709bfb5","impliedFormat":1},{"version":"cadc8aced301244057c4e7e73fbcae534b0f5b12a37b150d80e5a45aa4bebcbd","impliedFormat":1},{"version":"385aab901643aa54e1c36f5ef3107913b10d1b5bb8cbcd933d4263b80a0d7f20","impliedFormat":1},{"version":"9670d44354bab9d9982eca21945686b5c24a3f893db73c0dae0fd74217a4c219","impliedFormat":1},{"version":"0b8a9268adaf4da35e7fa830c8981cfa22adbbe5b3f6f5ab91f6658899e657a7","impliedFormat":1},{"version":"11396ed8a44c02ab9798b7dca436009f866e8dae3c9c25e8c1fbc396880bf1bb","impliedFormat":1},{"version":"ba7bc87d01492633cb5a0e5da8a4a42a1c86270e7b3d2dea5d156828a84e4882","impliedFormat":1},{"version":"4893a895ea92c85345017a04ed427cbd6a1710453338df26881a6019432febdd","impliedFormat":1},{"version":"c21dc52e277bcfc75fac0436ccb75c204f9e1b3fa5e12729670910639f27343e","impliedFormat":1},{"version":"13f6f39e12b1518c6650bbb220c8985999020fe0f21d818e28f512b7771d00f9","impliedFormat":1},{"version":"9b5369969f6e7175740bf51223112ff209f94ba43ecd3bb09eefff9fd675624a","impliedFormat":1},{"version":"4fe9e626e7164748e8769bbf74b538e09607f07ed17c2f20af8d680ee49fc1da","impliedFormat":1},{"version":"24515859bc0b836719105bb6cc3d68255042a9f02a6022b3187948b204946bd2","impliedFormat":1},{"version":"ea0148f897b45a76544ae179784c95af1bd6721b8610af9ffa467a518a086a43","impliedFormat":1},{"version":"24c6a117721e606c9984335f71711877293a9651e44f59f3d21c1ea0856f9cc9","impliedFormat":1},{"version":"dd3273ead9fbde62a72949c97dbec2247ea08e0c6952e701a483d74ef92d6a17","impliedFormat":1},{"version":"405822be75ad3e4d162e07439bac80c6bcc6dbae1929e179cf467ec0b9ee4e2e","impliedFormat":1},{"version":"0db18c6e78ea846316c012478888f33c11ffadab9efd1cc8bcc12daded7a60b6","impliedFormat":1},{"version":"e61be3f894b41b7baa1fbd6a66893f2579bfad01d208b4ff61daef21493ef0a8","impliedFormat":1},{"version":"bd0532fd6556073727d28da0edfd1736417a3f9f394877b6d5ef6ad88fba1d1a","impliedFormat":1},{"version":"89167d696a849fce5ca508032aabfe901c0868f833a8625d5a9c6e861ef935d2","impliedFormat":1},{"version":"615ba88d0128ed16bf83ef8ccbb6aff05c3ee2db1cc0f89ab50a4939bfc1943f","impliedFormat":1},{"version":"a4d551dbf8746780194d550c88f26cf937caf8d56f102969a110cfaed4b06656","impliedFormat":1},{"version":"8bd86b8e8f6a6aa6c49b71e14c4ffe1211a0e97c80f08d2c8cc98838006e4b88","impliedFormat":1},{"version":"317e63deeb21ac07f3992f5b50cdca8338f10acd4fbb7257ebf56735bf52ab00","impliedFormat":1},{"version":"4732aec92b20fb28c5fe9ad99521fb59974289ed1e45aecb282616202184064f","impliedFormat":1},{"version":"2e85db9e6fd73cfa3d7f28e0ab6b55417ea18931423bd47b409a96e4a169e8e6","impliedFormat":1},{"version":"c46e079fe54c76f95c67fb89081b3e399da2c7d109e7dca8e4b58d83e332e605","impliedFormat":1},{"version":"bf67d53d168abc1298888693338cb82854bdb2e69ef83f8a0092093c2d562107","impliedFormat":1},{"version":"b52476feb4a0cbcb25e5931b930fc73cb6643fb1a5060bf8a3dda0eeae5b4b68","affectsGlobalScope":true,"impliedFormat":1},{"version":"e2677634fe27e87348825bb041651e22d50a613e2fdf6a4a3ade971d71bac37e","impliedFormat":1},{"version":"7394959e5a741b185456e1ef5d64599c36c60a323207450991e7a42e08911419","impliedFormat":1},{"version":"8c0bcd6c6b67b4b503c11e91a1fb91522ed585900eab2ab1f61bba7d7caa9d6f","impliedFormat":1},{"version":"8cd19276b6590b3ebbeeb030ac271871b9ed0afc3074ac88a94ed2449174b776","affectsGlobalScope":true,"impliedFormat":1},{"version":"696eb8d28f5949b87d894b26dc97318ef944c794a9a4e4f62360cd1d1958014b","impliedFormat":1},{"version":"3f8fa3061bd7402970b399300880d55257953ee6d3cd408722cb9ac20126460c","impliedFormat":1},{"version":"35ec8b6760fd7138bbf5809b84551e31028fb2ba7b6dc91d95d098bf212ca8b4","affectsGlobalScope":true,"impliedFormat":1},{"version":"5524481e56c48ff486f42926778c0a3cce1cc85dc46683b92b1271865bcf015a","impliedFormat":1},{"version":"68bd56c92c2bd7d2339457eb84d63e7de3bd56a69b25f3576e1568d21a162398","affectsGlobalScope":true,"impliedFormat":1},{"version":"3e93b123f7c2944969d291b35fed2af79a6e9e27fdd5faa99748a51c07c02d28","impliedFormat":1},{"version":"9d19808c8c291a9010a6c788e8532a2da70f811adb431c97520803e0ec649991","impliedFormat":1},{"version":"87aad3dd9752067dc875cfaa466fc44246451c0c560b820796bdd528e29bef40","impliedFormat":1},{"version":"4aacb0dd020eeaef65426153686cc639a78ec2885dc72ad220be1d25f1a439df","impliedFormat":1},{"version":"f0bd7e6d931657b59605c44112eaf8b980ba7f957a5051ed21cb93d978cf2f45","impliedFormat":1},{"version":"8db0ae9cb14d9955b14c214f34dae1b9ef2baee2fe4ce794a4cd3ac2531e3255","affectsGlobalScope":true,"impliedFormat":1},{"version":"15fc6f7512c86810273af28f224251a5a879e4261b4d4c7e532abfbfc3983134","impliedFormat":1},{"version":"58adba1a8ab2d10b54dc1dced4e41f4e7c9772cbbac40939c0dc8ce2cdb1d442","impliedFormat":1},{"version":"641942a78f9063caa5d6b777c99304b7d1dc7328076038c6d94d8a0b81fc95c1","impliedFormat":1},{"version":"2de7636e6fbb9e54a61a38bcb7505b94ec5be61197fe9e840cff629ca920c4bc","impliedFormat":1},{"version":"855cd5f7eb396f5f1ab1bc0f8580339bff77b68a770f84c6b254e319bbfd1ac7","impliedFormat":1},{"version":"5650cf3dace09e7c25d384e3e6b818b938f68f4e8de96f52d9c5a1b3db068e86","impliedFormat":1},{"version":"1354ca5c38bd3fd3836a68e0f7c9f91f172582ba30ab15bb8c075891b91502b7","affectsGlobalScope":true,"impliedFormat":1},{"version":"7e20d899c28ca26a2a7afc98beaa69e63ff7fba0a8bc47b4e3bf3ede5e09e424","impliedFormat":1},{"version":"2d2fcaab481b31a5882065c7951255703ddbe1c0e507af56ea42d79ac3911201","impliedFormat":1},{"version":"a192fe8ec33f75edbc8d8f3ed79f768dfae11ff5735e7fe52bfa69956e46d78d","impliedFormat":1},{"version":"ca867399f7db82df981d6915bcbb2d81131d7d1ef683bc782b59f71dda59bc85","affectsGlobalScope":true,"impliedFormat":1},{"version":"372413016d17d804e1d139418aca0c68e47a83fb6669490857f4b318de8cccb3","affectsGlobalScope":true,"impliedFormat":1},{"version":"9e043a1bc8fbf2a255bccf9bf27e0f1caf916c3b0518ea34aa72357c0afd42ec","impliedFormat":1},{"version":"b4f70ec656a11d570e1a9edce07d118cd58d9760239e2ece99306ee9dfe61d02","impliedFormat":1},{"version":"3bc2f1e2c95c04048212c569ed38e338873f6a8593930cf5a7ef24ffb38fc3b6","impliedFormat":1},{"version":"6e70e9570e98aae2b825b533aa6292b6abd542e8d9f6e9475e88e1d7ba17c866","impliedFormat":1},{"version":"f9d9d753d430ed050dc1bf2667a1bab711ccbb1c1507183d794cc195a5b085cc","impliedFormat":1},{"version":"9eece5e586312581ccd106d4853e861aaaa1a39f8e3ea672b8c3847eedd12f6e","impliedFormat":1},{"version":"085f552d005479e2e6a7311cdbbe5d8c55c497b4d19274285df161ee9684cd9c","impliedFormat":1},{"version":"37ba7b45141a45ce6e80e66f2a96c8a5ab1bcef0fc2d0f56bb58df96ec67e972","impliedFormat":1},{"version":"45650f47bfb376c8a8ed39d4bcda5902ab899a3150029684ee4c10676d9fbaee","impliedFormat":1},{"version":"007faacc9268357caa21d24169f3f3f2497af3e9241308df2d89f6e6d9bb3f2e","affectsGlobalScope":true,"impliedFormat":1},{"version":"74cf591a0f63db318651e0e04cb55f8791385f86e987a67fd4d2eaab8191f730","impliedFormat":1},{"version":"5eab9b3dc9b34f185417342436ec3f106898da5f4801992d8ff38ab3aff346b5","impliedFormat":1},{"version":"12ed4559eba17cd977aa0db658d25c4047067444b51acfdcbf38470630642b23","affectsGlobalScope":true,"impliedFormat":1},{"version":"f3ffabc95802521e1e4bcba4c88d8615176dc6e09111d920c7a213bdda6e1d65","impliedFormat":1},{"version":"809821b8a065e3234a55b3a9d7846231ed18d66dd749f2494c66288d890daf7f","impliedFormat":1},{"version":"ae56f65caf3be91108707bd8dfbccc2a57a91feb5daabf7165a06a945545ed26","impliedFormat":1},{"version":"a136d5de521da20f31631a0a96bf712370779d1c05b7015d7019a9b2a0446ca9","impliedFormat":1},{"version":"c3b41e74b9a84b88b1dca61ec39eee25c0dbc8e7d519ba11bb070918cfacf656","affectsGlobalScope":true,"impliedFormat":1},{"version":"4737a9dc24d0e68b734e6cfbcea0c15a2cfafeb493485e27905f7856988c6b29","affectsGlobalScope":true,"impliedFormat":1},{"version":"36d8d3e7506b631c9582c251a2c0b8a28855af3f76719b12b534c6edf952748d","impliedFormat":1},{"version":"1ca69210cc42729e7ca97d3a9ad48f2e9cb0042bada4075b588ae5387debd318","impliedFormat":1},{"version":"f5ebe66baaf7c552cfa59d75f2bfba679f329204847db3cec385acda245e574e","impliedFormat":1},{"version":"ed59add13139f84da271cafd32e2171876b0a0af2f798d0c663e8eeb867732cf","affectsGlobalScope":true,"impliedFormat":1},{"version":"b7c5e2ea4a9749097c347454805e933844ed207b6eefec6b7cfd418b5f5f7b28","impliedFormat":1},{"version":"b1810689b76fd473bd12cc9ee219f8e62f54a7d08019a235d07424afbf074d25","impliedFormat":1},{"version":"2beff543f6e9a9701df88daeee3cdd70a34b4a1c11cb4c734472195a5cb2af54","impliedFormat":1},{"version":"2e07abf27aa06353d46f4448c0bbac73431f6065eef7113128a5cd804d0c384d","impliedFormat":1},{"version":"be1cc4d94ea60cbe567bc29ed479d42587bf1e6cba490f123d329976b0fe4ee5","impliedFormat":1},{"version":"42bc0e1a903408137c3df2b06dfd7e402cdab5bbfa5fcfb871b22ebfdb30bd0b","impliedFormat":1},{"version":"9894dafe342b976d251aac58e616ac6df8db91fb9d98934ff9dd103e9e82578f","impliedFormat":1},{"version":"413df52d4ea14472c2fa5bee62f7a40abd1eb49be0b9722ee01ee4e52e63beb2","impliedFormat":1},{"version":"db6d2d9daad8a6d83f281af12ce4355a20b9a3e71b82b9f57cddcca0a8964a96","impliedFormat":1},{"version":"446a50749b24d14deac6f8843e057a6355dd6437d1fac4f9e5ce4a5071f34bff","impliedFormat":1},{"version":"182e9fcbe08ac7c012e0a6e2b5798b4352470be29a64fdc114d23c2bab7d5106","impliedFormat":1},{"version":"2f4e6b4d39426a1b85ecf4bdeb9dddbf4d9b3397d95d8555d46f925c9519ec7d","impliedFormat":1},{"version":"78a2869ad0cbf3f9045dda08c0d4562b7e1b2bfe07b19e0db072f5c3c56e9584","impliedFormat":1},{"version":"89d5d28d4f57e000b836ac273079be1b75710e28ce14750d081fb420d37e2ca5","impliedFormat":1},{"version":"fd4e24ccff3966390600d7f5d6aa1fed5a512e92ada735ea5fbc933d313ad3d3","impliedFormat":1},{"version":"b7cddfe1aa6b86b5fad3c9ccb30d05b3ccb165aebbf112f48d2d8a5f69dd98b1","impliedFormat":1},{"version":"a86f82d646a739041d6702101afa82dcb935c416dd93cbca7fd754fd0282ce1f","impliedFormat":1},{"version":"ad0d1d75d129b1c80f911be438d6b61bfa8703930a8ff2be2f0e1f8a91841c64","impliedFormat":1},{"version":"bd2c7ada3dee03653d3f601011d30072194bc3970cd93208f9588fbdc0c69347","impliedFormat":1},{"version":"e480da45d32313e7174b265674da504f075f59ef326852f0c5a5d863b438ae85","impliedFormat":1},{"version":"ad54850f61fcf5d014e11be80d2f46fea9265cfa7e77456da876f7833ef81769","impliedFormat":1},{"version":"6f7c9e8bd2b5b6a080b07080065f94900bd3c7e5ebbd3047bc33fcce2fab1dd8","impliedFormat":1},{"version":"3e7efde639c6a6c3edb9847b3f61e308bf7a69685b92f665048c45132f51c218","impliedFormat":1},{"version":"df45ca1176e6ac211eae7ddf51336dc075c5314bc5c253651bae639defd5eec5","impliedFormat":1},{"version":"8a0e762ceb20c7e72504feef83d709468a70af4abccb304f32d6b9bac1129b2c","impliedFormat":1},{"version":"da5950ee2a90721df6f3fba45f5d05308f7e4c35835392215dd2cd404505e2de","impliedFormat":1},{"version":"ce75b1aebb33d510ff28af960a9221410a3eaf7f18fc5f21f9404075fba77256","impliedFormat":1},{"version":"f42d5fed19610d485c646a0c430e768115567d078c7fc855c57b0c578b3d6cd3","impliedFormat":1},{"version":"ee8df1cb8d0faaca4013a1b442e99130769ce06f438d18d510fed95890067563","impliedFormat":1},{"version":"d5630f2ad9b4541e5ce891648121022f9412ecdca1820baa1f0104f70fd7eff7","impliedFormat":1},{"version":"4d15375ab13497104bc8fe56fdef2b5fd6853f29255737d23a33fa306ff7fd69","impliedFormat":1},{"version":"2cd3fc1d0d6a1e85baffd2d4f50f5efb192b5446eef567e97c94765402f0aad4","impliedFormat":1},{"version":"e4cbf2f1e89ecccaddd2c045e600ae41b732295953fb06247c7dcbc2d281ed30","impliedFormat":1},{"version":"6dcedaef57dff0d79a05ab0ab602cde74db803d1e765468bf91263786a383e1b","impliedFormat":1},{"version":"8c1697d90c394a6fd955b98eae01238eff628e129b987a68aea10f898a48e7da","impliedFormat":1},{"version":"7580e62139cb2b44a0270c8d01abcbfcba2819a02514a527342447fa69b34ef1","impliedFormat":1},{"version":"42c169fb8c2d42f4f668c624a9a11e719d5d07dacbebb63cbcf7ef365b0a75b3","impliedFormat":1},{"version":"f374cb24e93e7798c4d9e83ff872fa52d2cdb36306392b840a6ddf46cb925cb6","impliedFormat":1},{"version":"d10d63718e1646c2279e3b33831f82c60e31f622b2b7020f1196409ca4c09242","impliedFormat":1},{"version":"106c6025f1d99fd468fd8bf6e5bda724e11e5905a4076c5d29790b6c3745e50c","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"148679c6d0f449210a96e7d2e562d589e56fcde87f843a92808b3ff103f1a774","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"02436d7e9ead85e09a2f8e27d5f47d9464bced31738dec138ca735390815c9f0","impliedFormat":1},{"version":"f8d5ff8eafd37499f2b6a98659dd9b45a321de186b8db6b6142faed0fea3de77","impliedFormat":1},{"version":"c86fe861cf1b4c46a0fb7d74dffe596cf679a2e5e8b1456881313170f092e3fa","impliedFormat":1},{"version":"a22dd55aa4d39906252000ab8e8a1b83b195eef7f4274eb51e457c1f11cf6580","impliedFormat":1},{"version":"540cc83ab772a2c6bc509fe1354f314825b5dba3669efdfbe4693ecd3048e34f","impliedFormat":1},{"version":"121b0696021ab885c570bbeb331be8ad82c6efe2f3b93a6e63874901bebc13e3","impliedFormat":1},{"version":"612d9da66bb046a9c1e2e8d026245ded881fc4b9f98cbfae714415d57ee0ae0b","impliedFormat":1},{"version":"32c2ad9494dad5d11b0564a619fee18f388db6c1e9e2cd3c360b3122549691eb","impliedFormat":1},{"version":"6c301d40aec56a74ec7bd7324e31a728dadf9bfba3e96def02938d3d973534ec","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"aa14cee20aa0db79f8df101fc027d929aec10feb5b8a8da3b9af3895d05b7ba2","impliedFormat":1},{"version":"493c700ac3bd317177b2eb913805c87fe60d4e8af4fb39c41f04ba81fae7e170","impliedFormat":1},{"version":"aeb554d876c6b8c818da2e118d8b11e1e559adbe6bf606cc9a611c1b6c09f670","impliedFormat":1},{"version":"acf5a2ac47b59ca07afa9abbd2b31d001bf7448b041927befae2ea5b1951d9f9","impliedFormat":1},{"version":"8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881","impliedFormat":1},{"version":"d71291eff1e19d8762a908ba947e891af44749f3a2cbc5bd2ec4b72f72ea795f","impliedFormat":1},{"version":"c0480e03db4b816dff2682b347c95f2177699525c54e7e6f6aa8ded890b76be7","impliedFormat":1},{"version":"25a5f6fd3a2243c859eddc99ab5fba11d970af2fe7a5df9c32b7668f76f97b01","impliedFormat":1},{"version":"8d207e1f9d2c30d6f77dfa693f3827c3fbf0d89240297e10bdfe1041d433df68","impliedFormat":1},{"version":"b620391fe8060cf9bedc176a4d01366e6574d7a71e0ac0ab344a4e76576fcbb8","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"2652448ac55a2010a1f71dd141f828b682298d39728f9871e1cdf8696ef443fd","impliedFormat":1},{"version":"d682336018141807fb602709e2d95a192828fcb8d5ba06dda3833a8ea98f69e3","impliedFormat":1},{"version":"6124e973eab8c52cabf3c07575204efc1784aca6b0a30c79eb85fe240a857efa","impliedFormat":1},{"version":"0d891735a21edc75df51f3eb995e18149e119d1ce22fd40db2b260c5960b914e","impliedFormat":1},{"version":"3b414b99a73171e1c4b7b7714e26b87d6c5cb03d200352da5342ab4088a54c85","impliedFormat":1},{"version":"4fbd3116e00ed3a6410499924b6403cc9367fdca303e34838129b328058ede40","impliedFormat":1},{"version":"9c82171d836c47486074e4ca8e059735bf97b205e70b196535b5efd40cbe1bc5","impliedFormat":1},{"version":"8c70ddc0c22d85e56011d49fddfaae3405eb53d47b59327b9dd589e82df672e7","impliedFormat":1},{"version":"2f9c89cbb29d362290531b48880a4024f258c6033aaeb7e59fbc62db26819650","impliedFormat":1},{"version":"a365c4d3bed3be4e4e20793c999c51f5cd7e6792322f14650949d827fbcd170f","impliedFormat":1},{"version":"c5426dbfc1cf90532f66965a7aa8c1136a78d4d0f96d8180ecbfc11d7722f1a5","impliedFormat":1},{"version":"65a15fc47900787c0bd18b603afb98d33ede930bed1798fc984d5ebb78b26cf9","impliedFormat":1},{"version":"9d202701f6e0744adb6314d03d2eb8fc994798fc83d91b691b75b07626a69801","impliedFormat":1},{"version":"de9d2df7663e64e3a91bf495f315a7577e23ba088f2949d5ce9ec96f44fba37d","impliedFormat":1},{"version":"c7af78a2ea7cb1cd009cfb5bdb48cd0b03dad3b54f6da7aab615c2e9e9d570c5","impliedFormat":1},{"version":"1ee45496b5f8bdee6f7abc233355898e5bf9bd51255db65f5ff7ede617ca0027","impliedFormat":1},{"version":"273782b8454e78f6a8b30d2cfbf6860499c930595095fcc1689637115f0eddda","affectsGlobalScope":true,"impliedFormat":1},{"version":"3fbdd025f9d4d820414417eeb4107ffa0078d454a033b506e22d3a23bc3d9c41","affectsGlobalScope":true,"impliedFormat":1},{"version":"dba114fb6a32b355a9cfc26ca2276834d72fe0e94cd2c3494005547025015369","impliedFormat":1},{"version":"a8f8e6ab2fa07b45251f403548b78eaf2022f3c2254df3dc186cb2671fe4996d","affectsGlobalScope":true,"impliedFormat":1},{"version":"fa6c12a7c0f6b84d512f200690bfc74819e99efae69e4c95c4cd30f6884c526e","impliedFormat":1},{"version":"f1c32f9ce9c497da4dc215c3bc84b722ea02497d35f9134db3bb40a8d918b92b","impliedFormat":1},{"version":"b73c319af2cc3ef8f6421308a250f328836531ea3761823b4cabbd133047aefa","affectsGlobalScope":true,"impliedFormat":1},{"version":"e433b0337b8106909e7953015e8fa3f2d30797cea27141d1c5b135365bb975a6","impliedFormat":1},{"version":"9f9bb6755a8ce32d656ffa4763a8144aa4f274d6b69b59d7c32811031467216e","impliedFormat":1},{"version":"5c32bdfbd2d65e8fffbb9fbda04d7165e9181b08dad61154961852366deb7540","impliedFormat":1},{"version":"ddff7fc6edbdc5163a09e22bf8df7bef75f75369ebd7ecea95ba55c4386e2441","impliedFormat":1},{"version":"0c05e9842ec4f8b7bfebfd3ca61604bb8c914ba8da9b5337c4f25da427a005f2","impliedFormat":1},{"version":"faed7a5153215dbd6ebe76dfdcc0af0cfe760f7362bed43284be544308b114cf","impliedFormat":1},{"version":"7029e566b8df176f703fb59fd437a38670c7a0e02c58b2d66dfb5b2e2b2defdb","impliedFormat":1},{"version":"7f2aa4d4989a82530aaac3f72b3dceca90e9c25bee0b1a327e8a08a1262435ad","impliedFormat":1},{"version":"d96b39301d0ded3f1a27b47759676a33a02f6f5049bfcbde81e533fd10f50dcb","impliedFormat":1},{"version":"e9f147ecca73d9346a4c073432843c159ccbe50bdcb678a78f6da10eae2cecf4","impliedFormat":1},{"version":"de061f7d72bd65c06fc1419f841dfdcb29a8e22fe6fa527d1e6eb20b897d4de0","impliedFormat":1},{"version":"663beafc2446079574570cba86e9b15f986f908ddb1b01274509970126fee945","impliedFormat":1},{"version":"a3102887d5058bf4cb5b37fa6964c09e9527c42053b3b5c642b89878620748de","impliedFormat":1},{"version":"0aaaa1727edd29673d85c9b26d7ca4d54e5407a48586903c51b48b7f7d196f61","impliedFormat":1},{"version":"d35bca0b261bff02635758c48e8ab99c61c420d0dfabbcf467e847171d876b7d","impliedFormat":1},{"version":"3bc12c40d90c342ff88a3d876996c555ed5cbee5fe8c3308a240b321f401ee46","impliedFormat":1},{"version":"ba130768aae855a5477e9e148e5c879548e6e7ccbcc56fd1934c8a18ea5b7569","impliedFormat":1},{"version":"2e4f37ffe8862b14d8e24ae8763daaa8340c0df0b859d9a9733def0eee7562d9","impliedFormat":1},{"version":"d38530db0601215d6d767f280e3a3c54b2a83b709e8d9001acb6f61c67e965fc","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"b499af2054a037a162b3b72cd886f48bbf32a3502c865c6e29fac7d2ab3ce0b5","impliedFormat":1},{"version":"b83cb14474fa60c5f3ec660146b97d122f0735627f80d82dd03e8caa39b4388c","impliedFormat":1},{"version":"48773ca557b0319c2ee62ae249cf52a81709e8be139920d6479a66274de7c4ed","impliedFormat":1},{"version":"7274fbffbd7c9589d8d0ffba68157237afd5cecff1e99881ea3399127e60572f","impliedFormat":1},{"version":"b73cbf0a72c8800cf8f96a9acfe94f3ad32ca71342a8908b8ae484d61113f647","impliedFormat":1},{"version":"bae6dd176832f6423966647382c0d7ba9e63f8c167522f09a982f086cd4e8b23","impliedFormat":1},{"version":"20865ac316b8893c1a0cc383ccfc1801443fbcc2a7255be166cf90d03fac88c9","impliedFormat":1},{"version":"c9958eb32126a3843deedda8c22fb97024aa5d6dd588b90af2d7f2bfac540f23","impliedFormat":1},{"version":"461d0ad8ae5f2ff981778af912ba71b37a8426a33301daa00f21c6ccb27f8156","impliedFormat":1},{"version":"e927c2c13c4eaf0a7f17e6022eee8519eb29ef42c4c13a31e81a611ab8c95577","impliedFormat":1},{"version":"fcafff163ca5e66d3b87126e756e1b6dfa8c526aa9cd2a2b0a9da837d81bbd72","impliedFormat":1},{"version":"70246ad95ad8a22bdfe806cb5d383a26c0c6e58e7207ab9c431f1cb175aca657","impliedFormat":1},{"version":"f00f3aa5d64ff46e600648b55a79dcd1333458f7a10da2ed594d9f0a44b76d0b","impliedFormat":1},{"version":"772d8d5eb158b6c92412c03228bd9902ccb1457d7a705b8129814a5d1a6308fc","impliedFormat":1},{"version":"802e797bcab5663b2c9f63f51bdf67eff7c41bc64c0fd65e6da3e7941359e2f7","impliedFormat":1},{"version":"b01bd582a6e41457bc56e6f0f9de4cb17f33f5f3843a7cf8210ac9c18472fb0f","impliedFormat":1},{"version":"8b4327413e5af38cd8cb97c59f48c3c866015d5d642f28518e3a891c469f240e","impliedFormat":1},{"version":"4cceef18d7f088e797a463e90b7a9dad10c6bc667724b7686e3e740ae00122be","impliedFormat":1},{"version":"7ee86fbb3754388e004de0ef9e6505485ddfb3be7640783d6d015711c03d302d","impliedFormat":1},{"version":"cc1954b539604b1e562319119ac7e888172208b32ca873f9a357a92c826bd046","impliedFormat":1},{"version":"a67b87d0281c97dfc1197ef28dfe397fc2c865ccd41f7e32b53f647184cc7307","impliedFormat":1},{"version":"771ffb773f1ddd562492a6b9aaca648192ac3f056f0e1d997678ff97dbb6bf9b","impliedFormat":1},{"version":"43e96a3d5d1411ab40ba2f61d6a3192e58177bcf3b133a80ad2a16591611726d","impliedFormat":1},{"version":"232f70c0cf2b432f3a6e56a8dc3417103eb162292a9fd376d51a3a9ea5fbbf6f","impliedFormat":1},{"version":"bb8f2dbc03533abca2066ce4655c119bff353dd4514375beb93c08590c03e023","impliedFormat":1},{"version":"706dd95827e7ebaabda91d5db2b755233e0952d98570e9c032b0f066a15c1177","affectsGlobalScope":true,"impliedFormat":1},{"version":"0b103e9abfe82d14c0ad06a55d9f91d6747154ef7cacc73cf27ecad2bfb3afcf","impliedFormat":1},{"version":"cd9304972e6d616197fb44fce00540a904f38b54306a1951b5dbeaf3c01ab5bd","impliedFormat":1},{"version":"77438e2c397a3db78407621cfc57241a305b310ddea2c185f1d555248297f587","impliedFormat":1},{"version":"120599fd965257b1f4d0ff794bc696162832d9d8467224f4665f713a3119078b","impliedFormat":1},{"version":"43ba4f2fa8c698f5c304d21a3ef596741e8e85a810b7c1f9b692653791d8d97a","impliedFormat":1},{"version":"5433f33b0a20300cca35d2f229a7fc20b0e8477c44be2affeb21cb464af60c76","impliedFormat":1},{"version":"db036c56f79186da50af66511d37d9fe77fa6793381927292d17f81f787bb195","impliedFormat":1},{"version":"a6805fcafed712aea7759f8bc731014f9d22738c1d6ef9d43b8091d1d48346d5","impliedFormat":1},{"version":"c49469a5349b3cc1965710b5b0f98ed6c028686aa8450bcb3796728873eb923e","impliedFormat":1},{"version":"4a889f2c763edb4d55cb624257272ac10d04a1cad2ed2948b10ed4a7fda2a428","impliedFormat":1},{"version":"7bb79aa2fead87d9d56294ef71e056487e848d7b550c9a367523ee5416c44cfa","impliedFormat":1},{"version":"d88ea80a6447d7391f52352ec97e56b52ebec934a4a4af6e2464cfd8b39c3ba8","impliedFormat":1},{"version":"142617b3cdf902b69c6464c9fbd942b60ab3e733ca18c032b19e0f7e2adbefe8","impliedFormat":1},{"version":"0b603555f1881f87256ffd6344d3e3ed6d466c2e701eabf381f28be8c2125892","impliedFormat":1},{"version":"897e4f7662488e3ecc79e743bdd3b78f13bdb69a97851afa5b440c4211e32ea9","impliedFormat":1},{"version":"e2e1c6d3b2d93add5200bd7bc1a8cccb4e446836b2111ece45db8683a2c765de","impliedFormat":1},{"version":"251b03d5cd243854ce870d9a9a39f491faf69898c5d6b5eee28cc7649c57417b","impliedFormat":1},{"version":"27ff4196654e6373c9af16b6165120e2dd2169f9ad6abb5c935af5abd8c7938c","impliedFormat":1},{"version":"2c4de79f406d137390608e8c0a44fba2ff8e00bacfcae7c9d1781fef10e9440d","impliedFormat":1},{"version":"07ba23a10465791be5d22deaf5ef7de7658774ddff53721e5ea17fedea1bc721","impliedFormat":1},{"version":"dca8c645c5afeb03b1ecedbf16323f33e7d0afaa6256c8e047e6e38087a97f53","impliedFormat":1},{"version":"775f181bd4a533d6f8b5e55ec1d9f1624559720ae8a70e9432258da26b38d27c","impliedFormat":1},{"version":"796273b2edc72e78a04e86d7c58ae94d370ab93a0ddf40b1aa85a37a1c29ecd7","impliedFormat":1},{"version":"5df15a69187d737d6d8d066e189ae4f97e41f4d53712a46b2710ff9f8563ec9f","impliedFormat":1},{"version":"7715134a0cf07dd41a9da2895d708625a3a303a0385e355ecaaf0b8bfaef2550","impliedFormat":1},{"version":"6ac6715916fa75a1f7ebdfeacac09513b4d904b667d827b7535e84ff59679aff","impliedFormat":1},{"version":"622694a8522b46f6310c2a9b5d2530dde1e2854cb5829354e6d1ff8f371cf469","impliedFormat":1},{"version":"cd8ce8d68567f62dd580b3c3c37777ac3f5b81944c7417f5ea83030eab533385","impliedFormat":1},{"version":"e5c939d896565dcac0f6fbdbada11284e7728ef26a069561c09aa5aa4a788393","impliedFormat":1},{"version":"9e2739b32f741859263fdba0244c194ca8e96da49b430377930b8f721d77c000","impliedFormat":1},{"version":"a9e6c0ff3f8186fccd05752cf75fc94e147c02645087ac6de5cc16403323d870","impliedFormat":1},{"version":"49af4b52f0d4d2304c5f2c6fe5fab3e153e0acc38830d0202821b877c097dd02","impliedFormat":1},{"version":"49c346823ba6d4b12278c12c977fb3a31c06b9ca719015978cb145eb86da1c61","impliedFormat":1},{"version":"bfac6e50eaa7e73bb66b7e052c38fdc8ccfc8dbde2777648642af33cf349f7f1","impliedFormat":1},{"version":"92f7c1a4da7fbfd67a2228d1687d5c2e1faa0ba865a94d3550a3941d7527a45d","impliedFormat":1},{"version":"f53b120213a9289d9a26f5af90c4c686dd71d91487a0aa5451a38366c70dc64b","impliedFormat":1},{"version":"e68b8e5a1df7c1be2bc105141456ecba70215806e1c28bfbc5c12bfce4be6e68","impliedFormat":1},{"version":"511c8f02329808d47d00b859c532ae9115590048b17325a946c74dac48428650","impliedFormat":1},{"version":"57d67b72e06059adc5e9454de26bbfe567d412b962a501d263c75c2db430f40e","impliedFormat":1},{"version":"b5f9e66625783eefcbe3d2da074b2e7ba2066d61ce3fc6ef4f22805ad946cab4","impliedFormat":1},{"version":"e37115962d284b9f7a37c2bdd2add50f88365dde41f5e0ff591ffc48a8ec7575","impliedFormat":1},{"version":"6459054aabb306821a043e02b89d54da508e3a6966601a41e71c166e4ea1474f","impliedFormat":1},{"version":"bb37588926aba35c9283fe8d46ebf4e79ffe976343105f5c6d45f282793352b2","impliedFormat":1},{"version":"f89488602bec98a142072fae7ea5ba99431a569ff580c64b7be39896474799d8","impliedFormat":1},{"version":"bbbc47961f39a57df103cf4ca3bb8f8732b4b6678a18225a0aa76d59c466956c","impliedFormat":1},{"version":"2e6114a7dd6feeef85b2c80120fdbfb59a5529c0dcc5bfa8447b6996c97a69f5","impliedFormat":1},{"version":"2ffb043dc5163458e473b7010859f86e01dc4edffcae0a93d885d028b426a546","impliedFormat":1},{"version":"c8f004e6036aa1c764ad4ec543cf89a5c1893a9535c80ef3f2b653e370de45e6","impliedFormat":1},{"version":"dd80b1e600d00f5c6a6ba23f455b84a7db121219e68f89f10552c54ba46e4dc9","impliedFormat":1},{"version":"b064c36f35de7387d71c599bfcf28875849a1dbc733e82bd26cae3d1cd060521","impliedFormat":1},{"version":"05c7280d72f3ed26f346cbe7cbbbb002fb7f15739197cbbee6ab3fd1a6cb9347","impliedFormat":1},{"version":"8de9fe97fa9e00ec00666fa77ab6e91b35d25af8ca75dabcb01e14ad3299b150","impliedFormat":1},{"version":"04b7b2e0832dfd3c31e81df3975e8d8fda28e7ff999b0aa2932608a8f6661d5c","impliedFormat":1},{"version":"ca2d34c6ed5cbd3070b8b6f32f42ae54adcc6499c1e4b99f0a5798b3f27cc653","impliedFormat":1},{"version":"9ec68995e66dd6b9dac834bf5ae85fde802714ea2e82151a5d1d53ef01b463ef","impliedFormat":1},{"version":"5c4d626b4902f2ef8a1cc146d761d276cef988016dc674e3b98fbad70e64bc9f","impliedFormat":1},{"version":"fdfaa0aad899524962e2955287b5b991ffe3be50f64e02eb60c933ca44644a94","impliedFormat":1},{"version":"53c972a0f9bc3a4ec70fff7314123ea8cfcf75b3703046f767d2dc1eea87b2fb","impliedFormat":1},{"version":"f974e4a06953682a2c15d5bd5114c0284d5abf8bc0fe4da25cb9159427b70072","impliedFormat":1},{"version":"50256e9c31318487f3752b7ac12ff365c8949953e04568009c8705db802776fb","impliedFormat":1},{"version":"7d73b24e7bf31dfb8a931ca6c4245f6bb0814dfae17e4b60c9e194a631fe5f7b","impliedFormat":1},{"version":"d130c5f73768de51402351d5dc7d1b36eaec980ca697846e53156e4ea9911476","impliedFormat":1},{"version":"413586add0cfe7369b64979d4ec2ed56c3f771c0667fbde1bf1f10063ede0b08","impliedFormat":1},{"version":"06472528e998d152375ad3bd8ebcb69ff4694fd8d2effaf60a9d9f25a37a097a","impliedFormat":1},{"version":"7303b45138d2511035056a5901a1490ebdcbf055cbb1276f8629c5121cbe733e","impliedFormat":1},{"version":"27f874cd5327507eeff699a74567f60c1215b94509f4308633a7b01922471ed2","impliedFormat":1},{"version":"a401617604fa1f6ce437b81689563dfdc377069e4c58465dbd8d16069aede0a5","impliedFormat":1},{"version":"2c6cf04bc525caf6546e859e8ef10bfb9573837ec0bc5ec7b53a7b1b8ca72781","impliedFormat":1},{"version":"8695dec09ad439b0ceef3776ea68a232e381135b516878f0901ed2ea114fd0fe","impliedFormat":1},{"version":"304b44b1e97dd4c94697c3313df89a578dca4930a104454c99863f1784a54357","impliedFormat":1},{"version":"0a437ae178f999b46b6153d79095b60c42c996bc0458c04955f1c996dc68b971","impliedFormat":1},{"version":"74b2a5e5197bd0f2e0077a1ea7c07455bbea67b87b0869d9786d55104006784f","impliedFormat":1},{"version":"4a7baeb6325920044f66c0f8e5e6f1f52e06e6d87588d837bdf44feb6f35c664","impliedFormat":1},{"version":"87cc05fe13108f02e12da7e3efd8e360fef78d96a0c9e11408ea1b1b9fb3e03d","impliedFormat":1},{"version":"1abbf67c218d23c2ce76887caac2df6c7dab3d97ba2b65348432b876f510002a","impliedFormat":1},{"version":"1a82deef4c1d39f6882f28d275cad4c01f907b9b39be9cbc472fcf2cf051e05b","impliedFormat":1},{"version":"4b20fcf10a5413680e39f5666464859fc56b1003e7dfe2405ced82371ebd49b6","impliedFormat":1},{"version":"c06ef3b2569b1c1ad99fcd7fe5fba8d466e2619da5375dfa940a94e0feea899b","impliedFormat":1},{"version":"f7d628893c9fa52ba3ab01bcb5e79191636c4331ee5667ecc6373cbccff8ae12","impliedFormat":1},{"version":"1d879125d1ec570bf04bc1f362fdbe0cb538315c7ac4bcfcdf0c1e9670846aa6","impliedFormat":1},{"version":"dad97c99382889e9c7d1a9d8275500ff71235130fae9f8916fdbf3641d56e592","impliedFormat":1},{"version":"a6dba407fc287f1e25454e75028c91bbc00675f2d1c4e8b3edcc36c08611a486","impliedFormat":1},{"version":"d663134457d8d669ae0df34eabd57028bddc04fc444c4bc04bc5215afc91e1f4","impliedFormat":1},{"version":"e91f7b1344577a02f051b9b471f33044fef8334a76dc9e1de003d17595a5219b","impliedFormat":1},{"version":"c0723195c85e19656d6b5b9fdb81d3f3403c1ae4679e722c6ea058c516b38d12","impliedFormat":1},{"version":"b55eb9f72166093b5460d34b34f5d8699c968de3bc3fc696e40f2c93f2ebf650","impliedFormat":1},{"version":"71d9eb4c4e99456b78ae182fb20a5dfc20eb1667f091dbb9335b3c017dd1c783","impliedFormat":1},{"version":"cfa846a7b7847a1d973605fbb8c91f47f3a0f0643c18ac05c47077ebc72e71c7","impliedFormat":1},{"version":"1594da19968752a22b2ac48c2d0e60575700e745c577a8a4a676b841238ad5bb","impliedFormat":1},{"version":"e0cee12109e0a10a4c3d6769fcc7644b7c1ea7f52365bea51728f5af29f8a137","impliedFormat":1},{"version":"7d4254b4c6c67a29d5e7f65e67d72540480ac2cfb041ca484847f5ae70480b62","impliedFormat":1},{"version":"3536968defef8a75514f547ead5e2e9c1e984820290ec9b00c5fdfb6ef786535","impliedFormat":1},{"version":"d83773870080c30a230e322ce13a9c6f3398e8dacea4ea8a83e26370f3bac23e","impliedFormat":1},{"version":"dcfeaf98d66314fec29a9076c4290e45d0b196a65827becc19138e9c7b855f37","impliedFormat":1},{"version":"6849fe9210fe4946d5f085bfed36758f33dc6ae15a751338d178dd4daa017c46","impliedFormat":1},{"version":"888cda0fa66d7f74e985a3f7b1af1f64b8ff03eb3d5e80d051c3cbdeb7f32ab7","impliedFormat":1},{"version":"60681e13f3545be5e9477acb752b741eae6eaf4cc01658a25ec05bff8b82a2ef","impliedFormat":1},{"version":"ffae4e1e06aa848a1e4bcef162cd1c48e5909b26223515981310af9c036bdfc7","impliedFormat":1},{"version":"a57b1802794433adec9ff3fed12aa79d671faed86c49b09e02e1ac41b4f1d33a","impliedFormat":1},{"version":"34e16eb7c31768a11a08aebcfb3d70d7b8f0b016197e98d8419e566ceae6d6c8","impliedFormat":1},{"version":"f94ec1f7e4b709d26960306c9082a7a1b728a6e13089346aa48ba57c74cbf47e","impliedFormat":1},{"version":"9a11cb4033405e96c247cd5aa29790212aaffdd127869e8a5219103f0b389fd5","impliedFormat":1},{"version":"01479d9d5a5dda16d529b91811375187f61a06e74be294a35ecce77e0b9e8d6c","impliedFormat":1},{"version":"aff5213585cb72e94054dfe17250ff315f3569b3919d1ef1ad235f37c4ee894e","impliedFormat":1},{"version":"fb2ea35e1be6388d722d7725e2b49c697d34d9c890c3b96758faaeb86d35cef8","impliedFormat":1},{"version":"ce0df82a9ae6f914ba08409d4d883983cc08e6d59eb2df02d8e4d68309e7848b","impliedFormat":1},{"version":"1a4dc28334a926d90ba6a2d811ba0ff6c22775fcc13679521f034c124269fd40","impliedFormat":1},{"version":"f05315ff85714f0b87cc0b54bcd3dde2716e5a6b99aedcc19cad02bf2403e08c","impliedFormat":1},{"version":"5fad3b31fc17a5bc58095118a8b160f5260964787c52e7eb51e3d4fcf5d4a6f0","impliedFormat":1},{"version":"72105519d0390262cf0abe84cf41c926ade0ff475d35eb21307b2f94de985778","impliedFormat":1},{"version":"456006a6975b26c0a1785feddae165f6d307e2d601ffde27e21fc4a790e448a4","impliedFormat":1},{"version":"c857e0aae3f5f444abd791ec81206020fbcc1223e187316677e026d1c1d6fe08","impliedFormat":1},{"version":"ccf6dd45b708fb74ba9ed0f2478d4eb9195c9dfef0ff83a6092fa3cf2ff53b4f","impliedFormat":1},{"version":"1fe0d18b111e1145a7e7601855bccd4ca20f24e3b9a5aba6bb1fa9d1a7059170","impliedFormat":1},{"version":"5632c3c26d420c063eebe64c45b1248b9492a67bf44f1d0c57e9dc8f6cf449bb","impliedFormat":1},{"version":"0df5aa619ab12993a39ea6dae062ee46eadbb4d738916460e636ada52bced75b","impliedFormat":1},{"version":"8fca3039857709484e5893c05c1f9126ab7451fa6c29e19bb8c2411a2e937345","impliedFormat":1},{"version":"35069c2c417bd7443ae7c7cafd1de02f665bf015479fec998985ffbbf500628c","impliedFormat":1},{"version":"10ab7be91f87ebe8916b62cf28af2e45b5601fc7b0e311adf838f912c6b31dd8","impliedFormat":1},{"version":"bc636fbc08e0979ceb7eb0731a33000283d77a33b62e1f71ee65be50394e40ba","impliedFormat":1},{"version":"7e0b7f91c5ab6e33f511efc640d36e6f933510b11be24f98836a20a2dc914c2d","impliedFormat":1},{"version":"045b752f44bf9bbdcaffd882424ab0e15cb8d11fa94e1448942e338c8ef19fba","impliedFormat":1},{"version":"2894c56cad581928bb37607810af011764a2f511f575d28c9f4af0f2ef02d1ab","impliedFormat":1},{"version":"0a72186f94215d020cb386f7dca81d7495ab6c17066eb07d0f44a5bf33c1b21a","impliedFormat":1},{"version":"75bbd3be047d539988a0ff0b56384ef7a6a25f3b676ad96bee547d44c31622a7","impliedFormat":1},{"version":"42960001a776b089ade681ab5cfddc936e0afb0615133ec1841f3dee89d3e1bf","impliedFormat":1},{"version":"0aedb02516baf3e66b2c1db9fef50666d6ed257edac0f866ea32f1aa05aa474f","impliedFormat":1},{"version":"da47712b394d944328245482603bc6f416d3949b67c9392279caab595076b510","affectsGlobalScope":true,"impliedFormat":1},{"version":"37d0071d8f0a06dc55c2c5e0ec3391affd4fd107c53410bf358196ec0bf3923f","impliedFormat":1},{"version":"b213dad76ca37fd552274c9499056e1c0d9c1bd38a55bb7f68b22ba6b84c3ad7","impliedFormat":1},{"version":"56ccb49443bfb72e5952f7012f0de1a8679f9f75fc93a5c1ac0bafb28725fc5f","impliedFormat":1},{"version":"20fa37b636fdcc1746ea0738f733d0aed17890d1cd7cb1b2f37010222c23f13e","impliedFormat":1},{"version":"d90b9f1520366d713a73bd30c5a9eb0040d0fb6076aff370796bc776fd705943","impliedFormat":1},{"version":"bc03c3c352f689e38c0ddd50c39b1e65d59273991bfc8858a9e3c0ebb79c023b","impliedFormat":1},{"version":"19df3488557c2fc9b4d8f0bac0fd20fb59aa19dec67c81f93813951a81a867f8","affectsGlobalScope":true,"impliedFormat":1},{"version":"b25350193e103ae90423c5418ddb0ad1168dc9c393c9295ef34980b990030617","affectsGlobalScope":true,"impliedFormat":1},{"version":"bef86adb77316505c6b471da1d9b8c9e428867c2566270e8894d4d773a1c4dc2","impliedFormat":1},{"version":"5a49adaef698b7ad7e6127949fa1b0bbd3d46b7cbd11c54e392a4dcdd51f5190","impliedFormat":1},{"version":"6ee598cdfdd0fa52039dca135b3dfff7b49035dc13292143e0a93843e3861967","impliedFormat":1},{"version":"27be6622e2922a1b412eb057faa854831b95db9db5035c3f6d4b677b902ab3b7","impliedFormat":1},{"version":"5c634644d45a1b6bc7b05e71e05e52ec04f3d73d9ac85d5927f647a5f965181a","impliedFormat":1},{"version":"2489bf04d77dc025ba67f49f1a56eb24b9db477d5ff88123d887e163ed1776aa","impliedFormat":1},{"version":"63a7595a5015e65262557f883463f934904959da563b4f788306f699411e9bac","impliedFormat":1},{"version":"4ba137d6553965703b6b55fd2000b4e07ba365f8caeb0359162ad7247f9707a6","impliedFormat":1},{"version":"0b77b819b5417775fccb20c678293cf614c054a5b1a65421a5b933a9124ba998","impliedFormat":1},{"version":"eb5acb58487367e502d994b57e2c58255d8241f481ea8efa8e79af23af3f41c2","impliedFormat":1},{"version":"9252d498a77517aab5d8d4b5eb9d71e4b225bbc7123df9713e08181de63180f6","impliedFormat":1},{"version":"b1f1d57fde8247599731b24a733395c880a6561ec0c882efaaf20d7df968c5af","impliedFormat":1},{"version":"6715dc4eb59c8ea9abe2b78c235ed331dc710a06fe56798868dbc4d40cd1b707","impliedFormat":1},{"version":"35e6379c3f7cb27b111ad4c1aa69538fd8e788ab737b8ff7596a1b40e96f4f90","impliedFormat":1},{"version":"1fffe726740f9787f15b532e1dc870af3cd964dbe29e191e76121aa3dd8693f2","impliedFormat":1},{"version":"5a3ea721d03a361ccbdd7390ccd75f6e84cbca3a3f01f4b331ecc9af31890c49","impliedFormat":1},{"version":"e7dfaee4af38d45b1cab8a1ee0b3bc1f85ddcf64545ed391d675d78ae6526274","affectsGlobalScope":true,"impliedFormat":1},{"version":"e8daa443eaf9a27fd382cc1f8ebe30330c0f4d89511cfb469166874806751d35","impliedFormat":1},{"version":"af48e58339188d5737b608d41411a9c054685413d8ae88b8c1d0d9bfabdf6e7e","impliedFormat":1},{"version":"616775f16134fa9d01fc677ad3f76e68c051a056c22ab552c64cc281a9686790","impliedFormat":1},{"version":"65c24a8baa2cca1de069a0ba9fba82a173690f52d7e2d0f1f7542d59d5eb4db0","impliedFormat":1},{"version":"f9fe6af238339a0e5f7563acee3178f51db37f32a2e7c09f85273098cee7ec49","impliedFormat":1},{"version":"1de8c302fd35220d8f29dea378a4ae45199dc8ff83ca9923aca1400f2b28848a","impliedFormat":1},{"version":"77e71242e71ebf8528c5802993697878f0533db8f2299b4d36aa015bae08a79c","impliedFormat":1},{"version":"98a787be42bd92f8c2a37d7df5f13e5992da0d967fab794adbb7ee18370f9849","impliedFormat":1},{"version":"332248ee37cca52903572e66c11bef755ccc6e235835e63d3c3e60ddda3e9b93","impliedFormat":1},{"version":"94e8cc88ae2ef3d920bb3bdc369f48436db123aa2dc07f683309ad8c9968a1e1","impliedFormat":1},{"version":"4545c1a1ceca170d5d83452dd7c4994644c35cf676a671412601689d9a62da35","impliedFormat":1},{"version":"320f4091e33548b554d2214ce5fc31c96631b513dffa806e2e3a60766c8c49d9","impliedFormat":1},{"version":"a2d648d333cf67b9aeac5d81a1a379d563a8ffa91ddd61c6179f68de724260ff","impliedFormat":1},{"version":"d90d5f524de38889d1e1dbc2aeef00060d779f8688c02766ddb9ca195e4a713d","impliedFormat":1},{"version":"07ed3ddab975995eea41b22f3010506fb9f5fb301d04820b07d7a1aee5477d7c","impliedFormat":1},{"version":"969d8b0965849f4bae7cab0ba90bd1e1220e95999c2c6f01117fa7500901c017","impliedFormat":1},{"version":"6ec840ee5e2bc103f557fe38b1d585ee250540468713d7634ee066de372bf332","impliedFormat":1},{"version":"b0309e1eda99a9e76f87c18992d9c3689b0938266242835dd4611f2b69efe456","impliedFormat":1},{"version":"47699512e6d8bebf7be488182427189f999affe3addc1c87c882d36b7f2d0b0e","impliedFormat":1},{"version":"6ceb10ca57943be87ff9debe978f4ab73593c0c85ee802c051a93fc96aaf7a20","impliedFormat":1},{"version":"1de3ffe0cc28a9fe2ac761ece075826836b5a02f340b412510a59ba1d41a505a","impliedFormat":1},{"version":"e46d6cc08d243d8d0d83986f609d830991f00450fb234f5b2f861648c42dc0d8","impliedFormat":1},{"version":"1c0a98de1323051010ce5b958ad47bc1c007f7921973123c999300e2b7b0ecc0","impliedFormat":1},{"version":"ff863d17c6c659440f7c5c536e4db7762d8c2565547b2608f36b798a743606ca","impliedFormat":1},{"version":"5412ad0043cd60d1f1406fc12cb4fb987e9a734decbdd4db6f6acf71791e36fe","impliedFormat":1},{"version":"ad036a85efcd9e5b4f7dd5c1a7362c8478f9a3b6c3554654ca24a29aa850a9c5","impliedFormat":1},{"version":"fedebeae32c5cdd1a85b4e0504a01996e4a8adf3dfa72876920d3dd6e42978e7","impliedFormat":1},{"version":"e297c0a524edee7677939122f90027bfbe5f2698939d9a85728e5044b39c7124","impliedFormat":1},{"version":"cdf21eee8007e339b1b9945abf4a7b44930b1d695cc528459e68a3adc39a622e","impliedFormat":1},{"version":"bc9ee0192f056b3d5527bcd78dc3f9e527a9ba2bdc0a2c296fbc9027147df4b2","impliedFormat":1},{"version":"b62381cae176db34f003cc6172ee8f3e0122014889d66391aa73698105cf4934","impliedFormat":1},{"version":"1d9c0a9a6df4e8f29dc84c25c5aa0bb1da5456ebede7a03e03df08bb8b27bae6","impliedFormat":1},{"version":"84380af21da938a567c65ef95aefb5354f676368ee1a1cbb4cae81604a4c7d17","impliedFormat":1},{"version":"1af3e1f2a5d1332e136f8b0b95c0e6c0a02aaabd5092b36b64f3042a03debf28","impliedFormat":1},{"version":"30d8da250766efa99490fc02801047c2c6d72dd0da1bba6581c7e80d1d8842a4","impliedFormat":1},{"version":"03566202f5553bd2d9de22dfab0c61aa163cabb64f0223c08431fb3fc8f70280","impliedFormat":1},{"version":"41eb514d9ce0a6e87957f08a4b7af70d93f87637f37dee706e2d92a6601c25a9","impliedFormat":1},{"version":"e7765aa8bcb74a38b3230d212b4547686eb9796621ffb4367a104451c3f9614f","impliedFormat":1},{"version":"1de80059b8078ea5749941c9f863aa970b4735bdbb003be4925c853a8b6b4450","impliedFormat":1},{"version":"1d079c37fa53e3c21ed3fa214a27507bda9991f2a41458705b19ed8c2b61173d","impliedFormat":1},{"version":"5bf5c7a44e779790d1eb54c234b668b15e34affa95e78eada73e5757f61ed76a","impliedFormat":1},{"version":"5835a6e0d7cd2738e56b671af0e561e7c1b4fb77751383672f4b009f4e161d70","impliedFormat":1},{"version":"4b7f74b772140395e7af67c4841be1ab867c11b3b82a51b1aeb692822b76c872","impliedFormat":1},{"version":"7bd01f0f28cd3aeb2046274d85208e245965f6f2948edf4f7b2057bcf9f22ccc","impliedFormat":99},{"version":"d2f2cf2b8cc92bea913cda4a076e0f790b23a21e84f989d12f0116a7fe3906e0","impliedFormat":99},{"version":"6de125ea94866c736c6d58d68eb15272cf7d1020a5b459fea1c660027eca9a90","affectsGlobalScope":true,"impliedFormat":1},{"version":"f5b20bc288ee49989c95b20847fc93b96bf61cc0845598897a6a53a967dd7d07","affectsGlobalScope":true,"impliedFormat":1},{"version":"064ac1c2ac4b2867c2ceaa74bbdce0cb6a4c16e7c31a6497097159c18f74aa7c","impliedFormat":1},{"version":"3dc14e1ab45e497e5d5e4295271d54ff689aeae00b4277979fdd10fa563540ae","impliedFormat":1},{"version":"d3b315763d91265d6b0e7e7fa93cfdb8a80ce7cdd2d9f55ba0f37a22db00bdb8","impliedFormat":1},{"version":"b789bf89eb19c777ed1e956dbad0925ca795701552d22e68fd130a032008b9f9","impliedFormat":1},{"version":"a384610388221cd70cffb4503cee7853b8b076f2b4a55324b20a4bdbd25a3538","affectsGlobalScope":true},"7ad303e40d4fddf44f156129e397511953a71481c5cfd86b1862649aaaf240cc","ca9daf0d2269bb8cb03a96e0d23315e6039da8228500896470410795a070e413",{"version":"fe93c474ab38ac02e30e3af073412b4f92b740152cf3a751fdaee8cbea982341","impliedFormat":1},{"version":"3255b97f3f24af29c79cc1aa88004efb13b6285ebdde0a567bf32e19bb65250d","impliedFormat":1},{"version":"1e00b8bf9e3766c958218cd6144ffe08418286f89ff44ba5a2cc830c03dd22c7","impliedFormat":1},"b98a24027c5c78385b127baf3c2f4f29b18c2c8c19c0beed8c74bb57bd98e4ef","ff68e26bc13dfda200bf48f859df3d97ae8cf3a749ff1fbf8279efedcc182932","a0d69784efd3673bbcddf8752c08c1bc6eb39bec153a5c27a699ad065b8e9756","b4d5aa2f4f509717d2b60593da595d2e5f4c9cfb162d5b78143957ab3f19e833","6c58530e14cf2ba81eebf15114b015806f29df819c93058cedaed459444f720c","8f900664d9ecec24aa2fa8c2e4fa0f5adb49063c077fc228349c20b5a5c18347","93934a31ce244f1360e6dd5b92a8ec5b3de0bad98b8a6c0b8d98de268e2cb716","554e69717ca02d9daf8ae56f4b83eb80093e9c15d50ce2639131f32ea2a99214","af9f730053696717116759329daf43d12e3d2aa99e7f63ebc0dbcc7d0f8e0561",{"version":"8f60df355f1977309eea5b163970f8c95c9b3f3a91d3ae46fa60fe6af0b42705","signature":"7237060c590b200df3597909a9a0d2bacbb1ad68dc62cd4338c9357a08826967"},{"version":"0726ad9c2ab57c0fb91dc3e54ddee60f9c3d8809a6c60613a680f030f2b51d6c","signature":"fc3e57f03c9502f40c4698d34c7ebb3cc17b5e488e6b97b4313262bc963ab413"},"d1986184a09a52db8228cb2bb2a61a8c05c9354e5b93cec8e2628d8579c892d7",{"version":"a384610388221cd70cffb4503cee7853b8b076f2b4a55324b20a4bdbd25a3538","affectsGlobalScope":true},"8c738d7ab02122bec55d98eab2f5e875f5306ebffe56a6be96f2da0916a7ea71","d1986184a09a52db8228cb2bb2a61a8c05c9354e5b93cec8e2628d8579c892d7","ac965c40df1c4a3d53cebda90c50063ebda4522b0a054741dc3d2bd98bc852e6",{"version":"751764bb94219b4ce8f5475dc35d3de2e432fea01a0c9610cd7f69ad05e398c6","impliedFormat":1},{"version":"f3d8c757e148ad968f0d98697987db363070abada5f503da3c06aefd9d4248c1","impliedFormat":1},{"version":"96d14f21b7652903852eef49379d04dbda28c16ed36468f8c9fa08f7c14c9538","impliedFormat":1}],"root":[[530,532],[536,551]],"options":{"allowJs":true,"esModuleInterop":true,"jsx":4,"module":99,"skipLibCheck":true,"strict":true,"target":4},"referencedMap":[[550,1],[530,2],[551,3],[547,4],[548,2],[549,5],[536,6],[544,7],[545,8],[538,9],[537,10],[543,9],[540,8],[541,8],[542,8],[539,8],[546,9],[531,11],[532,12],[374,2],[552,2],[553,2],[554,2],[140,13],[141,13],[142,14],[97,15],[143,16],[144,17],[145,18],[92,2],[95,19],[93,2],[94,2],[146,20],[147,21],[148,22],[149,23],[150,24],[151,25],[152,25],[153,26],[154,27],[155,28],[156,29],[98,2],[96,2],[157,30],[158,31],[159,32],[191,33],[160,34],[161,35],[162,36],[163,37],[164,38],[165,39],[166,40],[167,41],[168,42],[169,43],[170,43],[171,44],[172,2],[173,45],[175,46],[174,47],[176,48],[177,49],[178,50],[179,51],[180,52],[181,53],[182,54],[183,55],[184,56],[185,57],[186,58],[187,59],[188,60],[99,2],[100,2],[101,2],[139,61],[189,62],[190,63],[195,64],[459,65],[196,66],[194,67],[461,68],[460,69],[192,70],[457,2],[193,71],[83,2],[85,72],[456,65],[226,65],[84,2],[482,73],[487,74],[494,75],[477,76],[230,2],[238,77],[378,78],[381,79],[353,2],[366,80],[373,81],[255,2],[355,2],[236,2],[352,82],[398,83],[237,2],[228,84],[380,85],[382,86],[383,87],[454,88],[347,89],[300,90],[360,91],[361,92],[359,93],[358,2],[354,94],[379,95],[239,96],[424,2],[425,97],[266,98],[240,99],[267,98],[303,98],[206,98],[376,100],[375,2],[365,101],[472,2],[215,2],[493,102],[432,103],[433,104],[429,105],[511,2],[330,2],[434,9],[430,106],[516,107],[515,108],[510,2],[281,2],[333,109],[332,2],[509,110],[431,65],[286,111],[293,112],[295,113],[285,2],[290,114],[292,115],[294,116],[289,117],[287,2],[291,118],[512,2],[508,2],[514,119],[513,2],[284,120],[503,121],[506,122],[274,123],[273,124],[272,125],[519,65],[271,126],[260,2],[521,2],[534,127],[533,2],[522,65],[523,128],[198,2],[362,129],[363,130],[364,131],[202,2],[367,2],[222,132],[197,2],[446,65],[204,133],[445,134],[444,135],[435,2],[436,2],[443,2],[438,2],[441,136],[437,2],[439,137],[442,138],[440,137],[235,2],[232,2],[233,98],[387,2],[392,139],[393,140],[391,141],[389,142],[390,143],[385,2],[452,9],[227,9],[481,144],[488,145],[492,146],[321,147],[320,2],[315,2],[468,148],[476,149],[348,150],[349,151],[427,152],[337,2],[450,153],[325,65],[342,154],[453,155],[338,2],[341,156],[339,2],[451,157],[448,158],[447,2],[449,2],[345,2],[423,159],[210,160],[323,161],[327,162],[343,163],[346,164],[335,165],[328,166],[475,167],[401,168],[319,169],[207,170],[474,171],[203,172],[394,173],[386,2],[395,174],[412,175],[384,2],[411,176],[91,2],[406,177],[231,2],[426,178],[402,2],[216,2],[218,2],[357,2],[410,179],[234,2],[258,180],[344,181],[264,182],[324,2],[409,2],[388,2],[414,183],[415,184],[356,2],[417,185],[419,186],[418,187],[368,2],[408,170],[421,188],[318,189],[407,190],[413,191],[243,2],[247,2],[246,2],[245,2],[250,2],[244,2],[253,2],[252,2],[249,2],[248,2],[251,2],[254,192],[242,2],[310,193],[309,2],[314,194],[311,195],[313,196],[316,194],[312,195],[223,197],[302,198],[471,199],[469,2],[498,200],[500,201],[464,202],[499,203],[211,204],[208,204],[241,2],[225,205],[224,206],[220,207],[221,208],[229,209],[257,209],[268,209],[304,210],[269,210],[213,211],[212,2],[308,212],[307,213],[306,214],[305,215],[214,216],[455,217],[256,218],[463,219],[428,220],[458,221],[462,222],[351,223],[350,224],[331,225],[317,226],[299,227],[301,228],[298,229],[420,230],[322,2],[486,2],[219,231],[422,232],[470,233],[329,2],[259,234],[336,235],[334,236],[261,237],[396,238],[465,2],[262,239],[397,239],[484,2],[483,2],[485,2],[467,2],[466,2],[399,240],[326,2],[296,241],[217,242],[275,2],[201,243],[263,2],[490,65],[200,2],[502,244],[283,65],[496,9],[282,245],[479,246],[280,244],[205,2],[504,247],[278,65],[279,65],[270,2],[199,2],[277,248],[276,249],[265,250],[340,42],[400,42],[416,2],[404,251],[403,2],[288,120],[209,2],[297,65],[473,132],[480,252],[86,65],[89,253],[90,254],[87,65],[88,2],[377,255],[372,256],[371,2],[370,257],[369,2],[478,258],[489,259],[491,260],[495,261],[535,262],[497,263],[501,264],[529,265],[505,265],[528,266],[507,267],[517,268],[518,269],[520,270],[524,271],[527,132],[526,2],[525,272],[405,273],[81,2],[82,2],[13,2],[14,2],[16,2],[15,2],[2,2],[17,2],[18,2],[19,2],[20,2],[21,2],[22,2],[23,2],[24,2],[3,2],[25,2],[26,2],[4,2],[27,2],[31,2],[28,2],[29,2],[30,2],[32,2],[33,2],[34,2],[5,2],[35,2],[36,2],[37,2],[38,2],[6,2],[42,2],[39,2],[40,2],[41,2],[43,2],[7,2],[44,2],[49,2],[50,2],[45,2],[46,2],[47,2],[48,2],[8,2],[54,2],[51,2],[52,2],[53,2],[55,2],[9,2],[56,2],[57,2],[58,2],[60,2],[59,2],[61,2],[62,2],[10,2],[63,2],[64,2],[65,2],[11,2],[66,2],[67,2],[68,2],[69,2],[70,2],[1,2],[71,2],[72,2],[12,2],[76,2],[74,2],[79,2],[78,2],[73,2],[77,2],[75,2],[80,2],[117,274],[127,275],[116,274],[137,276],[108,277],[107,278],[136,272],[130,279],[135,280],[110,281],[124,282],[109,283],[133,284],[105,285],[104,272],[134,286],[106,287],[111,288],[112,2],[115,288],[102,2],[138,289],[128,290],[119,291],[120,292],[122,293],[118,294],[121,295],[131,272],[113,296],[114,297],[123,298],[103,299],[126,290],[125,288],[129,2],[132,300]],"affectedFilesPendingEmit":[551,549,536,544,545,538,537,543,540,541,542,539,546,532],"version":"5.9.3"}

--- ARCHIVO: C:\Users\Dell\dinco-web\.githooks\commit-msg ---

#!/bin/sh
# Valida que el mensaje de commit incluya espaÃ±ol bÃ¡sico y explicaciÃ³n de cambios.

MSG_FILE="$1"

# Buscar caracteres tÃ­picos en espaÃ±ol o palabras claves en espaÃ±ol
if grep -qE "[Ã¡Ã©Ã­Ã³ÃºÃ±ÃÃ‰ÃÃ“ÃšÃ‘Â¿Â¡]" "$MSG_FILE" || grep -qE "(Resumen|Resumen breve|DescripciÃ³n|Cambios|Por quÃ©|actualiz|arregl|correcci[oÃ³]n|mejoras|fijo|fixo|ajuste)" "$MSG_FILE"; then
  exit 0
else
  echo "ERROR: El mensaje de commit debe estar en espaÃ±ol y especificar quÃ© se cambiÃ³ y por quÃ©." >&2
  echo "Usa la plantilla que se agregÃ³ automÃ¡ticamente. Ejemplo:" >&2
  echo "Resumen breve en espaÃ±ol (una lÃ­nea)" >&2
  echo "DescripciÃ³n:" >&2
  echo "- Cambios: ..." >&2
  echo "- Por quÃ©: ..." >&2
  exit 1
fi


--- ARCHIVO: C:\Users\Dell\dinco-web\.githooks\prepare-commit-msg ---

#!/bin/sh
# Plantilla en espaÃ±ol para mensajes de commit.
# AÃ±ade una estructura guÃ­a si el mensaje estÃ¡ vacÃ­o o no contiene la plantilla.

MSG_FILE="$1"
COMMIT_SOURCE="$2"

# No modificar mensajes de merge o squash generados automÃ¡ticamente
if [ "$COMMIT_SOURCE" = "merge" ] || [ "$COMMIT_SOURCE" = "squash" ]; then
  exit 0
fi

# Si el mensaje ya contiene la plantilla en espaÃ±ol, salir
if grep -qE "Resumen breve en espaÃ±ol|DescripciÃ³n:|- Cambios:|- Por quÃ©:" "$MSG_FILE"; then
  exit 0
fi

# AÃ±adir plantilla al final del mensaje (si estÃ¡ vacÃ­o o no tiene contenido Ãºtil)
cat <<'EOF' >> "$MSG_FILE"

Resumen breve en espaÃ±ol (una lÃ­nea):
DescripciÃ³n:
- Cambios: (quÃ© se cambiÃ³)
- Por quÃ©: (motivo/beneficio de este cambio)
EOF

exit 0


--- ARCHIVO: C:\Users\Dell\dinco-web\.github\workflows\ci.yml ---

name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Lint
        run: npm run lint

      - name: Build
        run: npm run build


--- ARCHIVO: C:\Users\Dell\dinco-web\app\favicon.ico ---

         (  F          (  n  00     (-  –           ¾F  (                                                           $   ]   º   º   ]   $                                           ò   ÿ   ÿ   ÿ   ÿ   ò                               8   à   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   à   8                  â   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   â              ¡   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ¡       #   ô   ÿ   ÿOOOÿ®®®ÿ«««ÿ«««ÿ«««ÿ«««ÿ­­­ÿgggÿ   ÿ   ÿ   ô   #   Y   ÿ   ÿ   ÿÿíííÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿýýýÿ555ÿ   ÿ   ÿ   ÿ   Y   »   ÿ   ÿ   ÿ   ÿkkkÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿŽŽŽÿ   ÿ   ÿ   ÿ   ÿ   »   »   ÿ   ÿ   ÿ   ÿ			ÿÍÍÍÿÿÿÿÿÿÿÿÿäääÿÿ   ÿ   ÿ   ÿ   ÿ   »   Y   ÿ   ÿ   ÿ   ÿ   ÿJJJÿýýýÿÿÿÿÿkkkÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Y   #   ô   ÿ   ÿ   ÿ   ÿÿ¶¶¶ÿÕÕÕÿ			ÿ   ÿ   ÿ   ÿ   ÿ   ô   #       ¡   ÿ   ÿ   ÿ   ÿ   ÿ111ÿDDDÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ¡              â   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   â                  8   à   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   à   8                               ò   ÿ   ÿ   ÿ   ÿ   ò                                           $   ]   º   º   ]   $                                                                                                                                                                                                                                                                                    (       @                                                                               ,   U      è   è      U   ,                                                                                      *   …   Ò   ù   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ù   Ò   …   *                                                                      –   ó   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ó   –                                                          Q   á   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   á   Q                                               r   û   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   û   r                                       r   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   r                               O   û   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   û   O                          ä   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ã                      —   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   —               (   õ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ô   '           †   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ888ÿ‹‹‹ÿˆˆˆÿˆˆˆÿˆˆˆÿˆˆˆÿˆˆˆÿˆˆˆÿˆˆˆÿˆˆˆÿˆˆˆÿˆˆˆÿˆˆˆÿˆˆˆÿ‰‰‰ÿ___ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   †          Ô   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿîîîÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿSSSÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Ô      +   ú   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿhhhÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ®®®ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ú   +   T   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿËËËÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿôôôÿ,,,ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   T   ‚   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿGGGÿýýýÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ      é   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ­­­ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿäääÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   é   é   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ+++ÿóóóÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿjjjÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   é      ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ‹‹‹ÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÌÌÌÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ‚   T   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿãããÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿýýýÿIIIÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   T   +   ú   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿhhhÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ¯¯¯ÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ú   +      Ô   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿËËËÿÿÿÿÿÿÿÿÿôôôÿ,,,ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Ô          †   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿGGGÿýýýÿÿÿÿÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   †           '   ô   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ±±±ÿìììÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   õ   (               —   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ333ÿ___ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   —                      ã   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ä                          O   û   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   û   O                               r   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   r                                       r   û   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   û   r                                               Q   á   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   á   Q                                                          –   ó   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ó   –                                                                      *   …   Ò   ù   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ù   Ò   …   *                                                                                      ,   U      è   è      U   ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               (   0   `           -                                                                                             	   (   L   j   ³   ø   ÷   ³   j   K   (   	                                                                                                                                          V       Ø   ø   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ø   Ø       U                                                                                                                      %   ‹   á   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   á   ‹   &                                                                                                      ‹   ï   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ï   ‹                                                                                          Q   Ü   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Ü   R                                                                              Š   þ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   þ   Š                                                                     ­   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ­                                                             ¸   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ¸                                                     ®   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ®                                              Š   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Š                                       P   ý   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ý   O                                  ß   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ß                              ‹   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ‹                       #   ñ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ñ   #                   Œ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ‹                  ä   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ$$$ÿhhhÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿeeeÿPPPÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ä              U   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿëëëÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿsssÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   U           ¡   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿeeeÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÌÌÌÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ¡       	   Ú   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿÉÉÉÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿýýýÿHHHÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Ú   	   (   ù   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿEEEÿüüüÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ®®®ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ø   (   K   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿªªªÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿôôôÿ,,,ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   L   j   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ)))ÿòòòÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿŒŒŒÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   j   ´   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿˆˆˆÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿãããÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ³   ø   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿáááÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿiiiÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ø   ø   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿeeeÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿËËËÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ø   ³   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿÉÉÉÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿýýýÿHHHÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ´   j   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿEEEÿüüüÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿ®®®ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   j   L   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿªªªÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿôôôÿ,,,ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   K   (   ø   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ)))ÿòòòÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿŒŒŒÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ù   (   	   Ú   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿˆˆˆÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿãããÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Ú   	       ¡   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿáááÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿiiiÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ¡           U   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿeeeÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÿÌÌÌÿÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   U              ä   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿÿÉÉÉÿÿÿÿÿÿÿÿÿýýýÿHHHÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ä                  ‹   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿEEEÿüüüÿÿÿÿÿ®®®ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Œ                   #   ñ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ¬¬¬ÿûûûÿ,,,ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ñ   #                       ‹   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ222ÿ}}}ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ‹                              ß   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ß                                  O   ý   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ý   P                                       Š   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Š                                              ®   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ®                                                     ¸   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ¸                                                             ­   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ­                                                                     Š   þ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   þ   Š                                                                              R   Ü   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   Ü   Q                                                                                          ‹   ï   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ï   ‹                                                                                                      &   ‹   á   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   á   ‹   %                                                                                                                      U       Ø   ø   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ÿ   ø   Ø       V                                                                                                                                          	   (   K   j   ³   ÷   ø   ³   j   L   (   	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ‰PNG

   
IHDR         \r¨f   sRGB ®Îé   8eXIfMM *    ‡i                                D"8s  IDATxí]	°Õ™n”]<QVA–èÄh$	ÊNŒŽ13*ˆq°ÂdªÄ©I¡ˆ˜D“L2“ª(Î(Ô˜2ÖÄ™ÑG	‹Áq_@å±ˆà†ŠxÈ›ï»Ð¾{o÷½½ÓýýUß{}»OŸå;çÿûôùÏ9ÝÂ‘d®(Dg Ð8	èôN º]€î@ hx¥?v 
ÀNà3à=`;ð6ð.ð&°àuâà  ±”6‰P©Ð½€Á@ÿÃ RÓ PùiZqÊ^DNãà€wp¼
Ø¼ÐXÐhÐ˜Hg@ÀÌ
:Ùâ|ð5` p"@À'¼É²™s{
ëpü*ð2ÀÞ…Ä d Ò¯Œ–È|(0ø
0 à“>Kò
³xX¬6 IJÈ ¤C|?$KENØ}Ï“|ŠÂòµáàöh $	2 Ù|/§Â . Nz ’#¼ÃW€eÀ
à5€ã
’ˆÜ¶ˆúà;Ày •¾ ñgàs©h^  IÄÈ DL(¢;¸8 ÒHjg€cH|x 1 ËR"Œa€ïôÓ• GÁÙ@…è9`/`%0è
HÄ@jð½~,° ÛK
Ÿ,t).ÎèI‘ˆDèT¦Oû)~º°Vìu$b èª›
ÐU%¥7“ƒ¨›ù _É$b 8Aç×À€ßøJö3` 510wQñ?¤øvrðÑá:ü2þKÄ@ ¤øv*{%#í‚AZ€å’^(õÏ=ñ³g \ãÀWƒÛ€É!:àß,`à6ýÏ643:@’c.FÙŸ¤ðùä€u?Ð<'áÝ€ƒ€”_Üvp: É8Q¾›
IñÅ·
p{3ÎóÐkHÈ¢ŒG¡ž¼•®cñÑ¼
<62&‹
×2uCÁÿàÚòæ•­ßâ¤Tø3Ú
½ê
€›…;î¼”ªd/~m€½.ø’XÆ@{äw.°ð«d]G•Ú {lKÜàEbœÿý(P©RuMüTÛC›ÒÚÃ
Àdäï])¿Œ_Lmà=Äû=@bœÍ÷K€ÛGUkÙ^œUÓØÆØÖøš)1€È»gÕT¢ÂŠ¯°m`9Ú\Ú®³ÀQþÍ@ØÊÔýâ°–6ð:ÚžÕ^›w¬òï¸E—D¤Á ç	ü5°àºëÄFÐ,ßÜ
ðX"Òd€mð<€nB~òì@´¸÷µt×tx‹»
ü;ÚfÞ>ñ“ªíI8µˆ»¿8Ó¸C1Ûª$B¸•§e†©Ý+þ’jl«ÜEZÃÇ& ©ÊS:â:Š6°möë´ÿ\G1¥ç`¢¨Å!“nl»lÃÆŠÉ^€Q`í·@OcÙSÆÄ@e¸Í·º¹ç¤qbªp•ÿãS†Ä@upšº±FÀD@å¿Ð“¿º†¦Ðæ2@#À¹ÆõL3 £A’”$H2Ç _hž¶FH#rq(íÿOàDƒò¤¬ˆ¨àrunGOWaêbŠ &–SgDñ3ÀEDçto§*Ç¤šú¡Ä9kŠÝ~)¿•¡,$Â x¿RŸ1˜vàK áÀ9€DäU(ðw®&LEÒäê©»€S)¹é3ÐY8x8 $.i€(íŒÄK¬Å€YœŽìðaÈ]­—´À4”ôÇ€	c‰“®Å@3¸fà€ó•4Æ Æ¢„ÿ
Ð/*bàüþ Çþ˜$!I€~‡Ø7ÉB*-1`	o Ÿ º	‘$»àÇ¡D‹¾‰”L‰ˆûàòß êJ"’äÀOQ¢Ë)•ö2@#Ðx4‰"$e ¨ø·Iö8’àOiˆ8ø"Ý ¼GäÞ8[xÄt<ñ.´´7&‚m&ØŽR^‹³tq÷ Ø•á.¾§ÅYÅ-2È ½d§ ûã*_Üà&d|j\™W¼b ãôGùö«â*gœ¯ £‘é‡ÄF4ã"IñŠØƒ´/ b1q€NÈðãÀY€Dˆp¼ŒÛ9îãpÑ}w\¯ ó‘Ô¤£“Ó1 j`€èOûŸî­xK=€ÑHñ÷ ÷A“ˆ1
Ÿ#¾
D:U8jÀõýtù©ë$b bžA||ØU¼Q¿ü26%ªÌ)1 Šè…_
Àê¢³!~DÙàºæ• ¿à+b >A´Ü:]ÑE$ˆ£50òGDhRÑtèÐÁéÝ»wRÉ)ðPÇ ‘èn$‘ 3ÜÖë@bS§Nu–,Yâ´jÕÊ²œç:»¡ôÜ;ÀáÀßó@£`Ç|ã–-[)“'OVýÙÕ†©sFxÚ®“âÛ¥øn}Í›7¯ üü³~ýúÆºº:»ŒÀQ—©J_¤ÎUKj8–q0xðàÆ;v4 Ìž=[õhW=¾	Ýë	¤&·!e5Ë8hÑ¢EãÝwß]¤üüñá‡6öïß_õiW}þSZÚ?	¿/`Ÿ;vlã¾}ûŽ2 <±hÑ" »À§ÐAî¹‘¸ÜÕX,ã mÛ¶+V¬(©ü<¹wïÞÆ#F¨^íª×;“ÖþaHðc ûà”)SÊ*¿{aùòåpÊØc89(Ñ^€žþö4Ž&E¦ÛoÃ†
®žWü/· uÆ=±^€žþ*?{k^·_EíÇÅúúz¹íªgö† UI-‹è{WU*
œ:pû9.tÚ·o(/Ýºus>ûì3ç‰'ž^Rg€ßäÚžGâÌI_D®‘»žåÜ~~½ ¹­{
øúÙ?N0‘7½SêØ.Æ×¸ÿ~?}/y]nA;êØ£‹³ã2 ]ñFOB2C?·_I­÷œ”[Ð:°:Ú=#ÀOzKé-ã ˆÛÏ£ï%å´®Ý?jÐþIÀ®†PÛ¯¤æ{NÊ-hUÝÿt•:™œƒ˜øõ ,â ·ŸG×KÊ-hUÛç¢cƒhP7 ÿÎ¡Â˜Á@µn?¿\Ó-¸k×.¹ýˆ2ã:õú ð`ÙáF„Û=ý-á V·_ÉG¿ç¤Ü‚Vé Ýõ}¢0 WIù­ªøFºýÊ­öóèsM‡rZÕ8pJ¸QÜ*@OK8ëöó³
rZ¥ÔÝ–a, ßûwË ØSéW^y¥Ÿ‡¾.· 5íat7ÔØÝ¤üÖTv#Ý~7n­àA"¸üòËÕ+´£WøèpMÂÅ/ªhK8ˆÒíçgä´F/^„·«ÅŒÀM{e ì¨èR›|ú)qØë7Ýt“æ?8'àµ€KùíP~ºýî¹çž°ú\õýrÚÑ> Ç·Uk ØeP÷ß|ë^xÇéöó³
‹/V/Àüvòô™¯ôå„ä¢*×pâvûù ¹­Ð¾ÊŸ]JûË}óˆk8(•ˆÎÅÇÀÄ‰Ñ£GÇ—€OÌmÚ´q,X oúð”òe.â˜^ ¡QxÐÓßp’tûùõä4^_ƒN—{à†¾øÅyÄ2 †s¤ÛÏÏ Ð-Ø¹sgµsÛÌÐiêv‘”Z
8
!~PJ?Œc€«ýîºë®À›|Æ] ®Ü½{·³zõê¸“Rüµ1pnãÔàzïí¥º¼tlpû9³fÍrºvíjTæ®¿þzß4*OÊLã‹~•øÑçžÔ•3˜ƒ4Ý~~¯r­;ÔmêxYŒ+üÀ€€¡¤íöó3 r­;Ômêx“4à÷Å:7]ÕqLš4)U·Ÿ!rú1”êuê6¿ìÕ$Í
À7›®èÀ8ºwïîÌ™3Ç¸|5Ï>?î\zé¥ÍOë·œëÍ†× ðø,ïE›ÅÀŒ3œš•©2¹¹å–[œººº2Wu:E¾‚´›¼^p.H1cJºtû]}õÕB˜uéÔSOu®ºŠ»ÉIc€Ož¥òÄ%ƒ 
 ÆAZ«ýüüü®kµ ‘ºD?Ç5 Þ@Q×À
 ÿé3Àwê+®¸"ýŒT™ÎSÀžUÞ¥à13Àî?ûâ5 M'Ý‹úŸ>pûþZµj•~fjÈ
×ˆ×¡Ô‚n©¦±>× ðÿi5D¤[bf íÕ~a‹'·`Xc¹Ÿã -¼1ók¢›½ÿÄI«ýüÞ÷ý®kµ QºÅ¯|ókßMËé(92È@’t°ÉíçÇÝ‚X-èL×“a€úN4€“qÜž'$f0@·
@V„nA›Ü˜Yá½L9:â|/^sÇ ú—	¨Ó)0`êj¿°T\wÝuZ-–ÄèîÂ¨\ 	@Ñ:¦±cítûùœ{È-èÇRb×û1%× ôI,Y%T‘ÛÝ~‡‹rú1”ØõÂCŸ€,¼$–´*Ë€é«ýÊf<à¹0zþŽ¥èhÕFü„û¦ ·Ÿ«ý|â€¯8Z-èCRü—¹Tg× ÐHRf€‹glYí–ª¹sçÊ-–Äp÷Ó'+ŽÃèî¶mµ_Ø’gÍÍ–îçC¿{ ô	òÃ’”ÈªÛÏÎ™3gÊ-èGR|×¹7`G€Þñ¥¡˜ƒ0U·Ÿ_ÙµZÐ¡Ø¯ŸD )À±ó\>¬»ýÊ—üÐ¹ýŠõz N–¤Ä@ÖÝ~~´Ê-èÇP¬×{rs€¿´@¬<—Žœ›|.]ºÔ¸|”Îm|gûõëç¬_¿Þyå•WâKD1—bàM½”¢%¡s\“·Ÿ¥rú1Ëõnì\–Æ’„"-É Ý`.4æÛ~%3™àI}[0A²$µ“= -Ò>BH"G®Û^r„­<ÂEBGÝi Ú%”˜’9Ì@^Ý~~
@«ýŠüú1Üì€†@’ tû-[¶ÌèÏ{%@CÙ$ðmAgüøñÎš5kÊ†Ñ…ÈøœŠ/åŒOÿˆlßäÓ¿„áBÐ@.X°À±uäp¥Oüî6œ—x²9MPn¿`ß·o_§¾¾^nÁ`t…
¥§(úª»™ƒ\rûùsÆAÒyóæéÛ‚þT…¡@h
ƒE0lØ0çÎ;ïtÚµÓ˜kÆ¸N ¡¡ÁYµjUà
S#ì|^ã½º- |¢ÝpÃ
N—.…­ØÞ¥`×^{­zLñ6ƒƒ4 ŸÄ›†bç¨öe—]&"ªd€sÎœ9UÞ¥àU0ð!
ÀÁ*nPÐ*`—ÿæ›oÖ¨v•¼¹Ái8GåþÔÿhh ØmœŠÍËÀäÉ“sÏ=×{JÇU0ÀÕ‚óçÏwZ·æþ’ˆø”ƒ€ì›ö8bEzôèá,Y²Dïþ![CŸ>}œ7:k×®
“noÆÀfö >jvR?#b€ƒXˆ(¶üFÃAT¾FÕÕióêˆ[Á{ì°zvÄç>º¡C‡Êía+[0B2Dµœ=€íG~ë(
øÄºñÆÕõ‚LO×\sÜ‚>"8|‹`[)
&Lp8ø'‰–öäŒ”Óí4 oGeÎ#£ÛÀlÙ’_\“DÍ€Ü‚‘2ZØl¢Üi´9ŽŒ
täÈ‘9f Þ¢Ë-¿œ¼‹=€‡YÌyˆn?uQã¯}XÍ¬ÍsAïi >=ŒÐ1æ=RÉí+à +
­Ü‚¡¸.2 šŠKì«·ßôéÓCÆ¢Ûƒ20hÐ ‡Ë«%53À5@…MA¹%˜¦×Ì£ãÈí‚¼·j[õä9Î;¸û _(¯ú§¿µ0ÀÕ~rûÕÂ\¸{ômÁPüÜÿ®x#TT9¾™n?¾Êí—N# á•×¥&î}× ¬¯)
ÝTVL¯!¸ßÔjÁªë`ïp
 ß8@RrûUAVŒAå¬šÜ=¸ã-Þå€÷pLHª`@n¿*ÈŠ1¨Ü‚U“Ëõ?}w
 ]ìH2@·ß´iÓ†V°¸ [Ë¯%àôÿ‚ëß5 8±)Ð­
T`€›|rZbZ-¸.Ö!da+@× ðÎçßžó€Zígf[0p½¼æ†ô žä¤ I´Égr¸$· o%PÇ_rCy
ÀVœ|ß½ ÿ¥à"mòYšÎÊ-è[ lÚÄk xAã ø“Û¯9]¢[pÒ¤IåÈ¨¬pP“ÇÏk ŠºFeÙÌÈígHEødƒnAm"Z–$Žõ5}„›‚zå8üéô2røX›|– ÅàSÜ»w¯³råJƒs™JÖ~T›fþz{ ÌÍ« ÷xÐj?jµàQ•EÝnò ðjsÀùÁ|GxÐ·ý<dXt(·àQ•EÝ.¬p¯47 Üð)÷¢þ;…Ïysµ_«V­D‡…È-XTiÔí¢ý?› †~¼è–œÿÛÏî ·`Qý=Vô?šòú^à
€‚¹ºý–.]ª|XÞ
ômÁB~€¿?ŠÆøJõ ÞD —·äüÜ~Ùh rê‘óÿ©ÛERªÀ…AÝ€óŠBæìÝ~wÜq‡Ó¾}ûœ•<›Å•[Ð¹5ûdóÚ-Õ`˜5 ?KqÝ~l4’ì0@·à)§œ’/I‚®(¼œà‡Ø‹ü…¥nÎê9¹ý²Y³4èœ!˜CÙˆ2×—*w9ÀÀGKÝõsî&Ÿrûe³¦súé¶? 6Ù8JÊ |(òuwOä´d°&K)‡nA¾Ê?RšÒn@7,·º8Á=‘õÿrûe½†•nÁM›69k×òM7óÂéý·J•´R€]†e¥nÊê9¹ý²Z³Ååâ /?áž“o>ŒÒó•¾¤”rzrÒÀ óó`åöóV{ö»uëæ4448«V­Êra÷ p³ îõQRZ”<{ädK.F9•½#~Tâ¾ûîs.¾øâìN%*Ë 
ÀðáÃuë8G&“²¥ì/W:*x%á{Ã}@¦
 »‚lõõõNc#çAIòÀÀ±Ç›õiÞ÷£Ë*?ëØ¯À0}€g€ãùC"Ä€pÛ¯³€Šßû¨4è–’Ò(bÀ8€_QùY” €áîr7'€—ˆ`·ÿî ùj ¸6à… *Œ©3ÀWögƒä"¨àl¢
¡Âˆ1:ì±Sg}%È  	¹¥P?÷„þ‹1`›£¯ÉYÐ ãâŽ"‹‚Dª0b@¤Æ Ýö”Ÿ9¬¦Àðý¾[tá‰F1À‡ôp`kÐ\UÓ`œÜRø·A#W81 e`)RÛZMŠÕö ÷€[uæ‰F0ð	rq.ÀÕ¥Ú #^ð=C"Ä€9P'«R~f½– ï
pn€zdC"Òe ¦§?³\K€÷½¨@&$b }jzú3Ûµö x/{èÄ1 Ra€#ÿ|÷çÆŸUK­= &Ä^€æTM¹n‘2À9ÿ5)?s¦Àû{O'ó‡DˆDà’ßo [kMÕoK0¿xÿŒ ÜTd‚_@]b ræ ÆGÃÄ¶À´; «€¯ò‡DˆDàêÜ1ÀgaRÛ`ÚÜ'`0ˆÂ  ‰>\ë/ù„ñ½fÐùƒøñ÷„ŽÅ€ˆß!fn÷Z¢|bŸ†ÜðU .t®åà¤ŸÑÀÚrª9Å+€›ý‘­€±î	ýb rnEŒDk”= æé8àÀÙü!b RžClã€PÞEÙ`¼ÜŒK†'~ß@‰ Ë}*°!`ø@Á¢6 Lô
 ;À	$b@DÃÀ?#šÈgÞFý
àµV”ˆ1ŽvýÇ;ÃEsôÝQ¹›ÇÌ=É®ö4¿ ßb@TÅÀn„þ!¹ò3q¼0^ÊV€ã c ‰µ1ðÜ¶´¶[ýïŠëÀM¹=8IˆÝ‰Õ1@Ú…@Cu··`N¸oÀã WJÄ€Æ WúÑåÇe÷±Iœ¯ n¦¹Nàmà¯€¸ÆÜ´ô_d(Ä4`EÜ…IÂ °¯œ"ÌµË1 *3ð+\þEå Ñ\MâÀÍ)g	rÁ¦
»Œè¿8š>õ¿pô?vIÒ °0€Ç€~ü!b ˆ­øÅ$'Ó%"I¿“¿ŽRýÀi1 Ž0°‡? S~&Ô Ór…ä’Æ€¤{ nô_˜ÄÀÈÌLà?’ÎT€eäÔÆŽÀ7ùC"rÎÀOQ~"qIË ° O 8?$b §Ü‹rÿ#@×_â’v¼JÌ™‚£/¹é3ð'dá/ÈÖ÷W[¤¤›ço'Nü
ðlóú-2Î Ûüå@jÊO~Óî0”À2` HÄ@ÆØ„òÐ+–ª¤ÝpOB® ÞuOè¿È(lãS€Ô•Ÿü¦9Èô½ò~ðcß:x/èXd„.ðù°Æ”ò˜d ÈÉVày@F $H2Å •Ÿïü+M*•i€Ül8O@F $H2Á •Ÿå®2­4& r´
POÀ´Ö¢üÔÂ€ûä7NùYS
 ó¶ øÀYƒ1`ðã;ÿJS3n² g['‘@W@"la`32Ên?'ûHB2p
îhÄm€mu ‰“×j@F@˜ÜV ²­Z!¦¿xIä”ÉÿH®y™Ñ±)üù>ÀåZ!6 ºà”aÎ`äþ‚¦ÌdDV$9f€ëù	pM¿6»I¨!LG:\LdrwPyË~ýPá§%Ôæ•L3Æá7çTKÑÄAm€mo|³6©Ÿ	3Ðé-Òh J3¿¼?Ž67 á¶yr¶”"€ûþàgÈÎ4. $±1À÷ý_¼[*Š¸&¸¤˜S/õdq´Îìãä‰ÁCÞâh Š3¿¼>Š6Å¶%±€¶Èã\€#´RZq¦
ð=lK|Å”XÆÀXäWSˆe j5 /¡ýÐÓ$±˜:äýv@½‚ †€Î8Ð×
d„1(‡z2~Fà)´ùö3¢ôÍ‹ÁÞÀl€®C¿† ëùâè#´‰›í=².\Lt? %Ñ N$9b %Ê:àþƒ2ùä€u	 É1|-˜	ldòÁ÷œœt $b À@?ü¥·@† »FàcÔïÏ^€D”d€[9ýà zÙà€ŠÏ:
HÄ@ ¾ŒP2v )~ ¦®@•àüïŸz5°Ç|€úÒ¿R«ÖµªàÁ|`# W39Ø‚ºá<î"-±0Àï\<ìdÒå€uÀoGLz 1œGp°à—e’å€¯d‹ .øj
HÄ@jôFÊ3€•@ c{s<ÿùJ&	É@‹÷ëöb¸ÙÀw‹  ²§ ©nÁµàvðœ²û< ‰ˆ€ˆˆ,M;œû*p>p!0hHüà{=•ž»ðüxà]IÄÈ DLh™èÚâ<'¡Œh8Ç@V Á#ïã˜Jÿ°àfû IŒÈ ÄHn…¨ûãWŸ}àNÆt[uò$Ÿ¢°›§å þ
@’ 2 	’]&)Ž† #€3ˆ“,	=%¯TôÕÀkÀ&à  I‰€”ˆ÷I¶®Ó³ð Ù[8	è	´L–]È]tïTðgõÀ6à-@b2 U†OVºã:
 
A?€¯
} .iî|	àxCœÂ÷rvßw; ÎÀ#ê>éi 8_b82 †WP€ìÑõè Ž {'n¯áÓ8ðz;€Æ¤yÝŽsŸ œÃ@¥¦¼P¡·o|ÂSùih $3ðÿ@ß¹jìŠá    IEND®B`‚

--- ARCHIVO: C:\Users\Dell\dinco-web\app\globals.css ---

@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\layout.tsx ---

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PresenciaSocial from "@/components/PresenciaSocial";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DINCO Inmobiliaria",
  description: "Plataforma global de venta, renta y promociÃ³n de propiedades",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <PresenciaSocial />
      </body>
    </html>
  );
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\page.tsx ---

import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import SeccionRegiones from '@/components/SeccionRegiones'
import PropiedadesDestacadas from '@/components/PropiedadesDestacadas'
import SeccionAgentes from '@/components/SeccionAgentes'
import SeccionPostulacion from '@/components/SeccionPostulacion'
import Testimonios from '@/components/Testimonios'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SeccionRegiones />
      <PropiedadesDestacadas />
      <SeccionAgentes />
      <SeccionPostulacion />
      <Testimonios />
      <Footer />
    </main>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\agentes\page.tsx ---

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const agentes = [
  { id: 1, nombre: 'Carlos DurÃ¡n', cargo: 'Agente Senior', region: 'Puerto Plata', idiomas: ['EspaÃ±ol', 'InglÃ©s'], propiedades: 48, foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', whatsapp: '18091234567', email: 'carlos@dinco.com' },
  { id: 2, nombre: 'MarÃ­a GonzÃ¡lez', cargo: 'Agente Inmobiliaria', region: 'Cabarete', idiomas: ['EspaÃ±ol', 'InglÃ©s', 'FrancÃ©s'], propiedades: 35, foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', whatsapp: '18097654321', email: 'maria@dinco.com' },
  { id: 3, nombre: 'Roberto MÃ©ndez', cargo: 'Agente Comercial', region: 'Santo Domingo', idiomas: ['EspaÃ±ol', 'InglÃ©s', 'AlemÃ¡n'], propiedades: 62, foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', whatsapp: '18099876543', email: 'roberto@dinco.com' },
  { id: 4, nombre: 'Ana MartÃ­nez', cargo: 'Agente de Lujo', region: 'SosÃºa', idiomas: ['EspaÃ±ol', 'InglÃ©s', 'Italiano'], propiedades: 29, foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', whatsapp: '18091112233', email: 'ana@dinco.com' },
  { id: 5, nombre: 'Pedro Reyes', cargo: 'Agente Internacional', region: 'SamanÃ¡', idiomas: ['EspaÃ±ol', 'InglÃ©s', 'PortuguÃ©s'], propiedades: 21, foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', whatsapp: '18094445566', email: 'pedro@dinco.com' },
  { id: 6, nombre: 'Laura SÃ¡nchez', cargo: 'Agente Residencial', region: 'Monte Cristi', idiomas: ['EspaÃ±ol', 'InglÃ©s'], propiedades: 17, foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80', whatsapp: '18097778899', email: 'laura@dinco.com' },
]

const regiones = ['Todas', 'Puerto Plata', 'Cabarete', 'SosÃºa', 'Santo Domingo', 'SamanÃ¡', 'Monte Cristi']

export default function Agentes() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-[#0056B3]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Nuestro equipo
          </span>
          <h1 className="text-5xl font-black text-white mb-4">Directorio de agentes</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Expertos en cada regiÃ³n listos para asesorarte y encontrar la propiedad ideal
          </p>
        </div>
      </section>

      {/* FILTRO POR REGIÃ“N */}
      <section className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {regiones.map((region) => (
            <button
              key={region}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                region === 'Todas'
                  ? 'bg-[#0056B3] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#0056B3] hover:text-white'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </section>

      {/* GRID DE AGENTES */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agentes.map((agente) => (
            <div key={agente.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

              {/* FOTO */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${agente.foto})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#FF2A39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {agente.region}
                  </span>
                </div>
              </div>

              {/* CONTENIDO */}
              <div className="p-6">
                <h3 className="text-gray-900 font-black text-xl mb-1">{agente.nombre}</h3>
                <p className="text-[#0056B3] text-sm font-semibold mb-3">{agente.cargo}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {agente.idiomas.map((idioma) => (
                    <span key={idioma} className="text-xs bg-blue-50 text-[#0056B3] px-2 py-0.5 rounded-full">
                      {idioma}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mb-5">
                  <span className="text-[#0056B3] font-black text-xl">{agente.propiedades}</span> propiedades activas
                </p>

                <div className="flex gap-2">
                  <a
                    href={`https://wa.me/${agente.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors duration-300"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`mailto:${agente.email}`}
                    className="flex-1 bg-[#0056B3] hover:bg-[#003d82] text-white text-sm font-bold py-2.5 rounded-xl text-center transition-colors duration-300"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\blog\page.tsx ---

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const articulos = [
  {
    id: 1,
    titulo: 'GuÃ­a completa para comprar propiedad en RepÃºblica Dominicana siendo extranjero',
    categoria: 'GuÃ­a del comprador',
    fecha: '15 Mayo 2025',
    tiempo: '8 min lectura',
    imagen: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    resumen: 'Todo lo que necesitas saber sobre el proceso legal, impuestos y requisitos para adquirir una propiedad en RD como ciudadano extranjero.',
    destacado: true,
  },
  {
    id: 2,
    titulo: 'Las 5 zonas con mayor plusvalÃ­a en la costa norte dominicana en 2025',
    categoria: 'Mercado inmobiliario',
    fecha: '10 Mayo 2025',
    tiempo: '5 min lectura',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    resumen: 'Analizamos el comportamiento del mercado en Puerto Plata, Cabarete, SosÃºa y sus alrededores para identificar las mejores oportunidades de inversiÃ³n.',
    destacado: true,
  },
  {
    id: 3,
    titulo: 'CÃ³mo rentar tu propiedad en Cabarete y generar ingresos pasivos',
    categoria: 'InversiÃ³n',
    fecha: '5 Mayo 2025',
    tiempo: '6 min lectura',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    resumen: 'Estrategias probadas para maximizar el retorno de tu inversiÃ³n inmobiliaria a travÃ©s del alquiler vacacional y a largo plazo.',
    destacado: false,
  },
  {
    id: 4,
    titulo: 'Impuestos y gastos al comprar propiedad en RepÃºblica Dominicana',
    categoria: 'Legal y financiero',
    fecha: '28 Abril 2025',
    tiempo: '7 min lectura',
    imagen: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    resumen: 'Desglose completo de todos los impuestos, honorarios y gastos adicionales que debes considerar al momento de comprar una propiedad.',
    destacado: false,
  },
  {
    id: 5,
    titulo: 'SamanÃ¡: el secreto mejor guardado del Caribe para invertir',
    categoria: 'Destinos',
    fecha: '20 Abril 2025',
    tiempo: '4 min lectura',
    imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    resumen: 'Por quÃ© SamanÃ¡ se estÃ¡ convirtiendo en uno de los destinos inmobiliarios mÃ¡s atractivos para inversores internacionales.',
    destacado: false,
  },
  {
    id: 6,
    titulo: 'QuÃ© debes verificar antes de firmar un contrato de compraventa',
    categoria: 'Legal y financiero',
    fecha: '15 Abril 2025',
    tiempo: '9 min lectura',
    imagen: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    resumen: 'Lista de verificaciÃ³n completa para proteger tu inversiÃ³n y evitar sorpresas durante el proceso de compra de una propiedad.',
    destacado: false,
  },
]

const categorias = ['Todas', 'GuÃ­a del comprador', 'Mercado inmobiliario', 'InversiÃ³n', 'Legal y financiero', 'Destinos']

export default function Blog() {
  const destacados = articulos.filter((a) => a.destacado)
  const resto = articulos.filter((a) => !a.destacado)

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-[#0056B3]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Conocimiento inmobiliario
          </span>
          <h1 className="text-5xl font-black text-white mb-4">Blog DINCO</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            GuÃ­as, noticias del mercado y recursos para tomar la mejor decisiÃ³n inmobiliaria
          </p>
        </div>
      </section>

      {/* CATEGORÃAS */}
      <section className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                cat === 'Todas'
                  ? 'bg-[#0056B3] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#0056B3] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* ARTÃCULOS DESTACADOS */}
          <div className="mb-16">
            <h2 className="text-2xl font-black text-gray-900 mb-8">ArtÃ­culos destacados</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {destacados.map((articulo) => (
                <Link
                  key={articulo.id}
                  href={`/blog/${articulo.id}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden h-64">
                    <div
                      className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${articulo.imagen})` }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#FF2A39] text-white text-xs font-bold px-3 py-1 rounded-full">
                        {articulo.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
                      <span>{articulo.fecha}</span>
                      <span>Â·</span>
                      <span>{articulo.tiempo}</span>
                    </div>
                    <h3 className="text-gray-900 font-black text-xl mb-3 group-hover:text-[#0056B3] transition-colors">
                      {articulo.titulo}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{articulo.resumen}</p>
                    <div className="flex items-center gap-2 text-[#0056B3] font-bold text-sm mt-4">
                      Leer artÃ­culo
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* TODOS LOS ARTÃCULOS */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 mb-8">MÃ¡s artÃ­culos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {resto.map((articulo) => (
                <Link
                  key={articulo.id}
                  href={`/blog/${articulo.id}`}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="relative overflow-hidden h-44">
                    <div
                      className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${articulo.imagen})` }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#0056B3] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {articulo.categoria}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-2">
                      <span>{articulo.fecha}</span>
                      <span>Â·</span>
                      <span>{articulo.tiempo}</span>
                    </div>
                    <h3 className="text-gray-900 font-black text-sm leading-snug group-hover:text-[#0056B3] transition-colors">
                      {articulo.titulo}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* NEWSLETTER */}
          <div className="mt-16 bg-[#0056B3] rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-black text-white mb-3">
              Recibe el mercado en tu correo
            </h3>
            <p className="text-white/75 mb-6">
              AnÃ¡lisis semanal del mercado inmobiliario dominicano directo a tu bandeja de entrada
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-5 py-3 rounded-xl outline-none text-gray-700 text-sm"
              />
              <button className="bg-[#FF2A39] hover:bg-white hover:text-[#FF2A39] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap">
                Suscribirme
              </button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\blog\[id]\page.tsx ---


--- ARCHIVO: C:\Users\Dell\dinco-web\app\cabarete\page.tsx ---

import CatalogoRegion from '@/components/CatalogoRegion'

export default function Cabarete() {
  return (
    <CatalogoRegion
      nombre="Cabarete"
      descripcion="El paraÃ­so del surf y la vida costera"
      imagen="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
      propiedades={86}
      slug="cabarete"
    />
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\contacto\page.tsx ---

'use client'
import { useState } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const oficinas = [
  { ciudad: 'Puerto Plata', direccion: 'Av. CircunvalaciÃ³n Norte, Puerto Plata', telefono: '+1 (809) 123-4567', email: 'pplata@dinco.com', horario: 'Lun-Vie 8am-6pm Â· SÃ¡b 9am-2pm' },
  { ciudad: 'Santo Domingo', direccion: 'Av. Winston Churchill, Piantini, D.N.', telefono: '+1 (809) 987-6543', email: 'sd@dinco.com', horario: 'Lun-Vie 8am-6pm Â· SÃ¡b 9am-2pm' },
  { ciudad: 'Cabarete', direccion: 'Carretera Principal, Cabarete, Puerto Plata', telefono: '+1 (809) 456-7890', email: 'cabarete@dinco.com', horario: 'Lun-Vie 9am-5pm Â· SÃ¡b 10am-1pm' },
]

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [form, setForm] = useState({ nombre: '', email: '', telefono: '', asunto: '', mensaje: '' })

  const actualizar = (campo: string, valor: string) => setForm((prev) => ({ ...prev, [campo]: valor }))

  const enviar = () => setEnviado(true)

  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-[#0056B3]">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Estamos aquÃ­ para ayudarte
          </span>
          <h1 className="text-5xl font-black text-white mb-4">ContÃ¡ctanos</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Nuestro equipo de agentes estÃ¡ disponible para responder todas tus preguntas
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* FORMULARIO */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {!enviado ? (
              <>
                <h2 className="text-2xl font-black text-gray-900 mb-6">EnvÃ­anos un mensaje</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Nombre</label>
                      <input
                        type="text"
                        value={form.nombre}
                        onChange={(e) => actualizar('nombre', e.target.value)}
                        placeholder="Tu nombre"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">TelÃ©fono</label>
                      <input
                        type="tel"
                        value={form.telefono}
                        onChange={(e) => actualizar('telefono', e.target.value)}
                        placeholder="+1 (809) 000-0000"
                        className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Correo electrÃ³nico</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => actualizar('email', e.target.value)}
                      placeholder="tu@email.com"
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Asunto</label>
                    <select
                      value={form.asunto}
                      onChange={(e) => actualizar('asunto', e.target.value)}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm text-gray-700"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="compra">Quiero comprar una propiedad</option>
                      <option value="renta">Quiero rentar una propiedad</option>
                      <option value="vender">Quiero vender mi propiedad</option>
                      <option value="inversion">AsesorÃ­a de inversiÃ³n</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      value={form.mensaje}
                      onChange={(e) => actualizar('mensaje', e.target.value)}
                      placeholder="CuÃ©ntanos en quÃ© podemos ayudarte..."
                      rows={5}
                      className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 outline-none focus:border-[#0056B3] transition-colors text-sm resize-none"
                    />
                  </div>
                  <button
                    onClick={enviar}
                    className="w-full bg-[#0056B3] hover:bg-[#FF2A39] text-white font-black py-4 rounded-xl transition-all duration-300"
                  >
                    Enviar mensaje
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Â¡Mensaje enviado!</h3>
                <p className="text-gray-500">Un agente te contactarÃ¡ en menos de 24 horas.</p>
              </div>
            )}
          </div>

          {/* INFORMACIÃ“N */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Nuestras oficinas</h2>
              <div className="space-y-4">
                {oficinas.map((oficina) => (
                  <div key={oficina.ciudad} className="bg-white rounded-2xl p-6 shadow-md">
                    <h3 className="font-black text-[#0056B3] text-lg mb-3">{oficina.ciudad}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>ðŸ“ {oficina.direccion}</p>
                      <p>ðŸ“ž {oficina.telefono}</p>
                      <p>âœ‰ï¸ {oficina.email}</p>
                      <p>ðŸ• {oficina.horario}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WHATSAPP DIRECTO */}
            <a
              href="https://wa.me/18091234567?text=Hola%20DINCO,%20necesito%20informaciÃ³n"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-green-500 hover:bg-green-600 text-white font-black py-4 px-6 rounded-2xl text-center transition-colors duration-300 shadow-lg"
            >
              ðŸ’¬ Chatea con un agente ahora por WhatsApp
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\dashboard\agente\page.tsx ---

'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const citas = [
  { id: 1, cliente: 'Michael Johnson ðŸ‡ºðŸ‡¸', propiedad: 'Villa frente al mar', fecha: 'Hoy 3:00 PM', tipo: 'Presencial', estado: 'Confirmada' },
  { id: 2, cliente: 'Sophie MÃ¼ller ðŸ‡©ðŸ‡ª', propiedad: 'Apartamento beachfront', fecha: 'MaÃ±ana 10:00 AM', tipo: 'Virtual', estado: 'Pendiente' },
  { id: 3, cliente: 'Jean-Pierre Dubois ðŸ‡«ðŸ‡·', propiedad: 'Terreno residencial', fecha: '28 Mayo 2:00 PM', tipo: 'Presencial', estado: 'Confirmada' },
]

const cartera = [
  { id: 1, titulo: 'Villa frente al mar', region: 'Puerto Plata', precio: 'US$ 285,000', tipo: 'Venta', visitas: 142, imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80' },
  { id: 2, titulo: 'Apartamento beachfront', region: 'Cabarete', precio: 'US$ 145,000', tipo: 'Venta', visitas: 89, imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&q=80' },
  { id: 3, titulo: 'Villa de lujo', region: 'SosÃºa', precio: 'US$ 420,000', tipo: 'Venta', visitas: 201, imagen: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=80' },
  { id: 4, titulo: 'Penthouse ejecutivo', region: 'Santo Domingo', precio: 'US$ 3,500/mes', tipo: 'Renta', visitas: 55, imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80' },
]

const prospectos = [
  { nombre: 'Michael Johnson', pais: 'ðŸ‡ºðŸ‡¸', interes: 'Villa Â· Puerto Plata', presupuesto: 'US$ 250k-350k', estado: 'Caliente', ultima: 'Hoy' },
  { nombre: 'Sophie MÃ¼ller', pais: 'ðŸ‡©ðŸ‡ª', interes: 'Apartamento Â· Cabarete', presupuesto: 'US$ 100k-200k', estado: 'Tibio', ultima: 'Ayer' },
  { nombre: 'Isabella Rossi', pais: 'ðŸ‡®ðŸ‡¹', interes: 'Villa Â· SosÃºa', presupuesto: 'US$ 400k+', estado: 'Nuevo', ultima: 'Hace 3 dÃ­as' },
]

const tabs = ['Mi cartera', 'Citas del dÃ­a', 'Prospectos', 'Comisiones']

export default function DashboardAgente() {
  const [tabActiva, setTabActiva] = useState(0)

  return (
    <main>
      <Navbar />

      <section className="pt-24 pb-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* ENCABEZADO */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <div
                  className="w-12 h-12 rounded-full bg-cover bg-center border-2 border-[#0056B3]"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80)' }}
                />
                <div>
                  <h1 className="text-2xl font-black text-gray-900">Carlos DurÃ¡n</h1>
                  <p className="text-[#0056B3] text-sm font-semibold">Agente Senior Â· Puerto Plata</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-green-600 text-sm font-bold">Disponible</span>
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Propiedades activas', valor: '48', color: 'text-[#0056B3]' },
              { label: 'Citas esta semana', valor: '6', color: 'text-green-600' },
              { label: 'Prospectos activos', valor: '14', color: 'text-[#FF2A39]' },
              { label: 'Ventas este mes', valor: 'US$ 42k', color: 'text-yellow-600' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <p className={`text-3xl font-black ${stat.color}`}>{stat.valor}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* TABS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-100">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setTabActiva(i)}
                  className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 ${
                    tabActiva === i
                      ? 'text-[#0056B3] border-b-2 border-[#0056B3] bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6">

              {/* TAB 1: CARTERA */}
              {tabActiva === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cartera.map((p) => (
                    <div key={p.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div
                        className="w-20 h-16 rounded-xl bg-cover bg-center shrink-0"
                        style={{ backgroundImage: `url(${p.imagen})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-black text-gray-900 text-sm truncate">{p.titulo}</h3>
                        <p className="text-gray-500 text-xs mt-0.5">{p.region} Â· {p.tipo}</p>
                        <p className="text-[#0056B3] font-black text-sm mt-1">{p.precio}</p>
                        <p className="text-gray-400 text-xs">{p.visitas} visitas</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: CITAS */}
              {tabActiva === 1 && (
                <div className="space-y-3">
                  {citas.map((c) => (
                    <div key={c.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-black text-gray-900">{c.cliente}</h3>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                            c.tipo === 'Virtual' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {c.tipo}
                          </span>
                        </div>
                        <p className="text-[#0056B3] text-sm font-semibold">{c.propiedad}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{c.fecha}</p>
                      </div>
                      <span className={`text-xs font-bold px-3 py-1.5 rounded-xl ${
                        c.estado === 'Confirmada' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {c.estado}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: PROSPECTOS */}
              {tabActiva === 2 && (
                <div className="space-y-3">
                  {prospectos.map((p) => (
                    <div key={p.nombre} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                      <div>
                        <h3 className="font-black text-gray-900">{p.nombre} {p.pais}</h3>
                        <p className="text-gray-500 text-sm">{p.interes}</p>
                        <p className="text-[#0056B3] font-bold text-sm">{p.presupuesto}</p>
                        <p className="text-gray-400 text-xs">Ãšltimo contacto: {p.ultima}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs font-bold px-3 py-1.5 rounded-full block mb-2 ${
                          p.estado === 'Caliente' ? 'bg-red-100 text-red-700' :
                          p.estado === 'Tibio' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {p.estado}
                        </span>
                        <button className="text-xs bg-[#0056B3] hover:bg-[#FF2A39] text-white px-3 py-1.5 rounded-xl transition-all duration-200">
                          Contactar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 4: COMISIONES */}
              {tabActiva === 3 && (
                <div>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {[
                      { label: 'Este mes', valor: 'US$ 42,000', color: 'bg-green-50 text-green-700' },
                      { label: 'Este aÃ±o', valor: 'US$ 186,500', color: 'bg-blue-50 text-[#0056B3]' },
                      { label: 'Pendiente cobro', valor: 'US$ 18,000', color: 'bg-yellow-50 text-yellow-700' },
                    ].map((item) => (
                      <div key={item.label} className={`p-5 rounded-2xl ${item.color}`}>
                        <p className="text-2xl font-black">{item.valor}</p>
                        <p className="text-sm mt-1 opacity-75">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-6 text-center">
                    <p className="text-gray-500 text-sm">Historial detallado de comisiones disponible en la siguiente fase</p>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\dashboard\propietario\page.tsx ---

'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const propiedades = [
  { id: 1, titulo: 'Villa frente al mar', region: 'Puerto Plata', tipo: 'Venta', precio: 'US$ 285,000', estado: 'Publicada', visitas: 142, consultas: 8, imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80' },
  { id: 2, titulo: 'Apartamento cÃ©ntrico', region: 'Santo Domingo', tipo: 'Renta', precio: 'US$ 1,800/mes', estado: 'En revisiÃ³n', visitas: 0, consultas: 0, imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&q=80' },
  { id: 3, titulo: 'Terreno residencial', region: 'SamanÃ¡', tipo: 'Venta', precio: 'US$ 95,000', estado: 'Pausada', visitas: 67, consultas: 3, imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&q=80' },
]

const consultas = [
  { id: 1, nombre: 'Michael Johnson', pais: 'ðŸ‡ºðŸ‡¸', propiedad: 'Villa frente al mar', mensaje: 'Me interesa agendar una visita esta semana.', fecha: 'Hace 2 horas', leido: false },
  { id: 2, nombre: 'Sophie MÃ¼ller', pais: 'ðŸ‡©ðŸ‡ª', propiedad: 'Villa frente al mar', mensaje: 'Â¿EstÃ¡ disponible para renta vacacional?', fecha: 'Hace 1 dÃ­a', leido: true },
  { id: 3, nombre: 'Carlos PÃ©rez', pais: 'ðŸ‡©ðŸ‡´', propiedad: 'Terreno residencial', mensaje: 'Quisiera mÃ¡s informaciÃ³n sobre el terreno.', fecha: 'Hace 2 dÃ­as', leido: true },
]

const documentos = [
  { nombre: 'TÃ­tulo de propiedad', estado: 'Verificado', fecha: '10 Mayo 2025' },
  { nombre: 'Planos de construcciÃ³n', estado: 'Pendiente', fecha: 'â€”' },
  { nombre: 'Certificado catastral', estado: 'Verificado', fecha: '8 Mayo 2025' },
  { nombre: 'Contrato de venta', estado: 'En proceso', fecha: '12 Mayo 2025' },
]

const tabs = ['Mis propiedades', 'Consultas', 'Documentos', 'Negociaciones']

export default function DashboardPropietario() {
  const [tabActiva, setTabActiva] = useState(0)

  return (
    <main>
      <Navbar />

      <section className="pt-24 pb-16 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">

          {/* ENCABEZADO */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-black text-gray-900">Mi panel</h1>
              <p className="text-gray-500 mt-1">Bienvenido, <span className="text-[#0056B3] font-bold">Rafael DurÃ¡n</span></p>
            </div>
            <Link
              href="/postulacion"
              className="inline-flex items-center gap-2 bg-[#FF2A39] hover:bg-[#0056B3] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Publicar nueva propiedad
            </Link>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Propiedades activas', valor: '2', color: 'text-[#0056B3]' },
              { label: 'Total consultas', valor: '11', color: 'text-green-600' },
              { label: 'Visitas totales', valor: '209', color: 'text-[#FF2A39]' },
              { label: 'Negociaciones abiertas', valor: '1', color: 'text-yellow-600' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <p className={`text-3xl font-black ${stat.color}`}>{stat.valor}</p>
                <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* TABS */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-100">
              {tabs.map((tab, i) => (
                <button
                  key={tab}
                  onClick={() => setTabActiva(i)}
                  className={`flex-1 py-4 text-sm font-semibold transition-all duration-200 ${
                    tabActiva === i
                      ? 'text-[#0056B3] border-b-2 border-[#0056B3] bg-blue-50'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6">

              {/* TAB 1: MIS PROPIEDADES */}
              {tabActiva === 0 && (
                <div className="space-y-4">
                  {propiedades.map((p) => (
                    <div key={p.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div
                        className="w-20 h-16 rounded-xl bg-cover bg-center shrink-0"
                        style={{ backgroundImage: `url(${p.imagen})` }}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-black text-gray-900 truncate">{p.titulo}</h3>
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full shrink-0 ${
                            p.estado === 'Publicada' ? 'bg-green-100 text-green-700' :
                            p.estado === 'En revisiÃ³n' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-gray-100 text-gray-600'
                          }`}>
                            {p.estado}
                          </span>
                        </div>
                        <p className="text-gray-500 text-sm">{p.region} Â· {p.tipo} Â· {p.precio}</p>
                        <p className="text-gray-400 text-xs mt-1">{p.visitas} visitas Â· {p.consultas} consultas</p>
                      </div>
                      <div className="flex gap-2 shrink-0">
                        <button className="text-xs bg-white border border-gray-200 hover:border-[#0056B3] hover:text-[#0056B3] text-gray-600 px-3 py-1.5 rounded-xl transition-all duration-200">
                          Editar
                        </button>
                        <Link
                          href={`/propiedades/${p.id}`}
                          className="text-xs bg-[#0056B3] hover:bg-[#FF2A39] text-white px-3 py-1.5 rounded-xl transition-all duration-200"
                        >
                          Ver
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 2: CONSULTAS */}
              {tabActiva === 1 && (
                <div className="space-y-3">
                  {consultas.map((c) => (
                    <div key={c.id} className={`p-4 rounded-2xl border transition-colors ${
                      !c.leido ? 'bg-blue-50 border-blue-100' : 'bg-gray-50 border-gray-100'
                    }`}>
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-black text-gray-900">{c.nombre} {c.pais}</span>
                            {!c.leido && (
                              <span className="w-2 h-2 bg-[#0056B3] rounded-full shrink-0" />
                            )}
                          </div>
                          <p className="text-[#0056B3] text-xs font-semibold mb-1">{c.propiedad}</p>
                          <p className="text-gray-600 text-sm">{c.mensaje}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-gray-400 text-xs mb-2">{c.fecha}</p>
                          <button className="text-xs bg-[#0056B3] hover:bg-[#FF2A39] text-white px-3 py-1.5 rounded-xl transition-all duration-200">
                            Responder
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: DOCUMENTOS */}
              {tabActiva === 2 && (
                <div>
                  <div className="space-y-3 mb-6">
                    {documentos.map((doc) => (
                      <div key={doc.nombre} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            doc.estado === 'Verificado' ? 'bg-green-100' :
                            doc.estado === 'Pendiente' ? 'bg-gray-100' :
                            'bg-yellow-100'
                          }`}>
                            <svg className={`w-5 h-5 ${
                              doc.estado === 'Verificado' ? 'text-green-600' :
                              doc.estado === 'Pendiente' ? 'text-gray-400' :
                              'text-yellow-600'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{doc.nombre}</p>
                            <p className="text-gray-400 text-xs">{doc.fecha}</p>
                          </div>
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          doc.estado === 'Verificado' ? 'bg-green-100 text-green-700' :
                          doc.estado === 'Pendiente' ? 'bg-gray-100 text-gray-600' :
                          'bg-yellow-100 text-yellow-700'
                        }`}>
                          {doc.estado}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full border-2 border-dashed border-gray-300 hover:border-[#0056B3] hover:text-[#0056B3] text-gray-400 font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Subir documento
                  </button>
                </div>
              )}

              {/* TAB 4: NEGOCIACIONES */}
              {tabActiva === 3 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-[#0056B3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#0056B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">MÃ³dulo de negociaciones</h3>
                  <p className="text-gray-500 text-sm max-w-sm mx-auto">
                    AquÃ­ aparecerÃ¡n las ofertas recibidas, contratos en proceso y el estado de cada negociaciÃ³n activa.
                  </p>
                  <p className="text-[#0056B3] font-bold text-sm mt-3">Disponible en la siguiente fase</p>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\monte-cristi\page.tsx ---

import CatalogoRegion from '@/components/CatalogoRegion'

export default function MonteCristi() {
  return (
    <CatalogoRegion
      nombre="Monte Cristi"
      descripcion="Tierra de oportunidades y paisajes Ãºnicos"
      imagen="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80"
      propiedades={43}
      slug="monte-cristi"
    />
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\nosotros\page.tsx ---

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'

const valores = [
  { titulo: 'Transparencia', desc: 'Cada transacciÃ³n es clara y honesta. Sin letra pequeÃ±a, sin sorpresas.' },
  { titulo: 'Excelencia', desc: 'MÃ¡s de 12 aÃ±os perfeccionando cada detalle del servicio inmobiliario.' },
  { titulo: 'Alcance global', desc: 'Presencia en mÃ¡s de 40 paÃ­ses conectando compradores e inversores.' },
  { titulo: 'Compromiso', desc: 'Tu inversiÃ³n es nuestra prioridad. AcompaÃ±amos cada paso del proceso.' },
]

const equipo = [
  { nombre: 'Lic. Rafael DurÃ¡n', cargo: 'Director General', foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
  { nombre: 'Arq. Carmen DurÃ¡n', cargo: 'Directora de Proyectos', foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
  { nombre: 'Lic. Miguel Santos', cargo: 'Director Comercial', foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
]

export default function Nosotros() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section
        className="relative pt-32 pb-20 px-6 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-[#0056B3]/85" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            Nuestra historia
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
            MÃ¡s de 12 aÃ±os construyendo sueÃ±os
          </h1>
          <p className="text-white/80 text-xl leading-relaxed">
            DINCO naciÃ³ en Puerto Plata con una visiÃ³n clara â€” hacer que cada dominicano y cada inversor del mundo pueda acceder a la mejor propiedad, con el mejor servicio y total transparencia.
          </p>
        </div>
      </section>

      {/* MISIÃ“N Y VISIÃ“N */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-3xl p-8">
            <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">Nuestra misiÃ³n</span>
            <h2 className="text-3xl font-black text-[#0056B3] mt-2 mb-4">Â¿Para quÃ© existimos?</h2>
            <p className="text-gray-600 leading-relaxed">
              Conectar personas con propiedades que transformen sus vidas, ya sea como hogar, inversiÃ³n o negocio. Ofrecemos un servicio inmobiliario completo, Ã©tico y accesible desde cualquier parte del mundo.
            </p>
          </div>
          <div className="bg-[#0056B3] rounded-3xl p-8">
            <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">Nuestra visiÃ³n</span>
            <h2 className="text-3xl font-black text-white mt-2 mb-4">Â¿Hacia dÃ³nde vamos?</h2>
            <p className="text-white/80 leading-relaxed">
              Ser la plataforma inmobiliaria de referencia en el Caribe y AmÃ©rica Latina, reconocida por su tecnologÃ­a, transparencia y el impacto positivo que generamos en cada comunidad donde operamos.
            </p>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">Lo que nos define</span>
            <h2 className="text-4xl font-black text-[#0056B3] mt-2">Nuestros valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor) => (
              <div key={valor.titulo} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 bg-[#0056B3]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-[#0056B3] rounded-full" />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{valor.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{valor.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO DIRECTIVO */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">Las personas detrÃ¡s de DINCO</span>
            <h2 className="text-4xl font-black text-[#0056B3] mt-2">Equipo directivo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {equipo.map((persona) => (
              <div key={persona.nombre} className="text-center group">
                <div
                  className="w-40 h-40 rounded-full bg-cover bg-center mx-auto mb-4 border-4 border-[#0056B3] transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url(${persona.foto})` }}
                />
                <h3 className="font-black text-gray-900 text-lg">{persona.nombre}</h3>
                <p className="text-[#0056B3] text-sm font-semibold">{persona.cargo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#FF2A39]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Â¿Listo para encontrar tu propiedad ideal?</h2>
          <p className="text-white/80 text-lg mb-8">
            Nuestro equipo estÃ¡ disponible para asesorarte sin compromiso
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/propiedades"
              className="bg-white text-[#FF2A39] font-black px-8 py-4 rounded-xl hover:bg-[#0056B3] hover:text-white transition-all duration-300"
            >
              Ver propiedades
            </Link>
            <Link
              href="/contacto"
              className="bg-transparent border-2 border-white text-white font-black px-8 py-4 rounded-xl hover:bg-white hover:text-[#FF2A39] transition-all duration-300"
            >
              Contactar ahora
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\propiedades\page.tsx ---

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const todas = [
  { id: 1, titulo: 'Villa frente al mar', region: 'Puerto Plata', precio: 'US$ 285,000', tipo: 'Venta', habitaciones: 4, banos: 3, metros: 320, imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80' },
  { id: 2, titulo: 'Apartamento beachfront', region: 'Cabarete', precio: 'US$ 145,000', tipo: 'Venta', habitaciones: 2, banos: 2, metros: 95, imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80' },
  { id: 3, titulo: 'Villa de lujo con piscina', region: 'SosÃºa', precio: 'US$ 420,000', tipo: 'Venta', habitaciones: 5, banos: 4, metros: 480, imagen: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80' },
  { id: 4, titulo: 'Penthouse ejecutivo', region: 'Santo Domingo', precio: 'US$ 3,500 / mes', tipo: 'Renta', habitaciones: 3, banos: 2, metros: 210, imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80' },
  { id: 5, titulo: 'Casa colonial restaurada', region: 'SamanÃ¡', precio: 'US$ 195,000', tipo: 'Venta', habitaciones: 3, banos: 2, metros: 180, imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: 6, titulo: 'Terreno frente al mar', region: 'Monte Cristi', precio: 'US$ 89,000', tipo: 'Venta', habitaciones: 0, banos: 0, metros: 1200, imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80' },
  { id: 7, titulo: 'Casa moderna con piscina', region: 'Puerto Plata', precio: 'US$ 320,000', tipo: 'Venta', habitaciones: 4, banos: 3, metros: 350, imagen: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80' },
  { id: 8, titulo: 'Apartamento cÃ©ntrico', region: 'Santo Domingo', precio: 'US$ 2,200 / mes', tipo: 'Renta', habitaciones: 2, banos: 1, metros: 90, imagen: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80' },
  { id: 9, titulo: 'Villa privada con vista al mar', region: 'Cabarete', precio: 'US$ 550,000', tipo: 'Venta', habitaciones: 6, banos: 5, metros: 600, imagen: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80' },
]

const filtros = ['Todas', 'Venta', 'Renta']
const regiones = ['Todas las regiones', 'Puerto Plata', 'Cabarete', 'SosÃºa', 'Santo Domingo', 'SamanÃ¡', 'Monte Cristi']
const tipos = ['Todos los tipos', 'Casa', 'Apartamento', 'Villa', 'Terreno', 'Local comercial']

export default function Propiedades() {
  return (
    <main>
      <Navbar />

      {/* HERO */}
      <section className="pt-32 pb-12 px-6 bg-[#0056B3]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
              CatÃ¡logo completo
            </span>
            <h1 className="text-5xl font-black text-white mb-3">Todas las propiedades</h1>
            <p className="text-white/75 text-lg">+600 propiedades disponibles en RepÃºblica Dominicana y el mundo</p>
          </div>

          {/* FILTROS HERO */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col md:flex-row gap-3 max-w-4xl mx-auto">
            <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3 text-sm font-medium outline-none">
              {filtros.map((f) => <option key={f}>{f}</option>)}
            </select>
            <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3 text-sm font-medium outline-none">
              {regiones.map((r) => <option key={r}>{r}</option>)}
            </select>
            <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3 text-sm font-medium outline-none">
              {tipos.map((t) => <option key={t}>{t}</option>)}
            </select>
            <button className="bg-[#FF2A39] hover:bg-white hover:text-[#FF2A39] text-white font-bold px-8 py-3 rounded-xl transition-all duration-300">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* CATÃLOGO */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">

          {/* CONTEO */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 font-medium">
              Mostrando <span className="text-[#0056B3] font-black">{todas.length}</span> propiedades
            </p>
            <select className="border border-gray-200 rounded-xl px-4 py-2 text-sm text-gray-600 outline-none">
              <option>Ordenar por: MÃ¡s recientes</option>
              <option>Precio: menor a mayor</option>
              <option>Precio: mayor a menor</option>
              <option>MÃ¡s vistos</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {todas.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden h-52">
                  <div
                    className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.imagen})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                      p.tipo === 'Venta' ? 'bg-[#0056B3]' : 'bg-[#FF2A39]'
                    }`}>
                      {p.tipo}
                    </span>
                  </div>
                  <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <svg className="w-4 h-4 text-gray-400 hover:text-[#FF2A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="text-gray-900 font-bold text-lg mb-1">{p.titulo}</h3>
                  <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                    <svg className="w-4 h-4 text-[#FF2A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {p.region}
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4 pb-4 border-b border-gray-100">
                    {p.habitaciones > 0 && <span>{p.habitaciones} hab.</span>}
                    {p.banos > 0 && <span>{p.banos} baÃ±os</span>}
                    <span>{p.metros} mÂ²</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[#0056B3] font-black text-xl">{p.precio}</p>
                    <Link
                      href={`/propiedades/${p.id}`}
                      className="bg-[#FF2A39] hover:bg-[#0056B3] text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors duration-300"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\propiedades\[id]\page.tsx ---


--- ARCHIVO: C:\Users\Dell\dinco-web\app\puerto-plata\page.tsx ---

import CatalogoRegion from '@/components/CatalogoRegion'

export default function PuertoPlata() {
  return (
    <CatalogoRegion
      nombre="Puerto Plata"
      descripcion="Descubre villas y residencias frente al mar Caribe"
      imagen="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
      propiedades={124}
      slug="puerto-plata"
    />
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\samana\page.tsx ---

import CatalogoRegion from '@/components/CatalogoRegion'

export default function Samana() {
  return (
    <CatalogoRegion
      nombre="SamanÃ¡"
      descripcion="Naturaleza exuberante y exclusividad tropical"
      imagen="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80"
      propiedades={67}
      slug="samana"
    />
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\santo-domingo\page.tsx ---

import CatalogoRegion from '@/components/CatalogoRegion'

export default function SantoDomingo() {
  return (
    <CatalogoRegion
      nombre="Santo Domingo"
      descripcion="La capital, centro de negocios e inversiÃ³n"
      imagen="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80"
      propiedades={215}
      slug="santo-domingo"
    />
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\app\sosua\page.tsx ---

import CatalogoRegion from '@/components/CatalogoRegion'

export default function Sosua() {
  return (
    <CatalogoRegion
      nombre="SosÃºa"
      descripcion="Playas cristalinas y propiedades de lujo"
      imagen="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80"
      propiedades={98}
      slug="sosua"
    />
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\layout\Footer.tsx ---

import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white">

      {/* NEWSLETTER */}
      <div className="bg-[#FF2A39] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-black text-2xl mb-1">Recibe propiedades exclusivas</h3>
            <p className="text-white/75">SuscrÃ­bete y sÃ© el primero en conocer las mejores oportunidades</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Tu correo electrÃ³nico"
              className="flex-1 md:w-72 px-5 py-3 rounded-xl text-gray-700 outline-none text-sm"
            />
            <button className="bg-[#0056B3] hover:bg-white hover:text-[#0056B3] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap">
              Suscribirme
            </button>
          </div>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO Y DESCRIPCIÃ“N */}
          <div className="lg:col-span-1">
            <Image src="/nuevo_dc.svg" alt="DINCO" width={128} height={40} className="w-32 mb-4 brightness-0 invert" />
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Inmobiliaria y Constructora con mÃ¡s de 12 aÃ±os conectando personas con propiedades de ensueÃ±o en RepÃºblica Dominicana y el mundo.
            </p>
            {/* REDES SOCIALES */}
            <div className="flex gap-3">
              {[
                { icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', label: 'Facebook' },
                { icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', label: 'Instagram' },
                { icon: 'M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.83 1.55V6.79a4.85 4.85 0 01-1.06-.1z', label: 'TikTok' },
              ].map((red) => (
                <a
                  key={red.label}
                  href="#"
                  className="w-10 h-10 bg-white/10 hover:bg-[#FF2A39] rounded-full flex items-center justify-center transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={red.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* PROPIEDADES */}
          <div>
            <h4 className="font-black text-lg mb-6">Propiedades</h4>
            <ul className="space-y-3">
              {['Venta', 'Renta', 'PromociÃ³n', 'Proyectos nuevos', 'Propiedades destacadas', 'Blog', 'Internacional'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-[#FF2A39] text-sm transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* REGIONES */}
          <div>
            <h4 className="font-black text-lg mb-6">Regiones</h4>
            <ul className="space-y-3">
              {['Puerto Plata', 'Cabarete', 'SosÃºa', 'Santo Domingo', 'SamanÃ¡', 'Monte Cristi'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-[#FF2A39] text-sm transition-colors duration-200">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="font-black text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              {[
                { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', texto: 'Puerto Plata, RepÃºblica Dominicana' },
                { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', texto: '+1 (809) 123-4567' },
                { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', texto: 'info@dinco.com' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FF2A39] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="text-white/60 text-sm">{item.texto}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h5 className="font-bold text-sm mb-3">Horario de atenciÃ³n</h5>
              <p className="text-white/60 text-sm">Lunes a Viernes: 8am - 6pm</p>
              <p className="text-white/60 text-sm">SÃ¡bados: 9am - 2pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* BARRA LEGAL */}
      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            Â© 2025 DINCO Inmobiliaria & Constructora. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {['TÃ©rminos y condiciones', 'PolÃ­tica de privacidad', 'Cookies'].map((item) => (
              <Link key={item} href="#" className="text-white/40 hover:text-white text-xs transition-colors duration-200">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\layout\Navbar.tsx ---

'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/10 shadow-lg py-2' : 'py-4'
      }`}
      style={{
        transform: scrolled ? 'scaleY(1.02)' : 'scaleY(1)',
        transformOrigin: 'top',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="logo-font" aria-label="Inicio - DINCO Inmobiliaria">
          <Image
            src="/nuevo_dc.svg"
            alt="DINCO Inmobiliaria"
            width={220}
            height={60}
            className="h-auto w-220px"
          />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-8 logo-font">
          {['Propiedades', 'Regiones', 'Agentes', 'Nosotros', 'Blog', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors duration-300 hover:text-[#FF2A39] ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/postulacion"
            className="bg-[#FF2A39] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#0056B3] transition-colors duration-300"
          >
            Publicar propiedad
          </Link>
        </div>

        {/* MENU MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-gray-700' : 'bg-white'}`} />
        </button>
      </div>

      {/* MENU MOBILE DESPLEGABLE */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xl px-6 py-4 flex flex-col gap-4 logo-font">
          {['Propiedades', 'Regiones', 'Agentes', 'Nosotros', 'Contacto'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-gray-700 font-medium hover:text-[#FF2A39]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/postulacion"
            className="bg-[#FF2A39] text-white text-center font-semibold px-5 py-2 rounded-full hover:bg-[#0056B3] transition-colors duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Publicar propiedad
          </Link>
        </div>
      )}
    </nav>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\layout\PresenciaSocial.tsx ---

'use client'
import { useState } from 'react'

export default function PresenciaSocial() {
  const [chatAbierto, setChatAbierto] = useState(false)

  return (
    <>
      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/18091234567?text=Hola,%20me%20interesa%20una%20propiedad%20en%20DINCO"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center gap-3 group"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="text-sm font-bold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
          Chatea con un agente
        </span>
      </a>

      {/* BOTÃ“N CHAT */}
      <button
        onClick={() => setChatAbierto(!chatAbierto)}
        className="fixed bottom-6 right-6 z-50 bg-[#0056B3] hover:bg-[#FF2A39] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
      >
        {chatAbierto ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* PANEL CHAT */}
      {chatAbierto && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-2xl shadow-2xl w-80 overflow-hidden border border-gray-100">
          {/* HEADER */}
          <div className="bg-[#0056B3] p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <p className="text-white font-bold text-sm">Agente DINCO</p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <p className="text-white/70 text-xs">En lÃ­nea ahora</p>
              </div>
            </div>
          </div>

          {/* MENSAJE */}
          <div className="p-4 bg-gray-50">
            <div className="bg-white rounded-xl p-3 shadow-sm">
              <p className="text-gray-700 text-sm">
                Â¡Hola! ðŸ‘‹ Soy tu agente DINCO. Â¿En quÃ© regiÃ³n te interesa una propiedad?
              </p>
              <p className="text-gray-400 text-xs mt-1">Ahora mismo</p>
            </div>
          </div>

          {/* OPCIONES RÃPIDAS */}
          <div className="p-4 space-y-2">
            {['Puerto Plata', 'Cabarete', 'SosÃºa', 'Santo Domingo'].map((region) => (
              <a
                key={region}
                href={`https://wa.me/18091234567?text=Me interesa una propiedad en ${region}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left text-sm text-[#0056B3] border border-[#0056B3] px-4 py-2 rounded-xl hover:bg-[#0056B3] hover:text-white transition-all duration-200"
              >
                {region}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\property\CatalogoRegion.tsx ---

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const propiedadesEjemplo = [
  { id: 1, titulo: 'Villa frente al mar', precio: 'US$ 285,000', tipo: 'Venta', habitaciones: 4, banos: 3, metros: 320, imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', destacada: true },
  { id: 2, titulo: 'Apartamento moderno', precio: 'US$ 145,000', tipo: 'Venta', habitaciones: 2, banos: 2, metros: 95, imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80', destacada: false },
  { id: 3, titulo: 'Casa con jardÃ­n', precio: 'US$ 1,800 / mes', tipo: 'Renta', habitaciones: 3, banos: 2, metros: 180, imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80', destacada: false },
  { id: 4, titulo: 'Penthouse ejecutivo', precio: 'US$ 3,500 / mes', tipo: 'Renta', habitaciones: 3, banos: 2, metros: 210, imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80', destacada: false },
  { id: 5, titulo: 'Villa de lujo', precio: 'US$ 420,000', tipo: 'Venta', habitaciones: 5, banos: 4, metros: 480, imagen: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80', destacada: true },
  { id: 6, titulo: 'Terreno residencial', precio: 'US$ 89,000', tipo: 'Venta', habitaciones: 0, banos: 0, metros: 1200, imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80', destacada: false },
]

const filtros = ['Todas', 'Venta', 'Renta', 'Casas', 'Apartamentos', 'Villas', 'Terrenos']

interface Props {
  nombre: string
  descripcion: string
  imagen: string
  propiedades: number
  slug: string
}

export default function CatalogoRegion({ nombre, descripcion, imagen, propiedades }: Props) {
  return (
    <main>
      <Navbar />

      {/* HERO REGIÃ“N */}
      <section
        className="relative h-80 bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/80 to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-10 w-full">
          <div className="flex items-center gap-2 text-white/60 text-sm mb-2">
            <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-white">{nombre}</span>
          </div>
          <h1 className="text-5xl font-black text-white">{nombre}</h1>
          <p className="text-white/75 mt-2">{propiedades} propiedades disponibles Â· {descripcion}</p>
        </div>
      </section>

      {/* FILTROS */}
      <section className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-3">
          {filtros.map((filtro) => (
            <button
              key={filtro}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                filtro === 'Todas'
                  ? 'bg-[#0056B3] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-[#0056B3] hover:text-white'
              }`}
            >
              {filtro}
            </button>
          ))}
        </div>
      </section>

      {/* CATÃLOGO */}
      <section className="py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propiedadesEjemplo.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="relative overflow-hidden h-52">
                  <div
                    className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${p.imagen})` }}
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                      p.tipo === 'Venta' ? 'bg-[#0056B3]' : 'bg-[#FF2A39]'
                    }`}>
                      {p.tipo}
                    </span>
                    {p.destacada && (
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-yellow-400 text-yellow-900">
                        Destacada
                      </span>
                    )}
                  </div>
                  <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors">
                    <svg className="w-4 h-4 text-gray-400 hover:text-[#FF2A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                <div className="p-5">
                  <h3 className="text-gray-900 font-bold text-lg mb-1">{p.titulo}</h3>
                  <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                    <svg className="w-4 h-4 text-[#FF2A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {nombre}
                  </div>

                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4 pb-4 border-b border-gray-100">
                    {p.habitaciones > 0 && <span>{p.habitaciones} hab.</span>}
                    {p.banos > 0 && <span>{p.banos} baÃ±os</span>}
                    <span>{p.metros} mÂ²</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-[#0056B3] font-black text-xl">{p.precio}</p>
                    <Link
                      href={`/propiedades/${p.id}`}
                      className="bg-[#FF2A39] hover:bg-[#0056B3] text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors duration-300"
                    >
                      Ver detalles
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\property\PropiedadesDestacadas.tsx ---

import Link from 'next/link'

const propiedades = [
  {
    id: 1,
    titulo: 'Villa frente al mar',
    ubicacion: 'Puerto Plata',
    precio: 'US$ 285,000',
    tipo: 'Venta',
    habitaciones: 4,
    banos: 3,
    metros: 320,
    imagen: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    destacada: true,
  },
  {
    id: 2,
    titulo: 'Apartamento beachfront',
    ubicacion: 'Cabarete',
    precio: 'US$ 145,000',
    tipo: 'Venta',
    habitaciones: 2,
    banos: 2,
    metros: 95,
    imagen: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    destacada: false,
  },
  {
    id: 3,
    titulo: 'Villa de lujo con piscina',
    ubicacion: 'SosÃºa',
    precio: 'US$ 420,000',
    tipo: 'Venta',
    habitaciones: 5,
    banos: 4,
    metros: 480,
    imagen: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    destacada: true,
  },
  {
    id: 4,
    titulo: 'Penthouse ejecutivo',
    ubicacion: 'Santo Domingo',
    precio: 'US$ 3,500 / mes',
    tipo: 'Renta',
    habitaciones: 3,
    banos: 2,
    metros: 210,
    imagen: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    destacada: false,
  },
  {
    id: 5,
    titulo: 'Casa colonial restaurada',
    ubicacion: 'SamanÃ¡',
    precio: 'US$ 195,000',
    tipo: 'Venta',
    habitaciones: 3,
    banos: 2,
    metros: 180,
    imagen: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    destacada: false,
  },
  {
    id: 6,
    titulo: 'Terreno frente al mar',
    ubicacion: 'Monte Cristi',
    precio: 'US$ 89,000',
    tipo: 'Venta',
    habitaciones: 0,
    banos: 0,
    metros: 1200,
    imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    destacada: false,
  },
]

export default function PropiedadesDestacadas() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">
              SelecciÃ³n exclusiva
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0056B3] mt-2 mb-3">
              Propiedades destacadas
            </h2>
            <p className="text-gray-500 text-lg max-w-xl">
              Las mejores oportunidades de inversiÃ³n seleccionadas por nuestros expertos
            </p>
          </div>
          <Link
            href="/propiedades"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[#0056B3] font-bold border-2 border-[#0056B3] px-6 py-3 rounded-xl hover:bg-[#0056B3] hover:text-white transition-all duration-300"
          >
            Ver todas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {propiedades.map((p) => (
            <div
              key={p.id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              {/* IMAGEN */}
              <div className="relative overflow-hidden h-52">
                <div
                  className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${p.imagen})` }}
                />
                {/* BADGES */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                    p.tipo === 'Venta' ? 'bg-[#0056B3]' : 'bg-[#FF2A39]'
                  }`}>
                    {p.tipo}
                  </span>
                  {p.destacada && (
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-yellow-400 text-yellow-900">
                      Destacada
                    </span>
                  )}
                </div>
                {/* FAVORITO */}
                <button className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors duration-200">
                  <svg className="w-4 h-4 text-gray-400 hover:text-[#FF2A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* CONTENIDO */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-gray-900 font-bold text-lg leading-tight">
                    {p.titulo}
                  </h3>
                </div>

                {/* UBICACIÃ“N */}
                <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
                  <svg className="w-4 h-4 text-[#FF2A39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {p.ubicacion}
                </div>

                {/* CARACTERÃSTICAS */}
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-4 pb-4 border-b border-gray-100">
                  {p.habitaciones > 0 && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      {p.habitaciones} hab.
                    </span>
                  )}
                  {p.banos > 0 && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                      </svg>
                      {p.banos} baÃ±os
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                    {p.metros} mÂ²
                  </span>
                </div>

                {/* PRECIO Y ACCIÃ“N */}
                <div className="flex items-center justify-between">
                  <p className="text-[#0056B3] font-black text-xl">
                    {p.precio}
                  </p>
                  <Link
                    href={`/propiedades/${p.id}`}
                    className="bg-[#FF2A39] hover:bg-[#0056B3] text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors duration-300"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\ui\Hero.tsx ---

'use client'
import { useState, useEffect, useCallback } from 'react'

const regiones = [
  {
    nombre: 'Puerto Plata',
    descripcion: 'Descubre villas y residencias frente al mar Caribe',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80',
    propiedades: 124,
  },
  {
    nombre: 'Cabarete',
    descripcion: 'El paraÃ­so del surf y la vida costera',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80',
    propiedades: 86,
  },
  {
    nombre: 'SosÃºa',
    descripcion: 'Playas cristalinas y propiedades de lujo',
    imagen: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=80',
    propiedades: 98,
  },
  {
    nombre: 'Santo Domingo',
    descripcion: 'La capital, centro de negocios e inversiÃ³n',
    imagen: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=80',
    propiedades: 215,
  },
  {
    nombre: 'SamanÃ¡',
    descripcion: 'Naturaleza exuberante y exclusividad tropical',
    imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80',
    propiedades: 67,
  },
  {
    nombre: 'Monte Cristi',
    descripcion: 'Tierra de oportunidades y paisajes Ãºnicos',
    imagen: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=1920&q=80',
    propiedades: 43,
  },
]

export default function Hero() {
  const [actual, setActual] = useState(0)
  const [animando, setAnimando] = useState(false)

  const cambiarRegion = useCallback((indice: number) => {
    if (animando || indice === actual) return
    setAnimando(true)
    setTimeout(() => {
      setActual(indice)
      setAnimando(false)
    }, 400)
  }, [actual, animando])

  useEffect(() => {
    const intervalo = setInterval(() => {
      cambiarRegion((actual + 1) % regiones.length)
    }, 5000)
    return () => clearInterval(intervalo)
  }, [actual, cambiarRegion])

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* IMAGEN DE FONDO */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${regiones[actual].imagen})` }}
      />

      {/* CAPAS DE GRADIENTE */}
      <div className="absolute inset-0 bg-linearinea-to-t from-black/80 via-black/40 to-black/20" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent" />

      {/* CONTENIDO PRINCIPAL */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-6">

        {/* BADGE REGIÃ“N */}
        <div className={`transition-all duration-400 ${animando ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
          <span className="inline-block bg-[#FF2A39]/90 text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">
            RepÃºblica Dominicana
          </span>

          {/* NOMBRE REGIÃ“N */}
          <h1 className="text-6xl md:text-8xl font-black mb-3 drop-shadow-2xl">
            {regiones[actual].nombre}
          </h1>

          {/* DESCRIPCIÃ“N */}
          <p className="text-xl md:text-2xl text-white/85 mb-3 max-w-2xl mx-auto font-light">
            {regiones[actual].descripcion}
          </p>

          {/* CONTADOR PROPIEDADES */}
          <p className="text-[#FF2A39] font-semibold text-sm tracking-wider mb-10">
            {regiones[actual].propiedades} propiedades disponibles
          </p>
        </div>

        {/* BUSCADOR */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex flex-col md:flex-row gap-3 w-full max-w-4xl shadow-2xl">
          <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3.5 text-sm font-medium outline-none cursor-pointer">
            <option value="">Tipo de operaciÃ³n</option>
            <option value="venta">Venta</option>
            <option value="renta">Renta</option>
            <option value="promocion">PromociÃ³n</option>
          </select>
          <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3.5 text-sm font-medium outline-none cursor-pointer">
            <option value="">Tipo de propiedad</option>
            <option value="casa">Casa</option>
            <option value="apartamento">Apartamento</option>
            <option value="villa">Villa</option>
            <option value="penthouse">Penthouse</option>
            <option value="local">Local comercial</option>
            <option value="terreno">Terreno</option>
          </select>
          <select className="flex-1 bg-white text-gray-700 rounded-xl px-4 py-3.5 text-sm font-medium outline-none cursor-pointer">
            <option value="">RegiÃ³n</option>
            {regiones.map((r) => (
              <option key={r.nombre} value={r.nombre}>{r.nombre}</option>
            ))}
          </select>
          <button className="bg-[#FF2A39] hover:bg-[#0056B3] text-white font-bold px-10 py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
            Buscar
          </button>
        </div>

        {/* ESTADÃSTICAS RÃPIDAS */}
        <div className="flex gap-8 mt-8">
          <div className="text-center">
            <p className="text-2xl font-black text-white">+600</p>
            <p className="text-xs text-white/60 tracking-wider uppercase">Propiedades</p>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <p className="text-2xl font-black text-white">6</p>
            <p className="text-xs text-white/60 tracking-wider uppercase">Regiones</p>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <p className="text-2xl font-black text-white">+12</p>
            <p className="text-xs text-white/60 tracking-wider uppercase">AÃ±os</p>
          </div>
          <div className="w-px bg-white/20" />
          <div className="text-center">
            <p className="text-2xl font-black text-white">+800</p>
            <p className="text-xs text-white/60 tracking-wider uppercase">Clientes</p>
          </div>
        </div>

        {/* INDICADORES DE REGIÃ“N */}
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          {regiones.map((r, i) => (
            <button
              key={i}
              onClick={() => cambiarRegion(i)}
              className="flex flex-col items-center gap-1 group"
            >
              <span className={`text-xs font-semibold transition-all duration-300 ${
                i === actual ? 'text-white' : 'text-white/40 group-hover:text-white/70'
              }`}>
                {r.nombre}
              </span>
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${
                i === actual ? 'bg-[#FF2A39] w-10' : 'bg-white/20 w-4 group-hover:w-7'
              }`} />
            </button>
          ))}
        </div>
      </div>

      {/* FLECHA SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </section>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\ui\SeccionAgentes.tsx ---

import Link from 'next/link'

const agentes = [
  {
    id: 1,
    nombre: 'Carlos DurÃ¡n',
    cargo: 'Agente Senior',
    region: 'Puerto Plata',
    idiomas: ['EspaÃ±ol', 'InglÃ©s'],
    propiedades: 48,
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    whatsapp: '18091234567',
    email: 'carlos@dinco.com',
  },
  {
    id: 2,
    nombre: 'MarÃ­a GonzÃ¡lez',
    cargo: 'Agente Inmobiliaria',
    region: 'Cabarete',
    idiomas: ['EspaÃ±ol', 'InglÃ©s', 'FrancÃ©s'],
    propiedades: 35,
    foto: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    whatsapp: '18097654321',
    email: 'maria@dinco.com',
  },
  {
    id: 3,
    nombre: 'Roberto MÃ©ndez',
    cargo: 'Agente Comercial',
    region: 'Santo Domingo',
    idiomas: ['EspaÃ±ol', 'InglÃ©s', 'AlemÃ¡n'],
    propiedades: 62,
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    whatsapp: '18099876543',
    email: 'roberto@dinco.com',
  },
  {
    id: 4,
    nombre: 'Ana MartÃ­nez',
    cargo: 'Agente de Lujo',
    region: 'SosÃºa',
    idiomas: ['EspaÃ±ol', 'InglÃ©s', 'Italiano'],
    propiedades: 29,
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    whatsapp: '18091112233',
    email: 'ana@dinco.com',
  },
]

export default function SeccionAgentes() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center mb-14">
          <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">
            Nuestro equipo
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0056B3] mt-2 mb-4">
            Agentes especializados
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Expertos en cada regiÃ³n listos para asesorarte y encontrar la propiedad ideal
          </p>
        </div>

        {/* GRID AGENTES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agentes.map((agente) => (
            <div
              key={agente.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* FOTO */}
              <div className="relative h-56 overflow-hidden">
                <div
                  className="h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${agente.foto})` }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-[#FF2A39] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {agente.region}
                  </span>
                </div>
              </div>

              {/* CONTENIDO */}
              <div className="p-5">
                <h3 className="text-gray-900 font-black text-lg">{agente.nombre}</h3>
                <p className="text-[#0056B3] text-sm font-semibold mb-2">{agente.cargo}</p>

                {/* IDIOMAS */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {agente.idiomas.map((idioma) => (
                    <span key={idioma} className="text-xs bg-blue-50 text-[#0056B3] px-2 py-0.5 rounded-full">
                      {idioma}
                    </span>
                  ))}
                </div>

                {/* PROPIEDADES */}
                <p className="text-gray-400 text-sm mb-4">
                  <span className="text-[#0056B3] font-black text-lg">{agente.propiedades}</span> propiedades activas
                </p>

                {/* BOTONES CONTACTO */}
<div className="flex gap-2">

  <a
    href={`https://wa.me/${agente.whatsapp}`}
    target="_blank"
    rel="noopener noreferrer"
    className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors duration-300"
  >
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>

    WhatsApp
  </a>

  <a
    href={`mailto:${agente.email}`}
    className="flex-1 bg-[#0056B3] hover:bg-[#003d82] text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 transition-colors duration-300"
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>

    Email
  </a>

</div>
              </div>
            </div>
          ))}
        </div>

        {/* VER TODOS */}
        <div className="text-center mt-12">
          <Link
            href="/agentes"
            className="inline-flex items-center gap-2 bg-[#0056B3] hover:bg-[#FF2A39] text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Ver todos los agentes
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\ui\SeccionPostulacion.tsx ---

import Link from 'next/link'

export default function SeccionPostulacion() {
  return (
    <section className="py-20 px-6 bg-[#0056B3] relative overflow-hidden">

      {/* FONDO DECORATIVO */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF2A39] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* TEXTO */}
          <div>
            <span className="inline-block bg-[#FF2A39] text-white text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
              Propietarios internacionales
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Â¿Tienes una propiedad fuera de RepÃºblica Dominicana?
            </h2>
            <p className="text-white/75 text-lg mb-8 leading-relaxed">
              Publica, vende, renta o promociona tu propiedad a travÃ©s de DINCO y llega a miles de compradores e inversores en todo el mundo. Nuestros agentes especializados te guiarÃ¡n en cada paso.
            </p>

            {/* BENEFICIOS */}
            <div className="space-y-4 mb-10">
              {[
                'AsignaciÃ³n automÃ¡tica al catÃ¡logo de tu regiÃ³n',
                'Agente DINCO dedicado para tu zona',
                'Visibilidad internacional sin comisiÃ³n adelantada',
                'Proceso 100% digital desde cualquier paÃ­s',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FF2A39] flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-white/85 font-medium">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/postulacion"
              className="inline-flex items-center gap-3 bg-white text-[#0056B3] font-black px-8 py-4 rounded-xl hover:bg-[#FF2A39] hover:text-white transition-all duration-300 shadow-xl text-lg"
            >
              Publicar mi propiedad
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* PASOS */}
          <div className="grid grid-cols-1 gap-4">
            {[
              { paso: '01', titulo: 'Selecciona tu paÃ­s', desc: 'Elige el paÃ­s donde estÃ¡ ubicada tu propiedad' },
              { paso: '02', titulo: 'Tipo de operaciÃ³n', desc: 'Indica si deseas vender, rentar o promocionar' },
              { paso: '03', titulo: 'Datos de la propiedad', desc: 'Completa el formulario con los detalles y fotos' },
              { paso: '04', titulo: 'Agente asignado', desc: 'DINCO te asigna un agente experto en tu regiÃ³n' },
            ].map((item) => (
              <div key={item.paso} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 flex items-center gap-5 hover:bg-white/20 transition-all duration-300">
                <span className="text-4xl font-black text-white/20 w-14 shrink-0">{item.paso}</span>
                <div>
                  <h3 className="text-white font-black text-lg">{item.titulo}</h3>
                  <p className="text-white/65 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\ui\SeccionRegiones.tsx ---

import Link from 'next/link'

const regiones = [
  {
    nombre: 'Puerto Plata',
    descripcion: 'Villas, casas y locales frente al mar Caribe',
    imagen: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    propiedades: 124,
    slug: 'puerto-plata',
  },
  {
    nombre: 'Cabarete',
    descripcion: 'Apartamentos y villas en la capital del surf',
    imagen: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80',
    propiedades: 86,
    slug: 'cabarete',
  },
  {
    nombre: 'SosÃºa',
    descripcion: 'Residencias de lujo y propiedades comerciales',
    imagen: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80',
    propiedades: 98,
    slug: 'sosua',
  },
  {
    nombre: 'Santo Domingo',
    descripcion: 'InversiÃ³n y negocios en la capital del paÃ­s',
    imagen: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    propiedades: 215,
    slug: 'santo-domingo',
  },
  {
    nombre: 'SamanÃ¡',
    descripcion: 'Naturaleza tropical y exclusividad costera',
    imagen: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    propiedades: 67,
    slug: 'samana',
  },
  {
    nombre: 'Monte Cristi',
    descripcion: 'Oportunidades Ãºnicas en el norte del paÃ­s',
    imagen: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?w=800&q=80',
    propiedades: 43,
    slug: 'monte-cristi',
  },
]

export default function SeccionRegiones() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center mb-14">
          <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">
            RepÃºblica Dominicana
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0056B3] mt-2 mb-4">
            Explora por regiÃ³n
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Encuentra la propiedad perfecta en las mejores zonas del paÃ­s
          </p>
        </div>

        {/* GRID DE REGIONES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regiones.map((region) => (
            <Link
              key={region.slug}
              href={`/${region.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* IMAGEN */}
              <div
                className="h-64 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${region.imagen})` }}
              />

              {/* CAPA OSCURA */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* CONTENIDO */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="text-white text-2xl font-black mb-1">
                      {region.nombre}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {region.descripcion}
                    </p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="text-[#FF2A39] text-2xl font-black">
                      {region.propiedades}
                    </p>
                    <p className="text-white/60 text-xs uppercase tracking-wider">
                      propiedades
                    </p>
                  </div>
                </div>

                {/* BOTÃ“N */}
                <div className="mt-4 flex items-center gap-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Ver propiedades</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\components\ui\Testimonios.tsx ---

'use client'
import { useState } from 'react'

const testimonios = [
  {
    id: 1,
    nombre: 'Michael Johnson',
    pais: 'Estados Unidos',
    bandera: 'ðŸ‡ºðŸ‡¸',
    texto: 'ComprÃ© mi villa en Cabarete a travÃ©s de DINCO y fue una experiencia increÃ­ble. El agente me guiÃ³ en cada paso del proceso desde Nueva York. En menos de 3 meses todo estaba cerrado.',
    propiedad: 'Villa en Cabarete',
    calificacion: 5,
    foto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    id: 2,
    nombre: 'Sophie MÃ¼ller',
    pais: 'Alemania',
    bandera: 'ðŸ‡©ðŸ‡ª',
    texto: 'PubliquÃ© mi apartamento en SosÃºa con DINCO y en dos semanas ya tenÃ­a inquilinos. El proceso fue completamente digital, nunca tuve que viajar a RepÃºblica Dominicana.',
    propiedad: 'Apartamento en SosÃºa',
    calificacion: 5,
    foto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
  },
  {
    id: 3,
    nombre: 'Jean-Pierre Dubois',
    pais: 'Francia',
    bandera: 'ðŸ‡«ðŸ‡·',
    texto: 'InvertÃ­ en un terreno en Puerto Plata gracias a DINCO. La asesorÃ­a fue excelente y el precio superÃ³ mis expectativas. Ya estoy planificando mi segunda inversiÃ³n.',
    propiedad: 'Terreno en Puerto Plata',
    calificacion: 5,
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
  },
  {
    id: 4,
    nombre: 'Isabella Rossi',
    pais: 'Italia',
    bandera: 'ðŸ‡®ðŸ‡¹',
    texto: 'El equipo de DINCO es profesional y transparente. Me ayudaron a encontrar el penthouse perfecto en Santo Domingo. La comunicaciÃ³n fue impecable en todo momento.',
    propiedad: 'Penthouse en Santo Domingo',
    calificacion: 5,
    foto: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
  },
]

export default function Testimonios() {
  const [actual, setActual] = useState(0)

  const anterior = () => setActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1))
  const siguiente = () => setActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1))

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <div className="text-center mb-14">
          <span className="text-[#FF2A39] text-sm font-bold tracking-widest uppercase">
            Lo que dicen nuestros clientes
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0056B3] mt-2 mb-4">
            Historias de Ã©xito
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Clientes de todo el mundo confÃ­an en DINCO para sus inversiones inmobiliarias
          </p>
        </div>

        {/* ESTADÃSTICAS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { numero: '98%', label: 'Clientes satisfechos' },
            { numero: '+800', label: 'Transacciones cerradas' },
            { numero: '+40', label: 'PaÃ­ses representados' },
            { numero: '12', label: 'AÃ±os de experiencia' },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-2xl">
              <p className="text-4xl font-black text-[#0056B3] mb-1">{stat.numero}</p>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CAROUSEL */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">

              {/* FOTO */}
              <div className="shrink-0">
                <div
                  className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-[#0056B3]"
                  style={{ backgroundImage: `url(${testimonios[actual].foto})` }}
                />
              </div>

              {/* CONTENIDO */}
              <div className="flex-1">
                {/* ESTRELLAS */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonios[actual].calificacion)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  &quot;{testimonios[actual].texto}&quot;
                </p>

                <div>
                  <p className="font-black text-gray-900 text-lg">
                    {testimonios[actual].nombre} {testimonios[actual].bandera}
                  </p>
                  <p className="text-[#0056B3] text-sm font-semibold">
                    {testimonios[actual].propiedad} Â· {testimonios[actual].pais}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CONTROLES */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={anterior}
              className="w-12 h-12 bg-gray-100 hover:bg-[#0056B3] hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonios.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActual(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === actual ? 'bg-[#FF2A39] w-8 h-3' : 'bg-gray-200 w-3 h-3'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={siguiente}
              className="w-12 h-12 bg-gray-100 hover:bg-[#0056B3] hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

--- ARCHIVO: C:\Users\Dell\dinco-web\docs\arquitectura\backend-servicios.md ---

# SERVICIOS BACKEND

## SERVICIOS PRINCIPALES

### AUTH
Autenticación y autorización.

### USERS
Gestión de usuarios.

### PROPERTIES
Gestión de propiedades.

### CRM
Gestión de clientes y leads.

### DOCUMENTS
Gestión documental.

### NOTIFICATIONS
Correos y alertas.

### AI
Automatización futura.

## REGLAS

- separar lógica por dominio
- validar entradas
- centralizar autenticación
- evitar dependencias innecesarias


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\arquitectura\estructura-backend.md ---

# ESTRUCTURA BACKEND

## OBJETIVO

El backend controla:

- autenticación
- base de datos
- CRM
- lógica del negocio
- documentos
- automatización

## REGLAS

- API organizada
- Validaciones obligatorias
- Seguridad centralizada


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\arquitectura\estructura-frontend.md ---

# ESTRUCTURA FRONTEND

## OBJETIVO

El frontend controla:

- experiencia visual
- navegaciï¿½n
- interacciï¿½n
- catï¿½logo
- branding

## REGLAS

- Componentes reutilizables
- Responsive obligatorio
- SEO optimizado

## GUIA DE ARQUITECTURA DE CLOUDE, RECUERDA CLOUDE! QUE TENEMOS UN ARQUITECTURA PARA LA FASES DE LANZAMIENTO.



--- ARCHIVO: C:\Users\Dell\dinco-web\docs\arquitectura\flujo-de-datos.md ---

# FLUJO DE DATOS

Usuario ? Frontend ? API ? Backend ? Base de datos ? Frontend

## REGLAS

- Todo pasa por API
- Backend valida toda entrada
- Frontend no accede directo a DB


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\arquitectura\frontend-modulos.md ---

# MÓDULOS FRONTEND

## MÓDULOS PRINCIPALES

### HOME
Landing principal del sistema.

### CATÁLOGO
Listado dinámico de propiedades.

### DETALLE DE PROPIEDAD
Vista individual de inmueble.

### DASHBOARD
Paneles administrativos y operativos.

### FORMULARIOS
Captura de leads y publicación.

### SISTEMA DE FILTROS
Búsqueda avanzada de propiedades.

## REGLAS

- mantener separación por módulos
- evitar componentes gigantes
- reutilizar UI
- mantener escalabilidad


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\arquitectura\vision-general.md ---

# DINCO - VISIÓN GENERAL DEL SISTEMA

## TIPO DE PROYECTO

DINCO es una plataforma inmobiliaria escalable orientada a:

- Venta de propiedades
- Renta de propiedades
- Publicación internacional de inmuebles
- CRM inmobiliario
- Gestión documental
- Automatización futura con IA

## PRINCIPIOS

- Arquitectura modular
- Escalabilidad
- Componentes reutilizables
- Separación frontend/backend
- Sistema multirol


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\assets\README.md ---

# ASSETS DEL PROYECTO DINCO

## OBJETIVO

Esta carpeta almacena todos los recursos visuales y gráficos del proyecto.

## CONTENIDO

- logos
- isotipos
- iconos
- diagramas
- wireframes
- referencias visuales
- mockups
- imágenes arquitectónicas
- recursos multimedia

## REGLAS

- mantener organización por categorías
- evitar archivos duplicados
- usar nombres claros
- optimizar imágenes pesadas


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\ia\flujo-de-trabajo-ia.md ---

# FLUJO DE TRABAJO CON IA

## CLAUDE

Responsable de:
- construcción de módulos
- generación de componentes
- estructuras grandes

## CHATGPT

Responsable de:
- revisión arquitectónica
- optimización
- escalabilidad
- UX
- organización

## COPILOT

Responsable de:
- corrección rápida
- asistencia dentro del código
- autocompletado

## REGLA GENERAL

Ninguna IA debe alterar arquitectura sin validación humana.


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\ia\instrucciones-claude.md ---

# INSTRUCCIONES PARA CLAUDE

Claude debe:

- generar módulos
- mantener estructura
- evitar romper arquitectura
- reutilizar componentes


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\ia\instrucciones-copilot.md ---

# INSTRUCCIONES PARA COPILOT

Copilot debe:

- asistir en errores rápidos
- ayudar dentro del código
- no modificar arquitectura


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\ia\rol-chatgpt.md ---

# ROL DE CHATGPT

ChatGPT debe:

- revisar arquitectura
- detectar errores estructurales
- optimizar escalabilidad
- mejorar UX


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\marca\colores.md ---

# COLORES

## PRINCIPIOS

- elegancia
- claridad
- contraste
- coherencia visual


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\marca\guia-de-marca.md ---

# GUÍA DE MARCA

DINCO debe transmitir:

- profesionalismo
- exclusividad
- presencia internacional
- confianza


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\marca\sistema-visual.md ---

# SISTEMA VISUAL

## OBJETIVO

Mantener coherencia visual en todo DINCO.

## ELEMENTOS

- paleta de colores
- tipografía
- espaciados
- iconografía
- botones
- cards
- banners
- galerías

## REGLAS

- mantener consistencia
- evitar estilos aleatorios
- usar jerarquía visual clara
- mantener sensación premium


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\marca\tipografia.md ---

# TIPOGRAFÍA

## OBJETIVO

Transmitir:

- claridad
- lujo
- profesionalismo


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\recursos\analisis-de-competencia.md ---

# ANÁLISIS DE COMPETENCIA

## OBJETIVO

Analizar plataformas inmobiliarias relevantes para:

- identificar fortalezas
- detectar debilidades
- mejorar experiencia
- encontrar oportunidades

## ENFOQUE

- UX
- velocidad
- catálogo
- filtros
- dashboards
- experiencia visual
- escalabilidad


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\reglas\escalabilidad.md ---

# REGLAS DE ESCALABILIDAD

## OBJETIVO

Preparar DINCO para crecimiento futuro.

## PRINCIPIOS

- arquitectura modular
- desacoplamiento
- reutilización
- separación de responsabilidades

## REGLAS

- evitar dependencias innecesarias
- no duplicar lógica
- mantener APIs organizadas
- crear componentes reutilizables


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\reglas\estandares-de-codigo.md ---

# ESTÁNDARES DE CÓDIGO

- nombres claros
- componentes pequeños
- reutilización obligatoria
- estructura limpia


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\reglas\estructura-de-carpetas.md ---

# ESTRUCTURA DE CARPETAS

## REGLAS

- separar por dominio
- mantener modularidad
- no mezclar responsabilidades


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\reglas\reglas-del-proyecto.md ---

# REGLAS DEL PROYECTO

- Mantener modularidad
- No romper arquitectura
- Evitar duplicación
- Mantener separación frontend/backend
- Usar TypeScript


--- ARCHIVO: C:\Users\Dell\dinco-web\docs\ux-ui\experiencia-usuario.md ---

# EXPERIENCIA DE USUARIO

## OBJETIVO

Crear una experiencia:

- intuitiva
- moderna
- fluida
- premium
- visualmente atractiva

## PRINCIPIOS

- navegación clara
- mínima fricción
- carga rápida
- imágenes protagonistas
- interacción natural

## REGLAS

- evitar saturación visual
- priorizar accesibilidad
- mantener consistencia
- optimizar responsive


--- ARCHIVO: C:\Users\Dell\dinco-web\public\file.svg ---

<svg fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 13.5V5.41a1 1 0 0 0-.3-.7L9.8.29A1 1 0 0 0 9.08 0H1.5v13.5A2.5 2.5 0 0 0 4 16h8a2.5 2.5 0 0 0 2.5-2.5m-1.5 0v-7H8v-5H3v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1M9.5 5V2.12L12.38 5zM5.13 5h-.62v1.25h2.12V5zm-.62 3h7.12v1.25H4.5zm.62 3h-.62v1.25h7.12V11z" clip-rule="evenodd" fill="#666" fill-rule="evenodd"/></svg>

--- ARCHIVO: C:\Users\Dell\dinco-web\public\globe.svg ---

<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>

--- ARCHIVO: C:\Users\Dell\dinco-web\public\next.svg ---

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 394 80"><path fill="#000" d="M262 0h68.5v12.7h-27.2v66.6h-13.6V12.7H262V0ZM149 0v12.7H94v20.4h44.3v12.6H94v21h55v12.6H80.5V0h68.7zm34.3 0h-17.8l63.8 79.4h17.9l-32-39.7 32-39.6h-17.9l-23 28.6-23-28.6zm18.3 56.7-9-11-27.1 33.7h17.8l18.3-22.7z"/><path fill="#000" d="M81 79.3 17 0H0v79.3h13.6V17l50.2 62.3H81Zm252.6-.4c-1 0-1.8-.4-2.5-1s-1.1-1.6-1.1-2.6.3-1.8 1-2.5 1.6-1 2.6-1 1.8.3 2.5 1a3.4 3.4 0 0 1 .6 4.3 3.7 3.7 0 0 1-3 1.8zm23.2-33.5h6v23.3c0 2.1-.4 4-1.3 5.5a9.1 9.1 0 0 1-3.8 3.5c-1.6.8-3.5 1.3-5.7 1.3-2 0-3.7-.4-5.3-1s-2.8-1.8-3.7-3.2c-.9-1.3-1.4-3-1.4-5h6c.1.8.3 1.6.7 2.2s1 1.2 1.6 1.5c.7.4 1.5.5 2.4.5 1 0 1.8-.2 2.4-.6a4 4 0 0 0 1.6-1.8c.3-.8.5-1.8.5-3V45.5zm30.9 9.1a4.4 4.4 0 0 0-2-3.3 7.5 7.5 0 0 0-4.3-1.1c-1.3 0-2.4.2-3.3.5-.9.4-1.6 1-2 1.6a3.5 3.5 0 0 0-.3 4c.3.5.7.9 1.3 1.2l1.8 1 2 .5 3.2.8c1.3.3 2.5.7 3.7 1.2a13 13 0 0 1 3.2 1.8 8.1 8.1 0 0 1 3 6.5c0 2-.5 3.7-1.5 5.1a10 10 0 0 1-4.4 3.5c-1.8.8-4.1 1.2-6.8 1.2-2.6 0-4.9-.4-6.8-1.2-2-.8-3.4-2-4.5-3.5a10 10 0 0 1-1.7-5.6h6a5 5 0 0 0 3.5 4.6c1 .4 2.2.6 3.4.6 1.3 0 2.5-.2 3.5-.6 1-.4 1.8-1 2.4-1.7a4 4 0 0 0 .8-2.4c0-.9-.2-1.6-.7-2.2a11 11 0 0 0-2.1-1.4l-3.2-1-3.8-1c-2.8-.7-5-1.7-6.6-3.2a7.2 7.2 0 0 1-2.4-5.7 8 8 0 0 1 1.7-5 10 10 0 0 1 4.3-3.5c2-.8 4-1.2 6.4-1.2 2.3 0 4.4.4 6.2 1.2 1.8.8 3.2 2 4.3 3.4 1 1.4 1.5 3 1.5 5h-5.8z"/></svg>

--- ARCHIVO: C:\Users\Dell\dinco-web\public\nuevo_dc.svg ---

<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="400" zoomAndPan="magnify" viewBox="0 0 300 36.000001" height="48" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><filter x="0%" y="0%" width="100%" height="100%" id="4863dc730a"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"/></filter><filter x="0%" y="0%" width="100%" height="100%" id="2eab848a0f"><feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0" color-interpolation-filters="sRGB"/></filter><g/><clipPath id="510a7cdaaf"><path d="M 4.054688 0 L 160 0 L 160 35.027344 L 4.054688 35.027344 Z M 4.054688 0 " clip-rule="nonzero"/></clipPath><clipPath id="07caa0e68e"><path d="M 12.035156 1.144531 L 43.839844 1.144531 L 43.839844 31.378906 L 12.035156 31.378906 Z M 12.035156 1.144531 " clip-rule="nonzero"/></clipPath><mask id="f2aa07b88f"><g filter="url(#4863dc730a)"><g filter="url(#2eab848a0f)" transform="matrix(0.134076, 0, 0, 0.134076, 0.440791, -7.821012)"><image x="0" y="0" width="410" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZoAAAGaCAAAAAATbdq/AAAAAmJLR0QA/4ePzL8AACAASURBVHic7X1puGVFdfa7qup0MzU0o6JAlKlxiowKDhCQyShoVAKCxglU/DRfHKOfExIFUdSY+KhPBMQEUUTFkMQBnHCEgDghIqhAM8ggqED3vWfvqnq/H1Wr9j63bzf4PNC9D7feB/rec/Y5++xba6+13vXWqjpARUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFxdqG2HV9BRWrhZF1fQUV88DgCUfBVMcZICz+hqdtDFcdZ3CweCZ51X7VcYYHi+dyJsaPbFQdZ2iweC592/LqA2HNur6Yij4snsc2hjH9Ox1sdZwBweIItmT0LS9+LFx1nOHA4jn0MZKx4YpX1fpzQOhMQ+95/jY14wwGFkfSxxiZHOf3f1dp9FCgpokxRsY28OzNquMMA8k0ZCQZSd9w+bOq4wwCFs9PAY0p4YQ28rSltf4cACyOYksm08QYY/Qtf/NXD46gNv1/g5BCCigAxBi//bc+uDhWx1nHsDiKnjHlmkzUGBr+dK8HgeNM+x9gEAkKSAEAQmic/8vvvi3GKtysS2TyzMwEMotOws2jp124me6rB5h/CggRQCCgWNs+8dI3xlhp9DqDxZFsWchz8Roytp5f32aqafS0e02EEAIW/0muA7Hin/bT53hMr+NMu2kAAUAIJNmG5Xnrl37h9KVhatnAtJtmEaKAIhAkdwGQfEjg4F/6s8PDtE4VTLtpspOQZApqQgKpBKWY9mH/efqSKXWcaTdNyjWUzM4EkPwIEMgI/qU/e8Z0Os60m8YAAIWp5GT+H6Qk9zGm3fa//2VRmELbTLtpYjKFCCAa0ZIokJ6kcdG/5vInhembKph20ySmTABkeoCs2AAkhIQxzaO+d6JMacaZVqhQk1F+YX4u/xtDy4sfN22K53Rd7aoQROVnJEiCyYHSg0iSArH+iRf//ZQJN9NuGsJkakYRUSlAIEKkXwAKYP3iD1+wQ5gmx5miS50XSaMRUqQ4DZByjQgBSppls9Ie+ONXhCkSbqbXNCmpm/SrCCGE5IomTXpm5SZrA+L8hh//4lbT4zjTcp2rINOtCKGk4S8JJiecnp6W3mHh/+aKv5kax5lW01husB7QUeekoemPlHY065QUZFzY9ItnbBqmY6pgOk0jLmx7ztYowSv1biD7iaBUOZFJFEi9HYBh+5LLDvZmOv/sKYCxOPTmO7aAaLNTN5FWypkyHZ3aOUpTR2wjP7RhXfHxwMBi0QfI5VtCcosgdXYzN3LqvGfv2WwaMtI3vGLvaas/pwLisNMPOebNW0Asjmarw97zk2KrkJ9m/i9ZrGFzshm840zdvWOMf9ZlezcWIUnM+jwJpEk1pCJTOmUt07VE3gC4IG++5PFh4Bln2Fe3KmzEyV9c0jqD3j0vxRaGFEKEWeeccAxTCJ01zZ6XvIHTJdwMG+LwqEvZ+BjDREAjNZ3EnqhJaoeaBrjMGBhjaFtetP2gW9UGfGmrwhp/1Pf39NYCTD3OiPlQbyqNSe4ULT1JplmdSGYtFBBr/L4/fqGnW1d/zL1imkxjg/vXz2ziszaTYHJHTadqSpqHBvNPUZWzN0cNEYj1G/772Zv76ag/Bw1x2ONHbHyKToE3bVHIc+yYcjdzo5RZo1vsntNKxze84dmDXSo1NV5jxb/su7u31kCnlgkAIXlM8pbefE1hYynzAAQikUUDEBEC4/zDz/vEhgMVbqbENGLD0rNOG3knZa4MOdckWaYTmoVzVM3yb+HVJR6Ki+2xl+8/TOFmiNe0KsSGp/7vMa1YQDDBm1MWFwHZPS2aePJ/WflU4RMiFJOMZGy74wXvM0NcKjUVprHi3/Sd7b0y3Tw3kw4lbRPFJyQ/Tq8hU7tgcTWNbjE9SxgX5I0/2NUPb8e7KTCNuLDx+af40kpGoDdRBuhUp67gANRDOPGafDYBKCKdjmBNu+f/vjVVqUPC8E1jjN//R4e1RiWvkjWgjwmIEgMqQU4RLrNm7eYsb2RJQRTCeXn3/9ih2WbwprEMp3zzEd5JLl5ScOpNYFKnbKCDr1POJChMJC3NSQvBiG4GVLL3ORP22xoDM81wi2EAgFi/3WkHlVUyuoaG/WGkiC6AZj7cNdgCEEp/gUeKZSlfZduBYlZM8roBYNheY4x/+iUHNbZfFPaTRglS2tlUUojOOVPjW/5NkuGkn6wEwACnCAZtGhfX+8iXt/KjidpEu2XSc0yKs4hoqmHm0smRjLBEwLRQOnsTs22hy3EGNxIDDmhi/c5n7eWNy6Qrt8zkrvPupqdohBNdX6NH9JW9YNVLUjnvU3IT6MAwuHulwMC/9LK9GmtKzkZWMzudUvkyc0e6ztSUqhOqbWqvGvKZ8lN63iEOxPCuKMPFDc84fYMwUidJNzlTspCS8432aSZbpQciuvYWImSeWGM2ieiCQjVxaoYa3EgMNKCJ9Y86b5k3vcqw8K7UvKTqJQBJCSSKlASfEk0/oFHyCzrosZSCKkO7TzDGP//7y7yRXgDqDV0KW6UEpXbVZk6cO9N6b84SgBJqUQdL63MJKQuoB4RBmsbFjU47e2PvVHYp7Zn94VOCRU0bSSpjySQTHRuFx6mVk8WIEuAGNxIDDGji2j3O2qW1hnon05B5yjknEYmprEfMc9EshSSQuzW1ruyHQhFE9asyiyBMkzkDw+DuFRi0L/nuLq2TMnyaIqQrXNh5kGiuyFQ4Ba0cqYoAoMob+4sIUPqls0MNCoMzjYtLzjjD+ZHk2h0obBm91nL93hpJPQAqaZaY1b0NkmiD7vxQughU/UzmGp4aMLCAZsTv9rkdW5dSRqkxkwOwt7g59hQCnZtJp6BInrVJhxI7U14nPX2URWcjzeDi2cC8xjK85pIdvZNSuOT7OgUk/afTMws/LqQgD7XONAOixU8KiH1ql35k5xycHDAor3F+0zMPD94i6V1pHw0QgthjauwztTx7xqIIZHbWyWU6CVqmPZMTCTuWAQDDaw8YkGmM8fudtU1rLboh02iWo1c3tsrQ8lrOUs/o9qjplVnxT/9mj9GSVL0y87QwuIg2nHvF0r/+a9t4J9qqVAJWGTTmlYGFjmmoU86cX1DKx15ZlM5EPUfRsXUSYXhqwGC8xvktP/o8H9KtkqQX0Qyhkaon5KPkinzvS+YN5f2ElM2F1E8kC3E911K/G17bxkBMY8Tvd9Y2rRMilymCIicjSlEou4QvPTv0Z3BUBO18qfxbpGYtOYvFZIDy5jAuyDK8/psP9663JEYlSqSZsdKYCeZdnBKjisVEnXEgLDsIpBOy/AaQmVQA2X6JUFeGNh+cX/qpw704Fq0yb9KgUkoXqWJXsgAot5bKlfoAxelydMw1Z3qV6Zh1ineC/jkHgiF4jfF/9bPDW2NTI0Up24lODwCyzlJm0spiTO310+qeeTO0UvqXIMj8bI83o6uEhjASExjCBfEdF2zrR0qLU6bWiX5KBMiu/7y0MHVv7zowup6m/jmyuQo7671ZFQNKHFxAW/emsTjgXdE7qOwvZeS1TOn1yaRndZYAKHMAnUV0nrlriKKAYoiU63VaRzs4Mz0YHkNb96YBLMSykGFdvgSg6CrdzHF5oEU8ijnYSxnUdrOe0tZNySVNk3ryPGszNAzBNKkbQ8u/fhhSgtWn0swaZYhADmJE2ZVGCXFeOBA7VqHsrscqCFAnagbHAgZhGukWKmWm3K8KlfXKnPckRMyhX6KpKTsN02Z2pd5BOd7/vOo1q4MYdJPB2urS1ZC5L7NMtKSn06xNfoMaRnpRKlG9/hSOdnCW3NXrMhic2wyhrjHoIoyKkn1Vn7krgyrr9+aPjSqUlMTBujYn5iaa/CzV3Jknq5ijxc7g3GYIXpPcpXOVwpv0cNoOkJl1Zb9K1gxdATQRlCTPCyivLvs+kWJIoJtnGJy7ZAzBa4qK2eWXTnvMVX6WOztzlQloTBhRCTbQNXUK9QH1FB27JlLT4RDu0UkMwTRAZ4BeMAKFURN6jjmrKDd6RBVlFGG0mAfFPPpvb56gkIAa0OaDKfQsc988wl1XH8ph5OKl5yjslEugMx7Ye1henf8t+s+EIw4LQzANe70zXQxK3jARsFTGTHGvdyi1anYeJ8KJF3VOUVpvlDFrh87wmp2GENAmB4VdlpE5N30OUAKIKl62vET7AUvBn+ek9TO6GJces1c1YVJZGwaG4DVAuY27ea4uw+TjAHSamF1miHnUARQ1oYx02byWWevsb/3Q/1BU08yPTJ57ShlSyZ6KyMKkS+NFL0MYjX3a+1yqTC17DHrz1uV4NvVEqBwYBhPQJGV+0dEXXYCWK5nSw5wcJuZRpVIGpARVqHMi4+kE6imSk1h5XNjZENnzEEwD9JgWyuxk9zgHN63b07OpOymCWQjI3Zoy0X6WmbTGP0KkW0rTKQ6EhLXzd/4ZGIJp2DWJ61bn2VuKhqK1oqgVTAlGBpkLa1XaWbCnsgG6QECU52mcZDnNsDCEK6K28md6pvqw6gSZEGT3UV8wxROQrEsdcVL71ydkn7zOA3kVThZL0TvLsDAE0+TQktlTLMuXsorJMq/JPp/WUJTTimjYUv5Quv5KU2C3fkNnoksKGmKL4BBMU3oomWpHdn4CrUBMyfQqfLG8G6Jtm+gst+rWQdnQKDxwwB4DDMM0E5V9to3OuqTDaRfnPo3WeRsLFV4yxdJVgKY0E+qpMhXPpX9aXyPU0w5jIPoYAg3QbEykpYEy51tOMo/OuZ2QCFBST5/PwTCfKGr7RuyJM+VU+tUPUVe8Ed2DwRU2w7hZcpQpYlhxom4mufMhpKkwlWrUKUSJGiBCMxHLkE7Fub/1YuDwujeHYZo8x9xbf5lLR/ZEypIUNKQB2lGjxLovi6mqlmPWRG6R7oNLyhpcxhmCabLmpSViNk9ZxAzoDkBaiHTjDegSp9S0if6uqclKUQ3c42Cd00jeSaV2b86LQqv6Iwqg50Flf5nYHclqgFaN+SkNfKVLXfLrC8oBdiWT1MXp86K3XlNIKdGpq0O7OemuA6ZLSLlvUxmcNqppcTTB09Dtnt7v0BmghDYIhhaQ8opo7YnsB6qMsQj/LF1q+b2johN0rTRAX63RaZxeVZvYmuRNOLKwOjjbDOWCqHMq2vQP9AltptQa47qucvblli4v6UwNoDShe3NPsu5Hz8rQ5oEgL66ACGGQujB00xnVukq/c6bI2lGj9UvfaTo+XbypK1Z7bCBt25lOUHPNPCjsFqXjUoXnbuBZ4lQp7YH8nQIa03reQ1EJoVsWmOi5GltfmuPo8BanD+SCskaTR1TjldIn7bJE5si9cBXTm3Mi0sSk+SSrcynFxP6XQBQOWObmakCbByUFUHlTLyz1fkDbonvNTtD6J58od89I2cA+x8munO19xY2IQOuZqgbMh3QNaRiLYUpYU+bcE407DacYrycoFy9SaFtu3+jlBZrUZAhcdQJDuSClyWU+BchT0qU9vWtOI6DrYroOdCnBLz1f6lad2S7qQMfOUeJZ3w8HgiF4TRrmlBSyh0wMFHsypxIDyVce1Sp9raBAXY8Tz02eW8vdGtDmhcn0qmtK6rXGAMUvMtJICwBYXe8JgtHGmLXS9AKlCr1mJ5Geuq2BUYRSvWZ+iGaEbAiqrCUSs/6oO86qZtNt8JgrHS8rv2eSbTT9Q52QheCV/W/yKkPNQoNzmoGYRjN8STgooaYnrfR3DdKYF0ro86P22Ke+w0ksSaasQYSeGR0X5IRTsga0eaHbLOZHUpLLxGvYe3U3Aa3vpXfX7v859+5n/9H65DGr6giYo3iq8sZcoqbnjLMGkAk8sH//ajAE02h6zx0bRRvriSuaaJIUKWkOWt9NCht34R4/sN795wHXOh/Z492drpCs0pEG5X9J1EkjYRF9iCKcwNofEwyGPJdCPu3plLJNTyHuNS71mwc18wQs/vDrgw3w7qdPOPMZZe/uxI6hHFvPW1a/iVa7ZfugYB/1pB322NyMlfmRXPqlt9h10Nw5BNNIL550rZrplyKsoSzT6BO05FXB+td9yJkAwNs7Dn/H2xGsvqhbE9JrsM26UHdKfU5OeNay9eZcnne7rJOiZwimUXWl63aWrD6jsLP8VKlC2AU+tKObn3uxC+npYMwJPz/HeIs8Bcd+8zO6rFU2uFcnAoSjYx8WmvQdU/kCwIgV60SWHkKuAWKZxoQKktAiFMUE0EbAbi4GHvSji598sfOECCwQg/vC0250bWmc6Ya16Ju6Cio/r0oOwBWQRSNjjDHOWGONMdaso0Eagmmk3OBA4kZAWQOofqK9fARgumlogzD6wgHXWQ8YLt48WIDeXrTPpYvabi5NtYTS6CyZk7ErZPNGz65vt0IG1+ZoFAzBNLHwsLLdEtBPC51RdDK/DFbAopOOmDUBsNF98ue7hZEAwd10wOcXhYByQpH8XZzSSy1UHYCCokDP6VOf2NJz7WIIplEeRUm7+zB5SN4NPe07l8v+jqcVFf/It1pEwIW/+NaRD/32i1pjAG9WHnGiS4tv0MU1yRWt7rNeohvB0lFTvBeCPHe0cL2mFB46JErHAEjaEJAwIv1thgXGAMSfDj/XBUKcf8rFT2nb9c98v0QLRLh3HrXSho41dJMM2cS9Vk9ImXrQ4Fqmrbuv8Vp4sDiQbUylXYwxapkXIxmpD9ODdDSSMfC2h6rACRiLV86wDTE0vGhrOAAywp43sw0xvT7qKdP704/0Een32e1hBIuuZUiHund5fhp2zX/DA4KBeE3R/KUsWtYmjMyedMayBJw8f2ACYCSc9DEXnMA4v+8PnuSdgK27bJ+vOd9rvslcQ7//UQr30J0koAwQHRtcR4kGwzBNpwbnLsAuqOQStL9WTfqLycAI2LjkC2/xku5s5x/xjaO9FcDb5U8/bVFU5RSlGtIFnKJLDLrtiHqzB0V/W1cBbQimKT0u7B6yTBQU7T4ZSsrvOmAuPPTC5zRpA1sKbXRnnehhgGDkuH804qXIcz21kkrdiuANIFup60/rJIe1jyGYxpRacM5OjnlhTWczIH3XNkBtgRHn9/nhnu2iTro2Jrz9rEXRAoHufc+8245JksKYN3jUj2OOnrq1bUIWNEttu6AZ2mTBnrXI/KB/P1OPqE4NQKw/8qK/aF1HfYVi2mO+u1NwAIP7yhN+ttjrGZDPrqK19P7tmb97sf6+LowzBNN0HFV6z03+FP2ep+xEgkWLIDDi3/ZZG+zk/LG48V7f3duPBPTuV/t9ceS7YkWDJ6ASaiIC/YGQiR/obLlWMQTTGIiuc9b4PifGi45dWYo5xopZ0ER87p8asXljQAA5HS32W170mtYI4O1dzz1lFAN7xu59AUu340ZPz+5WiqyrYAYMwzTFFQqJLmOXDxQCrIPWrveLQ24XEzf/8hGtK69RRVRAS/sv/yy0QIB983GNCZ01eh/IogKk1NV3vi7+rRsMwzQ9ZAmLnfdI+adsleEXfXu/K8WGx15ySONyWd+LQhTASPN/v7Z5cACjO+1pt498r/2wvNLkpsT+d611RlGBc+FqaLFUEeiGX0VfVWtEREya82cYnf70O5z1+120gx8B0JWggMkSqQhk1B5w6VO8E9C7i5/y41GT+6N1C4iskybj0DhAlRwMYsP0IZgGAMrOAEWPJHshCt26GUS4txzbWvpXfHXT4PS9vbo+czwZ+Ud+8/neGsDbX+/zuUVeqZ901Fjf2HONTjHQVSQLV0M7mE2MjJGRDFEFtKiiWj4W86OWvz8M1hqcxMaT6XCMWWLr/iNJ73mKEQvACN5PH/TlE2cmGTnzCBjB4uUMScjrPrHlOetEQ1v3sDiIbZEfY1SVU0c7TsiTcczfPhbOYeNzOfYxQxXJ8sqigjb88kPhABiH5zdsVSONsS9vxhhnHqmmYfnMZMaWn1mwpjmEbTfA3Yhl84TyG2MMDb+8JZzDwy5joy9T03TSdD5Cxthy+eOTFO2w/w0cd+ZQKTu9e+X2E17Tc6p1ZZqB5Jq8ZW3OLlk9S9Kw6URoIIxOf+bvLfy+P9yjccqp8zd3CUIsBK2okrbd9utHeCugd9964mWLvJb/eXVtFqWJ/DWfyMf0l4mHCwwWB7HVe7fvOyzRRp/yPvwDjHX424a+C33ZA7wnW1/eUI57zxNhLQCLJeez9bH4ZC+gzRavyddS0t1CDmgHs9WR6mLU3LASGRuuOBzOGrw+Rl8CmGbttuW7XhlCyzJ3pmcKLT+7SUo4BiewaSdCZ0hnn90BRrD4OhaqkINsbPnZBWuaQ1N2Zt8cMeTfQmECDa/cFc6KO4NNKGOX6RZbrjwCOPBGzVslZZAxNrz8EXACiMWL72ZHH4p5OZO85vr0xt6JY8tzBtKut7aRTdMFr15q73mPb/g/m8E6PORCNiH2BjAP/pW7w42w7cVsAou/KbUb845nJNuMsOf1hax3DJnjnmk4caP4Bew1iaFNjBW7mzY913qeAGMdHvsbNpzrZKHh+UvhAIsN/40+lFOEEpVieE1agO7w0As5Dr3qhjHGmL3mBoaoZU0+0ixg0xyaTNOx3763pGcb/umFsMbh6b9n03lMyhMxeJ4IYwHAWLzBx7ZXUuZfQsv/WIxEBtyZbEN3kIzatrHecvouikYyMDb83MI2DQtDmxzT5DNcvhucsXh9DG0IcSKexYZ3HQkrgLECsdj/dhbbpJzF5FmXL1My8No2eOZ8xhhjiMU0QSse/fx2AZtGhZpikqAqQB7dMb+8JZwxeB8b38vTqSQd89o94AQwaXcUh0f/uHOt0A1zw1v3SQnH4dkr2YYQtdUpxsTQFl07UXJmNWDhCjWaayZcIRTvCS1PF7EWS7/Axsc44TP0Y16QpBiH7U9aCgtYbPAljr1S5xL7YssVL09fUOyw+xWd+UhlaIt+y8AYJ/xyIXtNZmi9yN+nTj7618IYi4f+iOMQQpfhGSO957+OYAFxeOyv+a1Nk23cP9P7CYKdztXw4xvkhLPZ1zgOjCGrQbnk/C07U+YLaRaw1xzIppdlioUSH2g5czhG4vDYqzmedCfG2HDmaFgDGIcj/8QZXrETHCAOL2ijMjn9QcbQ8tLU3WnFnMpWK5wQZ3fqy5u9gLmgA9pBSp4nTKP54RePg5MRDr+rX86kWz2OefVeKc1YvJ3es+UfngEnEId9r8kW752QMTa8Zh+tPv9hHFs9PLOsL2/2Y9pCNs3BbINO0WgoK5r+N5fCisOL2bacSEaRseEPH5LTzMbnsg0xxDbEl8AJ4LDVJWz6RsnBso3jY2ENIA773MomH2l2hhEsur7vMymiVdNMDmCqwz1PtmKMyHvofU+5YYwxti0/uj4sAIcdf8ImHfIt/wViAIuN/j3JnX3BNM2vfdwikYGdL1cy0OzSC2jlv8jIha2hNbFojUWwibHlypfDisXic9IAdiUoY2wbvjnd/SM8/c7kID5pbZ9ZDAcYi9f56Dtr61iHhl/ZIiUcrJ9PHce7FDWAvbCZNbSFapqDCw3QcSfJ2PB3T4QThx1+yNkyvFkuYMs7npnSjMHfN7FNale2zaVKBg6+I1Wf7MUpMra8dg+MBDAiH6IPjBwv62lofXYePc9dsKY5hG03haxxJzb8xnZw4rDvbfnG7qb/Gcb8yaPyjT86g42PZIgrrkxGbnnrwTnhPOZalanzJ6TTN7z7GE04x83GcYjjHg2YpIoLua7RkrPfS+EbniZixeLVTZLEenkohDHPXT8TgB0uYRNShfNyfIxtYKQPfD2sASw2++9smzI9lzKW5/tEUj20x685mxnaouu6GQNV0hayaQ7NXtOFnNhG/yYYk7WZOIeaec9T07iO8KREsthy9nlweHtaiOZbnr4RHGDFfHhO9Zk+wrf8ypbZult+n82MMrTQ0yW40HPNodroUlyn5R+fCScOm/0P237Rwxgjm9gcraXJK2djk6Yir98HTiyOXknPyNjwkm0yGXiRZ6srALuoGRv+cm84ASw2+iRX7qSmmRARuLBNcwjbEsoYI8Msf7IzHBwefrlmiu5eDg2v0SGVU7NHjPmz7bILHPTHlHAa3rJ/rj6fdmOvwtEPCrGN7d8lKcHije1OMIL1rmeIMaTaNigNWLjk+ZA0lppMQsMLlsLC4YDr85D2EBr+cKtshc0vzJZr+K3N8/CN8Pgb0ruaOH4BnAEctr28P8tT0Hq+3yCRgWOWQfJ8TUhSQL4lFnRvwMFpKHOuDy1PtWJkhKNC1lF6Ewa+5WkbZDlzz1+xCZEMnh9dJDp6Dtt9j+PIGLznyRALWCw5i62fJNExMoaG335EJnoABOtdP0fMCwteqFHTRLZx5hWwYgzeRu/zCJaxGvvweiW9zx+zjYwheL41Sf16wtFnOQ4pnXxpU1jAWLyF3vf4uY58y1v2ShUOgDLLWWaKwgLvqEklZ+JoDX/3JDix4v6dbYhxYnImjvn71H1hBe9m8IyMLe96Hly/h8+IvIvBxxhjy2t2hQPE4og/pn7P4p4xyzB3v1gNm2Y55wqtC5k8H8wmZHGm4aU7wsFhqwvYhL5gEmKMDa98dA4/632GTQiRseXte8/tRRKHo5vkig3vfC6sAA67/brLXEVYiNF7nmKlC2iFAOjHLmSvOUin0sKYZy+GxQi7Xae3eDeWfpbnbgQLYIRHX5H7zRpe9Zh5usQc9s0dad7znVp9nqdiXe+8KeEkSU2waDlDf4HCQveaA9nEGBm953tFDBwOTdLXxJx063mKSJIzn3ZreksY8ytL5x03h21/loifb3nOxrCAFXMSgy/ZhuwG/+q9YAWCRdfTz7FdbPn5BW0aRrYcHw0nYvFaep/FsqwYk230L0xypsNrYmhjIEPDM4zMP2wWm/1n6hYMDS99OBxgQMiL1gAADflJREFUHF7UxtRY1Z+EiLHlzDFwBqVtozDnEGPLLyxg07QxxobX7gsHY3AyG9/NHCsBuObJuc5c74OZIPgQX7f6750xBh/OE0Fj/u7gXH3ud+0qCSemhun3W9gsb4aJFyxkrzmIPoYxv78VHByWnsdxmIg3MYQxv7NFrjMf8v3cOtvE5nkYrX55hXH4P030aZFNm2iYwxaXdAtzOuGOoeGFD4esNzFfUwPaQWxDy49tAAuH7X7CcZyoDUP0nh9ZlOvMp17HcWQkG/72SZOkeS7EYb87k3zWtvyogwEs1j+tt3AwRl0xEBvevDc2TJMCoTMO2SzogDbr+UZYIw6H3JI5gZbuIcY2zrxGta4XtYnOhYaXPuReG/gdHpMZs2940cOy3PmGJJlmu0RtRmji7HG4kasIOgvZaw5kuPMwOBGHF/nYcmJ0QhjzlifkOlM+kggCw5if2fg+DJjDFhcUne36x8MJxOJZd/a0uc55fOCp10/kGoYYw0I2zdO4fHeMYETeSx+6XvBkmoY/fGROM5t+OfcIhJYn9bWZNZ3dfirboeVdL4QVyAi7Xs/x3KI/Rga/qs8sbNMcds3D4UoLhUooUS3zH9qd+Ze/YZuKT654Bex9W19pDF6bqxnv+U4YAzhs8vm8jqMTvBkjo1/FMpEL1zSCzR4CC4edfpJCTycQMzSxfRVMSjN/d3devdbw9ietiZrNOb/DUW1ssgOcl6tP+XBOOP157VXtkt60UIUaACJw2PtWne/qRqvhH5+VFwHIydqK1vCa+bSZ1Z/dYd/r8rkbXrZdJgMv87Ht1uRqT8eqYW4Ba2iAiFgcOxPbyYFhbPjznXOa2SynmRgafnXz/lDZAgGke9T7AIeH/Tg1TMeGt2j1uf/1mQxOfGaJpOXnwp2vAWAM3pVnknODbYwx+obnbprTzOOuzGkozPLTdjXazOrhsPSLmUG00b8qV59b/6BMr07eEv0f624qbQh7FdiwySeOaK2Z2NtKAt1732IkQKx/7umbeAsAEfadJ5ruy7OEG35iMw8KJWzyiU/j0Lf93gkJWbz8+Kb3bc8G8ZQ3ebEAA9wZL48mwPmN/u35rZWy+0PacKvsW6i/BHfu366L768ZABwe8iPOhqBTkIwhRnre9aK0ClDkhBDaNDkT/YsmFADBZnfknsKW7wFezpYkGfib9Se3z7R4Ve7xDGN+XZttTqDPLYFzNmCZyDULdVJghL2umyAATGr/jbtnOXOT80rLOO84eJIACDZezsZ779tZngi8jDOt961v+Iv1JiOCOBzwhzzJM+ZNe+bq89l3lCa4YpxVaMDCzDXicMQs2+wxIa8Mj2N+a7vctvzoX3aW+fmOc6iZYKMbc+dYy5OB4/KpPH+xaG6wdnjMT/Kq0ZZ3qdz5uF+xmbDI5LLFhes1xuLVeRo/xxGmppqzUp1pcdidqTszxoZf3XTuGAk2vIE+y50nAcexYTLNlauYBhZL/isnfu/5AQsLOGx+PtuyTJo98zCmubx2QbajW7EfUQWg2yKjjeENWmf+P/o0O+1bfkxWoWaCjW7KU8YtTwKOzcvSPa9ab1WKY8WenrcP8g2/uWXaBMJ9gN7rcgL2O3wXcK5x2Oi/UltSJwDH2PJPh2MkgMOSzyUBn2xbvmMe1Uyw5OY8oC3fmwJajDGGeQIaALE4PsQ2l7NX7w4nMA4vaOYu9ehFNy7ERRwOyy7X7WI6v2n4i2W5KNzx8qR0kS3/+LfzqWaCJTfRM3U9n5ICWmqG/eV8poE4/PWtaQeJ2HDlK2AMxOGvlpcdjHoELU/nLcDdNhz2/303OaPUrOEFm2UCcPgfspzJhjftOq9qJlhyAxvv27ad5T8Bx3Km9d63Da9af/6azeERP833g2/5CSMWcNjmkpyEeteyYDtqjNXFZBriGWP0nidBDGAM3hGDj7lv8Dvbza+aCba8q9Q17wVeWeqaX6/GNLDY/Fu5kyo0eTsIiw0+XlaqT1Y2627fgHWlBhjE97/BG0OUzRwBeHfPqz9lGWHD6JPHtMYIAUT7Hy/1q6vHFz1RbTa6/ld4+GOatC+wveuy1W2cbeg++OqkAjC6657zYxdoJPzjewNs+Wa1st2kxDD6zNGLx/fnHz9oWGz6JTa6yY/Kvg1v3iMv9Nv+u2Ui0vOU+zZtdl9vNGPxZvo2Mga2/OMxMAZi8Yw7VO7sTRRERs9b9r2vs0PTD4dtf1yGXtlZGPOibXKaeertZUF/DNzvft7FTxxeNpN74IPnyZkM7HJVWno4V6oJbF56X2+O+/Mq1/YHAhDrDzhraz8Rv4WR7ozjGxtgJBz/ocXd4WgP/drqwplww3/YqDUgjF/ylQvxhBfcaYWGXO+2D/k1XILzT/7SFq2VFLC+esydNsCGzU97druqe1Ai7GnHrzakPoggDi/xeXJG1atAH+OrYQxgBXnzmOxOgU9bbRoWPGxFoQEnAccVGnD9Bmu87Sy2+w7HMcbAMOYVO8MBRnBimYMuuxfEJOl9besH/wacNk1Y9jlQiLHhbU/PaWazb6a40sWTNZlm4xviuGmatpnhPwEv5cqmaZp2vIq8ucplYNEXMyljwz8dlqvPI1eW1Yu9Kwix4U17rLnrbfphsfjz3d4ZOgQNL9M0s+tVebmNHvRrNM2Sm9K+f7Hhe4DjklZJzysX30uwNkY+yMbHECJ9jG+AGIjDbldNri1M1xFiyxXHroOEsxbhsOMl+rfnPzrG0PLTG8MCxuGonJ87u3kesCbTdMrze4BjM7nw/OW9mQZi8YromxhSs9nZi5LcucU3Ukt16FTOGEOIvuUp+LPnV6cGMsKTb+tT1LSnScsT0hIYwYfyWjO9X0kGHrymgHZL2v6XxTQk6XnFvELN3Kt55t3pahgaXrZT2mjAfqCsVJyAb/j1rR6sCUccXnKPOkURRBre/VJNM+flRQATQ3LvpkmSwUnqNaTnz0f3gX067HplJsxseMu+cAJj8bIVyuwndnoMDX/5+AdnwjEW76IPcyyTFroCMsLjflsa90qUj9HzwDUHNM9imuM4TgFofuV5FThs9hVdSdoE/zpYA3HY60b2V8XnyMvYcMUxD0bbWGzwSba6d2ZuBAgNL9gWDjAGL/7DRJrR3pqwRtMsvYWBaUegd+aAFiPDvdOAfFEGp+Yv8Y7e88wlKeFs/Y0JMlCyYht4qnvQiZ0OW3wvbxDQOUXb8N9ELGAN3kMf+qW4Ln1aM0Pb/Ha2TduO2xm+A3gZZ5umaZoxr16dvDkHxuJ19LkFruHlj8RIYMWeyablnEVQMcYw5vkbPsgSjsNjr5rcDDPG2Eb/cl2SdEHadGES5JoDGmB3eNSynZftvNMuO++8FbDJLrss23nnZct22WXnP6Px9q/vzN8FEhre9tdwAmPwf0Ns51xMTjjX7PZgso04PPvu3nKw9Lc2vOdwjATi8ISr8wRX7H+fVpLu10AD7hc4PO7qdNeE2Eb/6iypHXr7XJkvhbWGfzr6wVPhGIvjY/STvRG+4U93ystfn9+qZTSqpxEJcc0MDYApEEC6R3/G5TlsdH5uUaBv+alRSjjbXZYWyPUvJsYY25bvyl9hMPWwGH2CjZ+sFELDz6dvzxDJlURvQ6UeZ70X09wvFyjykRxPGRpeniocbHRmL8iGjkr7hues0twzlbDY6kLdSL7oL73FLpufz3FHqcuWNMzfV+J50AM+DMbiOB/TtmxxzN/tkxPOm2IokppOlIcY4yx/vsv0s2gZYbflSs1KcBjHu47KS8QefW2OGyFygqDlGPKA55p8lYfdpX1XTRgfD2sgFgem9oW5jYOh4T1HTrttjMWRd3Vqbh72MW/ePd+Yz72jo9RhFSkgxrg2vAaAw7KfazHTtrl8cXjMFRz35T69qjbw7av2xU0TjMV76Oew0Njw4kfmNPNuts0kPejfnWvRNHBYen5uroqh4XcflhLOkvPYeCUB+t05IUY/y3MWT3HCsVj6hTIvlhMI21mePYIFLDbPMm/XYdQFs2KgtWQaGIP30fsYEhm49RlwAgt7cgzzrfEMDS/eaWqDmsVWl3IcJkNB8OEf89byu/6STeyLiJmd5Ts0hBBDWHPJeX9CLF6yMqZvlQhNjG+FCCTNr8VQrigql2x424FT2tBhsOev9cu22JWS4yPS+kw8r+E49g7MeV3+sda8BhCHvX+XNTmGlmevD4E47PpLfXISIca3D2L12J8Lg6NXhHtmZ2bH49mZmZnx7Hg8Hs+0dzwFIwCCE+L4ntmZ2fHseDw7Ozs7O55Nv83Mzs7OzI5nxrMzMzOzMyu539oL6Q7bfDuunJ2dWTmz8p67+BUHSTvbhLtWzsysXHHPypkVK1auWLFyxczKFfesXLGC59w3HfXPxwNr8kdy7NJqPOpH0czcnnpT7A4rKZD8lczQ72buHqd3EXLbWmzQs2G9LcuawbjB8nF6csmm3nQXpysMBYxLls+uvat7gCHDlp9kvrv1z9J97ic8sF4z759JvSnv858b7/0l9yf616UfPe9fMvmSioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKior7D/8fmHh6LuZ5z6AAAAAASUVORK5CYII=" height="410" preserveAspectRatio="xMidYMid meet"/></g></g></mask><clipPath id="b9ded1f8ad"><rect x="0" width="156" y="0" height="36"/></clipPath></defs><g clip-path="url(#510a7cdaaf)"><g transform="matrix(1, 0, 0, 1, 4, 0.000000000000010582)"><g clip-path="url(#b9ded1f8ad)"><g clip-path="url(#07caa0e68e)"><g mask="url(#f2aa07b88f)"><g transform="matrix(0.134076, 0, 0, 0.134076, 0.440791, -7.821012)"><image x="0" y="0" width="410" xlink:href="data:image/png;base64,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" height="410" preserveAspectRatio="xMidYMid meet"/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(45.558559, 23.324211)"><g><path d="M 10.9375 -4.8125 C 10.9375 -3.851562 10.6875 -3.007812 10.1875 -2.28125 C 9.6875 -1.550781 9.007812 -0.988281 8.15625 -0.59375 C 7.3125 -0.195312 6.390625 0 5.390625 0 L 0.453125 0 L 0.453125 -0.25 C 0.953125 -0.257812 1.3125 -0.34375 1.53125 -0.5 C 1.75 -0.65625 1.859375 -0.957031 1.859375 -1.40625 L 1.859375 -8.21875 C 1.859375 -8.664062 1.738281 -8.96875 1.5 -9.125 C 1.269531 -9.28125 0.921875 -9.359375 0.453125 -9.359375 L 0.453125 -9.609375 L 5.796875 -9.609375 C 6.867188 -9.609375 7.796875 -9.378906 8.578125 -8.921875 C 9.359375 -8.460938 9.945312 -7.867188 10.34375 -7.140625 C 10.738281 -6.410156 10.9375 -5.632812 10.9375 -4.8125 Z M 3.375 -8.84375 L 3.375 -0.703125 C 3.832031 -0.554688 4.332031 -0.484375 4.875 -0.484375 C 5.738281 -0.484375 6.492188 -0.65625 7.140625 -1 C 7.796875 -1.351562 8.300781 -1.851562 8.65625 -2.5 C 9.007812 -3.144531 9.1875 -3.890625 9.1875 -4.734375 C 9.1875 -5.566406 9.007812 -6.3125 8.65625 -6.96875 C 8.300781 -7.625 7.800781 -8.140625 7.15625 -8.515625 C 6.507812 -8.890625 5.765625 -9.078125 4.921875 -9.078125 C 4.359375 -9.078125 3.84375 -9 3.375 -8.84375 Z M 3.375 -8.84375 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(57.06582, 23.324211)"><g><path d="M 4.90625 -9.359375 C 4.519531 -9.359375 4.222656 -9.320312 4.015625 -9.25 C 3.804688 -9.175781 3.660156 -9.046875 3.578125 -8.859375 C 3.492188 -8.679688 3.453125 -8.421875 3.453125 -8.078125 L 3.453125 -1.40625 C 3.453125 -1.082031 3.503906 -0.835938 3.609375 -0.671875 C 3.710938 -0.515625 3.863281 -0.40625 4.0625 -0.34375 C 4.269531 -0.289062 4.550781 -0.257812 4.90625 -0.25 L 4.90625 0 L 0.484375 0 L 0.484375 -0.25 C 0.859375 -0.257812 1.144531 -0.289062 1.34375 -0.34375 C 1.550781 -0.40625 1.703125 -0.515625 1.796875 -0.671875 C 1.890625 -0.835938 1.9375 -1.082031 1.9375 -1.40625 L 1.9375 -8.078125 C 1.9375 -8.421875 1.890625 -8.679688 1.796875 -8.859375 C 1.710938 -9.035156 1.570312 -9.160156 1.375 -9.234375 C 1.175781 -9.304688 0.878906 -9.347656 0.484375 -9.359375 L 0.484375 -9.609375 L 4.90625 -9.609375 Z M 4.90625 -9.359375 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(62.448925, 23.324211)"><g><path d="M 9.1875 -2.515625 L 9.1875 -8.28125 C 9.1875 -8.695312 9.109375 -8.976562 8.953125 -9.125 C 8.804688 -9.269531 8.535156 -9.347656 8.140625 -9.359375 L 7.796875 -9.359375 L 7.796875 -9.609375 L 11.328125 -9.609375 L 11.328125 -9.359375 L 11.03125 -9.359375 C 10.65625 -9.359375 10.390625 -9.332031 10.234375 -9.28125 C 10.078125 -9.238281 9.96875 -9.128906 9.90625 -8.953125 C 9.84375 -8.785156 9.8125 -8.503906 9.8125 -8.109375 L 9.8125 0.109375 L 9.625 0.109375 L 2.75 -7.625 L 2.75 -1.625 C 2.75 -1.101562 2.851562 -0.742188 3.0625 -0.546875 C 3.28125 -0.347656 3.644531 -0.25 4.15625 -0.25 L 4.15625 0 L 0.6875 0 L 0.6875 -0.25 L 0.765625 -0.25 C 1.210938 -0.25 1.550781 -0.328125 1.78125 -0.484375 C 2.019531 -0.648438 2.140625 -0.957031 2.140625 -1.40625 L 2.140625 -8.234375 C 1.898438 -8.648438 1.625 -8.941406 1.3125 -9.109375 C 1.007812 -9.273438 0.632812 -9.359375 0.1875 -9.359375 L 0.1875 -9.609375 L 2.984375 -9.609375 Z M 9.1875 -2.515625 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(73.956186, 23.324211)"><g><path d="M 5.828125 -9.8125 C 6.296875 -9.8125 6.695312 -9.765625 7.03125 -9.671875 C 7.375 -9.585938 7.707031 -9.476562 8.03125 -9.34375 C 8.289062 -9.238281 8.457031 -9.1875 8.53125 -9.1875 C 8.644531 -9.1875 8.75 -9.242188 8.84375 -9.359375 C 8.945312 -9.472656 9.019531 -9.625 9.0625 -9.8125 L 9.296875 -9.8125 L 9.53125 -6.578125 L 9.296875 -6.578125 C 9.210938 -7.140625 9.003906 -7.625 8.671875 -8.03125 C 8.347656 -8.445312 7.941406 -8.757812 7.453125 -8.96875 C 6.972656 -9.175781 6.46875 -9.28125 5.9375 -9.28125 C 4.851562 -9.28125 3.976562 -8.890625 3.3125 -8.109375 C 2.65625 -7.335938 2.328125 -6.164062 2.328125 -4.59375 C 2.328125 -3.65625 2.503906 -2.867188 2.859375 -2.234375 C 3.222656 -1.609375 3.695312 -1.144531 4.28125 -0.84375 C 4.863281 -0.539062 5.488281 -0.390625 6.15625 -0.390625 C 6.832031 -0.390625 7.476562 -0.5625 8.09375 -0.90625 C 8.707031 -1.25 9.1875 -1.710938 9.53125 -2.296875 L 9.75 -2.15625 C 8.820312 -0.582031 7.457031 0.203125 5.65625 0.203125 C 4.726562 0.203125 3.875 -0.0078125 3.09375 -0.4375 C 2.320312 -0.875 1.710938 -1.460938 1.265625 -2.203125 C 0.816406 -2.953125 0.59375 -3.773438 0.59375 -4.671875 C 0.59375 -5.609375 0.820312 -6.472656 1.28125 -7.265625 C 1.75 -8.054688 2.382812 -8.675781 3.1875 -9.125 C 3.988281 -9.582031 4.867188 -9.8125 5.828125 -9.8125 Z M 5.828125 -9.8125 "/></g></g></g><g fill="#ffffff" fill-opacity="1"><g transform="translate(84.00931, 23.324211)"><g><path d="M 5.390625 -9.8125 C 6.273438 -9.8125 7.085938 -9.585938 7.828125 -9.140625 C 8.578125 -8.691406 9.171875 -8.082031 9.609375 -7.3125 C 10.046875 -6.550781 10.265625 -5.710938 10.265625 -4.796875 C 10.265625 -3.890625 10.046875 -3.050781 9.609375 -2.28125 C 9.171875 -1.507812 8.578125 -0.898438 7.828125 -0.453125 C 7.085938 -0.015625 6.273438 0.203125 5.390625 0.203125 C 4.503906 0.203125 3.6875 -0.015625 2.9375 -0.453125 C 2.1875 -0.898438 1.59375 -1.507812 1.15625 -2.28125 C 0.726562 -3.050781 0.515625 -3.890625 0.515625 -4.796875 C 0.515625 -5.710938 0.726562 -6.550781 1.15625 -7.3125 C 1.59375 -8.082031 2.1875 -8.691406 2.9375 -9.140625 C 3.6875 -9.585938 4.503906 -9.8125 5.390625 -9.8125 Z M 2.265625 -4.796875 C 2.265625 -3.898438 2.390625 -3.113281 2.640625 -2.4375 C 2.898438 -1.757812 3.265625 -1.238281 3.734375 -0.875 C 4.210938 -0.507812 4.765625 -0.328125 5.390625 -0.328125 C 6.015625 -0.328125 6.5625 -0.507812 7.03125 -0.875 C 7.507812 -1.238281 7.875 -1.757812 8.125 -2.4375 C 8.382812 -3.113281 8.515625 -3.898438 8.515625 -4.796875 C 8.515625 -5.671875 8.390625 -6.445312 8.140625 -7.125 C 7.890625 -7.8125 7.523438 -8.34375 7.046875 -8.71875 C 6.578125 -9.09375 6.019531 -9.28125 5.375 -9.28125 C 4.726562 -9.28125 4.171875 -9.085938 3.703125 -8.703125 C 3.234375 -8.328125 2.875 -7.796875 2.625 -7.109375 C 2.382812 -6.429688 2.265625 -5.660156 2.265625 -4.796875 Z M 2.265625 -4.796875 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(46.564727, 31.368465)"><g><path d="M 2.203125 -4.203125 C 2.023438 -4.203125 1.890625 -4.1875 1.796875 -4.15625 C 1.710938 -4.125 1.648438 -4.066406 1.609375 -3.984375 C 1.566406 -3.898438 1.546875 -3.78125 1.546875 -3.625 L 1.546875 -0.625 C 1.546875 -0.488281 1.566406 -0.378906 1.609375 -0.296875 C 1.660156 -0.222656 1.734375 -0.175781 1.828125 -0.15625 C 1.921875 -0.132812 2.046875 -0.117188 2.203125 -0.109375 L 2.203125 0 L 0.21875 0 L 0.21875 -0.109375 C 0.382812 -0.117188 0.507812 -0.132812 0.59375 -0.15625 C 0.6875 -0.175781 0.753906 -0.222656 0.796875 -0.296875 C 0.847656 -0.378906 0.875 -0.492188 0.875 -0.640625 L 0.875 -3.625 C 0.875 -3.78125 0.851562 -3.898438 0.8125 -3.984375 C 0.769531 -4.066406 0.703125 -4.125 0.609375 -4.15625 C 0.523438 -4.1875 0.394531 -4.203125 0.21875 -4.203125 L 0.21875 -4.3125 L 2.203125 -4.3125 Z M 2.203125 -4.203125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(48.983462, 31.368465)"><g><path d="M 4.125 -1.125 L 4.125 -3.71875 C 4.125 -3.90625 4.085938 -4.03125 4.015625 -4.09375 C 3.953125 -4.164062 3.832031 -4.203125 3.65625 -4.203125 L 3.5 -4.203125 L 3.5 -4.3125 L 5.09375 -4.3125 L 5.09375 -4.203125 L 4.953125 -4.203125 C 4.785156 -4.203125 4.664062 -4.191406 4.59375 -4.171875 C 4.519531 -4.148438 4.46875 -4.097656 4.4375 -4.015625 C 4.414062 -3.941406 4.40625 -3.816406 4.40625 -3.640625 L 4.40625 0.046875 L 4.328125 0.046875 L 1.234375 -3.421875 L 1.234375 -0.734375 C 1.234375 -0.492188 1.28125 -0.328125 1.375 -0.234375 C 1.46875 -0.148438 1.628906 -0.109375 1.859375 -0.109375 L 1.859375 0 L 0.3125 0 L 0.3125 -0.109375 L 0.34375 -0.109375 C 0.539062 -0.109375 0.691406 -0.144531 0.796875 -0.21875 C 0.910156 -0.289062 0.96875 -0.425781 0.96875 -0.625 L 0.96875 -3.703125 C 0.851562 -3.878906 0.726562 -4.003906 0.59375 -4.078125 C 0.457031 -4.160156 0.285156 -4.203125 0.078125 -4.203125 L 0.078125 -4.3125 L 1.34375 -4.3125 Z M 4.125 -1.125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(54.153898, 31.368465)"><g><path d="M 3.125 -1.015625 L 4.640625 -4.3125 L 5.953125 -4.3125 L 5.953125 -4.203125 L 5.90625 -4.203125 C 5.707031 -4.203125 5.554688 -4.164062 5.453125 -4.09375 C 5.359375 -4.019531 5.3125 -3.882812 5.3125 -3.6875 L 5.3125 -0.625 C 5.3125 -0.4375 5.359375 -0.300781 5.453125 -0.21875 C 5.546875 -0.144531 5.703125 -0.109375 5.921875 -0.109375 L 5.953125 -0.109375 L 5.953125 0 L 4 0 L 4 -0.109375 L 4.0625 -0.109375 C 4.257812 -0.109375 4.40625 -0.144531 4.5 -0.21875 C 4.59375 -0.300781 4.640625 -0.441406 4.640625 -0.640625 L 4.640625 -3.625 L 4.625 -3.625 L 2.96875 0 L 2.859375 0 L 1.1875 -3.625 L 1.1875 -0.625 C 1.1875 -0.425781 1.226562 -0.289062 1.3125 -0.21875 C 1.40625 -0.15625 1.5625 -0.117188 1.78125 -0.109375 L 1.78125 0 L 0.265625 0 L 0.265625 -0.109375 L 0.3125 -0.109375 C 0.507812 -0.109375 0.65625 -0.144531 0.75 -0.21875 C 0.84375 -0.289062 0.890625 -0.429688 0.890625 -0.640625 L 0.890625 -3.578125 C 0.890625 -3.773438 0.835938 -3.921875 0.734375 -4.015625 C 0.640625 -4.117188 0.484375 -4.179688 0.265625 -4.203125 L 0.265625 -4.3125 L 1.59375 -4.3125 Z M 3.125 -1.015625 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(60.373495, 31.368465)"><g><path d="M 2.421875 -4.40625 C 2.816406 -4.40625 3.179688 -4.304688 3.515625 -4.109375 C 3.847656 -3.910156 4.113281 -3.632812 4.3125 -3.28125 C 4.507812 -2.9375 4.609375 -2.5625 4.609375 -2.15625 C 4.609375 -1.75 4.507812 -1.375 4.3125 -1.03125 C 4.113281 -0.6875 3.847656 -0.410156 3.515625 -0.203125 C 3.179688 -0.00390625 2.816406 0.09375 2.421875 0.09375 C 2.023438 0.09375 1.65625 -0.00390625 1.3125 -0.203125 C 0.976562 -0.410156 0.710938 -0.6875 0.515625 -1.03125 C 0.328125 -1.375 0.234375 -1.75 0.234375 -2.15625 C 0.234375 -2.5625 0.328125 -2.9375 0.515625 -3.28125 C 0.710938 -3.632812 0.976562 -3.910156 1.3125 -4.109375 C 1.65625 -4.304688 2.023438 -4.40625 2.421875 -4.40625 Z M 1.015625 -2.15625 C 1.015625 -1.75 1.070312 -1.394531 1.1875 -1.09375 C 1.300781 -0.789062 1.460938 -0.554688 1.671875 -0.390625 C 1.890625 -0.222656 2.140625 -0.140625 2.421875 -0.140625 C 2.703125 -0.140625 2.945312 -0.222656 3.15625 -0.390625 C 3.375 -0.554688 3.539062 -0.789062 3.65625 -1.09375 C 3.769531 -1.394531 3.828125 -1.75 3.828125 -2.15625 C 3.828125 -2.550781 3.769531 -2.898438 3.65625 -3.203125 C 3.539062 -3.503906 3.378906 -3.738281 3.171875 -3.90625 C 2.960938 -4.082031 2.707031 -4.171875 2.40625 -4.171875 C 2.125 -4.171875 1.875 -4.082031 1.65625 -3.90625 C 1.445312 -3.738281 1.285156 -3.5 1.171875 -3.1875 C 1.066406 -2.882812 1.015625 -2.539062 1.015625 -2.15625 Z M 1.015625 -2.15625 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(65.217246, 31.368465)"><g><path d="M 3.71875 -3.171875 C 3.71875 -2.929688 3.644531 -2.726562 3.5 -2.5625 C 3.363281 -2.394531 3.171875 -2.28125 2.921875 -2.21875 C 3.210938 -2.164062 3.445312 -2.039062 3.625 -1.84375 C 3.8125 -1.644531 3.90625 -1.414062 3.90625 -1.15625 C 3.90625 -0.9375 3.84375 -0.738281 3.71875 -0.5625 C 3.601562 -0.382812 3.429688 -0.242188 3.203125 -0.140625 C 2.984375 -0.046875 2.71875 0 2.40625 0 L 0.25 0 L 0.25 -0.109375 C 0.425781 -0.109375 0.554688 -0.128906 0.640625 -0.171875 C 0.734375 -0.210938 0.796875 -0.273438 0.828125 -0.359375 C 0.867188 -0.453125 0.890625 -0.582031 0.890625 -0.75 L 0.890625 -3.53125 C 0.890625 -3.71875 0.875 -3.851562 0.84375 -3.9375 C 0.8125 -4.03125 0.75 -4.097656 0.65625 -4.140625 C 0.570312 -4.179688 0.4375 -4.203125 0.25 -4.203125 L 0.25 -4.3125 L 2.109375 -4.3125 C 2.367188 -4.3125 2.617188 -4.273438 2.859375 -4.203125 C 3.097656 -4.140625 3.300781 -4.019531 3.46875 -3.84375 C 3.632812 -3.675781 3.71875 -3.453125 3.71875 -3.171875 Z M 1.5625 -4.0625 L 1.5625 -2.390625 C 1.789062 -2.335938 1.960938 -2.3125 2.078125 -2.3125 C 2.253906 -2.3125 2.410156 -2.347656 2.546875 -2.421875 C 2.679688 -2.503906 2.785156 -2.613281 2.859375 -2.75 C 2.941406 -2.882812 2.984375 -3.03125 2.984375 -3.1875 C 2.984375 -3.445312 2.890625 -3.664062 2.703125 -3.84375 C 2.523438 -4.019531 2.285156 -4.109375 1.984375 -4.109375 C 1.847656 -4.109375 1.707031 -4.09375 1.5625 -4.0625 Z M 1.5625 -2.09375 L 1.5625 -0.296875 C 1.738281 -0.242188 1.910156 -0.21875 2.078125 -0.21875 C 2.398438 -0.21875 2.65625 -0.300781 2.84375 -0.46875 C 3.03125 -0.644531 3.125 -0.867188 3.125 -1.140625 C 3.125 -1.429688 3.007812 -1.664062 2.78125 -1.84375 C 2.550781 -2.019531 2.238281 -2.109375 1.84375 -2.109375 C 1.78125 -2.109375 1.6875 -2.101562 1.5625 -2.09375 Z M 1.5625 -2.09375 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(69.407624, 31.368465)"><g><path d="M 2.203125 -4.203125 C 2.023438 -4.203125 1.890625 -4.1875 1.796875 -4.15625 C 1.710938 -4.125 1.648438 -4.066406 1.609375 -3.984375 C 1.566406 -3.898438 1.546875 -3.78125 1.546875 -3.625 L 1.546875 -0.625 C 1.546875 -0.488281 1.566406 -0.378906 1.609375 -0.296875 C 1.660156 -0.222656 1.734375 -0.175781 1.828125 -0.15625 C 1.921875 -0.132812 2.046875 -0.117188 2.203125 -0.109375 L 2.203125 0 L 0.21875 0 L 0.21875 -0.109375 C 0.382812 -0.117188 0.507812 -0.132812 0.59375 -0.15625 C 0.6875 -0.175781 0.753906 -0.222656 0.796875 -0.296875 C 0.847656 -0.378906 0.875 -0.492188 0.875 -0.640625 L 0.875 -3.625 C 0.875 -3.78125 0.851562 -3.898438 0.8125 -3.984375 C 0.769531 -4.066406 0.703125 -4.125 0.609375 -4.15625 C 0.523438 -4.1875 0.394531 -4.203125 0.21875 -4.203125 L 0.21875 -4.3125 L 2.203125 -4.3125 Z M 2.203125 -4.203125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(71.82636, 31.368465)"><g><path d="M 2.203125 -4.203125 C 1.984375 -4.203125 1.828125 -4.164062 1.734375 -4.09375 C 1.640625 -4.03125 1.59375 -3.894531 1.59375 -3.6875 L 1.59375 -0.53125 C 1.59375 -0.4375 1.609375 -0.367188 1.640625 -0.328125 C 1.679688 -0.296875 1.742188 -0.28125 1.828125 -0.28125 L 2.75 -0.28125 C 2.96875 -0.28125 3.148438 -0.304688 3.296875 -0.359375 C 3.441406 -0.421875 3.5625 -0.515625 3.65625 -0.640625 C 3.757812 -0.765625 3.863281 -0.945312 3.96875 -1.1875 L 4.0625 -1.15625 L 3.703125 0 L 0.265625 0 L 0.265625 -0.109375 L 0.3125 -0.109375 C 0.519531 -0.109375 0.671875 -0.144531 0.765625 -0.21875 C 0.859375 -0.300781 0.90625 -0.441406 0.90625 -0.640625 L 0.90625 -3.6875 C 0.90625 -3.875 0.851562 -4.003906 0.75 -4.078125 C 0.65625 -4.160156 0.503906 -4.203125 0.296875 -4.203125 L 0.265625 -4.203125 L 0.265625 -4.3125 L 2.203125 -4.3125 Z M 2.203125 -4.203125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(76.016739, 31.368465)"><g><path d="M 2.203125 -4.203125 C 2.023438 -4.203125 1.890625 -4.1875 1.796875 -4.15625 C 1.710938 -4.125 1.648438 -4.066406 1.609375 -3.984375 C 1.566406 -3.898438 1.546875 -3.78125 1.546875 -3.625 L 1.546875 -0.625 C 1.546875 -0.488281 1.566406 -0.378906 1.609375 -0.296875 C 1.660156 -0.222656 1.734375 -0.175781 1.828125 -0.15625 C 1.921875 -0.132812 2.046875 -0.117188 2.203125 -0.109375 L 2.203125 0 L 0.21875 0 L 0.21875 -0.109375 C 0.382812 -0.117188 0.507812 -0.132812 0.59375 -0.15625 C 0.6875 -0.175781 0.753906 -0.222656 0.796875 -0.296875 C 0.847656 -0.378906 0.875 -0.492188 0.875 -0.640625 L 0.875 -3.625 C 0.875 -3.78125 0.851562 -3.898438 0.8125 -3.984375 C 0.769531 -4.066406 0.703125 -4.125 0.609375 -4.15625 C 0.523438 -4.1875 0.394531 -4.203125 0.21875 -4.203125 L 0.21875 -4.3125 L 2.203125 -4.3125 Z M 2.203125 -4.203125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(78.435475, 31.368465)"><g><path d="M 0.71875 -0.828125 L 2.328125 -4.5 L 2.4375 -4.5 L 4.140625 -0.59375 C 4.203125 -0.457031 4.257812 -0.351562 4.3125 -0.28125 C 4.375 -0.207031 4.4375 -0.160156 4.5 -0.140625 C 4.5625 -0.117188 4.644531 -0.109375 4.75 -0.109375 L 4.75 0 L 2.984375 0 L 2.984375 -0.109375 C 3.128906 -0.109375 3.238281 -0.132812 3.3125 -0.1875 C 3.394531 -0.25 3.4375 -0.328125 3.4375 -0.421875 C 3.4375 -0.492188 3.410156 -0.585938 3.359375 -0.703125 L 3.03125 -1.453125 L 1.28125 -1.453125 L 0.921875 -0.625 C 0.878906 -0.539062 0.859375 -0.46875 0.859375 -0.40625 C 0.859375 -0.207031 1.015625 -0.109375 1.328125 -0.109375 L 1.328125 0 L 0.09375 0 L 0.09375 -0.109375 C 0.195312 -0.117188 0.28125 -0.148438 0.34375 -0.203125 C 0.40625 -0.253906 0.460938 -0.320312 0.515625 -0.40625 C 0.566406 -0.5 0.632812 -0.640625 0.71875 -0.828125 Z M 2.921875 -1.6875 L 2.15625 -3.4375 L 1.390625 -1.6875 Z M 2.921875 -1.6875 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(83.279225, 31.368465)"><g><path d="M 3.71875 -3.1875 C 3.71875 -2.925781 3.625 -2.695312 3.4375 -2.5 C 3.257812 -2.3125 2.988281 -2.171875 2.625 -2.078125 L 3.625 -0.84375 C 3.75 -0.695312 3.851562 -0.578125 3.9375 -0.484375 C 4.019531 -0.398438 4.117188 -0.316406 4.234375 -0.234375 C 4.359375 -0.160156 4.5 -0.117188 4.65625 -0.109375 L 4.65625 0 L 3.53125 0 L 1.90625 -2.015625 L 1.484375 -2.015625 L 1.484375 -0.625 C 1.484375 -0.4375 1.53125 -0.300781 1.625 -0.21875 C 1.71875 -0.144531 1.867188 -0.109375 2.078125 -0.109375 L 2.09375 -0.109375 L 2.09375 0 L 0.21875 0 L 0.21875 -0.109375 C 0.414062 -0.109375 0.5625 -0.144531 0.65625 -0.21875 C 0.757812 -0.289062 0.8125 -0.421875 0.8125 -0.609375 L 0.8125 -3.71875 C 0.8125 -3.882812 0.757812 -4.003906 0.65625 -4.078125 C 0.5625 -4.160156 0.414062 -4.203125 0.21875 -4.203125 L 0.21875 -4.3125 L 2.234375 -4.3125 C 2.640625 -4.3125 2.988281 -4.21875 3.28125 -4.03125 C 3.570312 -3.851562 3.71875 -3.570312 3.71875 -3.1875 Z M 1.484375 -3.984375 L 1.484375 -2.234375 L 1.640625 -2.234375 C 2.066406 -2.234375 2.390625 -2.316406 2.609375 -2.484375 C 2.828125 -2.648438 2.9375 -2.878906 2.9375 -3.171875 C 2.9375 -3.429688 2.851562 -3.648438 2.6875 -3.828125 C 2.519531 -4.003906 2.285156 -4.09375 1.984375 -4.09375 C 1.816406 -4.09375 1.648438 -4.054688 1.484375 -3.984375 Z M 1.484375 -3.984375 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(88.122975, 31.368465)"><g><path d="M 2.203125 -4.203125 C 2.023438 -4.203125 1.890625 -4.1875 1.796875 -4.15625 C 1.710938 -4.125 1.648438 -4.066406 1.609375 -3.984375 C 1.566406 -3.898438 1.546875 -3.78125 1.546875 -3.625 L 1.546875 -0.625 C 1.546875 -0.488281 1.566406 -0.378906 1.609375 -0.296875 C 1.660156 -0.222656 1.734375 -0.175781 1.828125 -0.15625 C 1.921875 -0.132812 2.046875 -0.117188 2.203125 -0.109375 L 2.203125 0 L 0.21875 0 L 0.21875 -0.109375 C 0.382812 -0.117188 0.507812 -0.132812 0.59375 -0.15625 C 0.6875 -0.175781 0.753906 -0.222656 0.796875 -0.296875 C 0.847656 -0.378906 0.875 -0.492188 0.875 -0.640625 L 0.875 -3.625 C 0.875 -3.78125 0.851562 -3.898438 0.8125 -3.984375 C 0.769531 -4.066406 0.703125 -4.125 0.609375 -4.15625 C 0.523438 -4.1875 0.394531 -4.203125 0.21875 -4.203125 L 0.21875 -4.3125 L 2.203125 -4.3125 Z M 2.203125 -4.203125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(90.541711, 31.368465)"><g><path d="M 0.71875 -0.828125 L 2.328125 -4.5 L 2.4375 -4.5 L 4.140625 -0.59375 C 4.203125 -0.457031 4.257812 -0.351562 4.3125 -0.28125 C 4.375 -0.207031 4.4375 -0.160156 4.5 -0.140625 C 4.5625 -0.117188 4.644531 -0.109375 4.75 -0.109375 L 4.75 0 L 2.984375 0 L 2.984375 -0.109375 C 3.128906 -0.109375 3.238281 -0.132812 3.3125 -0.1875 C 3.394531 -0.25 3.4375 -0.328125 3.4375 -0.421875 C 3.4375 -0.492188 3.410156 -0.585938 3.359375 -0.703125 L 3.03125 -1.453125 L 1.28125 -1.453125 L 0.921875 -0.625 C 0.878906 -0.539062 0.859375 -0.46875 0.859375 -0.40625 C 0.859375 -0.207031 1.015625 -0.109375 1.328125 -0.109375 L 1.328125 0 L 0.09375 0 L 0.09375 -0.109375 C 0.195312 -0.117188 0.28125 -0.148438 0.34375 -0.203125 C 0.40625 -0.253906 0.460938 -0.320312 0.515625 -0.40625 C 0.566406 -0.5 0.632812 -0.640625 0.71875 -0.828125 Z M 2.921875 -1.6875 L 2.15625 -3.4375 L 1.390625 -1.6875 Z M 2.921875 -1.6875 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(95.385461, 31.368465)"><g/></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(96.956069, 31.368465)"><g><path d="M 2.28125 -4.40625 C 2.519531 -4.40625 2.722656 -4.332031 2.890625 -4.1875 C 3.054688 -4.050781 3.140625 -3.878906 3.140625 -3.671875 C 3.140625 -3.210938 2.816406 -2.820312 2.171875 -2.5 C 2.265625 -2.320312 2.390625 -2.101562 2.546875 -1.84375 C 2.703125 -1.582031 2.847656 -1.359375 2.984375 -1.171875 C 3.140625 -1.367188 3.257812 -1.566406 3.34375 -1.765625 C 3.4375 -1.972656 3.484375 -2.160156 3.484375 -2.328125 C 3.484375 -2.429688 3.457031 -2.515625 3.40625 -2.578125 C 3.351562 -2.640625 3.28125 -2.675781 3.1875 -2.6875 L 3.1875 -2.796875 L 4.515625 -2.796875 L 4.515625 -2.6875 C 4.367188 -2.675781 4.25 -2.640625 4.15625 -2.578125 C 4.0625 -2.515625 3.984375 -2.429688 3.921875 -2.328125 C 3.867188 -2.234375 3.796875 -2.09375 3.703125 -1.90625 C 3.609375 -1.726562 3.519531 -1.566406 3.4375 -1.421875 C 3.363281 -1.273438 3.265625 -1.132812 3.140625 -1 C 3.316406 -0.789062 3.484375 -0.640625 3.640625 -0.546875 C 3.796875 -0.453125 3.957031 -0.40625 4.125 -0.40625 C 4.25 -0.40625 4.359375 -0.445312 4.453125 -0.53125 C 4.546875 -0.613281 4.609375 -0.722656 4.640625 -0.859375 L 4.734375 -0.78125 C 4.691406 -0.53125 4.582031 -0.320312 4.40625 -0.15625 C 4.238281 0.0078125 4.035156 0.09375 3.796875 0.09375 C 3.617188 0.09375 3.445312 0.046875 3.28125 -0.046875 C 3.113281 -0.140625 2.921875 -0.296875 2.703125 -0.515625 C 2.484375 -0.304688 2.253906 -0.148438 2.015625 -0.046875 C 1.773438 0.046875 1.53125 0.09375 1.28125 0.09375 C 1.082031 0.09375 0.898438 0.0507812 0.734375 -0.03125 C 0.566406 -0.113281 0.4375 -0.226562 0.34375 -0.375 C 0.25 -0.53125 0.203125 -0.703125 0.203125 -0.890625 C 0.203125 -1.191406 0.304688 -1.460938 0.515625 -1.703125 C 0.722656 -1.941406 1.046875 -2.1875 1.484375 -2.4375 C 1.410156 -2.59375 1.351562 -2.742188 1.3125 -2.890625 C 1.269531 -3.035156 1.25 -3.195312 1.25 -3.375 C 1.25 -3.570312 1.296875 -3.75 1.390625 -3.90625 C 1.484375 -4.0625 1.609375 -4.179688 1.765625 -4.265625 C 1.921875 -4.359375 2.09375 -4.40625 2.28125 -4.40625 Z M 1.828125 -3.59375 C 1.828125 -3.445312 1.847656 -3.300781 1.890625 -3.15625 C 1.929688 -3.019531 1.992188 -2.867188 2.078125 -2.703125 C 2.316406 -2.828125 2.488281 -2.960938 2.59375 -3.109375 C 2.707031 -3.253906 2.765625 -3.425781 2.765625 -3.625 C 2.765625 -3.789062 2.71875 -3.925781 2.625 -4.03125 C 2.539062 -4.132812 2.425781 -4.1875 2.28125 -4.1875 C 2.144531 -4.1875 2.035156 -4.132812 1.953125 -4.03125 C 1.867188 -3.925781 1.828125 -3.78125 1.828125 -3.59375 Z M 0.859375 -1.15625 C 0.859375 -1 0.894531 -0.851562 0.96875 -0.71875 C 1.039062 -0.59375 1.132812 -0.488281 1.25 -0.40625 C 1.375 -0.332031 1.507812 -0.296875 1.65625 -0.296875 C 1.800781 -0.296875 1.953125 -0.332031 2.109375 -0.40625 C 2.273438 -0.476562 2.414062 -0.578125 2.53125 -0.703125 C 2.394531 -0.859375 2.238281 -1.066406 2.0625 -1.328125 C 1.894531 -1.597656 1.734375 -1.890625 1.578125 -2.203125 C 1.097656 -1.941406 0.859375 -1.59375 0.859375 -1.15625 Z M 0.859375 -1.15625 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(101.79982, 31.368465)"><g/></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(103.370428, 31.368465)"><g><path d="M 2.625 -4.40625 C 2.832031 -4.40625 3.007812 -4.382812 3.15625 -4.34375 C 3.3125 -4.3125 3.460938 -4.265625 3.609375 -4.203125 C 3.722656 -4.148438 3.796875 -4.125 3.828125 -4.125 C 3.878906 -4.125 3.925781 -4.148438 3.96875 -4.203125 C 4.019531 -4.253906 4.050781 -4.320312 4.0625 -4.40625 L 4.171875 -4.40625 L 4.28125 -2.953125 L 4.171875 -2.953125 C 4.140625 -3.203125 4.046875 -3.421875 3.890625 -3.609375 C 3.742188 -3.796875 3.5625 -3.9375 3.34375 -4.03125 C 3.132812 -4.125 2.910156 -4.171875 2.671875 -4.171875 C 2.179688 -4.171875 1.785156 -3.992188 1.484375 -3.640625 C 1.191406 -3.296875 1.046875 -2.769531 1.046875 -2.0625 C 1.046875 -1.644531 1.125 -1.289062 1.28125 -1 C 1.445312 -0.71875 1.660156 -0.507812 1.921875 -0.375 C 2.179688 -0.238281 2.460938 -0.171875 2.765625 -0.171875 C 3.066406 -0.171875 3.351562 -0.25 3.625 -0.40625 C 3.90625 -0.5625 4.125 -0.769531 4.28125 -1.03125 L 4.375 -0.96875 C 3.957031 -0.257812 3.347656 0.09375 2.546875 0.09375 C 2.128906 0.09375 1.742188 0 1.390625 -0.1875 C 1.046875 -0.382812 0.769531 -0.648438 0.5625 -0.984375 C 0.363281 -1.328125 0.265625 -1.695312 0.265625 -2.09375 C 0.265625 -2.519531 0.367188 -2.910156 0.578125 -3.265625 C 0.785156 -3.617188 1.066406 -3.894531 1.421875 -4.09375 C 1.785156 -4.300781 2.1875 -4.40625 2.625 -4.40625 Z M 2.625 -4.40625 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(107.887493, 31.368465)"><g><path d="M 2.421875 -4.40625 C 2.816406 -4.40625 3.179688 -4.304688 3.515625 -4.109375 C 3.847656 -3.910156 4.113281 -3.632812 4.3125 -3.28125 C 4.507812 -2.9375 4.609375 -2.5625 4.609375 -2.15625 C 4.609375 -1.75 4.507812 -1.375 4.3125 -1.03125 C 4.113281 -0.6875 3.847656 -0.410156 3.515625 -0.203125 C 3.179688 -0.00390625 2.816406 0.09375 2.421875 0.09375 C 2.023438 0.09375 1.65625 -0.00390625 1.3125 -0.203125 C 0.976562 -0.410156 0.710938 -0.6875 0.515625 -1.03125 C 0.328125 -1.375 0.234375 -1.75 0.234375 -2.15625 C 0.234375 -2.5625 0.328125 -2.9375 0.515625 -3.28125 C 0.710938 -3.632812 0.976562 -3.910156 1.3125 -4.109375 C 1.65625 -4.304688 2.023438 -4.40625 2.421875 -4.40625 Z M 1.015625 -2.15625 C 1.015625 -1.75 1.070312 -1.394531 1.1875 -1.09375 C 1.300781 -0.789062 1.460938 -0.554688 1.671875 -0.390625 C 1.890625 -0.222656 2.140625 -0.140625 2.421875 -0.140625 C 2.703125 -0.140625 2.945312 -0.222656 3.15625 -0.390625 C 3.375 -0.554688 3.539062 -0.789062 3.65625 -1.09375 C 3.769531 -1.394531 3.828125 -1.75 3.828125 -2.15625 C 3.828125 -2.550781 3.769531 -2.898438 3.65625 -3.203125 C 3.539062 -3.503906 3.378906 -3.738281 3.171875 -3.90625 C 2.960938 -4.082031 2.707031 -4.171875 2.40625 -4.171875 C 2.125 -4.171875 1.875 -4.082031 1.65625 -3.90625 C 1.445312 -3.738281 1.285156 -3.5 1.171875 -3.1875 C 1.066406 -2.882812 1.015625 -2.539062 1.015625 -2.15625 Z M 1.015625 -2.15625 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(112.731243, 31.368465)"><g><path d="M 4.125 -1.125 L 4.125 -3.71875 C 4.125 -3.90625 4.085938 -4.03125 4.015625 -4.09375 C 3.953125 -4.164062 3.832031 -4.203125 3.65625 -4.203125 L 3.5 -4.203125 L 3.5 -4.3125 L 5.09375 -4.3125 L 5.09375 -4.203125 L 4.953125 -4.203125 C 4.785156 -4.203125 4.664062 -4.191406 4.59375 -4.171875 C 4.519531 -4.148438 4.46875 -4.097656 4.4375 -4.015625 C 4.414062 -3.941406 4.40625 -3.816406 4.40625 -3.640625 L 4.40625 0.046875 L 4.328125 0.046875 L 1.234375 -3.421875 L 1.234375 -0.734375 C 1.234375 -0.492188 1.28125 -0.328125 1.375 -0.234375 C 1.46875 -0.148438 1.628906 -0.109375 1.859375 -0.109375 L 1.859375 0 L 0.3125 0 L 0.3125 -0.109375 L 0.34375 -0.109375 C 0.539062 -0.109375 0.691406 -0.144531 0.796875 -0.21875 C 0.910156 -0.289062 0.96875 -0.425781 0.96875 -0.625 L 0.96875 -3.703125 C 0.851562 -3.878906 0.726562 -4.003906 0.59375 -4.078125 C 0.457031 -4.160156 0.285156 -4.203125 0.078125 -4.203125 L 0.078125 -4.3125 L 1.34375 -4.3125 Z M 4.125 -1.125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(117.901679, 31.368465)"><g><path d="M 4.03125 -3.328125 L 3.90625 -3.328125 C 3.851562 -3.796875 3.601562 -4.03125 3.15625 -4.03125 L 2.4375 -4.03125 L 2.4375 -0.59375 C 2.4375 -0.40625 2.488281 -0.273438 2.59375 -0.203125 C 2.695312 -0.140625 2.851562 -0.109375 3.0625 -0.109375 L 3.0625 0 L 1.125 0 L 1.125 -0.109375 C 1.34375 -0.109375 1.5 -0.144531 1.59375 -0.21875 C 1.695312 -0.300781 1.75 -0.441406 1.75 -0.640625 L 1.75 -4.03125 L 0.984375 -4.03125 C 0.785156 -4.03125 0.617188 -3.972656 0.484375 -3.859375 C 0.359375 -3.742188 0.285156 -3.566406 0.265625 -3.328125 L 0.15625 -3.328125 L 0.1875 -4.3125 L 4 -4.3125 Z M 4.03125 -3.328125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(122.092058, 31.368465)"><g><path d="M 3.71875 -3.1875 C 3.71875 -2.925781 3.625 -2.695312 3.4375 -2.5 C 3.257812 -2.3125 2.988281 -2.171875 2.625 -2.078125 L 3.625 -0.84375 C 3.75 -0.695312 3.851562 -0.578125 3.9375 -0.484375 C 4.019531 -0.398438 4.117188 -0.316406 4.234375 -0.234375 C 4.359375 -0.160156 4.5 -0.117188 4.65625 -0.109375 L 4.65625 0 L 3.53125 0 L 1.90625 -2.015625 L 1.484375 -2.015625 L 1.484375 -0.625 C 1.484375 -0.4375 1.53125 -0.300781 1.625 -0.21875 C 1.71875 -0.144531 1.867188 -0.109375 2.078125 -0.109375 L 2.09375 -0.109375 L 2.09375 0 L 0.21875 0 L 0.21875 -0.109375 C 0.414062 -0.109375 0.5625 -0.144531 0.65625 -0.21875 C 0.757812 -0.289062 0.8125 -0.421875 0.8125 -0.609375 L 0.8125 -3.71875 C 0.8125 -3.882812 0.757812 -4.003906 0.65625 -4.078125 C 0.5625 -4.160156 0.414062 -4.203125 0.21875 -4.203125 L 0.21875 -4.3125 L 2.234375 -4.3125 C 2.640625 -4.3125 2.988281 -4.21875 3.28125 -4.03125 C 3.570312 -3.851562 3.71875 -3.570312 3.71875 -3.1875 Z M 1.484375 -3.984375 L 1.484375 -2.234375 L 1.640625 -2.234375 C 2.066406 -2.234375 2.390625 -2.316406 2.609375 -2.484375 C 2.828125 -2.648438 2.9375 -2.878906 2.9375 -3.171875 C 2.9375 -3.429688 2.851562 -3.648438 2.6875 -3.828125 C 2.519531 -4.003906 2.285156 -4.09375 1.984375 -4.09375 C 1.816406 -4.09375 1.648438 -4.054688 1.484375 -3.984375 Z M 1.484375 -3.984375 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(126.295001, 31.368465)"><g><path d="M 2.125 -4.203125 C 1.988281 -4.203125 1.878906 -4.1875 1.796875 -4.15625 C 1.710938 -4.125 1.644531 -4.070312 1.59375 -4 C 1.550781 -3.925781 1.53125 -3.820312 1.53125 -3.6875 L 1.53125 -1.296875 C 1.53125 -0.972656 1.628906 -0.703125 1.828125 -0.484375 C 2.023438 -0.273438 2.320312 -0.171875 2.71875 -0.171875 C 3.175781 -0.171875 3.519531 -0.285156 3.75 -0.515625 C 3.988281 -0.742188 4.109375 -1.085938 4.109375 -1.546875 L 4.109375 -3.6875 C 4.109375 -3.875 4.054688 -4.003906 3.953125 -4.078125 C 3.859375 -4.160156 3.71875 -4.203125 3.53125 -4.203125 L 3.46875 -4.203125 L 3.46875 -4.3125 L 5.046875 -4.3125 L 5.046875 -4.203125 C 4.890625 -4.203125 4.765625 -4.1875 4.671875 -4.15625 C 4.578125 -4.132812 4.503906 -4.085938 4.453125 -4.015625 C 4.410156 -3.941406 4.390625 -3.832031 4.390625 -3.6875 L 4.390625 -1.46875 C 4.390625 -1.195312 4.320312 -0.941406 4.1875 -0.703125 C 4.0625 -0.460938 3.867188 -0.269531 3.609375 -0.125 C 3.359375 0.0195312 3.039062 0.09375 2.65625 0.09375 C 2.21875 0.09375 1.863281 0.0195312 1.59375 -0.125 C 1.320312 -0.269531 1.128906 -0.453125 1.015625 -0.671875 C 0.910156 -0.898438 0.859375 -1.144531 0.859375 -1.40625 L 0.859375 -3.53125 C 0.859375 -3.707031 0.835938 -3.84375 0.796875 -3.9375 C 0.765625 -4.03125 0.707031 -4.097656 0.625 -4.140625 C 0.539062 -4.179688 0.414062 -4.203125 0.25 -4.203125 L 0.203125 -4.203125 L 0.203125 -4.3125 L 2.125 -4.3125 Z M 2.125 -4.203125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(131.465436, 31.368465)"><g><path d="M 2.625 -4.40625 C 2.832031 -4.40625 3.007812 -4.382812 3.15625 -4.34375 C 3.3125 -4.3125 3.460938 -4.265625 3.609375 -4.203125 C 3.722656 -4.148438 3.796875 -4.125 3.828125 -4.125 C 3.878906 -4.125 3.925781 -4.148438 3.96875 -4.203125 C 4.019531 -4.253906 4.050781 -4.320312 4.0625 -4.40625 L 4.171875 -4.40625 L 4.28125 -2.953125 L 4.171875 -2.953125 C 4.140625 -3.203125 4.046875 -3.421875 3.890625 -3.609375 C 3.742188 -3.796875 3.5625 -3.9375 3.34375 -4.03125 C 3.132812 -4.125 2.910156 -4.171875 2.671875 -4.171875 C 2.179688 -4.171875 1.785156 -3.992188 1.484375 -3.640625 C 1.191406 -3.296875 1.046875 -2.769531 1.046875 -2.0625 C 1.046875 -1.644531 1.125 -1.289062 1.28125 -1 C 1.445312 -0.71875 1.660156 -0.507812 1.921875 -0.375 C 2.179688 -0.238281 2.460938 -0.171875 2.765625 -0.171875 C 3.066406 -0.171875 3.351562 -0.25 3.625 -0.40625 C 3.90625 -0.5625 4.125 -0.769531 4.28125 -1.03125 L 4.375 -0.96875 C 3.957031 -0.257812 3.347656 0.09375 2.546875 0.09375 C 2.128906 0.09375 1.742188 0 1.390625 -0.1875 C 1.046875 -0.382812 0.769531 -0.648438 0.5625 -0.984375 C 0.363281 -1.328125 0.265625 -1.695312 0.265625 -2.09375 C 0.265625 -2.519531 0.367188 -2.910156 0.578125 -3.265625 C 0.785156 -3.617188 1.066406 -3.894531 1.421875 -4.09375 C 1.785156 -4.300781 2.1875 -4.40625 2.625 -4.40625 Z M 2.625 -4.40625 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(135.982501, 31.368465)"><g><path d="M 4.03125 -3.328125 L 3.90625 -3.328125 C 3.851562 -3.796875 3.601562 -4.03125 3.15625 -4.03125 L 2.4375 -4.03125 L 2.4375 -0.59375 C 2.4375 -0.40625 2.488281 -0.273438 2.59375 -0.203125 C 2.695312 -0.140625 2.851562 -0.109375 3.0625 -0.109375 L 3.0625 0 L 1.125 0 L 1.125 -0.109375 C 1.34375 -0.109375 1.5 -0.144531 1.59375 -0.21875 C 1.695312 -0.300781 1.75 -0.441406 1.75 -0.640625 L 1.75 -4.03125 L 0.984375 -4.03125 C 0.785156 -4.03125 0.617188 -3.972656 0.484375 -3.859375 C 0.359375 -3.742188 0.285156 -3.566406 0.265625 -3.328125 L 0.15625 -3.328125 L 0.1875 -4.3125 L 4 -4.3125 Z M 4.03125 -3.328125 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(140.17288, 31.368465)"><g><path d="M 2.421875 -4.40625 C 2.816406 -4.40625 3.179688 -4.304688 3.515625 -4.109375 C 3.847656 -3.910156 4.113281 -3.632812 4.3125 -3.28125 C 4.507812 -2.9375 4.609375 -2.5625 4.609375 -2.15625 C 4.609375 -1.75 4.507812 -1.375 4.3125 -1.03125 C 4.113281 -0.6875 3.847656 -0.410156 3.515625 -0.203125 C 3.179688 -0.00390625 2.816406 0.09375 2.421875 0.09375 C 2.023438 0.09375 1.65625 -0.00390625 1.3125 -0.203125 C 0.976562 -0.410156 0.710938 -0.6875 0.515625 -1.03125 C 0.328125 -1.375 0.234375 -1.75 0.234375 -2.15625 C 0.234375 -2.5625 0.328125 -2.9375 0.515625 -3.28125 C 0.710938 -3.632812 0.976562 -3.910156 1.3125 -4.109375 C 1.65625 -4.304688 2.023438 -4.40625 2.421875 -4.40625 Z M 1.015625 -2.15625 C 1.015625 -1.75 1.070312 -1.394531 1.1875 -1.09375 C 1.300781 -0.789062 1.460938 -0.554688 1.671875 -0.390625 C 1.890625 -0.222656 2.140625 -0.140625 2.421875 -0.140625 C 2.703125 -0.140625 2.945312 -0.222656 3.15625 -0.390625 C 3.375 -0.554688 3.539062 -0.789062 3.65625 -1.09375 C 3.769531 -1.394531 3.828125 -1.75 3.828125 -2.15625 C 3.828125 -2.550781 3.769531 -2.898438 3.65625 -3.203125 C 3.539062 -3.503906 3.378906 -3.738281 3.171875 -3.90625 C 2.960938 -4.082031 2.707031 -4.171875 2.40625 -4.171875 C 2.125 -4.171875 1.875 -4.082031 1.65625 -3.90625 C 1.445312 -3.738281 1.285156 -3.5 1.171875 -3.1875 C 1.066406 -2.882812 1.015625 -2.539062 1.015625 -2.15625 Z M 1.015625 -2.15625 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(145.01663, 31.368465)"><g><path d="M 3.71875 -3.1875 C 3.71875 -2.925781 3.625 -2.695312 3.4375 -2.5 C 3.257812 -2.3125 2.988281 -2.171875 2.625 -2.078125 L 3.625 -0.84375 C 3.75 -0.695312 3.851562 -0.578125 3.9375 -0.484375 C 4.019531 -0.398438 4.117188 -0.316406 4.234375 -0.234375 C 4.359375 -0.160156 4.5 -0.117188 4.65625 -0.109375 L 4.65625 0 L 3.53125 0 L 1.90625 -2.015625 L 1.484375 -2.015625 L 1.484375 -0.625 C 1.484375 -0.4375 1.53125 -0.300781 1.625 -0.21875 C 1.71875 -0.144531 1.867188 -0.109375 2.078125 -0.109375 L 2.09375 -0.109375 L 2.09375 0 L 0.21875 0 L 0.21875 -0.109375 C 0.414062 -0.109375 0.5625 -0.144531 0.65625 -0.21875 C 0.757812 -0.289062 0.8125 -0.421875 0.8125 -0.609375 L 0.8125 -3.71875 C 0.8125 -3.882812 0.757812 -4.003906 0.65625 -4.078125 C 0.5625 -4.160156 0.414062 -4.203125 0.21875 -4.203125 L 0.21875 -4.3125 L 2.234375 -4.3125 C 2.640625 -4.3125 2.988281 -4.21875 3.28125 -4.03125 C 3.570312 -3.851562 3.71875 -3.570312 3.71875 -3.1875 Z M 1.484375 -3.984375 L 1.484375 -2.234375 L 1.640625 -2.234375 C 2.066406 -2.234375 2.390625 -2.316406 2.609375 -2.484375 C 2.828125 -2.648438 2.9375 -2.878906 2.9375 -3.171875 C 2.9375 -3.429688 2.851562 -3.648438 2.6875 -3.828125 C 2.519531 -4.003906 2.285156 -4.09375 1.984375 -4.09375 C 1.816406 -4.09375 1.648438 -4.054688 1.484375 -3.984375 Z M 1.484375 -3.984375 "/></g></g></g><g fill="#d9d9d9" fill-opacity="1"><g transform="translate(149.860374, 31.368465)"><g><path d="M 0.71875 -0.828125 L 2.328125 -4.5 L 2.4375 -4.5 L 4.140625 -0.59375 C 4.203125 -0.457031 4.257812 -0.351562 4.3125 -0.28125 C 4.375 -0.207031 4.4375 -0.160156 4.5 -0.140625 C 4.5625 -0.117188 4.644531 -0.109375 4.75 -0.109375 L 4.75 0 L 2.984375 0 L 2.984375 -0.109375 C 3.128906 -0.109375 3.238281 -0.132812 3.3125 -0.1875 C 3.394531 -0.25 3.4375 -0.328125 3.4375 -0.421875 C 3.4375 -0.492188 3.410156 -0.585938 3.359375 -0.703125 L 3.03125 -1.453125 L 1.28125 -1.453125 L 0.921875 -0.625 C 0.878906 -0.539062 0.859375 -0.46875 0.859375 -0.40625 C 0.859375 -0.207031 1.015625 -0.109375 1.328125 -0.109375 L 1.328125 0 L 0.09375 0 L 0.09375 -0.109375 C 0.195312 -0.117188 0.28125 -0.148438 0.34375 -0.203125 C 0.40625 -0.253906 0.460938 -0.320312 0.515625 -0.40625 C 0.566406 -0.5 0.632812 -0.640625 0.71875 -0.828125 Z M 2.921875 -1.6875 L 2.15625 -3.4375 L 1.390625 -1.6875 Z M 2.921875 -1.6875 "/></g></g></g></g></g></g></svg>

--- ARCHIVO: C:\Users\Dell\dinco-web\public\vercel.svg ---

<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1155 1000"><path d="m577.3 0 577.4 1000H0z" fill="#fff"/></svg>

--- ARCHIVO: C:\Users\Dell\dinco-web\public\window.svg ---

<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" fill="#666"/></svg>
