import chroma from "chroma-js";

const okThemeDarkBackground = chroma.oklch(0.25, 0.03, 280);
console.log({ okThemeDarkBackground: okThemeDarkBackground.hex() });

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
  JSON.stringify(
    {
      Bg: okThemeDarkBackground.hex(),
      Black: okThemeDarkBlack.hex(),
      BlackBright: okThemeDarkBlackBright.hex(),
      BlackDim: okThemeDarkBlackDim.hex(),
      Red: okThemeDarkRed.hex(),
      RedBright: okThemeDarkRedBright.hex(),
      RedDim: okThemeDarkRedDim.hex(),
      Green: okThemeDarkGreen.hex(),
      GreenBright: okThemeDarkGreenBright.hex(),
      GreenDim: okThemeDarkGreenDim.hex(),
      Yellow: okThemeDarkYellow.hex(),
      YellowBright: okThemeDarkYellowBright.hex(),
      YellowDim: okThemeDarkYellowDim.hex(),
      Blue: okThemeDarkBlue.hex(),
      BlueBright: okThemeDarkBlueBright.hex(),
      BlueDim: okThemeDarkBlueDim.hex(),
      Magenta: okThemeDarkMagenta.hex(),
      MagentaBright: okThemeDarkMagentaBright.hex(),
      MagentaDim: okThemeDarkMagentaDim.hex(),
      Cyan: okThemeDarkCyan.hex(),
      CyanBright: okThemeDarkCyanBright.hex(),
      CyanDim: okThemeDarkCyanDim.hex(),
      White: okThemeDarkWhite.hex(),
      WhiteBright: okThemeDarkWhiteBright.hex(),
      WhiteDim: okThemeDarkWhiteDim.hex(),
    },
    null,
    4,
  ),
);
