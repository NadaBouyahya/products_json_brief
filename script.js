var globalData;
var $searchBar = $("#mySearchBar");
// var mySearchBar = document.querySelector('#mySearchBar');
// var Tbody_content = document.querySelector('tbody')
function bringData(){
    $.get("products.json", function(data){
        console.log(data);
        globalData = data;
        fillTable(globalData)
    });
}

bringData();
// fill html table from json file 

function fillTable(re){
    re.forEach(element => {
            var ul = document.createElement("ul");
            element.availablity.forEach(av => {
                var li = document.createElement("li");
                li.innerHTML = av;
                ul.appendChild(li);
            })
        var provider_info = element.provider["company name"] +'<br>'+ element.provider["adress"];
        // console.log(element);
        $('#Tbody').append($('<tr>')
        .append($('<td>').append(element.id))
        .append($('<td>').append(element.name))
        .append($('<td>').append(element.price))
        .append($('<td>').append(element.category))
        // .append($('<td>').append(element.availablity))
        .append($('<td>').append(ul.innerHTML))
        .append($('<td>').append(provider_info))
    )});
}


// search by name in table 

 $searchBar.on("keyup", function(){
    list_search = [];
    globalData.forEach(prod => {
        if(prod.name.includes(mySearchBar.value)){
            list_search.push(prod);
        }
    });
    $("#Tbody").html("");
    fillTable(list_search);
    // console.log(globalData[0].name.includes(mySearchBar.value))
})

// sort table by id and price
function sort_byNum(re, arow){
    var sorting = re.parentElement.innerText.trim();
    if(arow == "up"){
        globalData.sort(function(a,b){
            return a[sorting] - b[sorting]
        })
    }
    else if(arow=="down"){
        globalData.sort(function(a,b){
            return b[sorting] - a[sorting]
        })
    }
    $("#Tbody").html("");
    fillTable(globalData);

}


//sort table by name and category
function sort_alph(re, arow){
    var sorting = re.parentElement.innerText.trim();
    if (arow == "up"){
        globalData.sort(function(a,b){
            if(a[sorting] < b[sorting]) return -1
        })
    }
    else{
        globalData.sort(function(a,b){
            if(a[sorting] > b[sorting]) return -1
        })
    }
    $("#Tbody").html("");
    fillTable(globalData);

}