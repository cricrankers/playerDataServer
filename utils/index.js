const combinedCountryStatsMain = require("./combinedCountryStats.js").main;
const combinedTeamStatsMain = require("./combinedTeamStats.js").main;
const combinedTeamT20WcStatsMain = require("./combinedTeamT20WcStats.js").main;
const combinedTeamWcStatsMain = require("./combinedTeamWcStats.js").main;
const combinedYearStatsMain = require("./combinedYearStats.js").main;
const combinedYearT20WcStatsMain = require("./combinedYearT20WcStats.js").main;
const combinedYearWcStatsMain = require("./combinedYearWcStats.js").main;
const countryStatsMain = require("./countryStats.js").main;
const teamStatsMain = require("./teamStats.js").main;
const teamT20WcStatsMain = require("./teamT20WcStats.js").main;
const teamWcStatsMain = require("./teamWcStats.js").main;
const yearStats = require("./yearStats.js").main;
const yearT20WcStats = require("./yearT20WcStats.js").main;
const yearWcStats = require("./yearWcStats.js").main;

async function runAll() {
    await combinedCountryStatsMain();
    await combinedTeamStatsMain();
    await combinedTeamT20WcStatsMain();
    await combinedTeamWcStatsMain();
    await combinedYearStatsMain();
    await combinedYearT20WcStatsMain();
    await combinedYearWcStatsMain();
    await countryStatsMain();
    await teamStatsMain();
    await teamT20WcStatsMain();
    await teamWcStatsMain();
    await yearStats();
    await yearT20WcStats();
    await yearWcStats();
}

runAll();
