const { app } = require("./index");

app.get("/", (req, res) => {
    res.send("Server online. Make sure your ports are correct in '/scripts' - Made By Pearl");
});
