const express = require('express');
const cors = require('cors');  // Add this line
const app = express();

// Enable CORS for all routes
app.use(cors());  // This will enable CORS for all routes
app.use(express.json());


let eliminationOpen = false;
let eliminationOpened = null;
let eliminationAnswers = [];

let vote = [0, 0, 0, 0];
let voting = false;

function info(message) {
    const now = new Date();
    const time = now.getHours().toString().padStart(2, '0') + ':' +
        now.getMinutes().toString().padStart(2, '0') + ':' +
        now.getSeconds().toString().padStart(2, '0');
    console.log(time + " : " + message);
}

// PUT - Open eliminations
app.put('/eliminations/open', (req, res) => {
    eliminationOpen = true;
    eliminationOpened = Date.now();
    res.json({ status: "ok", message: "Eliminacje otwarte" });
    info("Eliminacje otwarte");
});

// PUT - Close eliminations
app.put('/eliminations/close', (req, res) => {
    eliminationOpen = false;
    res.json({ status: "ok", message: "Eliminacje zamknięte" });
    info("Eliminacje zamknięte");
});

// DELETE - Reset answers
app.delete('/eliminations', (req, res) => {
    eliminationAnswers = [];
    res.json({ status: "ok", message: "Odpowiedzi wyczyszczone" });
    info("Odpowiedzi wyczyszczone");
});

// GET - Retrieve all answers
app.get('/eliminations', (req, res) => {
    res.json(eliminationAnswers);
    info("\n" + eliminationAnswers);
});


// POST - Submit new answer
app.post('/eliminations', (req, res) => {
    if (!eliminationOpen) {
        return res.status(403).json({ error: "Eliminacje są zamknięte" });
    }


    if (!req.body.name || !req.body.ans) {
        return res.status(400).json({ error: "Brak wymaganych pól: name, ans" });
    }

    const newAnswer = {
        name: req.body.name,
        ans: req.body.ans,
        time: Date.now() - eliminationOpened
    };

    eliminationAnswers.push(newAnswer);

    res.status(201).json(newAnswer);
});

//
//
//  VOTING
//
//

// PUT - open voting
app.put('/vote/open', (req, res) => {
    vote[0] = 0;
    vote[1] = 0;
    vote[2] = 0;
    vote[3] = 0;
    voting = true;
    res.json({ status: "ok", message: "Głosowanie otwarte" });
    info("Głosowanie otwarte");
});

// PUT - close voting
app.put('/vote/close', (req, res) => {
    voting = false;
    res.json({ status: "ok", message: "Głosowanie zamknięte" });
    info("Głosowanie zamknięte");
});

// GET - Get voting results
app.get('/vote', (req, res) => {

    const state = {
        answers: {
            a: vote[0],
            b: vote[1],
            c: vote[2],
            d: vote[3],
        },
    };
    res.json(state);
    info("\n" + state);
});
// POST - Submit new vote
app.post('/vote', (req, res) => {
    if (!voting) {
        return res.status(403).json({ error: "Głosowanie zamknięte" });
    }

    if (req.body.ans == 'a') {
        vote[0]++;
        console.log("a: " + vote[0]);
    }

    if (req.body.ans == 'b') {
        vote[1]++;
        console.log("b: " + vote[1]);
    }

    if (req.body.ans == 'c') {
        vote[2]++;
        console.log("c: " + vote[2]);
    }

    if (req.body.ans == 'd') {
        vote[3]++;
        console.log("c: " + vote[3]);
    }
});

// run server
app.listen(8200, () => {
    console.log('REST API server running on port 8200');
});
