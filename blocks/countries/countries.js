export default async function decorate(block){

 const countries = block.querySelector('a[href$=".json"]');
 countries.style.display = 'none';
 console.log(countries);
//  const endpoint = countries.href;
//  const pathName  = new URL(endpoint);
// const response = await fetch(pathName);
// const data = await response.json();
//  console.log(data);
//  console.log(pathName);
//  console.log(endpoint);
createDropdown(block);
 

 const parentDiv = document.createElement("div");
  if (countries) {
        parentDiv.appendChild(await createTable(countries.href));
        countries.replaceWith(parentDiv);
        
    }

 const dropdown=document.getElementById('countries-dropdown');
  dropdown.addEventListener("change", (event) => {
        console.log("Selected:", event.target.value);
        let url = countries.href;
        if(dropdown.value!='all'){
            url=countries.href+"?sheet="+dropdown.value;
        }
         const tableE=parentDiv.querySelector(":scope > table");
          let promise = Promise.resolve(createTable(url));
        promise.then(function (val) {
            tableE.replaceWith(val);
        });
    });

}
async function createTable(url){
    
const pathName  = new URL(url);
const response = await fetch(pathName);
const table = document.createElement('table');

const data = await response.json();
createHeader(table,data.columns)
createRowsAndColumns(table,data)
return table;

}

function createHeader(table,columns){
const tr =  document.createElement("tr");
columns.forEach(header => {
    const th =  document.createElement("th");
    th.appendChild(document.createTextNode(header));
    tr.appendChild(th)
    
  });
  table.appendChild(tr);
 }

 function createRowsAndColumns(table,json){
 const columns = Object.keys(json.data[0]);

json.data.forEach(country => {

    const tr = document.createElement("tr");

    columns.forEach(column => {
        const td = document.createElement("td");
        td.textContent = country[column];
        tr.appendChild(td);
    });

    table.appendChild(tr);
});
 console.log(table)
 }
 function createDropdown(block) {

    const continents = [
        "All",
        "Asia",
        "Europe",
        "Africa",
        "America",
        "Oceania"
    ];

    const select = document.createElement("select");
 select.setAttribute('id', 'countries-dropdown')
    continents.forEach(continent => {
        const option = document.createElement("option");
        option.value = continent.toLowerCase();
        option.textContent = continent;
        select.appendChild(option);
    });

    block.prepend(select);
}