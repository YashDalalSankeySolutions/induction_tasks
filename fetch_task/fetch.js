async function fetchData() {
    const url = "https://run.mocky.io/v3/9b184f9d-bf48-4467-9d8f-137ea0eba817"
    try{
        const response = await fetch(url);
        const jsonRes = await response.json();
        const data = jsonRes.data;
        // console.log(data)
        if(data!==undefined){
            let element = '';
            let rowElement =''
            let headingElement = '<tr>';
            var headings = [] 
            for(var key in data[0]){
                headings.push(key);
                headingElement += (`<th>${key.charAt(0).toUpperCase()+key.slice(1)}</th>`)
            }
            headingElement += '</tr>'

            data.forEach(d=>{
                // console.log(d)
                rowElement += "<tr>"
                headings.forEach(heading=>{
                    
                    rowElement += `<td>${d[heading]}</td>`
                })
                rowElement += "</tr>"
            })
            // console.log(headings)
            // console.log(rowElement)
            element+=headingElement;
            element+=rowElement;
            // console.log(element)
            var table = document.getElementById('dataTable');
            // console.log(table);
            table.innerHTML = element;
        }

    }
    catch(err){
        console.log(err)
    }
    
    
}
fetchData()
