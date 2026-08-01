const express = require("express");
const cors = require("cors");

const homeRoutes = require("./routes/homeRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", homeRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});