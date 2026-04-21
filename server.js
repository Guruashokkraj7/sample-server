const express = require("express");
const app = express();
const PORT = 3000;

// Parse JSON (Postman)
app.use(express.json());

// Parse form submissions (HTML forms)
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
    console.log("BODY:", req.body);

    const { email, password } = req.body || {};

    if (!email || !password) {
        return res.status(400).send("Missing email or password");
    }

    console.log("Email:", email);
    console.log("Password:", password);

    res.send("Form submitted successfully");
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));