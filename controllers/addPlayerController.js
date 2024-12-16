import writeDataDb from "../services/dataWriter.js";

async function addPlayer(req, res) {
    try {
        
        await writeDataDb(req.body)

        res.send(`
            <h1>Player Data Successfully Inserted!</h1>
          
            <form action="/add" method="get">
                <button type="submit">Insert Next</button><br>
            </form>
 
           <form id="checkDataForm">
           <h3>Check if Data is inserted or not</h3>
           <button type="button" onclick="window.location.href='/getPlayerData?id=${req.body.bioData_pid}'">Check</button>
           </form>


            <form action="/update" method="get">
                <h3>Update Existing Player's Data</h3> <button type="submit">Update</button><br>
            </form>
            <form action="/getPlayer" method="get">
                <h3>Get Data of Existing Player</h3><button type="submit">Search</button>
            </form>
            <form action="/delete" method="get">
                <h3>Delete Player Data</h3><button type="submit">Delete Page</button>
            </form>
            
        `);

    } catch (error) {
        console.error("Error writing player data to file:", error);
        res.status(500).send("Failed to insert player data.");
    }
}

export {addPlayer}