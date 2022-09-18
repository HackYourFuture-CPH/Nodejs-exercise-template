// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const port = process.env.PORT || 3000
const moviesRouter = require("./api/movies-router");
const snippetRouter = require("./api/snippet-router")
// This is where you want to create your is chrome browser middleware (second exercise)


app.get('/', (req, res) => {
  res.send('Hello Class!')
})


// app.use binds middleware to your application. You can give app.use a path and router. The mini router will take care of all requests with the path
app.use("/api/movies", moviesRouter);
app.use("/api/snippets", snippetRouter);

// For testing purposes only!! Used to check if the middleware function is implemented correctly
app.get("/middleware-test", async (request, response) => {
	//@ts-ignore
	response.send({ data: { "isChromeBrowser": request.isChromeBrowser } });
});
app.listen(port, () => {
	console.log(`Listening on port ${port}`)
  })
module.exports = app;
