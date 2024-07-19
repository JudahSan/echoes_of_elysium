// Room 1 scene logic
export function room1(k) {
  // Create game object: an array of components
  // Add: creates game object and displays it to the scene, Make: creates game object but doesn't add it to the scene
  k.add([k.text("Welcome to room1!", { font: "glyphmesss" }), k.pos(100, 100)]);
}
