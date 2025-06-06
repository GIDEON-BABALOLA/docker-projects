const express = require("express")
const app = express();
const path = require("path")
const PORT = 3000
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html" ))
})
app.listen(PORT, () => {
    console.log(`server is always running on port ${PORT}`)
})