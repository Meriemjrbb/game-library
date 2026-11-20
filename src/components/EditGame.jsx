import { useDispatch } from "react-redux";
import { updateGame } from "../Redux/gamesSlice";
import GameForm from "./GameForm";

export default function EditGame({ game, onClose }) {
  const dispatch = useDispatch();
  const handleUpdate = (data) => { dispatch(updateGame({ ...data, id: game.id })); onClose(); };
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal panel" onClick={(e) => e.stopPropagation()} role="dialog" aria-label="Modifier le jeu">
        <h2>Modifier « {game.title} »</h2>
        <GameForm initial={game} submitLabel="Enregistrer" onSubmit={handleUpdate} onCancel={onClose} />
      </div>
    </div>
  );
}
