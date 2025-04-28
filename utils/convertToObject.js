export function convertToSerializableObject(leanDocument) {
  for (const key of Object.keys(leanDocument)) {
    if (leanDocument[key].toJson && leanDocument[key].toString()) {
      leanDocument[key] = leanDocument[key].toString();
    }
  }
  return leanDocument;
}
