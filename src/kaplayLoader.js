import kaplay from "../lib/kaplay.mjs";

export const scale = 2;

// Store kaplay context in a constant
export const k = kaplay({
  width: 640 * scale,
  height: 320 * scale,
  scale,
  global: false,
  letterbox: true,
  debug: true,
  crisp: true,
});
