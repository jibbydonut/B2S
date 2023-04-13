// 
console.log("Hallo b2s")
let viz;
// 1. create variable to store vizContainer
// 2. create variable to store dashboard options
// 3. create variable to store URL - if doesn't load, might need to specify height & width

const containerDiv = document.getElementById("vizContainer")
const options = {
    device:"desktop",
    
};
const url = "https://public.tableau.com/views/test_16813783105190/Dashboard1?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"
const exportpdfbutton = document.getElementById("exportPDF")
function initViz() {
    viz = new tableau.Viz(containerDiv,url,options)
}
initViz();
document.addEventListener("DOMContentLoaded",initViz)

exportpdfbutton.addEventListener("click", exportPDFfunction)
function exportPDFfunction(){
    viz.showExportPDFDialog();
}

const exportpptbutton = document.getElementById("exportPPT")

exportpptbutton.addEventListener("click", exportPPTfunction)
function exportPPTfunction(){
    viz.showExportPowerPointDialog();
}

document.getElementById("FilterButton").addEventListener("click",getRangeValues)

function getRangeValues(){
    const minValue = document.getElementById("minValue").value
    const maxValue = document.getElementById("maxValue").value
    console.log(minValue, maxValue);
    const workbook = viz.getWorkbook();
    const activeSheet = workbook.getActiveSheet();
    const sheets = activeSheet.getWorksheets();
    console.log(sheets);
    const sheetToFilter = sheets[0];
    sheetToFilter.applyRangeFilterAsync("SUM(Sales)",{min: minValue, max: maxValue}).then(alert("You done filtered it 🧨"));
}