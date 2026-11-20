import { useState } from "react";
import GameList from "./components/GameList";
import AddGame from "./components/AddGame";
import EditGame from "./components/EditGame";

export default function App() {
  const [editing, setEditing] = useState(null);
  const [adding, setAdding] = useState(false);

  return (
    <div className="app">
      <header>
        <h1>Game Library</h1>
        <button className="btn primary big" onClick={() => setAdding(true)}>+ Nouveau jeu</button>
      </header>
      <main>
        <GameList onEdit={setEditing} />
      </main>
      {adding && <AddGame onClose={() => setAdding(false)} />}
      {editing && <EditGame game={editing} onClose={() => setEditing(null)} />}
    </div>
  );
}
