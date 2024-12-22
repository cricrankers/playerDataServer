// ---------------------------- Utility Functions ---------------------------- //

/**
 * Renders a responsive table from an existing HTML table.
 * @param {HTMLElement} table - The original table to render.
 * @returns {HTMLElement} The responsive table or an error message.
 */
function renderTable(table) {
    if (table) {
        table.classList.add('career-averages-table');

        const rows = table.querySelectorAll('tbody tr');
        const headers = table.querySelectorAll('thead th');
        const captionText = table.querySelector('caption')?.innerText.trim() || 'Table';

        const responsiveTable = document.createElement('table');
        responsiveTable.classList.add('career-averages-table');

        // Add caption
        const caption = document.createElement('caption');
        caption.textContent = captionText;
        responsiveTable.appendChild(caption);

        // Add rows and headers
        headers.forEach((header, index) => {
            const row = document.createElement('tr');
            const headerCell = document.createElement('th');
            headerCell.textContent = header.textContent.trim();
            row.appendChild(headerCell);

            rows.forEach((dataRow, rowIndex) => {
                const dataCell = document.createElement('td');
                const data = dataRow.querySelectorAll('td')[index]?.textContent.trim() || '-';
                dataCell.textContent = data;

                // Apply light blue shading to the specific row
                if (rowIndex === 0) { // Assuming the first row contains the career statistics
                    const targetHeaders = ['Mat', 'Inns', 'Runs', 'Ave', 'SR', '50', '100'];
                    const targetHeaderText = header.textContent.trim();

                    if (targetHeaders.includes(targetHeaderText)) {
                        dataCell.style.backgroundColor = '#E0F7FA'; // Light blue shade
                    }
                }

                row.appendChild(dataCell);
            });

            responsiveTable.appendChild(row);
        });

        return responsiveTable;
    } else {
        const container = document.getElementById('table-container');
        container.innerHTML = 'Career Averages table not found!';
    }
}





// ---------------------------- Event Handlers ---------------------------- //

/**
 * Handles the "fill-min" checkbox functionality to populate or clear inputs.
 */
document.querySelectorAll('.fill-min').forEach((checkbox) => {
    checkbox.addEventListener('change', function () {
        const fieldset = this.closest('fieldset');
        const inputs = fieldset.querySelectorAll('input[type="number"]');

        inputs.forEach((input) => {
            input.value = this.checked ? '0' : '';
        });
    });
});

function fillMin() {
    document.querySelectorAll('.fill-min').forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
            const fieldset = this.closest('fieldset');
            const inputs = fieldset.querySelectorAll('input[type="number"]');
            const inputs2 = fieldset.querySelectorAll('[id="average"]');

            // If the checkbox is checked, set all number inputs and the average field to '0' or '-'
            inputs.forEach((input) => {
                input.value = this.checked ? '0' : ''; // Set '0' for other number inputs
            });

            inputs2.forEach((input) => {
                input.value = this.checked ? '-' : ''; // Set '-' for the average field
            });
        });
    });
}


function testing(){

    let inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach((input) => {
           let minvalue =  input.getAttribute('min')
         input.value = minvalue;
     });
         
}
/**
 * Handles the generation of input fields for each year based on debut and last years.
 */
function fillData(careerStats,yearStats){

    careerStats = document.querySelector(`#${careerStats}`);
    debutYear = careerStats.querySelector('#debut').value;
    lastPlayed = careerStats.querySelector('#last-played').value;

    yearStats = document.querySelector(`#${yearStats}`);

    yearStats.querySelector('#debut_year').value = debutYear;
    yearStats.querySelector('#last_year').value = lastPlayed;


}

function generateYear(event, yearId,type) {
    // Ensure the clicked element has the 'generate-btn' class
    if (!event.target.classList.contains('generate-btn')) return;

    const playerId = document.getElementById('pid').value;
    // Find the closest '.field-generator' container
    const parent = document.querySelector(`#${yearId}`)
    const generator = parent.querySelector('.field-generator');
    const debutYearInput = generator.querySelector('#debut_year');
    const lastYearInput = generator.querySelector('#last_year');
    const fieldsContainer = generator.querySelector('.year-container');

    // Parse the years from the input fields
    const debutYear = parseInt(debutYearInput.value.trim(), 10);
    const lastYear = parseInt(lastYearInput.value.trim(), 10);

    // Validation to ensure the years are valid
    if (isNaN(debutYear) || isNaN(lastYear) || debutYear > lastYear) {
        alert('Please enter valid debut and last played years.');
        return;
    }

    let urlValue;
    
    // Clear previous fields if any
    fieldsContainer.innerHTML = '';
    const yearsCount = lastYear - debutYear + 1;

    // Loop through the years and generate fields for each year
    for (let i = 0; i < yearsCount; i++) {
        const yearLabel = debutYear + i;

        // Create a new fieldset for each year
        const fieldSet = document.createElement('fieldset');
        fieldSet.classList.add('margins');
        fieldSet.id = `${yearId}${yearLabel}`;

       if(type=='t20Wc'){
            urlValue = `https://stats.espncricinfo.com/ci/engine/player/${playerId}.html?class=3;filter=advanced;orderby=default;spanmax2=31+dec+${yearLabel};spanmin2=1+jan+${yearLabel};spanval2=span;template=results;trophy=89;type=batting`;
       }
       if(type=='odiWc'){
           urlValue = `https://stats.espncricinfo.com/ci/engine/player/${playerId}.html?class=2;filter=advanced;orderby=default;spanmax1=31+dec+${yearLabel};spanmin1=1+jan+${yearLabel};spanval1=span;template=results;trophy=12;type=batting`;
       }
       if(type == 'odi'){
           urlValue = `https://stats.espncricinfo.com/ci/engine/player/${playerId}.html?class=2;filter=advanced;orderby=default;spanmax1=31+dec+${yearLabel};spanmin1=1+jan+${yearLabel};spanval1=span;template=results;type=batting`
       }
       if(type == 't20'){
        urlValue = `https://stats.espncricinfo.com/ci/engine/player/${playerId}.html?class=3;filter=advanced;orderby=default;spanmax1=31+dec+${yearLabel};spanmin1=1+jan+${yearLabel};spanval1=span;template=results;type=batting`
       }
       if(type == 'test'){
        urlValue = `https://stats.espncricinfo.com/ci/engine/player/${playerId}.html?class=1;filter=advanced;orderby=default;spanmax1=31+dec+${yearLabel};spanmin1=1+jan+${yearLabel};spanval1=span;template=results;type=batting`
       }
       if(type == 'allFormat'){
        urlValue = `https://stats.espncricinfo.com/ci/engine/player/${playerId}.html?class=11;filter=advanced;orderby=default;spanmax1=31+dec+${yearLabel};spanmin1=1+jan+${yearLabel};spanval1=span;template=results;type=batting`
       }

        // Set the inner HTML of the fieldset
        fieldSet.innerHTML = `
            <legend>Year: ${yearLabel}</legend>
            <label><input type="checkbox" class="fill-min" name="fill" onchange="fillMin()">Not Applicable</label><br>
           <div class="iframe-section margins">
               <input type="text" class="url-input" value="${urlValue}">
               <button type="button" class="search-btn" onclick="scrapYear(2, '${yearId}${yearLabel}')">Search</button>
           </div>
           <label for="matches" class="margins">Matches: </label>
           <input type="number" class="margins" id="matches" required min="0" max="1000" 
                  name="${yearId}_${yearLabel}_matches">
           <br>
           <label for="innings" class="margins">Innings: </label>
           <input type="number" class="margins" id="innings" required min="0" max="1000" 
                  name="${yearId}_${yearLabel}_innings">
           <br>
           <label for="runs" class="margins">Runs: </label>
           <input type="number" class="margins" id="runs" required min="0" max="35000" 
                  name="${yearId}_${yearLabel}_runs">
           <br>
           <label for="average" class="margins">Average: </label>
           <input type="number" class="margins" id="average" min="0" max="1000" step="0.01" required 
                  name="${yearId}_${yearLabel}_average">
           <br>
           <label for="strikeRate" class="margins">Strike Rate: </label>
           <input type="number" class="margins" id="strikeRate" min="0" max="500" step="0.01" required 
                  name="${yearId}_${yearLabel}_strikeRate">
           <br>
           <label for="fifties" class="margins">50s: </label>
           <input type="number" class="margins" id="fifties" min="0" max="500" 
                  name="${yearId}_${yearLabel}_fifties">
           <br>
           <label for="hundreds" class="margins">100s: </label>
           <input type="number" class="margins" id="hundreds" min="0" max="500" 
                  name="${yearId}_${yearLabel}_hundreds">
           <br>

        `;

        // Append the fieldset to the fields container
        fieldsContainer.appendChild(fieldSet);
    }
}
// ---------------------------- Global Variables ---------------------------- //
const urlResponseMap = new Map();
const maxRetries = 5;  // Maximum number of retries for fetching data

// ---------------------------- Event Listeners ---------------------------- //
prefetchUrls();

// ---------------------------- Utility Functions ---------------------------- //
async function retryFetchUrlContent(url, retries = 0) {
    const baseUrl = window.location.origin;  
    const proxyUrl = `${baseUrl}/proxy?url=${encodeURIComponent(url)}`;    
    if (urlResponseMap.has(url)) return urlResponseMap.get(url);

    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        urlResponseMap.set(url, data.contents);
        return data.contents;
    } catch (error) {
        if (retries < maxRetries) {
            console.log(`Retrying... Attempt ${retries + 1} for ${url}`);
            return retryFetchUrlContent(url, retries + 1);  // Retry fetching
        }
        urlResponseMap.set(url, { error: error.message });
        throw error;  // After max retries, throw the error
    }
}


function parseHtmlContent(html) {
    return new DOMParser().parseFromString(html, 'text/html');
}

// ---------------------------- Prefetch URLs ---------------------------- //
async function prefetchUrls() {
    const urlList = Array.from(document.querySelectorAll('.url-input'));
    console.log(urlList.length);

    for (const urlElement of urlList) {
        const url = urlElement.value;

        try {
            await retryFetchUrlContent(url);
            console.log('Data fetched successfully');
        } catch (error) {
            console.log(`Failed to fetch data for URL: ${url}`);
        }
    }
}

// ---------------------------- Add URLs From Section ---------------------------- //
async function addUrlsFromSection(sectionId) {
    const section = document.getElementById(sectionId);
    const urlList = Array.from(section.querySelectorAll('.url-input'));

    for (const urlElement of urlList) {
        const url = urlElement.value;

        try {
            await retryFetchUrlContent(url);
            console.log('Data fetched successfully');
        } catch (error) {
            console.log(`Failed to fetch data for URL: ${url}`);
        }
    }
}

// ---------------------------- Scrap Data ---------------------------- //
async function scrap(rowNo, sectionId) {
    const section = document.getElementById(sectionId);
    const url = section.querySelector('.url-input').value;
    const tableContainer = document.getElementById('table-container');

    tableContainer.innerHTML = '<p>Data is loading...</p>';
    await scrapEngineTable(sectionId);

    try {
        const html = await retryFetchUrlContent(url);
        const doc = parseHtmlContent(html);

        displayCareerAveragesTable(doc, rowNo, section, tableContainer);
    } catch (error) {
        tableContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

async function scrapYear(rowNo, sectionId) {
    const section = document.getElementById(sectionId);
    const url = section.querySelector('.url-input').value;
    const tableContainer = document.getElementById('table-container');

    tableContainer.innerHTML = '<p>Data is loading...</p>';
    await scrapEngineTable(sectionId);

    try {
        const html = await retryFetchUrlContent(url);
        const doc = parseHtmlContent(html);

        displayCareerAveragesTable(doc, rowNo, section, tableContainer, true);
    } catch (error) {
        tableContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

function displayCareerAveragesTable(doc, rowNo, section, tableContainer, isYear = false) {
    const tables = doc.querySelectorAll('table.engineTable');
    const playerUrl = document.getElementById('player-url');
    const anchorElement = doc.querySelector('.icc-home a');
    
    if (anchorElement) {
        playerUrl.innerText = anchorElement.innerText;
    } else {
        console.error('Anchor element not found inside .icc-home');
    }
    

    let careerAveragesTable = Array.from(tables).find((table) =>
        table.querySelector('caption')?.innerText.trim() === 'Career averages'
    );

    if (careerAveragesTable) {
        const rows = careerAveragesTable.querySelectorAll('tr');
        const filteredRow = rows[rowNo];

        if (filteredRow) {
            const columns = filteredRow.querySelectorAll('td');
            populateFields(columns, section, isYear);
            careerAveragesTable = renderTable(careerAveragesTable);
            tableContainer.innerHTML = careerAveragesTable.outerHTML;
        } else {
            tableContainer.innerHTML = '<p>Filtered row not found!</p>';
        }
    } else {
        tableContainer.innerHTML = '<p>Career Averages Table not found!</p>';
    }
}

function populateFields(columns, section, isYear) {
    const populateField = (selector, value) => {
        try {
            section.querySelector(selector).value = value;
        } catch (error) {
            // Ignore errors when populating fields
        }
    };

    const isSpanPresent = columns[1]?.innerText.toLowerCase().includes('-');
    if (isYear || !isSpanPresent) {
      
        populateField('#debut', columns[1]?.innerText.trim().split('-')[0]);
        populateField('#last-played', columns[1]?.innerText.trim().split('-')[1]);
        populateField('#matches', columns[1]?.innerText.trim());
        populateField('#innings', columns[2]?.innerText.trim());
        populateField('#runs', columns[4]?.innerText.trim());
        populateField('#average', columns[6]?.innerText.trim());
        populateField('#strikeRate', columns[8]?.innerText.trim());
        populateField('#fifties', columns[10]?.innerText.trim());
        populateField('#hundreds', columns[9]?.innerText.trim());
    } else {
        populateField('#debut', columns[1]?.innerText.trim().split('-')[0]);
        populateField('#last-played', columns[1]?.innerText.trim().split('-')[1]);
        populateField('#matches', columns[2]?.innerText.trim());
        populateField('#innings', columns[3]?.innerText.trim());
        populateField('#runs', columns[5]?.innerText.trim());
        populateField('#average', columns[7]?.innerText.trim());
        populateField('#strikeRate', columns[9]?.innerText.trim());
        populateField('#fifties', columns[11]?.innerText.trim());
        populateField('#hundreds', columns[10]?.innerText.trim());
    }
}

// ---------------------------- Scrap Engine Table ---------------------------- //
async function scrapEngineTable(sectionId) {
    const section = document.getElementById(sectionId);
    const url = section.querySelector('.url-input').value;
    const tableContainer = document.getElementById('table-container2');

    tableContainer.innerHTML = '<p>Data is loading...</p>';

    try {
        const html = await retryFetchUrlContent(url);
        const doc = parseHtmlContent(html);

        const tables = doc.querySelectorAll('table.engineTable');
        const engineTable = Array.from(tables).find((table) =>
            Array.from(table.querySelectorAll('tr')).some((row) => {
                const cellText = row.textContent.trim();
                return cellText.includes('Records type') || cellText.includes('View') || cellText.includes('Ordered by');
            })
        );

        if (engineTable) {
            tableContainer.innerHTML = engineTable.outerHTML;
        } else {
            tableContainer.innerHTML = '<p>Engine Table not found!</p>';
        }
    } catch (error) {
        console.error('Error fetching or parsing Engine Table HTML:', error);
        tableContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

