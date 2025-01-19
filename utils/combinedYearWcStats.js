const cheerio = require('cheerio');
const fs = require('fs');

async function dataWriter(yearStats) {
    fs.writeFileSync('combinedYearWcStats.json', JSON.stringify(yearStats, null, 2));
}

async function objectGenerator(yearData) {
    const result = {
        "odi": {
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

            if (format === "odi") {
                result.odi = { ...data };
            } 
        }
    }

    delete result.odi.format;

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

async function urlGenerator() {
    let url = [];
    
    url[0] = `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=11;template=results;trophy=12;type=aggregate`;
    url[1] = `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=1;template=results;trophy=12;type=aggregate`;
    url[2] = `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=2;template=results;trophy=12;type=aggregate`;
    url[3] = `https://stats.espncricinfo.com/ci/engine/stats/index.html?class=3;template=results;trophy=12;type=aggregate`;

    return url;
}

async function main() {

    let yearStats = [];
    
        const url = await urlGenerator();
        const html = await fetchUrl(url);
        const data = await extractData(html);
        const yearObject = await objectGenerator(data);
        yearStats.push(yearObject);

    await dataWriter(yearStats);
}

main();

module.exports = { main };