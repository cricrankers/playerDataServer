import writeDataDb from "../services/dataWriter.js";

async function addPlayer(req, res) {
    try {
        
        await writeDataDb(req.body)

        res.send(`
            <h1>Player Data Successfully Inserted!</h1>
            <br>
            <form action="/add" method="get">
                <button type="submit">Next</button>
            </form>
        `);

    } catch (error) {
        console.error("Error writing player data to file:", error);
        res.status(500).send("Failed to insert player data.");
    }
}

export {addPlayer}