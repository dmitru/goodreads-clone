export default function getRandomColor() {
  const COLORS = ['red', 'blue', 'darkgreen', 'peru'];
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}
