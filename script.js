var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    for(var i=0;i<data.length;i++)
    {
        console.log(data[i].name, data[i].capital);
        console.log(` capital:${data[i].name} 
        capital:${data[i].capital} Latitude: ${data[i].latlng[0]} Longitude: ${ data[i].latlng[1]} Region: ${data[i].region}
        population:${data[i].population} Timezone:${data[i].timezones} Languages:${data[i].languages}
        Borders:${data[i].borders} Flag:${data[i].flag}`);
    }
}
