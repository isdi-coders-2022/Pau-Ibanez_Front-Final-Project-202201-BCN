import { rest } from "msw";
import { APIGames, APIRooms } from "../SharedTestObjects";

export const handlers = [
  //GAMES ===========================================================
  rest.get(`${process.env.NEXT_PUBLIC_API_URL}games/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        games: APIGames,
      })
    );
  }),

  rest.get(`http://fail-request/games/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        error: true,
      })
    );
  }),

  //ROOMS ===========================================================

  rest.get(`${process.env.NEXT_PUBLIC_API_URL}rooms/list`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        rooms: APIRooms,
      })
    );
  }),

  rest.get(`http://fail-request/rooms/list`, (req, res, ctx) => {
    return res(
      ctx.status(500),
      ctx.json({
        error: true,
      })
    );
  }),

  rest.post(
    `${process.env.NEXT_PUBLIC_API_URL}rooms/create`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(APIRooms[0]));
    }
  ),

  rest.post(`http://fail-request/rooms/create`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: true,
      })
    );
  }),

  rest.delete(
    `${process.env.NEXT_PUBLIC_API_URL}rooms/delete`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({}));
    }
  ),

  rest.delete(`http://fail-request/rooms/delete`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: true,
      })
    );
  }),

  //USERS ===========================================================

  rest.post(
    `${process.env.NEXT_PUBLIC_API_URL}accounts/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(APIRooms[0]));
    }
  ),

  rest.post(`http://fail-request/accounts/register`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: true,
        message: "error msg",
      })
    );
  }),
];
