function display(){
    var k=document.getElementById("tempTable").value;
    var request=new XMLHttpRequest();
    const country=document.getElementById("country").value
    console.log(country)
    const url=`https://api.covid19api.com/live/country/${country}`
    console.log(url)    
    request.open('GET',url,true);
    request.send();
   
    request.onload=function(){
        var res=JSON.parse(request.response)
        t=document.createElement("TABLE")
        t.border="1"
        var row=t.insertRow(-1);
        var ch1=row.insertCell(-1);
        var ch2=row.insertCell(-1);
        var ch3=row.insertCell(-1);
        ch1.innerHTML=("Active").bold();
        ch2.innerHTML="Recovered".bold();
        ch3.innerHTML="Deaths".bold();
        try{
            res.forEach((day)=>{
                var r1=t.insertRow(-1);
                var c1=r1.insertCell(-1);
                var c2=r1.insertCell(-1);
                var c3=r1.insertCell(-1);
                c1.innerHTML=day.Active;
                c2.innerHTML=day.Recovered;
                c3.innerHTML=day.Deaths;
                //console.log(day)
            })
            tableDiv=document.getElementById("tempTable")
            tableDiv.innerHTML="";
            tableDiv.append(t);
        }catch(err){
            alert("Please enter valid country name");
        }
       
        console.log("end")
    }
   
}
// const fetch=require("node-fetch")
// const country="India"

// const url=`https://api.covid19api.com/live/country/${country}`
// fetch(url)
// .then((response)=>{
//         return response.json()
//     })
// .then(data=>
// {

//     console.log("Active","Deaths","Recovered")
//     data.forEach((element)=>{

//         if(element.Province=='Telangana')
//         {
//             console.log(element.Active,element.Deaths,element.Recovered)
           
//         }
//     })
// })
// .catch((err)=>{
//     console.log(err)
// })