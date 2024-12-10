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

async function getSetAllFormatData(data){

    
      
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
    
    let allFormatData = {
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
    }
    return allFormatData;
} 

async function getSetTestFormatData(data){

    const testCareerStats = {
        debutYear: data.testCareerStats_debut,
        lastPlayedYear: data.testCareerStats_last_played,
        matches: data.testCareerStats_matches,
        innings: data.testCareerStats_innings,
        runs: data.testCareerStats_runs,
        average: data.testCareerStats_average,
        strikeRate: data.testCareerStats_strikeRate,
        fifties: data.testCareerStats_fifties,
        hundreds: data.testCareerStats_hundreds,
    };
    
    const testHomeStats = {
        matches: data.testHomeStats_matches,
        innings: data.testHomeStats_innings,
        runs: data.testHomeStats_runs,
        average: data.testHomeStats_average,
        strikeRate: data.testHomeStats_strikeRate,
        fifties: data.testHomeStats_fifties,
        hundreds: data.testHomeStats_hundreds,
    };
 
    const testAwayStats = {
        matches: data.testAwayStats_matches,
        innings: data.testAwayStats_innings,
        runs: data.testAwayStats_runs,
        average: data.testAwayStats_average,
        strikeRate: data.testAwayStats_strikeRate,
        fifties: data.testAwayStats_fifties,
        hundreds: data.testAwayStats_hundreds,
    };
  
    const testWinsStats = {
        matches: data.testWinsStats_matches,
        innings: data.testWinsStats_innings,
        runs: data.testWinsStats_runs,
        average: data.testWinsStats_average,
        strikeRate: data.testWinsStats_strikeRate,
        fifties: data.testWinsStats_fifties,
        hundreds: data.testWinsStats_hundreds,
    };
 
    const testLostStats = {
        matches: data.testLostStats_matches,
        innings: data.testLostStats_innings,
        runs: data.testLostStats_runs,
        average: data.testLostStats_average,
        strikeRate: data.testLostStats_strikeRate,
        fifties: data.testLostStats_fifties,
        hundreds: data.testLostStats_hundreds,
    };
    
    const testDrawStats = {
        matches: data.testDrawStats_matches,
        innings: data.testDrawStats_innings,
        runs: data.testDrawStats_runs,
        average: data.testDrawStats_average,
        strikeRate: data.testDrawStats_strikeRate,
        fifties: data.testDrawStats_fifties,
        hundreds: data.testDrawStats_hundreds,
    };
    
    const test1stInnStats = {
        matches: data.test1stInnStats_matches,
        innings: data.test1stInnStats_innings,
        runs: data.test1stInnStats_runs,
        average: data.test1stInnStats_average,
        strikeRate: data.test1stInnStats_strikeRate,
        fifties: data.test1stInnStats_fifties,
        hundreds: data.test1stInnStats_hundreds,
    };
    
    const test2ndInnStats = {
        matches: data.test2ndInnStats_matches,
        innings: data.test2ndInnStats_innings,
        runs: data.test2ndInnStats_runs,
        average: data.test2ndInnStats_average,
        strikeRate: data.test2ndInnStats_strikeRate,
        fifties: data.test2ndInnStats_fifties,
        hundreds: data.test2ndInnStats_hundreds,
    };
    
    const test3rdInnStats = {
        matches: data.test3rdInnStats_matches,
        innings: data.test3rdInnStats_innings,
        runs: data.test3rdInnStats_runs,
        average: data.test3rdInnStats_average,
        strikeRate: data.test3rdInnStats_strikeRate,
        fifties: data.test3rdInnStats_fifties,
        hundreds: data.test3rdInnStats_hundreds,
    };
    
    const test4thInnStats = {
        matches: data.test4thInnStats_matches,
        innings: data.test4thInnStats_innings,
        runs: data.test4thInnStats_runs,
        average: data.test4thInnStats_average,
        strikeRate: data.test4thInnStats_strikeRate,
        fifties: data.test4thInnStats_fifties,
        hundreds: data.test4thInnStats_hundreds,
    };
    
    const testOppStatsEng = {
        matches: data.testOppStatsEng_matches,
        innings: data.testOppStatsEng_innings,
        runs: data.testOppStatsEng_runs,
        average: data.testOppStatsEng_average,
        strikeRate: data.testOppStatsEng_strikeRate,
        fifties: data.testOppStatsEng_fifties,
        hundreds: data.testOppStatsEng_hundreds,
    };
    
    const testOppStatsNz = {
        matches: data.testOppStatsNz_matches,
        innings: data.testOppStatsNz_innings,
        runs: data.testOppStatsNz_runs,
        average: data.testOppStatsNz_average,
        strikeRate: data.testOppStatsNz_strikeRate,
        fifties: data.testOppStatsNz_fifties,
        hundreds: data.testOppStatsNz_hundreds,
    };
    
    const testOppStatsSa = {
        matches: data.testOppStatsSa_matches,
        innings: data.testOppStatsSa_innings,
        runs: data.testOppStatsSa_runs,
        average: data.testOppStatsSa_average,
        strikeRate: data.testOppStatsSa_strikeRate,
        fifties: data.testOppStatsSa_fifties,
        hundreds: data.testOppStatsSa_hundreds,
    };
    
    const testOppStatsInd = {
        matches: data.testOppStatsInd_matches,
        innings: data.testOppStatsInd_innings,
        runs: data.testOppStatsInd_runs,
        average: data.testOppStatsInd_average,
        strikeRate: data.testOppStatsInd_strikeRate,
        fifties: data.testOppStatsInd_fifties,
        hundreds: data.testOppStatsInd_hundreds,
    };
    
    const testOppStatsPak = {
        matches: data.testOppStatsPak_matches,
        innings: data.testOppStatsPak_innings,
        runs: data.testOppStatsPak_runs,
        average: data.testOppStatsPak_average,
        strikeRate: data.testOppStatsPak_strikeRate,
        fifties: data.testOppStatsPak_fifties,
        hundreds: data.testOppStatsPak_hundreds,
    };
    
    const testOppStatsBan = {
        matches: data.testOppStatsBan_matches,
        innings: data.testOppStatsBan_innings,
        runs: data.testOppStatsBan_runs,
        average: data.testOppStatsBan_average,
        strikeRate: data.testOppStatsBan_strikeRate,
        fifties: data.testOppStatsBan_fifties,
        hundreds: data.testOppStatsBan_hundreds,
    };
   
    const testOppStatsSl = {
        matches: data.testOppStatsSl_matches,
        innings: data.testOppStatsSl_innings,
        runs: data.testOppStatsSl_runs,
        average: data.testOppStatsSl_average,
        strikeRate: data.testOppStatsSl_strikeRate,
        fifties: data.testOppStatsSl_fifties,
        hundreds: data.testOppStatsSl_hundreds,
    };
    
    const testOppStatsWi = {
        matches: data.testOppStatsWi_matches,
        innings: data.testOppStatsWi_innings,
        runs: data.testOppStatsWi_runs,
        average: data.testOppStatsWi_average,
        strikeRate: data.testOppStatsWi_strikeRate,
        fifties: data.testOppStatsWi_fifties,
        hundreds: data.testOppStatsWi_hundreds,
    };
  
    const testVenueStatsAus = {
        matches: data.testVenueStatsAus_matches,
        innings: data.testVenueStatsAus_innings,
        runs: data.testVenueStatsAus_runs,
        average: data.testVenueStatsAus_average,
        strikeRate: data.testVenueStatsAus_strikeRate,
        fifties: data.testVenueStatsAus_fifties,
        hundreds: data.testVenueStatsAus_hundreds,
    };
    
    const testVenueStatsEng = {
        matches: data.testVenueStatsEng_matches,
        innings: data.testVenueStatsEng_innings,
        runs: data.testVenueStatsEng_runs,
        average: data.testVenueStatsEng_average,
        strikeRate: data.testVenueStatsEng_strikeRate,
        fifties: data.testVenueStatsEng_fifties,
        hundreds: data.testVenueStatsEng_hundreds,
    };
    
    const testVenueStatsNz = {
        matches: data.testVenueStatsNz_matches,
        innings: data.testVenueStatsNz_innings,
        runs: data.testVenueStatsNz_runs,
        average: data.testVenueStatsNz_average,
        strikeRate: data.testVenueStatsNz_strikeRate,
        fifties: data.testVenueStatsNz_fifties,
        hundreds: data.testVenueStatsNz_hundreds,
    };
    
    const testVenueStatsSa = {
        matches: data.testVenueStatsSa_matches,
        innings: data.testVenueStatsSa_innings,
        runs: data.testVenueStatsSa_runs,
        average: data.testVenueStatsSa_average,
        strikeRate: data.testVenueStatsSa_strikeRate,
        fifties: data.testVenueStatsSa_fifties,
        hundreds: data.testVenueStatsSa_hundreds,
    };
 
    const testVenueStatsInd = {
        matches: data.testVenueStatsInd_matches,
        innings: data.testVenueStatsInd_innings,
        runs: data.testVenueStatsInd_runs,
        average: data.testVenueStatsInd_average,
        strikeRate: data.testVenueStatsInd_strikeRate,
        fifties: data.testVenueStatsInd_fifties,
        hundreds: data.testVenueStatsInd_hundreds,
    };
    
    const testVenueStatsPak = {
        matches: data.testVenueStatsPak_matches,
        innings: data.testVenueStatsPak_innings,
        runs: data.testVenueStatsPak_runs,
        average: data.testVenueStatsPak_average,
        strikeRate: data.testVenueStatsPak_strikeRate,
        fifties: data.testVenueStatsPak_fifties,
        hundreds: data.testVenueStatsPak_hundreds,
    };
    
    const testVenueStatsBan = {
        matches: data.testVenueStatsBan_matches,
        innings: data.testVenueStatsBan_innings,
        runs: data.testVenueStatsBan_runs,
        average: data.testVenueStatsBan_average,
        strikeRate: data.testVenueStatsBan_strikeRate,
        fifties: data.testVenueStatsBan_fifties,
        hundreds: data.testVenueStatsBan_hundreds,
    };
    
    const testVenueStatsSl = {
        matches: data.testVenueStatsSl_matches,
        innings: data.testVenueStatsSl_innings,
        runs: data.testVenueStatsSl_runs,
        average: data.testVenueStatsSl_average,
        strikeRate: data.testVenueStatsSl_strikeRate,
        fifties: data.testVenueStatsSl_fifties,
        hundreds: data.testVenueStatsSl_hundreds,
    };
    
    const testVenueStatsWi = {
        matches: data.testVenueStatsWi_matches,
        innings: data.testVenueStatsWi_innings,
        runs: data.testVenueStatsWi_runs,
        average: data.testVenueStatsWi_average,
        strikeRate: data.testVenueStatsWi_strikeRate,
        fifties: data.testVenueStatsWi_fifties,
        hundreds: data.testVenueStatsWi_hundreds,
    };
    
    const testYearSpan = {
        debutYear: data.testYearStats_debut_year,
        lastYear: data.testYearStats_last_year,
    };
    
    const yearStatsArr = await generateYearObject('testYearStats',testYearSpan.debutYear,testYearSpan.lastYear,data);


    let testFormatData = {
        careerStats: { ...testCareerStats },
        homeStats: { ...testHomeStats },
        awayStats: { ...testAwayStats },
        winsStats: { ...testWinsStats },
        lostStats: { ...testLostStats },
        drawStats: { ...testDrawStats },
        firstInningStats: { ...test1stInnStats },
        secondInningStats: { ...test2ndInnStats },
        thirdInningStats: { ...test3rdInnStats },
        fourthInningStats: { ...test4thInnStats },
        opponentStats: {
            eng: { ...testOppStatsEng },
            nz: { ...testOppStatsNz },
            sa: { ...testOppStatsSa },
            ind: { ...testOppStatsInd },
            pak: { ...testOppStatsPak },
            ban: { ...testOppStatsBan },
            sl: { ...testOppStatsSl },
            wi: { ...testOppStatsWi },
        },
        venueStats: {
            aus: { ...testVenueStatsAus },
            eng: { ...testVenueStatsEng },
            nz: { ...testVenueStatsNz },
            sa: { ...testVenueStatsSa },
            ind: { ...testVenueStatsInd },
            pak: { ...testVenueStatsPak },
            ban: { ...testVenueStatsBan },
            sl: { ...testVenueStatsSl },
            wi: { ...testVenueStatsWi },
        },
        yearStats: { 
            yearSpan: { ...testYearSpan }, 
            stats: [...yearStatsArr]
        }
    } 

    return testFormatData;
}

async function getSetOdiFormatData(data) {
    
    const odiCareerStats = {
        debut: data.odiCareerStats_debut,
        lastPlayed: data.odiCareerStats_last_played,
        matches: data.odiCareerStats_matches,
        innings: data.odiCareerStats_innings,
        runs: data.odiCareerStats_runs,
        average: data.odiCareerStats_average,
        strikeRate: data.odiCareerStats_strikeRate,
        fifties: data.odiCareerStats_fifties,
        hundreds: data.odiCareerStats_hundreds,
    };
    
    const odiHomeStats = {
        matches: data.odiHomeStats_matches,
        innings: data.odiHomeStats_innings,
        runs: data.odiHomeStats_runs,
        average: data.odiHomeStats_average,
        strikeRate: data.odiHomeStats_strikeRate,
        fifties: data.odiHomeStats_fifties,
        hundreds: data.odiHomeStats_hundreds,
    };
    
    const odiAwayStats = {
        matches: data.odiAwayStats_matches,
        innings: data.odiAwayStats_innings,
        runs: data.odiAwayStats_runs,
        average: data.odiAwayStats_average,
        strikeRate: data.odiAwayStats_strikeRate,
        fifties: data.odiAwayStats_fifties,
        hundreds: data.odiAwayStats_hundreds,
    };
 
    const odiWinsStats = {
        matches: data.odiWinsStats_matches,
        innings: data.odiWinsStats_innings,
        runs: data.odiWinsStats_runs,
        average: data.odiWinsStats_average,
        strikeRate: data.odiWinsStats_strikeRate,
        fifties: data.odiWinsStats_fifties,
        hundreds: data.odiWinsStats_hundreds,
    };
    
    const odiLostStats = {
        matches: data.odiLostStats_matches,
        innings: data.odiLostStats_innings,
        runs: data.odiLostStats_runs,
        average: data.odiLostStats_average,
        strikeRate: data.odiLostStats_strikeRate,
        fifties: data.odiLostStats_fifties,
        hundreds: data.odiLostStats_hundreds,
    };
    
    const odi1stInnStats = {
        matches: data.odi1stInnStats_matches,
        innings: data.odi1stInnStats_innings,
        runs: data.odi1stInnStats_runs,
        average: data.odi1stInnStats_average,
        strikeRate: data.odi1stInnStats_strikeRate,
        fifties: data.odi1stInnStats_fifties,
        hundreds: data.odi1stInnStats_hundreds,
    };
    
    const odi2ndInnStats = {
        matches: data.odi2ndInnStats_matches,
        innings: data.odi2ndInnStats_innings,
        runs: data.odi2ndInnStats_runs,
        average: data.odi2ndInnStats_average,
        strikeRate: data.odi2ndInnStats_strikeRate,
        fifties: data.odi2ndInnStats_fifties,
        hundreds: data.odi2ndInnStats_hundreds,
    };
    
    const odiOppStatsAus = {
        matches: data.odiOppStatsAus_matches,
        innings: data.odiOppStatsAus_innings,
        runs: data.odiOppStatsAus_runs,
        average: data.odiOppStatsAus_average,
        strikeRate: data.odiOppStatsAus_strikeRate,
        fifties: data.odiOppStatsAus_fifties,
        hundreds: data.odiOppStatsAus_hundreds,
    };
    
    const odiOppStatsEng = {
        matches: data.odiOppStatsEng_matches,
        innings: data.odiOppStatsEng_innings,
        runs: data.odiOppStatsEng_runs,
        average: data.odiOppStatsEng_average,
        strikeRate: data.odiOppStatsEng_strikeRate,
        fifties: data.odiOppStatsEng_fifties,
        hundreds: data.odiOppStatsEng_hundreds,
    };
    
    const odiOppStatsNz = {
        matches: data.odiOppStatsNz_matches,
        innings: data.odiOppStatsNz_innings,
        runs: data.odiOppStatsNz_runs,
        average: data.odiOppStatsNz_average,
        strikeRate: data.odiOppStatsNz_strikeRate,
        fifties: data.odiOppStatsNz_fifties,
        hundreds: data.odiOppStatsNz_hundreds,
    };
    
    const odiOppStatsSa = {
        matches: data.odiOppStatsSa_matches,
        innings: data.odiOppStatsSa_innings,
        runs: data.odiOppStatsSa_runs,
        average: data.odiOppStatsSa_average,
        strikeRate: data.odiOppStatsSa_strikeRate,
        fifties: data.odiOppStatsSa_fifties,
        hundreds: data.odiOppStatsSa_hundreds,
    };
    
    const odiOppStatsInd = {
        matches: data.odiOppStatsInd_matches,
        innings: data.odiOppStatsInd_innings,
        runs: data.odiOppStatsInd_runs,
        average: data.odiOppStatsInd_average,
        strikeRate: data.odiOppStatsInd_strikeRate,
        fifties: data.odiOppStatsInd_fifties,
        hundreds: data.odiOppStatsInd_hundreds,
    };
    
    const odiOppStatsPak = {
        matches: data.odiOppStatsPak_matches,
        innings: data.odiOppStatsPak_innings,
        runs: data.odiOppStatsPak_runs,
        average: data.odiOppStatsPak_average,
        strikeRate: data.odiOppStatsPak_strikeRate,
        fifties: data.odiOppStatsPak_fifties,
        hundreds: data.odiOppStatsPak_hundreds,
    };
    
    const odiOppStatsBan = {
        matches: data.odiOppStatsBan_matches,
        innings: data.odiOppStatsBan_innings,
        runs: data.odiOppStatsBan_runs,
        average: data.odiOppStatsBan_average,
        strikeRate: data.odiOppStatsBan_strikeRate,
        fifties: data.odiOppStatsBan_fifties,
        hundreds: data.odiOppStatsBan_hundreds,
    };
    
    const odiOppStatsSl = {
        matches: data.odiOppStatsSl_matches,
        innings: data.odiOppStatsSl_innings,
        runs: data.odiOppStatsSl_runs,
        average: data.odiOppStatsSl_average,
        strikeRate: data.odiOppStatsSl_strikeRate,
        fifties: data.odiOppStatsSl_fifties,
        hundreds: data.odiOppStatsSl_hundreds,
    };
    
    const odiOppStatsWi = {
        matches: data.odiOppStatsWi_matches,
        innings: data.odiOppStatsWi_innings,
        runs: data.odiOppStatsWi_runs,
        average: data.odiOppStatsWi_average,
        strikeRate: data.odiOppStatsWi_strikeRate,
        fifties: data.odiOppStatsWi_fifties,
        hundreds: data.odiOppStatsWi_hundreds,
    };
    
    const odiOppStatsIre = {
        matches: data.odiOppStatsIre_matches,
        innings: data.odiOppStatsIre_innings,
        runs: data.odiOppStatsIre_runs,
        average: data.odiOppStatsIre_average,
        strikeRate: data.odiOppStatsIre_strikeRate,
        fifties: data.odiOppStatsIre_fifties,
        hundreds: data.odiOppStatsIre_hundreds,
    };

    const odiOppStatsAfg = {
        matches: data.odiOppStatsAfg_matches,
        innings: data.odiOppStatsAfg_innings,
        runs: data.odiOppStatsAfg_runs,
        average: data.odiOppStatsAfg_average,
        strikeRate: data.odiOppStatsAfg_strikeRate,
        fifties: data.odiOppStatsAfg_fifties,
        hundreds: data.odiOppStatsAfg_hundreds,
    };
    
    const odiOppStatsZim = {
        matches: data.odiOppStatsZim_matches,
        innings: data.odiOppStatsZim_innings,
        runs: data.odiOppStatsZim_runs,
        average: data.odiOppStatsZim_average,
        strikeRate: data.odiOppStatsZim_strikeRate,
        fifties: data.odiOppStatsZim_fifties,
        hundreds: data.odiOppStatsZim_hundreds,
    };
    
    const odiVenueStatsAus = {
        matches: data.odiVenueStatsAus_matches,
        innings: data.odiVenueStatsAus_innings,
        runs: data.odiVenueStatsAus_runs,
        average: data.odiVenueStatsAus_average,
        strikeRate: data.odiVenueStatsAus_strikeRate,
        fifties: data.odiVenueStatsAus_fifties,
        hundreds: data.odiVenueStatsAus_hundreds,
    };
    
    const odiVenueStatsEng = {
        matches: data.odiVenueStatsEng_matches,
        innings: data.odiVenueStatsEng_innings,
        runs: data.odiVenueStatsEng_runs,
        average: data.odiVenueStatsEng_average,
        strikeRate: data.odiVenueStatsEng_strikeRate,
        fifties: data.odiVenueStatsEng_fifties,
        hundreds: data.odiVenueStatsEng_hundreds,
    };
    
    const odiVenueStatsNz = {
        matches: data.odiVenueStatsNz_matches,
        innings: data.odiVenueStatsNz_innings,
        runs: data.odiVenueStatsNz_runs,
        average: data.odiVenueStatsNz_average,
        strikeRate: data.odiVenueStatsNz_strikeRate,
        fifties: data.odiVenueStatsNz_fifties,
        hundreds: data.odiVenueStatsNz_hundreds,
    };
    
    const odiVenueStatsSa = {
        matches: data.odiVenueStatsSa_matches,
        innings: data.odiVenueStatsSa_innings,
        runs: data.odiVenueStatsSa_runs,
        average: data.odiVenueStatsSa_average,
        strikeRate: data.odiVenueStatsSa_strikeRate,
        fifties: data.odiVenueStatsSa_fifties,
        hundreds: data.odiVenueStatsSa_hundreds,
    };
   
    const odiVenueStatsInd = {
        matches: data.odiVenueStatsInd_matches,
        innings: data.odiVenueStatsInd_innings,
        runs: data.odiVenueStatsInd_runs,
        average: data.odiVenueStatsInd_average,
        strikeRate: data.odiVenueStatsInd_strikeRate,
        fifties: data.odiVenueStatsInd_fifties,
        hundreds: data.odiVenueStatsInd_hundreds,
    };
    
    const odiVenueStatsPak = {
        matches: data.odiVenueStatsPak_matches,
        innings: data.odiVenueStatsPak_innings,
        runs: data.odiVenueStatsPak_runs,
        average: data.odiVenueStatsPak_average,
        strikeRate: data.odiVenueStatsPak_strikeRate,
        fifties: data.odiVenueStatsPak_fifties,
        hundreds: data.odiVenueStatsPak_hundreds,
    };
    
    const odiVenueStatsBan = {
        matches: data.odiVenueStatsBan_matches,
        innings: data.odiVenueStatsBan_innings,
        runs: data.odiVenueStatsBan_runs,
        average: data.odiVenueStatsBan_average,
        strikeRate: data.odiVenueStatsBan_strikeRate,
        fifties: data.odiVenueStatsBan_fifties,
        hundreds: data.odiVenueStatsBan_hundreds,
    };
    
    const odiVenueStatsSl = {
        matches: data.odiVenueStatsSl_matches,
        innings: data.odiVenueStatsSl_innings,
        runs: data.odiVenueStatsSl_runs,
        average: data.odiVenueStatsSl_average,
        strikeRate: data.odiVenueStatsSl_strikeRate,
        fifties: data.odiVenueStatsSl_fifties,
        hundreds: data.odiVenueStatsSl_hundreds,
    };

    const odiVenueStatsWi = {
        matches: data.odiVenueStatsWi_matches,
        innings: data.odiVenueStatsWi_innings,
        runs: data.odiVenueStatsWi_runs,
        average: data.odiVenueStatsWi_average,
        strikeRate: data.odiVenueStatsWi_strikeRate,
        fifties: data.odiVenueStatsWi_fifties,
        hundreds: data.odiVenueStatsWi_hundreds,
    };
    
    const odiYearSpan = {
        debutYear: data.odiYearStats_debut_year,
        lastYear: data.odiYearStats_last_year,
    };
    
    const yearStatsArr = await generateYearObject('odiYearStats',odiYearSpan.debutYear,odiYearSpan.lastYear,data);

    let odiFormatData = {
        careerStats: { ...odiCareerStats },
        homeStats: { ...odiHomeStats },
        awayStats: { ...odiAwayStats },
        winsStats: { ...odiWinsStats },
        lostStats: { ...odiLostStats },
        firstInningStats: { ...odi1stInnStats },
        secondInningStats: { ...odi2ndInnStats },
        opponentStats: {
            aus: { ...odiOppStatsAus },
            eng: { ...odiOppStatsEng },
            nz: { ...odiOppStatsNz },
            sa: { ...odiOppStatsSa },
            ind: { ...odiOppStatsInd },
            pak: { ...odiOppStatsPak },
            ban: { ...odiOppStatsBan },
            sl: { ...odiOppStatsSl },
            wi: { ...odiOppStatsWi },
            ire: { ...odiOppStatsIre },
            afg: { ...odiOppStatsAfg },
            zim: { ...odiOppStatsZim },
        },
        venueStats: {
            aus: { ...odiVenueStatsAus },
            eng: { ...odiVenueStatsEng },
            nz: { ...odiVenueStatsNz },
            sa: { ...odiVenueStatsSa },
            ind: { ...odiVenueStatsInd },
            pak: { ...odiVenueStatsPak },
            ban: { ...odiVenueStatsBan },
            sl: { ...odiVenueStatsSl },
            wi: { ...odiVenueStatsWi },
        },
        yearStats: {
            yearSpan: { ...odiYearSpan },
            stats: [...yearStatsArr]
        }
    };

    return odiFormatData;
}

async function getSetOdiWcData(data) {
    
    const odiWcCareerStats = {
        debutYear: data.odiWcCareerStats_pname,
        lastPlayedYear: data.odiWcCareerStats_dname,
        matches: data.odiWcCareerStats_matches,
        innings: data.odiWcCareerStats_innings,
        runs: data.odiWcCareerStats_runs,
        average: data.odiWcCareerStats_average,
        strikeRate: data.odiWcCareerStats_strikeRate,
        fifties: data.odiWcCareerStats_fifties,
        hundreds: data.odiWcCareerStats_hundreds,
    };
    
    const odiWcHomeStats = {
        matches: data.odiWcHomeStats_matches,
        innings: data.odiWcHomeStats_innings,
        runs: data.odiWcHomeStats_runs,
        average: data.odiWcHomeStats_average,
        strikeRate: data.odiWcHomeStats_strikeRate,
        fifties: data.odiWcHomeStats_fifties,
        hundreds: data.odiWcHomeStats_hundreds,
    };

    const odiWcAwayStats = {
        matches: data.odiWcAwayStats_matches,
        innings: data.odiWcAwayStats_innings,
        runs: data.odiWcAwayStats_runs,
        average: data.odiWcAwayStats_average,
        strikeRate: data.odiWcAwayStats_strikeRate,
        fifties: data.odiWcAwayStats_fifties,
        hundreds: data.odiWcAwayStats_hundreds,
    };

    const odiWcWinsStats = {
        matches: data.odiWcWinsStats_matches,
        innings: data.odiWcWinsStats_innings,
        runs: data.odiWcWinsStats_runs,
        average: data.odiWcWinsStats_average,
        strikeRate: data.odiWcWinsStats_strikeRate,
        fifties: data.odiWcWinsStats_fifties,
        hundreds: data.odiWcWinsStats_hundreds,
    };
     
    const odiWcLostStats = {
        matches: data.odiWcLostStats_matches,
        innings: data.odiWcLostStats_innings,
        runs: data.odiWcLostStats_runs,
        average: data.odiWcLostStats_average,
        strikeRate: data.odiWcLostStats_strikeRate,
        fifties: data.odiWcLostStats_fifties,
        hundreds: data.odiWcLostStats_hundreds,
    };
    
    const odiWc1stInnStats = {
        matches: data.odiWc1stInnStats_matches,
        innings: data.odiWc1stInnStats_innings,
        runs: data.odiWc1stInnStats_runs,
        average: data.odiWc1stInnStats_average,
        strikeRate: data.odiWc1stInnStats_strikeRate,
        fifties: data.odiWc1stInnStats_fifties,
        hundreds: data.odiWc1stInnStats_hundreds,
    };
    
    const odiWc2ndInnStats = {
        matches: data.odiWc2ndInnStats_matches,
        innings: data.odiWc2ndInnStats_innings,
        runs: data.odiWc2ndInnStats_runs,
        average: data.odiWc2ndInnStats_average,
        strikeRate: data.odiWc2ndInnStats_strikeRate,
        fifties: data.odiWc2ndInnStats_fifties,
        hundreds: data.odiWc2ndInnStats_hundreds,
    };
    
    const odiWcSemisStats = {
        matches: data.odiWcSemisStats_matches,
        innings: data.odiWcSemisStats_innings,
        runs: data.odiWcSemisStats_runs,
        average: data.odiWcSemisStats_average,
        strikeRate: data.odiWcSemisStats_strikeRate,
        fifties: data.odiWcSemisStats_fifties,
        hundreds: data.odiWcSemisStats_hundreds,
    };
    
    const odiWcFinalsStats = {
        matches: data.odiWcFinalsStats_matches,
        innings: data.odiWcFinalsStats_innings,
        runs: data.odiWcFinalsStats_runs,
        average: data.odiWcFinalsStats_average,
        strikeRate: data.odiWcFinalsStats_strikeRate,
        fifties: data.odiWcFinalsStats_fifties,
        hundreds: data.odiWcFinalsStats_hundreds,
    };
    
    const odiWcOppStatsAus = {
        matches: data.odiWcOppStatsAus_matches,
        innings: data.odiWcOppStatsAus_innings,
        runs: data.odiWcOppStatsAus_runs,
        average: data.odiWcOppStatsAus_average,
        strikeRate: data.odiWcOppStatsAus_strikeRate,
        fifties: data.odiWcOppStatsAus_fifties,
        hundreds: data.odiWcOppStatsAus_hundreds,
    };
    
    const odiWcOppStatsEng = {
        matches: data.odiWcOppStatsEng_matches,
        innings: data.odiWcOppStatsEng_innings,
        runs: data.odiWcOppStatsEng_runs,
        average: data.odiWcOppStatsEng_average,
        strikeRate: data.odiWcOppStatsEng_strikeRate,
        fifties: data.odiWcOppStatsEng_fifties,
        hundreds: data.odiWcOppStatsEng_hundreds,
    };
    
    const odiWcOppStatsNz = {
        matches: data.odiWcOppStatsNz_matches,
        innings: data.odiWcOppStatsNz_innings,
        runs: data.odiWcOppStatsNz_runs,
        average: data.odiWcOppStatsNz_average,
        strikeRate: data.odiWcOppStatsNz_strikeRate,
        fifties: data.odiWcOppStatsNz_fifties,
        hundreds: data.odiWcOppStatsNz_hundreds,
    };
    
    const odiWcOppStatsSa = {
        matches: data.odiWcOppStatsSa_matches,
        innings: data.odiWcOppStatsSa_innings,
        runs: data.odiWcOppStatsSa_runs,
        average: data.odiWcOppStatsSa_average,
        strikeRate: data.odiWcOppStatsSa_strikeRate,
        fifties: data.odiWcOppStatsSa_fifties,
        hundreds: data.odiWcOppStatsSa_hundreds,
    };
    
    const odiWcOppStatsInd = {
        matches: data.odiWcOppStatsInd_matches,
        innings: data.odiWcOppStatsInd_innings,
        runs: data.odiWcOppStatsInd_runs,
        average: data.odiWcOppStatsInd_average,
        strikeRate: data.odiWcOppStatsInd_strikeRate,
        fifties: data.odiWcOppStatsInd_fifties,
        hundreds: data.odiWcOppStatsInd_hundreds,
    };
    
    const odiWcOppStatsPak = {
        matches: data.odiWcOppStatsPak_matches,
        innings: data.odiWcOppStatsPak_innings,
        runs: data.odiWcOppStatsPak_runs,
        average: data.odiWcOppStatsPak_average,
        strikeRate: data.odiWcOppStatsPak_strikeRate,
        fifties: data.odiWcOppStatsPak_fifties,
        hundreds: data.odiWcOppStatsPak_hundreds,
    };
    
    const odiWcOppStatsBan = {
        matches: data.odiWcOppStatsBan_matches,
        innings: data.odiWcOppStatsBan_innings,
        runs: data.odiWcOppStatsBan_runs,
        average: data.odiWcOppStatsBan_average,
        strikeRate: data.odiWcOppStatsBan_strikeRate,
        fifties: data.odiWcOppStatsBan_fifties,
        hundreds: data.odiWcOppStatsBan_hundreds,
    };
    
    const odiWcOppStatsSl = {
        matches: data.odiWcOppStatsSl_matches,
        innings: data.odiWcOppStatsSl_innings,
        runs: data.odiWcOppStatsSl_runs,
        average: data.odiWcOppStatsSl_average,
        strikeRate: data.odiWcOppStatsSl_strikeRate,
        fifties: data.odiWcOppStatsSl_fifties,
        hundreds: data.odiWcOppStatsSl_hundreds,
    };
    
    const odiWcOppStatsWi = {
        matches: data.odiWcOppStatsWi_matches,
        innings: data.odiWcOppStatsWi_innings,
        runs: data.odiWcOppStatsWi_runs,
        average: data.odiWcOppStatsWi_average,
        strikeRate: data.odiWcOppStatsWi_strikeRate,
        fifties: data.odiWcOppStatsWi_fifties,
        hundreds: data.odiWcOppStatsWi_hundreds,
    };
    
    const odiWcOppStatsIre = {
        matches: data.odiWcOppStatsIre_matches,
        innings: data.odiWcOppStatsIre_innings,
        runs: data.odiWcOppStatsIre_runs,
        average: data.odiWcOppStatsIre_average,
        strikeRate: data.odiWcOppStatsIre_strikeRate,
        fifties: data.odiWcOppStatsIre_fifties,
        hundreds: data.odiWcOppStatsIre_hundreds,
    };
    
    const odiWcOppStatsAfg = {
        matches: data.odiWcOppStatsAfg_matches,
        innings: data.odiWcOppStatsAfg_innings,
        runs: data.odiWcOppStatsAfg_runs,
        average: data.odiWcOppStatsAfg_average,
        strikeRate: data.odiWcOppStatsAfg_strikeRate,
        fifties: data.odiWcOppStatsAfg_fifties,
        hundreds: data.odiWcOppStatsAfg_hundreds,
    };
    
    const odiWcOppStatsZim = {
        matches: data.odiWcOppStatsZim_matches,
        innings: data.odiWcOppStatsZim_innings,
        runs: data.odiWcOppStatsZim_runs,
        average: data.odiWcOppStatsZim_average,
        strikeRate: data.odiWcOppStatsZim_strikeRate,
        fifties: data.odiWcOppStatsZim_fifties,
        hundreds: data.odiWcOppStatsZim_hundreds,
    };
    
    const odiWcYearSpan = {
        debutYear: data.odiWcYearStats_debut_year,
        lastYear: data.odiWcYearStats_last_year,
    };
    
    const yearStatsArr = await generateYearObject('odiWcYearStats',odiWcYearSpan.debutYear,odiWcYearSpan.lastYear,data);

    let odiWcData = {
        careerStats: { ...odiWcCareerStats },
        homeStats: { ...odiWcHomeStats },
        awayStats: { ...odiWcAwayStats },
        winsStats: { ...odiWcWinsStats },
        lostStats: { ...odiWcLostStats },
        firstInningStats: { ...odiWc1stInnStats },
        secondInningStats: { ...odiWc2ndInnStats },
        semisStats: { ...odiWcSemisStats },
        finalsStats: { ...odiWcFinalsStats },
        opponentStats: {
            aus: { ...odiWcOppStatsAus },
            eng: { ...odiWcOppStatsEng },
            nz: { ...odiWcOppStatsNz },
            sa: { ...odiWcOppStatsSa },
            ind: { ...odiWcOppStatsInd },
            pak: { ...odiWcOppStatsPak },
            ban: { ...odiWcOppStatsBan },
            sl: { ...odiWcOppStatsSl },
            wi: { ...odiWcOppStatsWi },
            ire: { ...odiWcOppStatsIre },
            afg: { ...odiWcOppStatsAfg },
            zim: { ...odiWcOppStatsZim },
        },
        yearStats: {
            yearSpan: { ...odiWcYearSpan },
            stats: [...yearStatsArr]
        }
    };
return odiWcData;    
}

async function getSett20FormatData(data) {
    
    const t20CareerStats = {
        debut: data.t20CareerStats_debut,
        lastPlayed: data.t20CareerStats_last_played,
        matches: data.t20CareerStats_matches,
        innings: data.t20CareerStats_innings,
        runs: data.t20CareerStats_runs,
        average: data.t20CareerStats_average,
        strikeRate: data.t20CareerStats_strikeRate,
        fifties: data.t20CareerStats_fifties,
        hundreds: data.t20CareerStats_hundreds,
    };
    
    const t20HomeStats = {
        matches: data.t20HomeStats_matches,
        innings: data.t20HomeStats_innings,
        runs: data.t20HomeStats_runs,
        average: data.t20HomeStats_average,
        strikeRate: data.t20HomeStats_strikeRate,
        fifties: data.t20HomeStats_fifties,
        hundreds: data.t20HomeStats_hundreds,
    };
    
    const t20AwayStats = {
        matches: data.t20AwayStats_matches,
        innings: data.t20AwayStats_innings,
        runs: data.t20AwayStats_runs,
        average: data.t20AwayStats_average,
        strikeRate: data.t20AwayStats_strikeRate,
        fifties: data.t20AwayStats_fifties,
        hundreds: data.t20AwayStats_hundreds,
    };
 
    const t20WinsStats = {
        matches: data.t20WinsStats_matches,
        innings: data.t20WinsStats_innings,
        runs: data.t20WinsStats_runs,
        average: data.t20WinsStats_average,
        strikeRate: data.t20WinsStats_strikeRate,
        fifties: data.t20WinsStats_fifties,
        hundreds: data.t20WinsStats_hundreds,
    };
    
    const t20LostStats = {
        matches: data.t20LostStats_matches,
        innings: data.t20LostStats_innings,
        runs: data.t20LostStats_runs,
        average: data.t20LostStats_average,
        strikeRate: data.t20LostStats_strikeRate,
        fifties: data.t20LostStats_fifties,
        hundreds: data.t20LostStats_hundreds,
    };
    
    const t201stInnStats = {
        matches: data.t201stInnStats_matches,
        innings: data.t201stInnStats_innings,
        runs: data.t201stInnStats_runs,
        average: data.t201stInnStats_average,
        strikeRate: data.t201stInnStats_strikeRate,
        fifties: data.t201stInnStats_fifties,
        hundreds: data.t201stInnStats_hundreds,
    };
    
    const t202ndInnStats = {
        matches: data.t202ndInnStats_matches,
        innings: data.t202ndInnStats_innings,
        runs: data.t202ndInnStats_runs,
        average: data.t202ndInnStats_average,
        strikeRate: data.t202ndInnStats_strikeRate,
        fifties: data.t202ndInnStats_fifties,
        hundreds: data.t202ndInnStats_hundreds,
    };
    
    const t20OppStatsAus = {
        matches: data.t20OppStatsAus_matches,
        innings: data.t20OppStatsAus_innings,
        runs: data.t20OppStatsAus_runs,
        average: data.t20OppStatsAus_average,
        strikeRate: data.t20OppStatsAus_strikeRate,
        fifties: data.t20OppStatsAus_fifties,
        hundreds: data.t20OppStatsAus_hundreds,
    };
    
    const t20OppStatsEng = {
        matches: data.t20OppStatsEng_matches,
        innings: data.t20OppStatsEng_innings,
        runs: data.t20OppStatsEng_runs,
        average: data.t20OppStatsEng_average,
        strikeRate: data.t20OppStatsEng_strikeRate,
        fifties: data.t20OppStatsEng_fifties,
        hundreds: data.t20OppStatsEng_hundreds,
    };
    
    const t20OppStatsNz = {
        matches: data.t20OppStatsNz_matches,
        innings: data.t20OppStatsNz_innings,
        runs: data.t20OppStatsNz_runs,
        average: data.t20OppStatsNz_average,
        strikeRate: data.t20OppStatsNz_strikeRate,
        fifties: data.t20OppStatsNz_fifties,
        hundreds: data.t20OppStatsNz_hundreds,
    };
    
    const t20OppStatsSa = {
        matches: data.t20OppStatsSa_matches,
        innings: data.t20OppStatsSa_innings,
        runs: data.t20OppStatsSa_runs,
        average: data.t20OppStatsSa_average,
        strikeRate: data.t20OppStatsSa_strikeRate,
        fifties: data.t20OppStatsSa_fifties,
        hundreds: data.t20OppStatsSa_hundreds,
    };
    
    const t20OppStatsInd = {
        matches: data.t20OppStatsInd_matches,
        innings: data.t20OppStatsInd_innings,
        runs: data.t20OppStatsInd_runs,
        average: data.t20OppStatsInd_average,
        strikeRate: data.t20OppStatsInd_strikeRate,
        fifties: data.t20OppStatsInd_fifties,
        hundreds: data.t20OppStatsInd_hundreds,
    };
    
    const t20OppStatsPak = {
        matches: data.t20OppStatsPak_matches,
        innings: data.t20OppStatsPak_innings,
        runs: data.t20OppStatsPak_runs,
        average: data.t20OppStatsPak_average,
        strikeRate: data.t20OppStatsPak_strikeRate,
        fifties: data.t20OppStatsPak_fifties,
        hundreds: data.t20OppStatsPak_hundreds,
    };
    
    const t20OppStatsBan = {
        matches: data.t20OppStatsBan_matches,
        innings: data.t20OppStatsBan_innings,
        runs: data.t20OppStatsBan_runs,
        average: data.t20OppStatsBan_average,
        strikeRate: data.t20OppStatsBan_strikeRate,
        fifties: data.t20OppStatsBan_fifties,
        hundreds: data.t20OppStatsBan_hundreds,
    };
    
    const t20OppStatsSl = {
        matches: data.t20OppStatsSl_matches,
        innings: data.t20OppStatsSl_innings,
        runs: data.t20OppStatsSl_runs,
        average: data.t20OppStatsSl_average,
        strikeRate: data.t20OppStatsSl_strikeRate,
        fifties: data.t20OppStatsSl_fifties,
        hundreds: data.t20OppStatsSl_hundreds,
    };
    
    const t20OppStatsWi = {
        matches: data.t20OppStatsWi_matches,
        innings: data.t20OppStatsWi_innings,
        runs: data.t20OppStatsWi_runs,
        average: data.t20OppStatsWi_average,
        strikeRate: data.t20OppStatsWi_strikeRate,
        fifties: data.t20OppStatsWi_fifties,
        hundreds: data.t20OppStatsWi_hundreds,
    };
    
    const t20OppStatsIre = {
        matches: data.t20OppStatsIre_matches,
        innings: data.t20OppStatsIre_innings,
        runs: data.t20OppStatsIre_runs,
        average: data.t20OppStatsIre_average,
        strikeRate: data.t20OppStatsIre_strikeRate,
        fifties: data.t20OppStatsIre_fifties,
        hundreds: data.t20OppStatsIre_hundreds,
    };

    const t20OppStatsAfg = {
        matches: data.t20OppStatsAfg_matches,
        innings: data.t20OppStatsAfg_innings,
        runs: data.t20OppStatsAfg_runs,
        average: data.t20OppStatsAfg_average,
        strikeRate: data.t20OppStatsAfg_strikeRate,
        fifties: data.t20OppStatsAfg_fifties,
        hundreds: data.t20OppStatsAfg_hundreds,
    };
    
    const t20OppStatsZim = {
        matches: data.t20OppStatsZim_matches,
        innings: data.t20OppStatsZim_innings,
        runs: data.t20OppStatsZim_runs,
        average: data.t20OppStatsZim_average,
        strikeRate: data.t20OppStatsZim_strikeRate,
        fifties: data.t20OppStatsZim_fifties,
        hundreds: data.t20OppStatsZim_hundreds,
    };
    
    const t20VenueStatsAus = {
        matches: data.t20VenueStatsAus_matches,
        innings: data.t20VenueStatsAus_innings,
        runs: data.t20VenueStatsAus_runs,
        average: data.t20VenueStatsAus_average,
        strikeRate: data.t20VenueStatsAus_strikeRate,
        fifties: data.t20VenueStatsAus_fifties,
        hundreds: data.t20VenueStatsAus_hundreds,
    };
    
    const t20VenueStatsEng = {
        matches: data.t20VenueStatsEng_matches,
        innings: data.t20VenueStatsEng_innings,
        runs: data.t20VenueStatsEng_runs,
        average: data.t20VenueStatsEng_average,
        strikeRate: data.t20VenueStatsEng_strikeRate,
        fifties: data.t20VenueStatsEng_fifties,
        hundreds: data.t20VenueStatsEng_hundreds,
    };
    
    const t20VenueStatsNz = {
        matches: data.t20VenueStatsNz_matches,
        innings: data.t20VenueStatsNz_innings,
        runs: data.t20VenueStatsNz_runs,
        average: data.t20VenueStatsNz_average,
        strikeRate: data.t20VenueStatsNz_strikeRate,
        fifties: data.t20VenueStatsNz_fifties,
        hundreds: data.t20VenueStatsNz_hundreds,
    };
    
    const t20VenueStatsSa = {
        matches: data.t20VenueStatsSa_matches,
        innings: data.t20VenueStatsSa_innings,
        runs: data.t20VenueStatsSa_runs,
        average: data.t20VenueStatsSa_average,
        strikeRate: data.t20VenueStatsSa_strikeRate,
        fifties: data.t20VenueStatsSa_fifties,
        hundreds: data.t20VenueStatsSa_hundreds,
    };
   
    const t20VenueStatsInd = {
        matches: data.t20VenueStatsInd_matches,
        innings: data.t20VenueStatsInd_innings,
        runs: data.t20VenueStatsInd_runs,
        average: data.t20VenueStatsInd_average,
        strikeRate: data.t20VenueStatsInd_strikeRate,
        fifties: data.t20VenueStatsInd_fifties,
        hundreds: data.t20VenueStatsInd_hundreds,
    };
    
    const t20VenueStatsPak = {
        matches: data.t20VenueStatsPak_matches,
        innings: data.t20VenueStatsPak_innings,
        runs: data.t20VenueStatsPak_runs,
        average: data.t20VenueStatsPak_average,
        strikeRate: data.t20VenueStatsPak_strikeRate,
        fifties: data.t20VenueStatsPak_fifties,
        hundreds: data.t20VenueStatsPak_hundreds,
    };
    
    const t20VenueStatsBan = {
        matches: data.t20VenueStatsBan_matches,
        innings: data.t20VenueStatsBan_innings,
        runs: data.t20VenueStatsBan_runs,
        average: data.t20VenueStatsBan_average,
        strikeRate: data.t20VenueStatsBan_strikeRate,
        fifties: data.t20VenueStatsBan_fifties,
        hundreds: data.t20VenueStatsBan_hundreds,
    };
    
    const t20VenueStatsSl = {
        matches: data.t20VenueStatsSl_matches,
        innings: data.t20VenueStatsSl_innings,
        runs: data.t20VenueStatsSl_runs,
        average: data.t20VenueStatsSl_average,
        strikeRate: data.t20VenueStatsSl_strikeRate,
        fifties: data.t20VenueStatsSl_fifties,
        hundreds: data.t20VenueStatsSl_hundreds,
    };

    const t20VenueStatsWi = {
        matches: data.t20VenueStatsWi_matches,
        innings: data.t20VenueStatsWi_innings,
        runs: data.t20VenueStatsWi_runs,
        average: data.t20VenueStatsWi_average,
        strikeRate: data.t20VenueStatsWi_strikeRate,
        fifties: data.t20VenueStatsWi_fifties,
        hundreds: data.t20VenueStatsWi_hundreds,
    };
    
    const t20YearSpan = {
        debutYear: data.t20YearStats_debut_year,
        lastYear: data.t20YearStats_last_year,
    };
    
    const yearStatsArr = await generateYearObject('t20YearStats',t20YearSpan.debutYear,t20YearSpan.lastYear,data);

    let t20FormatData = {
        careerStats: { ...t20CareerStats },
        homeStats: { ...t20HomeStats },
        awayStats: { ...t20AwayStats },
        winsStats: { ...t20WinsStats },
        lostStats: { ...t20LostStats },
        firstInningStats: { ...t201stInnStats },
        secondInningStats: { ...t202ndInnStats },
        opponentStats: {
            aus: { ...t20OppStatsAus },
            eng: { ...t20OppStatsEng },
            nz: { ...t20OppStatsNz },
            sa: { ...t20OppStatsSa },
            ind: { ...t20OppStatsInd },
            pak: { ...t20OppStatsPak },
            ban: { ...t20OppStatsBan },
            sl: { ...t20OppStatsSl },
            wi: { ...t20OppStatsWi },
            ire: { ...t20OppStatsIre },
            afg: { ...t20OppStatsAfg },
            zim: { ...t20OppStatsZim },
        },
        venueStats: {
            aus: { ...t20VenueStatsAus },
            eng: { ...t20VenueStatsEng },
            nz: { ...t20VenueStatsNz },
            sa: { ...t20VenueStatsSa },
            ind: { ...t20VenueStatsInd },
            pak: { ...t20VenueStatsPak },
            ban: { ...t20VenueStatsBan },
            sl: { ...t20VenueStatsSl },
            wi: { ...t20VenueStatsWi },
        },
        yearStats: {
            yearSpan: { ...t20YearSpan },
            stats: [...yearStatsArr]
        }
    };

    return t20FormatData;
}

async function getSett20WcData(data) {
    
    const t20WcCareerStats = {
        debutYear: data.t20WcCareerStats_pname,
        lastPlayedYear: data.t20WcCareerStats_dname,
        matches: data.t20WcCareerStats_matches,
        innings: data.t20WcCareerStats_innings,
        runs: data.t20WcCareerStats_runs,
        average: data.t20WcCareerStats_average,
        strikeRate: data.t20WcCareerStats_strikeRate,
        fifties: data.t20WcCareerStats_fifties,
        hundreds: data.t20WcCareerStats_hundreds,
    };
    
    const t20WcHomeStats = {
        matches: data.t20WcHomeStats_matches,
        innings: data.t20WcHomeStats_innings,
        runs: data.t20WcHomeStats_runs,
        average: data.t20WcHomeStats_average,
        strikeRate: data.t20WcHomeStats_strikeRate,
        fifties: data.t20WcHomeStats_fifties,
        hundreds: data.t20WcHomeStats_hundreds,
    };

    const t20WcAwayStats = {
        matches: data.t20WcAwayStats_matches,
        innings: data.t20WcAwayStats_innings,
        runs: data.t20WcAwayStats_runs,
        average: data.t20WcAwayStats_average,
        strikeRate: data.t20WcAwayStats_strikeRate,
        fifties: data.t20WcAwayStats_fifties,
        hundreds: data.t20WcAwayStats_hundreds,
    };

    const t20WcWinsStats = {
        matches: data.t20WcWinsStats_matches,
        innings: data.t20WcWinsStats_innings,
        runs: data.t20WcWinsStats_runs,
        average: data.t20WcWinsStats_average,
        strikeRate: data.t20WcWinsStats_strikeRate,
        fifties: data.t20WcWinsStats_fifties,
        hundreds: data.t20WcWinsStats_hundreds,
    };
     
    const t20WcLostStats = {
        matches: data.t20WcLostStats_matches,
        innings: data.t20WcLostStats_innings,
        runs: data.t20WcLostStats_runs,
        average: data.t20WcLostStats_average,
        strikeRate: data.t20WcLostStats_strikeRate,
        fifties: data.t20WcLostStats_fifties,
        hundreds: data.t20WcLostStats_hundreds,
    };
    
    const t20Wc1stInnStats = {
        matches: data.t20Wc1stInnStats_matches,
        innings: data.t20Wc1stInnStats_innings,
        runs: data.t20Wc1stInnStats_runs,
        average: data.t20Wc1stInnStats_average,
        strikeRate: data.t20Wc1stInnStats_strikeRate,
        fifties: data.t20Wc1stInnStats_fifties,
        hundreds: data.t20Wc1stInnStats_hundreds,
    };
    
    const t20Wc2ndInnStats = {
        matches: data.t20Wc2ndInnStats_matches,
        innings: data.t20Wc2ndInnStats_innings,
        runs: data.t20Wc2ndInnStats_runs,
        average: data.t20Wc2ndInnStats_average,
        strikeRate: data.t20Wc2ndInnStats_strikeRate,
        fifties: data.t20Wc2ndInnStats_fifties,
        hundreds: data.t20Wc2ndInnStats_hundreds,
    };
    
    const t20WcSemisStats = {
        matches: data.t20WcSemisStats_matches,
        innings: data.t20WcSemisStats_innings,
        runs: data.t20WcSemisStats_runs,
        average: data.t20WcSemisStats_average,
        strikeRate: data.t20WcSemisStats_strikeRate,
        fifties: data.t20WcSemisStats_fifties,
        hundreds: data.t20WcSemisStats_hundreds,
    };
    
    const t20WcFinalsStats = {
        matches: data.t20WcFinalsStats_matches,
        innings: data.t20WcFinalsStats_innings,
        runs: data.t20WcFinalsStats_runs,
        average: data.t20WcFinalsStats_average,
        strikeRate: data.t20WcFinalsStats_strikeRate,
        fifties: data.t20WcFinalsStats_fifties,
        hundreds: data.t20WcFinalsStats_hundreds,
    };
    
    const t20WcOppStatsAus = {
        matches: data.t20WcOppStatsAus_matches,
        innings: data.t20WcOppStatsAus_innings,
        runs: data.t20WcOppStatsAus_runs,
        average: data.t20WcOppStatsAus_average,
        strikeRate: data.t20WcOppStatsAus_strikeRate,
        fifties: data.t20WcOppStatsAus_fifties,
        hundreds: data.t20WcOppStatsAus_hundreds,
    };
    
    const t20WcOppStatsEng = {
        matches: data.t20WcOppStatsEng_matches,
        innings: data.t20WcOppStatsEng_innings,
        runs: data.t20WcOppStatsEng_runs,
        average: data.t20WcOppStatsEng_average,
        strikeRate: data.t20WcOppStatsEng_strikeRate,
        fifties: data.t20WcOppStatsEng_fifties,
        hundreds: data.t20WcOppStatsEng_hundreds,
    };
    
    const t20WcOppStatsNz = {
        matches: data.t20WcOppStatsNz_matches,
        innings: data.t20WcOppStatsNz_innings,
        runs: data.t20WcOppStatsNz_runs,
        average: data.t20WcOppStatsNz_average,
        strikeRate: data.t20WcOppStatsNz_strikeRate,
        fifties: data.t20WcOppStatsNz_fifties,
        hundreds: data.t20WcOppStatsNz_hundreds,
    };
    
    const t20WcOppStatsSa = {
        matches: data.t20WcOppStatsSa_matches,
        innings: data.t20WcOppStatsSa_innings,
        runs: data.t20WcOppStatsSa_runs,
        average: data.t20WcOppStatsSa_average,
        strikeRate: data.t20WcOppStatsSa_strikeRate,
        fifties: data.t20WcOppStatsSa_fifties,
        hundreds: data.t20WcOppStatsSa_hundreds,
    };
    
    const t20WcOppStatsInd = {
        matches: data.t20WcOppStatsInd_matches,
        innings: data.t20WcOppStatsInd_innings,
        runs: data.t20WcOppStatsInd_runs,
        average: data.t20WcOppStatsInd_average,
        strikeRate: data.t20WcOppStatsInd_strikeRate,
        fifties: data.t20WcOppStatsInd_fifties,
        hundreds: data.t20WcOppStatsInd_hundreds,
    };
    
    const t20WcOppStatsPak = {
        matches: data.t20WcOppStatsPak_matches,
        innings: data.t20WcOppStatsPak_innings,
        runs: data.t20WcOppStatsPak_runs,
        average: data.t20WcOppStatsPak_average,
        strikeRate: data.t20WcOppStatsPak_strikeRate,
        fifties: data.t20WcOppStatsPak_fifties,
        hundreds: data.t20WcOppStatsPak_hundreds,
    };
    
    const t20WcOppStatsBan = {
        matches: data.t20WcOppStatsBan_matches,
        innings: data.t20WcOppStatsBan_innings,
        runs: data.t20WcOppStatsBan_runs,
        average: data.t20WcOppStatsBan_average,
        strikeRate: data.t20WcOppStatsBan_strikeRate,
        fifties: data.t20WcOppStatsBan_fifties,
        hundreds: data.t20WcOppStatsBan_hundreds,
    };
    
    const t20WcOppStatsSl = {
        matches: data.t20WcOppStatsSl_matches,
        innings: data.t20WcOppStatsSl_innings,
        runs: data.t20WcOppStatsSl_runs,
        average: data.t20WcOppStatsSl_average,
        strikeRate: data.t20WcOppStatsSl_strikeRate,
        fifties: data.t20WcOppStatsSl_fifties,
        hundreds: data.t20WcOppStatsSl_hundreds,
    };
    
    const t20WcOppStatsWi = {
        matches: data.t20WcOppStatsWi_matches,
        innings: data.t20WcOppStatsWi_innings,
        runs: data.t20WcOppStatsWi_runs,
        average: data.t20WcOppStatsWi_average,
        strikeRate: data.t20WcOppStatsWi_strikeRate,
        fifties: data.t20WcOppStatsWi_fifties,
        hundreds: data.t20WcOppStatsWi_hundreds,
    };
    
    const t20WcOppStatsIre = {
        matches: data.t20WcOppStatsIre_matches,
        innings: data.t20WcOppStatsIre_innings,
        runs: data.t20WcOppStatsIre_runs,
        average: data.t20WcOppStatsIre_average,
        strikeRate: data.t20WcOppStatsIre_strikeRate,
        fifties: data.t20WcOppStatsIre_fifties,
        hundreds: data.t20WcOppStatsIre_hundreds,
    };
    
    const t20WcOppStatsAfg = {
        matches: data.t20WcOppStatsAfg_matches,
        innings: data.t20WcOppStatsAfg_innings,
        runs: data.t20WcOppStatsAfg_runs,
        average: data.t20WcOppStatsAfg_average,
        strikeRate: data.t20WcOppStatsAfg_strikeRate,
        fifties: data.t20WcOppStatsAfg_fifties,
        hundreds: data.t20WcOppStatsAfg_hundreds,
    };
    
    const t20WcOppStatsZim = {
        matches: data.t20WcOppStatsZim_matches,
        innings: data.t20WcOppStatsZim_innings,
        runs: data.t20WcOppStatsZim_runs,
        average: data.t20WcOppStatsZim_average,
        strikeRate: data.t20WcOppStatsZim_strikeRate,
        fifties: data.t20WcOppStatsZim_fifties,
        hundreds: data.t20WcOppStatsZim_hundreds,
    };
    
    const t20WcYearSpan = {
        debutYear: data.t20WcYearStats_debut_year,
        lastYear: data.t20WcYearStats_last_year,
    };
    
    const yearStatsArr = await generateYearObject('t20WcYearStats',t20WcYearSpan.debutYear,t20WcYearSpan.lastYear,data);

    let t20WcData = {
        careerStats: { ...t20WcCareerStats },
        homeStats: { ...t20WcHomeStats },
        awayStats: { ...t20WcAwayStats },
        winsStats: { ...t20WcWinsStats },
        lostStats: { ...t20WcLostStats },
        firstInningStats: { ...t20Wc1stInnStats },
        secondInningStats: { ...t20Wc2ndInnStats },
        semisStats: { ...t20WcSemisStats },
        finalsStats: { ...t20WcFinalsStats },
        opponentStats: {
            aus: { ...t20WcOppStatsAus },
            eng: { ...t20WcOppStatsEng },
            nz: { ...t20WcOppStatsNz },
            sa: { ...t20WcOppStatsSa },
            ind: { ...t20WcOppStatsInd },
            pak: { ...t20WcOppStatsPak },
            ban: { ...t20WcOppStatsBan },
            sl: { ...t20WcOppStatsSl },
            wi: { ...t20WcOppStatsWi },
            ire: { ...t20WcOppStatsIre },
            afg: { ...t20WcOppStatsAfg },
            zim: { ...t20WcOppStatsZim },
        },
        yearStats: {
            yearSpan: { ...t20WcYearSpan },
            stats: [...yearStatsArr]
        }
    };
return t20WcData;    
}
export {getSetAllFormatData, getSetTestFormatData,getSetOdiFormatData,getSetOdiWcData,getSett20FormatData,getSett20WcData}