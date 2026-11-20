import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "The Legend of Zelda: Breath of the Wild", genre: "Aventure", platform: "Switch", price: 59.99, image: "" },
  { id: "2", title: "Hollow Knight", genre: "Metroidvania", platform: "PC", price: 14.99, image: "" },
  { id: "3", title: "God of War Ragnarök", genre: "Action", platform: "PS5", price: 69.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbwDxYPemiwvL-2PvOFsQedw1oGNABfJRTilnlAet-nlt3o_avlBPt44xvzOEGUve5aOraZ8Jp-Q2Ulycnf8r7iO_oeBeXTStGglxxRKVmRw&s=10" },
  { id: "4", title: "Forza Horizon 5", genre: "Course", platform: "Xbox", price: 49.99, image: "" },
  { id: "5", title: "Celeste", genre: "Plateforme", platform: "PC", price: 19.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp55c3bXIYrbQbcwBRINU4yLatuGFNA_O3Bhp3BR_9TWhbpZR0Ah3dcsJEJy5GdqE5AqIbHyZRTjE15PcSAIK0tiowcX7uFqLpSPguK96jXA&s=10" },
  { id: "6", title: "Stardew Valley", genre: "Simulation", platform: "Switch", price: 14.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMRCgU1yThY-bHetvCP-6edLutrfymn56cqATZBanfwbkYsy93X6XpN2vIMeKO_aHTqvR9UywekEWlNfK0jZswk1KyCBJ23Bzq8tZU3GfGHg&s=10" },
  { id: "7", title: "Elden Ring", genre: "RPG", platform: "PS5", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc3hekteuvNLEL1YcsRIZig26piNI2rB_9-4_t1I_3XGW4Ab64IWooWhspA9jSCLcbnUgZzr3bTgcWHdf2QaHGH6sFBhYuUQ3jDS9TVcVR&s=10" },
  { id: "8", title: "Hades", genre: "Roguelike", platform: "PC", price: 24.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzXQOgBmRxFZr3_BWuz23qq-GcKzt5W23vOWuhC34Pw&s=10" },
  { id: "9", title: "Mario Kart 8 Deluxe", genre: "Course", platform: "Switch", price: 49.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuKJFbleWBJybLndRLCxc8SUj7tNGSkcqNBkJcbTDFQ&s=10" },
  { id: "10", title: "Cyberpunk 2077", genre: "RPG", platform: "PC", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSST9ynVEN7OOTDGcAZ77jgm13DnwsblputSKmOhoAVfw&s" },
  { id: "11", title: "Halo Infinite", genre: "Action", platform: "Xbox", price: 39.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9lR6ZTZqmVn-nNfCn0aEBdZh1ekBBxRfq9S4X7u8Nbg&s" },
  { id: "12", title: "Spider-Man 2", genre: "Action", platform: "PS5", price: 69.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0g--O0bmV90GrpmUX7_-OI9MJALadRgQjeNPy6jiyg&s=10" },
  { id: "13", title: "Minecraft", genre: "Simulation", platform: "PC", price: 29.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQoApDK5-Eb15dkriejVf1RxBU05Z5sUrDwBqgc9-vkQ&s=10" },
  { id: "14", title: "Animal Crossing: New Horizons", genre: "Simulation", platform: "Switch", price: 54.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fqOGLdK_alNYpTCDLYsOLrNXfevf8OKS3fCIREy0VA&s=10" },
  { id: "15", title: "Gran Turismo 7", genre: "Course", platform: "PS5", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6Gx5eNMVkW67p5GWeCcpLTmtpiwcrlaUo9Zh76cUwQ&s=10" },
  { id: "16", title: "Ori and the Will of the Wisps", genre: "Plateforme", platform: "Xbox", price: 29.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKupviNHP6NHqf2MQAYmtLOvQCfIhkk7I4GPvGpOO__Q&s=10" },
  { id: "17", title: "Genshin Impact", genre: "RPG", platform: "Mobile", price: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuroQ3W0MGk8gunApSEpYUFtXGDWIEBSvN0hw3mbXTmQ&s=10" },
  { id: "18", title: "Hollow Knight: Silksong", genre: "Metroidvania", platform: "PC", price: 19.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTureDEsNsBZ7v3Wjf1vPzbjFA4JkO9RUqHrWss2xs95A&s=10" },
  { id: "19", title: "Fortnite", genre: "Action", platform: "Mobile", price: 0, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjFgb1khhUBNq7VVCbKQSunGx9OZxiyr6RIwuQhxcFdQ&s=10" },
  { id: "20", title: "Pokémon Écarlate", genre: "RPG", platform: "Switch", price: 59.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs9MVKrlMLNB0LFourtfW0FPqEGRs9CWsHsNjOtKKhXw&s=10" },
];

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    addGame: {
      reducer: (state, action) => { state.push(action.payload); },
      prepare: (game) => ({ payload: { ...game, id: nanoid(), price: Number(game.price) } }),
    },
    deleteGame: (state, action) => state.filter((g) => g.id !== action.payload),
    updateGame: (state, action) => {
      const i = state.findIndex((g) => g.id === action.payload.id);
      if (i !== -1) state[i] = { ...state[i], ...action.payload, price: Number(action.payload.price) };
    },
  },
});

export const { addGame, deleteGame, updateGame } = gamesSlice.actions;
export default gamesSlice.reducer;
