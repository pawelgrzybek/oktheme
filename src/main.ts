// https://huetone.ardov.me/?palette=N4IgdghgtgpiBcID2BrALgCxrABACgBMIAnFAShABoQMBXGAZwQG1RJYEQAhAGwgGMUVEPyQ8kxJvGYgAxAGYI8-gBYCw2QCYAbJoDs8gBwgAugF9KbaHEQAlGOuqjxklnIBmBAgEYCAVg13AAYATiIA80twa04AcWIYGDBhZwkpGVl%2BEJg9AhUNQwAjfj0IfMirDkQATRgecQB3FLE0t1kcr35jakyQwr9DflMLSptuHnpml3S5AiCYIPdNDT7Cwq9hqPYxgFkIAHMktAgp1uk5GHkCPXdCjX5NCGy4CuiqkABhAE8IZKcW1znTLeHIwAI9PR6LqqTajTgAdQwAEs0HB-tM2g5Eu5tPd%2BPwvBEzCZqGgkGBGG5CsQkfsMGhhGAJFAIDxhkA

import chroma from "chroma-js";

const okThemeDarkBackground = chroma.oklch(0.25, 0.03, 280);

const L = 0.78;
const L_BRIGHT = 0.9;
const DIM_RATIO = 0.85;

// black (exception)
const L_BLACK = 0.28;
const L_BLACK_BRIGHT = 0.36;
const C_BLACK = 0.03;
const H_BLACK = 280;
const okThemeDarkBlack = chroma.oklch(L_BLACK, C_BLACK, H_BLACK);
const okThemeDarkBlackBright = chroma.oklch(L_BLACK_BRIGHT, C_BLACK, H_BLACK);
const okThemeDarkBlackDim = chroma.mix(
  okThemeDarkBlack,
  okThemeDarkBackground,
  DIM_RATIO,
);

// red
const C_RED = 0.1;
const H_RED = 13;
const okThemeDarkRed = chroma.oklch(L, C_RED, H_RED);
const okThemeDarkRedBright = chroma.oklch(
  L_BRIGHT,
  okThemeDarkRed.get("oklch.c") / 2,
  H_RED,
);
const okThemeDarkRedDim = chroma.mix(
  okThemeDarkRed,
  okThemeDarkBackground,
  DIM_RATIO,
);

// green
const C_GREEN = 0.08;
const H_GREEN = 158;
const okThemeDarkGreen = chroma.oklch(L, C_GREEN, H_GREEN);
const okThemeDarkGreenBright = chroma.oklch(
  L_BRIGHT,
  okThemeDarkGreen.get("oklch.c") / 2,
  H_GREEN,
);
const okThemeDarkGreenDim = chroma.mix(
  okThemeDarkGreen,
  okThemeDarkBackground,
  DIM_RATIO,
);

// yellow
const C_YELLOW = 0.06;
const H_YELLOW = 85;
const okThemeDarkYellow = chroma.oklch(L, C_YELLOW, H_YELLOW);
const okThemeDarkYellowBright = chroma.oklch(
  L_BRIGHT,
  okThemeDarkYellow.get("oklch.c") / 2,
  H_YELLOW,
);
const okThemeDarkYellowDim = chroma.mix(
  okThemeDarkYellow,
  okThemeDarkBackground,
  DIM_RATIO,
);

// blue
const C_BLUE = 0.06;
const H_BLUE = 251;
const okThemeDarkBlue = chroma.oklch(L, C_BLUE, H_BLUE);
const okThemeDarkBlueBright = chroma.oklch(
  L_BRIGHT,
  okThemeDarkBlue.get("oklch.c") / 2,
  H_BLUE,
);
const okThemeDarkBlueDim = chroma.mix(
  okThemeDarkBlue,
  okThemeDarkBackground,
  DIM_RATIO,
);

// magenta
const C_MAGENTA = 0.1;
const H_MAGENTA = 301;
const okThemeDarkMagenta = chroma.oklch(L, C_MAGENTA, H_MAGENTA);
const okThemeDarkMagentaBright = chroma.oklch(
  L_BRIGHT,
  okThemeDarkMagenta.get("oklch.c") / 2,
  H_MAGENTA,
);
const okThemeDarkMagentaDim = chroma.mix(
  okThemeDarkMagenta,
  okThemeDarkBackground,
  DIM_RATIO,
);

// cyan
const C_CYAN = 0.08;
const H_CYAN = 192;
const okThemeDarkCyan = chroma.oklch(L, C_CYAN, H_CYAN);
const okThemeDarkCyanBright = chroma.oklch(
  L_BRIGHT,
  okThemeDarkCyan.get("oklch.c") / 2,
  H_CYAN,
);
const okThemeDarkCyanDim = chroma.mix(
  okThemeDarkCyan,
  okThemeDarkBackground,
  DIM_RATIO,
);

// white (exception)
const L_WHITE = 0.85;
const L_WHITE_BRIGHT = 0.95;
const C_WHITE = 0.01;
const H_WHITE = 280;
const okThemeDarkWhite = chroma.oklch(L_WHITE, C_WHITE, H_WHITE);
const okThemeDarkWhiteBright = chroma.oklch(L_WHITE_BRIGHT, C_WHITE, H_WHITE);
const okThemeDarkWhiteDim = chroma.mix(
  okThemeDarkWhite,
  okThemeDarkBackground,
  DIM_RATIO,
);

window.CSS.registerProperty({
  name: "--ok-theme-dark-backgrond",
  syntax: "<color>",
  inherits: false,
  initialValue: okThemeDarkBackground.hex(),
});

const COMMON_PROPERTIES = {
  syntax: "<color>",
  inherits: false,
};

// black
window.CSS.registerProperty({
  name: "--ok-theme-dark-black",
  initialValue: okThemeDarkBlack.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-black-bright",
  initialValue: okThemeDarkBlackBright.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-black-dim",
  initialValue: okThemeDarkBlackDim.hex(),
  ...COMMON_PROPERTIES,
});

// red
window.CSS.registerProperty({
  name: "--ok-theme-dark-red",
  initialValue: okThemeDarkRed.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-red-bright",
  initialValue: okThemeDarkRedBright.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-red-dim",
  initialValue: okThemeDarkRedDim.hex(),
  ...COMMON_PROPERTIES,
});

// green
window.CSS.registerProperty({
  name: "--ok-theme-dark-green",
  initialValue: okThemeDarkGreen.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-green-bright",
  initialValue: okThemeDarkGreenBright.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-green-dim",
  initialValue: okThemeDarkGreenDim.hex(),
  ...COMMON_PROPERTIES,
});

// yellow
window.CSS.registerProperty({
  name: "--ok-theme-dark-yellow",
  initialValue: okThemeDarkYellow.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-yellow-bright",
  initialValue: okThemeDarkYellowBright.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-yellow-dim",
  initialValue: okThemeDarkYellowDim.hex(),
  ...COMMON_PROPERTIES,
});

// blue
window.CSS.registerProperty({
  name: "--ok-theme-dark-blue",
  initialValue: okThemeDarkBlue.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-blue-bright",
  initialValue: okThemeDarkBlueBright.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-blue-dim",
  initialValue: okThemeDarkBlueDim.hex(),
  ...COMMON_PROPERTIES,
});

// magenta
window.CSS.registerProperty({
  name: "--ok-theme-dark-magenta",
  initialValue: okThemeDarkMagenta.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-magenta-bright",
  initialValue: okThemeDarkMagentaBright.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-magenta-dim",
  initialValue: okThemeDarkMagentaDim.hex(),
  ...COMMON_PROPERTIES,
});

// cyan
window.CSS.registerProperty({
  name: "--ok-theme-dark-cyan",
  initialValue: okThemeDarkCyan.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-cyan-bright",
  initialValue: okThemeDarkCyanBright.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-cyan-dim",
  initialValue: okThemeDarkCyanDim.hex(),
  ...COMMON_PROPERTIES,
});

// white
window.CSS.registerProperty({
  name: "--ok-theme-dark-white",
  initialValue: okThemeDarkWhite.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-white-bright",
  initialValue: okThemeDarkWhiteBright.hex(),
  ...COMMON_PROPERTIES,
});

window.CSS.registerProperty({
  name: "--ok-theme-dark-white-dim",
  initialValue: okThemeDarkWhiteDim.hex(),
  ...COMMON_PROPERTIES,
});

console.log(
  `%c background: ${okThemeDarkBackground.hex()}`,
  `color: ${okThemeDarkWhite.hex()}; background-color: ${okThemeDarkBackground.hex()}`,
);
console.log(
  `%c black: ${okThemeDarkBlack.hex()}`,
  `color: ${okThemeDarkWhite.hex()}; background-color: ${okThemeDarkBlack.hex()}`,
);
console.log(
  `%c black light: ${okThemeDarkBlackBright.hex()}`,
  `color: ${okThemeDarkWhite.hex()}; background-color: ${okThemeDarkBlackBright.hex()}`,
);
console.log(
  `%c black dim: ${okThemeDarkBlackDim.hex()}`,
  `color: ${okThemeDarkWhite.hex()}; background-color: ${okThemeDarkBlackDim.hex()}`,
);
console.log(
  `%c red: ${okThemeDarkRed.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkRed.hex()}`,
);
console.log(
  `%c red light: ${okThemeDarkRedBright.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkRedBright.hex()}`,
);
console.log(
  `%c red dim: ${okThemeDarkRedDim.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkRedDim.hex()}`,
);
console.log(
  `%c green: ${okThemeDarkGreen.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkGreen.hex()}`,
);
console.log(
  `%c green light: ${okThemeDarkGreenBright.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkGreenBright.hex()}`,
);
console.log(
  `%c green dim: ${okThemeDarkGreenDim.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkGreenDim.hex()}`,
);
console.log(
  `%c yellow: ${okThemeDarkYellow.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkYellow.hex()}`,
);
console.log(
  `%c yellow light: ${okThemeDarkYellowBright.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkYellowBright.hex()}`,
);
console.log(
  `%c yellow dim: ${okThemeDarkYellowDim.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkYellowDim.hex()}`,
);
console.log(
  `%c blue: ${okThemeDarkBlue.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkBlue.hex()}`,
);
console.log(
  `%c blue light: ${okThemeDarkBlueBright.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkBlueBright.hex()}`,
);
console.log(
  `%c blue dim: ${okThemeDarkBlueDim.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkBlueDim.hex()}`,
);
console.log(
  `%c magenta: ${okThemeDarkMagenta.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkMagenta.hex()}`,
);
console.log(
  `%c magenta light: ${okThemeDarkMagentaBright.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkMagentaBright.hex()}`,
);
console.log(
  `%c magenta dim: ${okThemeDarkMagentaDim.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkMagentaDim.hex()}`,
);
console.log(
  `%c cyan: ${okThemeDarkCyan.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkCyan.hex()}`,
);
console.log(
  `%c cyan light: ${okThemeDarkCyanBright.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkCyanBright.hex()}`,
);
console.log(
  `%c cyan dim: ${okThemeDarkCyanDim.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkCyanDim.hex()}`,
);
console.log(
  `%c white: ${okThemeDarkWhite.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkWhite.hex()}`,
);
console.log(
  `%c white light: ${okThemeDarkWhiteBright.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkWhiteBright.hex()}`,
);
console.log(
  `%c white dim: ${okThemeDarkWhiteDim.hex()}`,
  `color: ${okThemeDarkBlack.hex()}; background-color: ${okThemeDarkWhiteDim.hex()}`,
);
