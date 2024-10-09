import chroma from "chroma-js";

const okThemeDarkBackground = chroma.oklch(0.25, 0.03, 280);

const DIM_RATIO = 0.85;
const L = 0.81;
const L_BRIGHT = 0.87;

const okThemeDarkBlack = chroma.oklch(0.28, 0.03, 280);
const okThemeDarkBlackBright = chroma.oklch(0.36, 0.03, 280);
const okThemeDarkBlackDim = chroma.mix(
  okThemeDarkBlack,
  okThemeDarkBackground,
  DIM_RATIO,
);

// red
const okThemeDarkRed = chroma.oklch(L, 0.115, 360);
const okThemeDarkRedBright = chroma.oklch(L_BRIGHT, 0.115, 360);
const okThemeDarkRedDim = chroma.mix(
  okThemeDarkRed,
  okThemeDarkBackground,
  DIM_RATIO,
);

// green
const okThemeDarkGreen = chroma.oklch(L, 0.115, 158);
const okThemeDarkGreenBright = chroma.oklch(L_BRIGHT, 0.115, 158);
const okThemeDarkGreenDim = chroma.mix(
  okThemeDarkGreen,
  okThemeDarkBackground,
  DIM_RATIO,
);

// yellow
const okThemeDarkYellow = chroma.oklch(L, 0.065, 72);
const okThemeDarkYellowBright = chroma.oklch(L_BRIGHT, 0.065, 73);
const okThemeDarkYellowDim = chroma.mix(
  okThemeDarkYellow,
  okThemeDarkBackground,
  DIM_RATIO,
);

// blue
const okThemeDarkBlue = chroma.oklch(L, 0.08, 267);
const okThemeDarkBlueBright = chroma.oklch(L_BRIGHT, 0.08, 267);
const okThemeDarkBlueDim = chroma.mix(
  okThemeDarkBlue,
  okThemeDarkBackground,
  DIM_RATIO,
);

// magenta
const okThemeDarkMagenta = chroma.oklch(L, 0.11, 301);
const okThemeDarkMagentaBright = chroma.oklch(L_BRIGHT, 0.11, 301);
const okThemeDarkMagentaDim = chroma.mix(
  okThemeDarkMagenta,
  okThemeDarkBackground,
  DIM_RATIO,
);

// cyan
const okThemeDarkCyan = chroma.oklch(L, 0.11, 181);
const okThemeDarkCyanBright = chroma.oklch(L_BRIGHT, 0.11, 181);
const okThemeDarkCyanDim = chroma.mix(
  okThemeDarkCyan,
  okThemeDarkBackground,
  DIM_RATIO,
);

// white
const okThemeDarkWhite = chroma.oklch(L, 0.01, 280);
const okThemeDarkWhiteBright = chroma.oklch(L_BRIGHT, 0.01, 280);
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
