module.exports = function (app, renderPage) {
  app.get("/test", (req, res) => {
    renderPage(req, res, "pages/test.vue");
  });
};
