const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (CSS, images if needed)
app.use(express.static('public'));

// Dashboard route
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Hendwrick's Dashboard</title>
            <style>
                body { font-family: Arial; background: #f4f4f4; text-align: center; padding: 50px; }
                .card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); display: inline-block; }
                h1 { color: #2c3e50; }
                p { color: #34495e; font-size: 18px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>🚀 Welcome to Hendwrick's Dashboard</h1>
                <p><strong>Name:</strong> Hendwrick Gonzales</p>
                <p><strong>Role:</strong> Software Engineer / DevOps</p>
                <p><strong>Fun fact:</strong> I love experimenting with CI/CD pipelines!</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Dashboard running at http://localhost:${port}`);
});
