var globalData;

// function bringData (){
//     $.ajax({
//         url:"products.json",
//         success: function (data){
//             // console.log(data);
//             globalData = data;
            
//         }
//     })
// }

// bringData();

// //add data to table 

// function fillTable(){
//     globalData.forEach(element => {
                
//     });
// }

function bringData(){
    $.get("products.json", function(data){
        console.log(data);
        globalData = data;
        fillTable()
    });
}

bringData();

// fill html table from json file 

function fillTable(){
    globalData.forEach(element => {
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