const cheerio = require('cheerio');
const fs = require('fs');

async function dataWriter(yearStats) {
    fs.writeFileSync('combinedTeamWcStats.json', JSON.stringify(yearStats, null, 2));
    console.log('Data saved to teamStats.json');
}

async function objectGenerator(yearData,team) {
    const defaultStats = {
        team: team,
        mat: "0",
        won: "0",
        lost: "0",
        tied: "0",
        draw: "0",
        "w/l": "0.00",
        ave: "0.00",
        rpo: "0.00",
        inns: "0",
        hs: "0",
        ls: "0"
    };

    const result = {
        odi: { ...defaultStats },
    };

    for (let data of yearData) {
        if (data.format) {
            const format = data.format;
            result[format] = {
                team: data.team || defaultStats.team,
                span: data.span || defaultStats.span,
                mat: data.mat || defaultStats.mat,
                won: data.won || defaultStats.won,
                lost: data.lost || defaultStats.lost,
                tied: data.tied || defaultStats.tied,
                draw: data.draw || defaultStats.draw,
                "w/l": data["w/l"] || defaultStats["w/l"],
                ave: data.ave || defaultStats.ave,
                rpo: data.rpo || defaultStats.rpo,
                inns: data.inns || defaultStats.inns,
                hs: data.hs || defaultStats.hs,
                ls: data.ls || defaultStats.ls
            };
        }
    }

    return result;
}

async function extractData(html) {
    let data = [];
    const formats = ["odi"];

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

                if ($(columns[index]).find('a').length) {
                    columnValue = $(columns[index]).find('a').text().trim();
                }

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
        for (let i = 0; i < url.length; i++) {
            html[i] = await (await fetch(url[i])).text();
        }
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
        `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=11;team=${teamId};template=results;trophy=12;type=team`,
        `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=1;team=${teamId};template=results;trophy=12;type=team`,
        `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=2;team=${teamId};template=results;trophy=12;type=team`,
        `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=3;team=${teamId};template=results;trophy=12;type=team`
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
            const yearObject = await objectGenerator(data,team);
            yearStats.push(yearObject);
            console.log(team);

            teamStats.push({ team, stats: yearStats });

        }

        await dataWriter(teamStats);

    }



main();

module.exports = { main };