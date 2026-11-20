import { useState } from "react";
import { useSelector } from "react-redux";
import GameCard from "./GameCard";

export default function GameList({ onEdit }) {
  const games = useSelector((state) => state.games);
  const [genre, setGenre] = useState("Tous");
  const [q, setQ] = useState("");
  const genres = ["Tous", ...new Set(games.map((g) => g.genre))];
  const shown = games.filter(
    (g) => (genre === "Tous" || g.genre === genre) && g.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <section>
      <div className="toolbar">
        <input type="search" placeholder="Chercher un jeu…" value={q} onChange={(e) => setQ(e.target.value)} />
        <div className="chips">
          {genres.map((g) => (
            <button key={g} className={`chip ${g === genre ? "on" : ""}`} onClick={() => setGenre(g)}>{g}</button>
          ))}
        </div>
      </div>
      {shown.length === 0 ? (
        <p className="empty">Aucun jeu ne correspond. Ajoutez-en un avec le formulaire.</p>
      ) : (
        <div className="grid">{shown.map((g) => <GameCard key={g.id} game={g} onEdit={onEdit} />)}</div>
      )}
    </section>
  );
}
