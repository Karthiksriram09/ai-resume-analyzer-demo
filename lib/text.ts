
export const tokenize = (s: string) =>
  (s.toLowerCase().match(/[a-z0-9.+#\-]+/g) || []).map(t => t.replace(/\.$/, ""));

export const tf = (tokens: string[]) => {
  const m: Record<string, number> = {};
  for (const t of tokens) m[t] = (m[t] || 0) + 1;
  return m;
};

export const cosine = (a: Record<string, number>, b: Record<string, number>) => {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  let dot = 0, na = 0, nb = 0;
  for (const k of keys) {
    const x = a[k] || 0, y = b[k] || 0;
    dot += x * y;
    na += x * x;
    nb += y * y;
  }
  return na && nb ? dot / Math.sqrt(na * nb) : 0;
};
