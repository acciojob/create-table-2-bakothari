function createTable() {
    //Write your code here

    
 let rows = prompt("Input number of rows");
 rows = parseInt(rows);

 let cols = prompt("Input number of columns");
 cols = parseInt(cols);
 if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
    alert("Please enter valid positive numbers for rows and columns.");
    return;
 }
  let table = document.getElementById("myTable")
   
  for(let i =0;i<rows;i++){
     let tablerow = document.createElement("tr")
     for(let j=0;j<cols;j++){
       let cell = document.createElement("td");
       cell.textContent = `Rows-${i} Column-${j}`
         tablerow.appendChild(cell)
      }
      table.appendChild(tablerow)
    }
   
    
}

