export const generateUniqueId = (): string => {
  const data = new Uint32Array(1);
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(data);
  } else {
    // Alternativa para entornos donde window no está definido
    data[0] = Math.floor(Math.random() * 1000000000);
  }
  return data[0].toString();
};
