import { fontFamily } from "tailwindcss/defaultTheme";

import type { Config } from "tailwindcss";

const tailwindConfig: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-vazirmatn)", ...fontFamily.sans],
      },
    },
  },
};

export default tailwindConfig;
