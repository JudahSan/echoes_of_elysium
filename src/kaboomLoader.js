import kaboom from "../lib/kaboom.mjs";

export const scale = 2;

// Store kaboom context in a constant
export const k = kaboom({
  width: 640 * scale,
  height: 320 * scale,
  scale,
  global: false,
  letterbox: true,
  debug: true,
  crisp: true,
});
