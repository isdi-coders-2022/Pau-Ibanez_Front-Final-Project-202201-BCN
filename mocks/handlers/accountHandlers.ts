import { rest } from "msw";
import { mockUrls } from "../mockUrls";

export const accountHandlers = [
  rest.post(
    `${process.env.NEXT_PUBLIC_API_URL}accounts/register`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({}));
    }
  ),

  rest.post(`${mockUrls.failEmail}accounts/register`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: true,
        message: "email",
      })
    );
  }),

  rest.post(`${mockUrls.failUsername}accounts/register`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: true,
        message: "username",
      })
    );
  }),

  rest.post(`${mockUrls.failPassword}accounts/register`, (req, res, ctx) => {
    return res(
      ctx.status(400),
      ctx.json({
        error: true,
        message: "The password must be at lease 8 characters long",
      })
    );
  }),

  rest.get(
    `${process.env.NEXT_PUBLIC_API_URL}accounts/activate/token`,
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({}));
    }
  ),

  rest.get(
    `${process.env.NEXT_PUBLIC_API_URL}accounts/activate/invalidToken`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          error: true,
          message: "error message",
        })
      );
    }
  ),

  rest.post(
    `${process.env.NEXT_PUBLIC_API_URL}accounts/login`,
    (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({ token: "token" }));
    }
  ),
];
