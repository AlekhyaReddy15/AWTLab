function display(){
    var request=new XMLHttpRequest();
    const city=document.getElementById("c").value
    console.log(city)
    var apikey='5efc2a270243044daa181e47bb804b95'
    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apikey}`

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
        var ch4=row.insertCell(-1);
        var ch5=row.insertCell(-1);
        ch1.innerHTML="Date".bold();
        ch2.innerHTML="Time".bold();
        ch3.innerHTML="Temp".bold();
        ch4.innerHTML="Min_Temp".bold();
        ch5.innerHTML="Max_Temp".bold();
        try{
            res.list.forEach((day)=>{
                var r1=t.insertRow(-1);
                var c1=r1.insertCell(-1);
                var c2=r1.insertCell(-1);
                var c3=r1.insertCell(-1);
                var c4=r1.insertCell(-1);
                var c5=r1.insertCell(-1);
                var str=(day.dt_txt).split(" ");
                c1.innerHTML=str[0];
                c2.innerHTML=str[1];
                c3.innerHTML=day.main.temp;
                c4.innerHTML=day.main.temp_min;
                c5.innerHTML=day.main.temp_max;
                //console.log(day)
            })
            
            tableDiv=document.getElementById("tempTable")
            tableDiv.innerHTML="";
            tableDiv.append(t);
            console.log(res)
        }catch(err){
            alert("Please enter valid city name");
            window.reload()
        }
       
        console.log("end")
    }

}