export default function createInt8TypedArray(length, position, value) {
  // Vérifier si la position est valide
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Créer un nouveau ArrayBuffer de la longueur spécifiée
  const buffer = new ArrayBuffer(length);

  // Créer un DataView pour manipuler le buffer
  const dataView = new DataView(buffer);

  // Définir la valeur Int8 à la position spécifiée
  dataView.setInt8(position, value);

  // Retourner le DataView
  return dataView;
}
