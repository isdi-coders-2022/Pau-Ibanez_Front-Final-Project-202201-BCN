import { APIGame } from "./types/Game";
import Player from "./types/Player";
import { APIRoom } from "./types/Room";

export const localUser: Player = {
  profile: {
    friends: [],
    incomingRequests: [],
    stats: {
      sips: 312,
      games: 14,
    },
    avatar: {
      staticUrl: "https://url.com/image.png",
      backup: "https://url.com/image.png",
    },
    username: "local user",
  },
  id: "622f00e91e85099995d63b07",
};

export const APIGames: APIGame[] = [
  {
    name: "Piramide",
    gameInfo: {
      setup: "perpare cards xd",
      howToPlay: "playing",
    },
    drunkness: "high",
    duration: 30,
    minPlayers: 4,
    maxPlayers: 12,
    id: "asdasdas",
  },
  {
    name: "Remar",
    drunkness: "high",
    gameInfo: {
      setup: "perpare cards xd",
      howToPlay: "playing",
    },
    duration: 0,
    minPlayers: 0,
    maxPlayers: 0,
    id: "sada",
  },
];

export const APIRooms: APIRoom[] = [
  {
    players: [],
    id: "asdasd",
    game: APIGames[0],
    inGame: false,
    inLobby: true,
    isActive: true,
    leader: localUser,
  },
  {
    players: [],
    id: "asdasdsasda",
    game: APIGames[1],
    inGame: false,
    inLobby: true,
    isActive: true,
    leader: localUser,
  },
];
