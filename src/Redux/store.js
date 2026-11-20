import { configureStore } from "@reduxjs/toolkit";
import gamesReducer from "./gamesSlice";

// Bonus : la collection est sauvegardée dans le navigateur (localStorage)
let preloaded;
try {
  const saved = JSON.parse(localStorage.getItem("games-v3"));
  if (Array.isArray(saved)) preloaded = { games: saved };
} catch { /* ignore */ }

export const store = configureStore({
  reducer: { games: gamesReducer },
  preloadedState: preloaded,
});

store.subscribe(() => {
  try { localStorage.setItem("games-v3", JSON.stringify(store.getState().games)); } catch { /* ignore */ }
});
