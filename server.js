import express from "express";
import { Nuxt, Builder } from "nuxt";

const app = express();

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 3001;

// Import and set Nuxt options
const config = require("./nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

const nuxt = new Nuxt(config);

// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt);
  builder.build();
}
require("./server/router")(app, renderPage);
// Give nuxt middleware to express
// app.use(nuxt.render);

// Start express server
app.listen(port, host);
/**
 * @function 服务端渲染
 */
function renderPage(req, res, path, params = {}) {
  return nuxt.render(req, res, path, params);
}
