const app = require('http')
    .createServer((req, res) => res.send('oh hi there!'));

const DATABASE_URL = process.env.DATABASE_URL;

app.listen(3000, () => {
    console.log(`Server is listening on port ${DATABASE_URL}`);
})

console.log(3000);