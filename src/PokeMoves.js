import { moves } from "./data";
import PokeMoveCard from "./PokeMoveCard";

export default function PokeMoves() {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((move) => {
          return <PokeMoveCard key={move.id} {...move} />;
        })}
      </ul>
    </div>
  );
}
