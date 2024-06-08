import { Colord, colord, extend } from "colord";
import mixPlugin from "colord/plugins/mix";

extend([mixPlugin]);

const bg = colord("hsl(250, 14%, 16%)"); /* black */

const colors = [
  { name: "black", color: bg.lighten(0.05) },
  { name: "red", color: colord("hsl(351, 87%, 73%)") },
  { name: "green", color: colord("hsl(132, 77%, 83%)") },
  { name: "yellow", color: colord("hsl(33, 83%, 75%)") },
  { name: "blue", color: colord("hsl(223, 66%, 77%)") },
  { name: "magenta", color: colord("hsl(316, 66%, 78%)") },
  { name: "cyan", color: colord("hsl(170, 98%, 76%)") },
  { name: "white", color: colord("hsl(248, 27%, 94%)") },
].reduce<{ name: string; color: Colord }[]>(
  (acc, item) => [
    ...acc,
    item,
    { name: `${item.name} light`, color: item.color.lighten(0.15) },
    { name: `${item.name} dim`, color: item.color.mix(bg.toHex(), 0.75) },
  ],
  [],
);

const elmItems = document.querySelector<HTMLElement>(".theme__items");

for (const color of colors) {
  console.log({ color });
  const elmDiv = document.createElement("div");
  elmDiv.style.backgroundColor = color.color.toHex();
  elmItems?.appendChild(elmDiv);

  // const elmCodeHexContent = document.createTextNode(colord(bg).toHex());
  // elmDiv.appendChild(elmCodeHexContent);
  // elm.appendChild(elmDiv);

  const elmCodeName = document.createElement("code");
  const elmCodeNameContent = document.createTextNode(color.name);
  elmCodeName.appendChild(elmCodeNameContent);
  elmDiv.appendChild(elmCodeName);

  const elmCodeHex = document.createElement("code");
  const elmCodeHexContent = document.createTextNode(color.color.toHex());
  elmCodeHex.appendChild(elmCodeHexContent);
  elmDiv.appendChild(elmCodeHex);

  const elmCodeHsl = document.createElement("code");
  const elmCodeHslContent = document.createTextNode(color.color.toHslString());
  elmCodeHsl.appendChild(elmCodeHslContent);
  elmDiv.appendChild(elmCodeHsl);
}

// const theme_00 = col_00.toHslString(); /* black */
// const theme_01 = col_01.toHslString(); /* red */
// const theme_02 = col_02.toHslString(); /* green */
// const theme_03 = col_03.toHslString(); /* yellow */
// const theme_04 = col_04.toHslString(); /* blue */
// const theme_05 = col_05.toHslString(); /* magenta */
// const theme_06 = col_06.toHslString(); /* cyan */
// const theme_07 = col_07.toHslString(); /* white light-grey in helix*/

// const theme_08 = col_00
//   .lighten(0.15)
//   .toHslString(); /* black light, grey in helix */
// const theme_09 = col_01.lighten(0.15).toHslString(); /* red light */
// const theme_10 = col_02.lighten(0.15).toHslString(); /* green light */
// const theme_11 = col_03.lighten(0.15).toHslString(); /* yellow light */
// const theme_12 = col_04.lighten(0.15).toHslString(); /* blue light */
// const theme_13 = col_05.lighten(0.15).toHslString(); /* magenta light */
// const theme_14 = col_06.lighten(0.15).toHslString(); /* cyan light */
// const theme_15 = col_07
//   .lighten(0.15)
//   .toHslString(); /* white light, white in helix */

// const theme_16 = col_00.mix(col_bg.toHex(), 0.75).toHslString(); /* black dim */
// const theme_17 = col_01.mix(col_bg.toHex(), 0.75).toHslString(); /* red dim */
// const theme_18 = col_02.mix(col_bg.toHex(), 0.75).toHslString(); /* green dim */
// const theme_19 = col_03
//   .mix(col_bg.toHex(), 0.75)
//   .toHslString(); /* yellow dim */
// const theme_20 = col_04.mix(col_bg.toHex(), 0.75).toHslString(); /* blue dim */
// const theme_21 = col_05
//   .mix(col_bg.toHex(), 0.75)
//   .toHslString(); /* magenta dim */
// const theme_22 = col_06.mix(col_bg.toHex(), 0.75).toHslString(); /* cyan dim */
// const theme_23 = col_07
//   .mix(col_bg.toHex(), 0.75)
//   .toHslString(); /* white light-grey in helixdim */

// const elm_body = document.querySelector<HTMLElement>("body");
// elm_body!.style.backgroundColor = col_bg.toHslString();

// const elm_00 = document.querySelector<HTMLElement>(".theme__item--00");
// const elm_01 = document.querySelector<HTMLElement>(".theme__item--01");
// const elm_02 = document.querySelector<HTMLElement>(".theme__item--02");
// const elm_03 = document.querySelector<HTMLElement>(".theme__item--03");
// const elm_04 = document.querySelector<HTMLElement>(".theme__item--04");
// const elm_05 = document.querySelector<HTMLElement>(".theme__item--05");
// const elm_06 = document.querySelector<HTMLElement>(".theme__item--06");
// const elm_07 = document.querySelector<HTMLElement>(".theme__item--07");
// const elm_08 = document.querySelector<HTMLElement>(".theme__item--08");
// const elm_09 = document.querySelector<HTMLElement>(".theme__item--09");
// const elm_10 = document.querySelector<HTMLElement>(".theme__item--10");
// const elm_11 = document.querySelector<HTMLElement>(".theme__item--11");
// const elm_12 = document.querySelector<HTMLElement>(".theme__item--12");
// const elm_13 = document.querySelector<HTMLElement>(".theme__item--13");
// const elm_14 = document.querySelector<HTMLElement>(".theme__item--14");
// const elm_15 = document.querySelector<HTMLElement>(".theme__item--15");
// const elm_16 = document.querySelector<HTMLElement>(".theme__item--16");
// const elm_17 = document.querySelector<HTMLElement>(".theme__item--17");
// const elm_18 = document.querySelector<HTMLElement>(".theme__item--18");
// const elm_19 = document.querySelector<HTMLElement>(".theme__item--19");
// const elm_20 = document.querySelector<HTMLElement>(".theme__item--20");
// const elm_21 = document.querySelector<HTMLElement>(".theme__item--21");
// const elm_22 = document.querySelector<HTMLElement>(".theme__item--22");
// const elm_23 = document.querySelector<HTMLElement>(".theme__item--23");

// elm_00!.style.backgroundColor = theme_00;
// elm_01!.style.backgroundColor = theme_01;
// elm_02!.style.backgroundColor = theme_02;
// elm_03!.style.backgroundColor = theme_03;
// elm_04!.style.backgroundColor = theme_04;
// elm_05!.style.backgroundColor = theme_05;
// elm_06!.style.backgroundColor = theme_06;
// elm_07!.style.backgroundColor = theme_07;
// elm_08!.style.backgroundColor = theme_08;
// elm_09!.style.backgroundColor = theme_09;
// elm_10!.style.backgroundColor = theme_10;
// elm_11!.style.backgroundColor = theme_11;
// elm_12!.style.backgroundColor = theme_12;
// elm_13!.style.backgroundColor = theme_13;
// elm_14!.style.backgroundColor = theme_14;
// elm_15!.style.backgroundColor = theme_15;
// elm_16!.style.backgroundColor = theme_16;
// elm_17!.style.backgroundColor = theme_17;
// elm_18!.style.backgroundColor = theme_18;
// elm_19!.style.backgroundColor = theme_19;
// elm_20!.style.backgroundColor = theme_20;
// elm_21!.style.backgroundColor = theme_21;
// elm_22!.style.backgroundColor = theme_22;
// elm_23!.style.backgroundColor = theme_23;

// const elms = document.querySelectorAll(".theme__item");

// for (const elm of elms) {
//   const bg = getComputedStyle(elm).backgroundColor;
//   console.log({ bg });

//   const elmCodeHex = document.createElement("code");
//   const elmCodeHexContent = document.createTextNode(colord(bg).toHex());
//   elmCodeHex.appendChild(elmCodeHexContent);
//   elm.appendChild(elmCodeHex);

//   const elmCodeHsl = document.createElement("code");
//   const elmCodeHslContent = document.createTextNode(colord(bg).toHslString());
//   elmCodeHsl.appendChild(elmCodeHslContent);
//   elm.appendChild(elmCodeHsl);
// }
