
function updatePlayerPage(req, res){
    res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Update Player</title>
      </head>
      <body>
        <h1>Update Player</h1>
        <form id="updatePlayerForm">
          <label for="playerId">Enter Player ID:</label>
          <input type="text" id="playerId" name="playerId" required>
          <button type="submit">Submit</button>
        </form>

        <script>
          document.getElementById('updatePlayerForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            const playerId = document.getElementById('playerId').value.trim();
            if (playerId) {
              window.location.href = \`/updatePlayer?id=\${encodeURIComponent(playerId)}\`;
            } else {
              alert('Please enter a valid Player ID');
            }
          });
        </script>
      </body>
      </html>
    `);
  };

  export {updatePlayerPage}