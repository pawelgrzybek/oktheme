import { styleText } from "node:util";

console.log(
  `${styleText("black", "The quick brown")} ${styleText("blackBright", "fox jumps over")} ${styleText(["black", "dim"], "the lazy dog")}`,
);
console.log(
  `${styleText("red", "The quick brown")} ${styleText("redBright", "fox jumps over")} ${styleText(["red", "dim"], "the lazy dog")}`,
);
console.log(
  `${styleText("green", "The quick brown")} ${styleText("greenBright", "fox jumps over")} ${styleText(["green", "dim"], "the lazy dog")}`,
);
console.log(
  `${styleText("yellow", "The quick brown")} ${styleText("yellowBright", "fox jumps over")} ${styleText(["yellow", "dim"], "the lazy dog")}`,
);
console.log(
  `${styleText("blue", "The quick brown")} ${styleText("blueBright", "fox jumps over")} ${styleText(["blue", "dim"], "the lazy dog")}`,
);
console.log(
  `${styleText("magenta", "The quick brown")} ${styleText("magentaBright", "fox jumps over")} ${styleText(["magenta", "dim"], "the lazy dog")}`,
);
console.log(
  `${styleText("cyan", "The quick brown")} ${styleText("cyanBright", "fox jumps over")} ${styleText(["cyan", "dim"], "the lazy dog")}`,
);
console.log(
  `${styleText("white", "The quick brown")} ${styleText("whiteBright", "fox jumps over")} ${styleText(["white", "dim"], "the lazy dog")}`,
);
