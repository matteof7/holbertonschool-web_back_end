export default function updateUniqueItems(map) {
  // Vérifier si l'argument est une Map
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Parcourir la Map et mettre à jour les quantités de 1 à 100
  for (const [item, quantity] of map.entries()) {
    if (quantity === 1) {
      map.set(item, 100);
    }
  }

  return map;
}
