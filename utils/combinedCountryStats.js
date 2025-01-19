const cheerio = require('cheerio');
const fs = require('fs');

async function dataWriter(yearStats) {
    fs.writeFileSync('combinedCountryStats.json', JSON.stringify(yearStats, null, 2));
    console.log('Data saved to yearStats.json');
}

async function objectGenerator(yearData) {
    const result = {
        "allFormat": {
            "mat": "0",
            "runs": "0",
            "wkts": "0",
            "balls": "0",
            "ave": "0",
            "rpo": "0"
        },
        "test": {
            "mat": "0",
            "runs": "0",
            "wkts": "0",
            "balls": "0",
            "ave": "0",
            "rpo": "0"
        },
        "odi": {
            "mat": "0",
            "runs": "0",
            "wkts": "0",
            "balls": "0",
            "ave": "0",
            "rpo": "0"
        },
        "t20i": {
            "mat": "0",
            "runs": "0",
            "wkts": "0",
            "balls": "0",
            "ave": "0",
            "rpo": "0"
        }
    };

    for (let data of yearData) {
        if (data.mat && data.runs && data.wkts && data.balls) {
            const format = data.format;

            if (format === "allFormat") {
                result.allFormat = { ...data };
            } else if (format === "test") {
                result.test = { ...data };
            } else if (format === "odi") {
                result.odi = { ...data };
            } else if (format === "t20i") {
                result.t20i = { ...data };
            }
        }
    }

    delete result.allFormat.format;
    delete result.test.format;
    delete result.odi.format;
    delete result.t20i.format;

    return result;
}

async function extractData(html) {
    let data = [];
    const formats = ["allFormat", "test", "odi", "t20i"];
    
    for (let index = 0; index < html.length; index++) {
        const dom = html[index];
        const $ = cheerio.load(dom);
        const tables = $('table.engineTable');

        const targetTable = tables.toArray().find((table) => {
            const caption = $(table).find('caption').text().trim().toLowerCase();
            return caption === 'overall figures';
        });

        if (!targetTable) continue;

        const tableHeaders = $(targetTable).find('thead th');
        const tableRows = $(targetTable).find('tbody tr');

        tableRows.each((i, row) => {
            let rowData = {};
            const columns = $(row).find('td');
            tableHeaders.each((index, th) => {
                const headerText = $(th).text().trim().toLowerCase();
                let columnValue = $(columns[index]).text().trim();

                if (columnValue === '-' || columnValue === '') {
                    columnValue = null;
                }

                if (headerText && columnValue !== null) {
                    rowData[headerText] = columnValue;
                }
            });

            rowData.format = formats[index];
            data.push(rowData);
        });
    }

    return data;
}
async function fetchUrl(url) {
    const html = [];

    try {
        html[0] = await (await fetch(url[0])).text();
        html[1] = await (await fetch(url[1])).text();
        html[2] = await (await fetch(url[2])).text();
        html[3] = await (await fetch(url[3])).text();
    } catch (error) {
        console.error('Error fetching URLs:', error);
    }
    return html;
}

async function urlGenerator(team) {
    let teamId;

    if (team === "aus") teamId = 2;
    else if (team === "eng") teamId = 1;
    else if (team === "ind") teamId = 6;
    else if (team === "nz") teamId = 5;
    else if (team === "pak") teamId = 7;
    else if (team === "sa") teamId = 3;
    else if (team === "sl") teamId = 8;
    else if (team === "wi") teamId = 4;
    else if (team === "ban") teamId = 25;
    else if (team === "zim") teamId = 9;
    else if (team === "afg") teamId = 40;
    else if (team === "ire") teamId = 29;

    return [
        `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=11;host=${teamId};template=results;type=aggregate`,
        `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=1;host=${teamId};template=results;type=aggregate`,
        `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=2;host=${teamId};template=results;type=aggregate`,
        `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=3;host=${teamId};template=results;;type=aggregate`
    ];
}

async function main() {
    const teams = ["aus", "eng", "ind", "nz", "pak", "sa", "sl", "wi", "ban", "zim", "afg", "ire"];
    const teamStats = [];

    for (let team of teams) {
        const yearStats = [];
            const url = await urlGenerator(team);
            const html = await fetchUrl(url);
            const data = await extractData(html);
            const yearObject = await objectGenerator(data, team);
            yearStats.push(yearObject);
            console.log(`Processed data for team: ${team}`);
        

        teamStats.push({ team, stats: yearStats });
    }

    await dataWriter(teamStats);
}

main();

module.exports = { main };