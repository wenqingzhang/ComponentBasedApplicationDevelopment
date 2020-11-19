import express from 'express';
import path from "path";

// rest of the code remains same
const app = express();
const PORT = 8000;

// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    // render the index template
    res.render("index");
});

app.get('/auth/login', (req, res) => {
    res.render("login");
})

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
