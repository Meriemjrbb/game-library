import { useState } from "react";

import Cover from "./Cover";

export const PLATFORMS = ["PC", "PS5", "Xbox", "Switch", "Mobile"];
const EMPTY = { title: "", genre: "", platform: "PC", price: "", image: "" };

// Formulaire partagé par AddGame et EditGame
export default function GameForm({ initial = EMPTY, submitLabel, onSubmit, onCancel }) {
  const [form, setForm] = useState(initial);
  const set = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => { e.preventDefault(); onSubmit(form); };

  return (
    <form onSubmit={submit} className="form">
      <label>Titre<input name="title" value={form.title} onChange={set} required placeholder="Ex : Hades" /></label>
      <label>Genre<input name="genre" value={form.genre} onChange={set} required placeholder="Ex : Roguelike" /></label>
      <div className="row">
        <label>Plateforme
          <select name="platform" value={form.platform} onChange={set}>{PLATFORMS.map((p) => <option key={p}>{p}</option>)}</select>
        </label>
        <label>Prix (€)<input name="price" type="number" min="0" step="0.01" value={form.price} onChange={set} required /></label>
      </div>
      <label>URL de l'image<input name="image" type="url" value={form.image} onChange={set} placeholder="https://exemple.com/cover.jpg" /></label>
      <Cover className="preview" src={form.image} title={form.title || "Jeu"} />
      <div className="row">
        <button className="btn primary" type="submit">{submitLabel}</button>
        {onCancel && <button className="btn" type="button" onClick={onCancel}>Annuler</button>}
      </div>
    </form>
  );
}
