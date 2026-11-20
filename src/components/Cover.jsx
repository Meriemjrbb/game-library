import { useState, useEffect } from "react";

// Affiche l'image depuis une URL ; si elle est vide ou invalide, affiche un repli avec l'initiale
export default function Cover({ src, title, className = "" }) {
  const [broken, setBroken] = useState(false);
  useEffect(() => setBroken(false), [src]);
  if (!src || broken)
    return <div className={`cover-fallback ${className}`} aria-label={`Pas d'image pour ${title}`}>{(title || "?")[0]}</div>;
  return <img className={className} src={src} alt={`Cover de ${title}`} loading="lazy" referrerPolicy="no-referrer" onError={() => setBroken(true)} />;
}
