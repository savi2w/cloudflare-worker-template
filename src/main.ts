import { Hono } from "hono";

const app = new Hono<{ Bindings: Bindings }>();

app.get("/", async (c) => {
  return c.json({ message: "OK" });
});

export default app;
