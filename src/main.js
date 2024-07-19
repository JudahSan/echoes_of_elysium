import { k } from "./kaboomLoader.js"; // Specify extension. Using js modules instead of npm based workflow
import { room1 } from "./scenes/room1.js";
import { room2 } from "./scenes/room2.js";
// Define scenes

k.scene("game1", () => {
  room1(k);
});

k.scene("game2", () => {
  room2(k);
});

// TODO: Replace with menu
k.scene("start", () => {});

// k.go("start");
k.go("game1");
