import * as express from 'express';
import * as fs from 'fs';
const app = express();

let visitors: number;
fs.readFile("./visitors.json", "utf8", (err, data) => {
        if (err) {
                visitors = 0;
        } else {
                const parsedData = JSON.parse(data)

                visitors = parseInt(parsedData.visitors);
        }
})


app.use(express.static('public'))
app.get('/', (req, res) => {
        console.log(req.headers);
        visitors++;
        console.log("count: ", visitors);
        fs.writeFile("./visitors.json", JSON.stringify({
                "visitors": visitors
        }), (err) => {
                if (err) {
                        console.log(err);
                }
        });
        return res.sendFile(__dirname + "/index.html")
})
app.listen(8077, () => console.log('Listening on port 8000!'))
