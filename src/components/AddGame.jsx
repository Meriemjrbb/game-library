import { useDispatch } from "react-redux";
import { addGame } from "../Redux/gamesSlice";
import GameForm from "./GameForm";

export default function AddGame({ onClose }) {
  const dispatch = useDispatch();
  const handleAdd = (game) => { dispatch(addGame(game)); onClose(); };
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Nouveau jeu">
        <h2>Nouveau jeu</h2>
        <GameForm submitLabel="Ajouter à la collection" onSubmit={handleAdd} onCancel={onClose} />
      </div>
    </div>
  );
}
