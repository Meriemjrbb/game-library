import { useDispatch } from "react-redux";
import { deleteGame } from "../Redux/gamesSlice";
import Cover from "./Cover";

const COLORS = { PC: "#4cc9f0", PS5: "#4895ef", Xbox: "#6bd66b", Switch: "#ff5d73", Mobile: "#ffc857" };

export default function GameCard({ game, onEdit }) {
  const dispatch = useDispatch();
  const color = COLORS[game.platform] || "#aaa";
  return (
    <article className="card" style={{ "--spine": color }}>
      <Cover src={game.image} title={game.title} />
      <div className="info">
        <span className="tag">{game.platform}</span>
        <h3>{game.title}</h3>
        <p className="genre">{game.genre}</p>
        <p className="price">{Number(game.price).toFixed(2)} €</p>
        <div className="row">
          <button className="btn" onClick={() => onEdit(game)}>Edit</button>
          <button className="btn danger" onClick={() => dispatch(deleteGame(game.id))}>Delete</button>
        </div>
      </div>
    </article>
  );
}
