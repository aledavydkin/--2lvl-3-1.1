export const data = { name: 'Маг', health: 50 };

export function stripOfLife(elements) {
  if (elements.health >= 50) {
    return 'healthy';
  } if (elements.health < 50 && elements.health > 15) {
    return 'wounded';
  }
  return 'critical';
}
