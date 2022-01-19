var globalData;
var mySearchBar = document.querySelector('#mySearchBar');
var Tbody_content = document.querySelector('tbody')
function bringData(){
    $.get("products.json", function(data){
        console.log(data);
        globalData = data;
        fillTable(globalData)
    });
}

bringData();

// fill html table from json file 

function fillTable(dt){
    dt.forEach(element => {
        var provider_info = element.provider["company name"] +'<br>'+ element.provider["adress"];
        // console.log(element);
        $('#Tbody').append($('<tr>')
        .append($('<td>').append(element.id))
        .append($('<td>').append(element.name))
        .append($('<td>').append(element.price))
        .append($('<td>').append(element.category))
        .append($('<td>').append(element.availablity))
        .append($('<td>').append(provider_info))
    )});
}

// search by name in table 

$("#mySearchBar").on("keyup", function(){
    list_search = [];
    globalData.forEach(prod => {
        if(prod.name.includes(mySearchBar.value)){
            list_search.push(prod);
        }
    });
    Tbody_content.innerHTML = "";
    fillTable(list_search);
    // console.log(globalData[0].name.includes(mySearchBar.value))
})