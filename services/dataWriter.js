import path from 'path';
import { fileURLToPath } from 'url';
import fsModule from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATABASE_FILE_PATH = path.resolve(__dirname, '../utils/playersDatabase.json');
const PLAYER_LIST_FILE_PATH = path.resolve(__dirname, '../utils/playerList.json');

async function ensureFileExists(filePath, defaultValue = '{}') {
  try {
    await fsModule.access(filePath);
  } catch (err) {
    if (err.code === 'ENOENT') {

    await fsModule.writeFile(filePath, defaultValue);
    } else {
      throw err; 
    }
  }
}

async function readJsonFile(filePath) {
  await ensureFileExists(filePath);
  const data = await fsModule.readFile(filePath, 'utf-8');
  return data.trim() ? JSON.parse(data) : {};
}

//helperFunction
async function generateYearObject(yearId, startYear, endYear, data) {
    let j = 0;
    let yearArr = [];
    
    for (let i = startYear; i <= endYear; i++) {
        yearArr[j] = {
            year: `${i}`,
            matches: data[`${yearId}_${i}_matches`],
            innings: data[`${yearId}_${i}_innings`],
            runs: data[`${yearId}_${i}_runs`],
            average: data[`${yearId}_${i}_average`],
            strikeRate: data[`${yearId}_${i}_strikeRate`],
            fifties: data[`${yearId}_${i}_fifties`],
            hundreds: data[`${yearId}_${i}_hundreds`],
        };
        j++;
    }
    return yearArr;
}


async function writeDataDb(data) {

    
 
    const playerId = data.bioData_pid;

    const bioData = {
        id: data.bioData_pid,
        name: data.bioData_pname,
        displayName: data.bioData_dname,
        country: data.bioData_country,
        insertedAt: Date.now(),
        updatedAt: '',
    };
      
    const careerStats = {
        debutYear: data.allFormatCareerStats_debut,
        lastPlayedYear: data.allFormatCareerStats_last_played,
        matches: data.allFormatCareerStats_matches,
        innings: data.allFormatCareerStats_innings,
        runs: data.allFormatCareerStats_runs,
        average: data.allFormatCareerStats_average,
        strikeRate: data.allFormatCareerStats_strikeRate,
        fifties: data.allFormatCareerStats_fifties,
        hundreds: data.allFormatCareerStats_hundreds,
    };
      
    const awayStats = {
        matches: data.allFormatAwayStats_matches,
        innings: data.allFormatAwayStats_innings,
        runs: data.allFormatAwayStats_runs,
        average: data.allFormatAwayStats_average,
        strikeRate: data.allFormatAwayStats_strikeRate,
        fifties: data.allFormatAwayStats_fifties,
        hundreds: data.allFormatAwayStats_hundreds,
    };
      
    const winsStats = {
        matches: data.allFormatWinsStats_matches,
        innings: data.allFormatWinsStats_innings,
        runs: data.allFormatWinsStats_runs,
        average: data.allFormatWinsStats_average,
        strikeRate: data.allFormatWinsStats_strikeRate,
        fifties: data.allFormatWinsStats_fifties,
        hundreds: data.allFormatWinsStats_hundreds,
    };
    
    const lostStats = {
        matches: data.allFormatLostStats_matches,
        innings: data.allFormatLostStats_innings,
        runs: data.allFormatLostStats_runs,
        average: data.allFormatLostStats_average,
        strikeRate: data.allFormatLostStats_strikeRate,
        fifties: data.allFormatLostStats_fifties,
        hundreds: data.allFormatLostStats_hundreds,
    };
      
    const allFormatOppStatsAus = {
        matches: data.allFormatOppStatsAus_matches,
        innings: data.allFormatOppStatsAus_innings,
        runs: data.allFormatOppStatsAus_runs,
        average: data.allFormatOppStatsAus_average,
        strikeRate: data.allFormatOppStatsAus_strikeRate,
        fifties: data.allFormatOppStatsAus_fifties,
        hundreds: data.allFormatOppStatsAus_hundreds,
    };
     
    const allFormatOppStatsEng = {
        matches: data.allFormatOppStatsEng_matches,
        innings: data.allFormatOppStatsEng_innings,
        runs: data.allFormatOppStatsEng_runs,
        average: data.allFormatOppStatsEng_average,
        strikeRate: data.allFormatOppStatsEng_strikeRate,
        fifties: data.allFormatOppStatsEng_fifties,
        hundreds: data.allFormatOppStatsEng_hundreds,
    };

    const allFormatOppStatsNz = {
        matches: data.allFormatOppStatsNz_matches,
        innings: data.allFormatOppStatsNz_innings,
        runs: data.allFormatOppStatsNz_runs,
        average: data.allFormatOppStatsNz_average,
        strikeRate: data.allFormatOppStatsNz_strikeRate,
        fifties: data.allFormatOppStatsNz_fifties,
        hundreds: data.allFormatOppStatsNz_hundreds,
    };
 
    const allFormatOppStatsSa = {
        matches: data.allFormatOppStatsSa_matches,
        innings: data.allFormatOppStatsSa_innings,
        runs: data.allFormatOppStatsSa_runs,
        average: data.allFormatOppStatsSa_average,
        strikeRate: data.allFormatOppStatsSa_strikeRate,
        fifties: data.allFormatOppStatsSa_fifties,
        hundreds: data.allFormatOppStatsSa_hundreds,
    };
      
    const allFormatOppStatsInd = {
        matches: data.allFormatOppStatsInd_matches,
        innings: data.allFormatOppStatsInd_innings,
        runs: data.allFormatOppStatsInd_runs,
        average: data.allFormatOppStatsInd_average,
        strikeRate: data.allFormatOppStatsInd_strikeRate,
        fifties: data.allFormatOppStatsInd_fifties,
        hundreds: data.allFormatOppStatsInd_hundreds,
    };

    const allFormatOppStatsPak = {
        matches: data.allFormatOppStatsPak_matches,
        innings: data.allFormatOppStatsPak_innings,
        runs: data.allFormatOppStatsPak_runs,
        average: data.allFormatOppStatsPak_average,
        strikeRate: data.allFormatOppStatsPak_strikeRate,
        fifties: data.allFormatOppStatsPak_fifties,
        hundreds: data.allFormatOppStatsPak_hundreds,
    };

    const allFormatOppStatsBan = {
        matches: data.allFormatOppStatsBan_matches,
        innings: data.allFormatOppStatsBan_innings,
        runs: data.allFormatOppStatsBan_runs,
        average: data.allFormatOppStatsBan_average,
        strikeRate: data.allFormatOppStatsBan_strikeRate,
        fifties: data.allFormatOppStatsBan_fifties,
        hundreds: data.allFormatOppStatsBan_hundreds,
    };

    const allFormatOppStatsSl = {
        matches: data.allFormatOppStatsSl_matches,
        innings: data.allFormatOppStatsSl_innings,
        runs: data.allFormatOppStatsSl_runs,
        average: data.allFormatOppStatsSl_average,
        strikeRate: data.allFormatOppStatsSl_strikeRate,
        fifties: data.allFormatOppStatsSl_fifties,
        hundreds: data.allFormatOppStatsSl_hundreds,
    };
  
    const allFormatOppStatsWi = {
        matches: data.allFormatOppStatsWi_matches,
        innings: data.allFormatOppStatsWi_innings,
        runs: data.allFormatOppStatsWi_runs,
        average: data.allFormatOppStatsWi_average,
        strikeRate: data.allFormatOppStatsWi_strikeRate,
        fifties: data.allFormatOppStatsWi_fifties,
        hundreds: data.allFormatOppStatsWi_hundreds,
     };

    const allFormatOppStatsIre = {
        matches: data.allFormatOppStatsIre_matches,
        innings: data.allFormatOppStatsIre_innings,
        runs: data.allFormatOppStatsIre_runs,
        average: data.allFormatOppStatsIre_average,
        strikeRate: data.allFormatOppStatsIre_strikeRate,
        fifties: data.allFormatOppStatsIre_fifties,
        hundreds: data.allFormatOppStatsIre_hundreds,
    };
    
    const allFormatOppStatsAfg = {
        matches: data.allFormatOppStatsAfg_matches,
        innings: data.allFormatOppStatsAfg_innings,
        runs: data.allFormatOppStatsAfg_runs,
        average: data.allFormatOppStatsAfg_average,
        strikeRate: data.allFormatOppStatsAfg_strikeRate,
        fifties: data.allFormatOppStatsAfg_fifties,
        hundreds: data.allFormatOppStatsAfg_hundreds,
    };
 
    const allFormatOppStatsZim = {
        matches: data.allFormatOppStatsZim_matches,
        innings: data.allFormatOppStatsZim_innings,
        runs: data.allFormatOppStatsZim_runs,
        average: data.allFormatOppStatsZim_average,
        strikeRate: data.allFormatOppStatsZim_strikeRate,
        fifties: data.allFormatOppStatsZim_fifties,
        hundreds: data.allFormatOppStatsZim_hundreds,
    };
      
    const allFormatVenueStatsAus = {
        matches: data.allFormatVenueStatsAus_matches,
        innings: data.allFormatVenueStatsAus_innings,
        runs: data.allFormatVenueStatsAus_runs,
        average: data.allFormatVenueStatsAus_average,
        strikeRate: data.allFormatVenueStatsAus_strikeRate,
        fifties: data.allFormatVenueStatsAus_fifties,
        hundreds: data.allFormatVenueStatsAus_hundreds,
    };
      
    const allFormatVenueStatsEng = {
        matches: data.allFormatVenueStatsEng_matches,
        innings: data.allFormatVenueStatsEng_innings,
        runs: data.allFormatVenueStatsEng_runs,
        average: data.allFormatVenueStatsEng_average,
        strikeRate: data.allFormatVenueStatsEng_strikeRate,
        fifties: data.allFormatVenueStatsEng_fifties,
        hundreds: data.allFormatVenueStatsEng_hundreds,
    };
       
    const allFormatVenueStatsNz = {
        matches: data.allFormatVenueStatsNz_matches,
        innings: data.allFormatVenueStatsNz_innings,
        runs: data.allFormatVenueStatsNz_runs,
        average: data.allFormatVenueStatsNz_average,
        strikeRate: data.allFormatVenueStatsNz_strikeRate,
        fifties: data.allFormatVenueStatsNz_fifties,
        hundreds: data.allFormatVenueStatsNz_hundreds,
    };
      
    const allFormatVenueStatsSa = {
        matches: data.allFormatVenueStatsSa_matches,
        innings: data.allFormatVenueStatsSa_innings,
        runs: data.allFormatVenueStatsSa_runs,
        average: data.allFormatVenueStatsSa_average,
        strikeRate: data.allFormatVenueStatsSa_strikeRate,
        fifties: data.allFormatVenueStatsSa_fifties,
        hundreds: data.allFormatVenueStatsSa_hundreds,
    };
      
    const allFormatVenueStatsInd = {
        matches: data.allFormatVenueStatsInd_matches,
        innings: data.allFormatVenueStatsInd_innings,
        runs: data.allFormatVenueStatsInd_runs,
        average: data.allFormatVenueStatsInd_average,
        strikeRate: data.allFormatVenueStatsInd_strikeRate,
        fifties: data.allFormatVenueStatsInd_fifties,
        hundreds: data.allFormatVenueStatsInd_hundreds,
    };

    const allFormatVenueStatsPak = {
        matches: data.allFormatVenueStatsPak_matches,
        innings: data.allFormatVenueStatsPak_innings,
        runs: data.allFormatVenueStatsPak_runs,
        average: data.allFormatVenueStatsPak_average,
        strikeRate: data.allFormatVenueStatsPak_strikeRate,
        fifties: data.allFormatVenueStatsPak_fifties,
        hundreds: data.allFormatVenueStatsPak_hundreds,
    };

    const allFormatVenueStatsBan = {
        matches: data.allFormatVenueStatsBan_matches,
        innings: data.allFormatVenueStatsBan_innings,
        runs: data.allFormatVenueStatsBan_runs,
        average: data.allFormatVenueStatsBan_average,
        strikeRate: data.allFormatVenueStatsBan_strikeRate,
        fifties: data.allFormatVenueStatsBan_fifties,
        hundreds: data.allFormatVenueStatsBan_hundreds,
    };

    const allFormatVenueStatsSl = {
        matches: data.allFormatVenueStatsSl_matches,
        innings: data.allFormatVenueStatsSl_innings,
        runs: data.allFormatVenueStatsSl_runs,
        average: data.allFormatVenueStatsSl_average,
        strikeRate: data.allFormatVenueStatsSl_strikeRate,
        fifties: data.allFormatVenueStatsSl_fifties,
        hundreds: data.allFormatVenueStatsSl_hundreds,
    };
               
    const allFormatVenueStatsWi = {
        matches: data.allFormatVenueStatsWi_matches,
        innings: data.allFormatVenueStatsWi_innings,
        runs: data.allFormatVenueStatsWi_runs,
        average: data.allFormatVenueStatsWi_average,
        strikeRate: data.allFormatVenueStatsWi_strikeRate,
        fifties: data.allFormatVenueStatsWi_fifties,
        hundreds: data.allFormatVenueStatsWi_hundreds,
    };
    
    const allFormatVenueStatsIre = {
        matches: data.allFormatVenueStatsIre_matches,
        innings: data.allFormatVenueStatsIre_innings,
        runs: data.allFormatVenueStatsIre_runs,
        average: data.allFormatVenueStatsIre_average,
        strikeRate: data.allFormatVenueStatsIre_strikeRate,
        fifties: data.allFormatVenueStatsIre_fifties,
        hundreds: data.allFormatVenueStatsIre_hundreds,
    };
      
    const allFormatVenueStatsZim = {
        matches: data.allFormatVenueStatsZim_matches,
        innings: data.allFormatVenueStatsZim_innings,
        runs: data.allFormatVenueStatsZim_runs,
        average: data.allFormatVenueStatsZim_average,
        strikeRate: data.allFormatVenueStatsZim_strikeRate,
        fifties: data.allFormatVenueStatsZim_fifties,
        hundreds: data.allFormatVenueStatsZim_hundreds,
    };
    
   

    const allFormatYearSpan = {
        debutYear: data.allFormatYearStats_debut_year,
        lastYear: data.allFormatYearStats_last_year,
    };
     

    const yearStatsArr = await generateYearObject('allFormatYearStats',allFormatYearSpan.debutYear,allFormatYearSpan.lastYear,data);
    
    const playerData = {
        bioData: { ...bioData },
        careerStats: { ...careerStats },
        awayStats: { ...awayStats },
        winsStats: { ...winsStats },
        lostStats: { ...lostStats },
        opponentStats: {
            aus: { ...allFormatOppStatsAus },
            eng: { ...allFormatOppStatsEng },
            nz: { ...allFormatOppStatsNz },
            sa: { ...allFormatOppStatsSa },
            ind: { ...allFormatOppStatsInd },
            pak: { ...allFormatOppStatsPak },
            ban: { ...allFormatOppStatsBan },
            sl: { ...allFormatOppStatsSl },
            wi: { ...allFormatOppStatsWi },
            ire: { ...allFormatOppStatsIre },
            afg: { ...allFormatOppStatsAfg },
            zim: { ...allFormatOppStatsZim },
        },
        venueStats: {
            aus: { ...allFormatVenueStatsAus },
            eng: { ...allFormatVenueStatsEng },
            nz: { ...allFormatVenueStatsNz },
            sa: { ...allFormatVenueStatsSa },
            ind: { ...allFormatVenueStatsInd },
            pak: { ...allFormatVenueStatsPak },
            ban: { ...allFormatVenueStatsBan },
            sl: { ...allFormatVenueStatsSl },
            wi: { ...allFormatVenueStatsWi },
            ire: { ...allFormatVenueStatsIre },
            zim: { ...allFormatVenueStatsZim },
        },
        yearStats: { 
            yearSpan: { ...allFormatYearSpan }, 
            stats: [...yearStatsArr]
        }
    };
    
    

      
  // Read player list file
  const playerList = await readJsonFile(PLAYER_LIST_FILE_PATH);

  if (!playerList[playerId]) {
    console.error(`Player ID ${playerId} not found in the player list.`);
    
  }

  // Read the main database file
  const database = await readJsonFile(DATABASE_FILE_PATH);

  // Add player data to the database
  database[playerId] = playerData;

  // Write the updated database back to file
  await fsModule.writeFile(DATABASE_FILE_PATH, JSON.stringify(database, null, 2));

  // Update the player list to mark the player as inserted
  playerList[playerId].inserted = true;

  // Write the updated player list back to file
  await fsModule.writeFile(PLAYER_LIST_FILE_PATH, JSON.stringify(playerList, null, 2));

  console.log(`Player with ID ${playerId} successfully added to the database and marked as inserted.`);
}

export default writeDataDb;
