import * as express from 'express';
import * as fs from 'fs';
import * as bodyParser from "body-parser";

const app = express();

interface IComments {
        id: number;
        name: string;
        email: string;
        message: string;
        time: string;
};

let visitors: number = 0;
let comments: IComments[] = [];
fs.readFile("./visitors.json", "utf8", (err, data) => {
        if (err) {
                return;
        } else {
                const parsedData = JSON.parse(data)

                visitors = parseInt(parsedData.visitors);
        }
})
fs.readFile("./comments.json", "utf8", (err, data) => {
        if (err) {
                return;
        } else {
                const parsedData = JSON.parse(data)

                comments = parsedData.comments;
        }
})


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
        console.log(req.headers);
        visitors++;
        console.log("count: ", visitors);
        fs.writeFileSync("./visitors.json", JSON.stringify({
                "visitors": visitors
        }))
        return res.sendFile(__dirname + "/index.html")
});

app.post('/comment', (req, res) => {
        const newComment: IComments = {
                id: comments.length,
                name: req.body.name,
                email: req.body.email,
                message: req.body.message,
                time: new Date(Date.now()).toLocaleString(),
        };
        console.log(newComment);
        comments.push(newComment);
        fs.writeFile("./comments.json", JSON.stringify({
                "comments": comments
        }), (err) => {
                if (err) {
                        return res.sendStatus(500);
                } else {
                        return res.sendStatus(200)
                }
        });
});

app.listen(8077, () => console.log('Listening on port 8077!'))
