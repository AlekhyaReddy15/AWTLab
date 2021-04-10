function display(){
    var request=new XMLHttpRequest();
    const username=document.getElementById("u").value
    console.log(username)
    const url=`https://api.github.com/users/${username}/repos`
    console.log(url)
    request.open('GET',url,true);
    request.send();
    request.onload=function(){
        var res=JSON.parse(request.response)
        t=document.createElement("TABLE")
        t.border="2"
        var row=t.insertRow(-1);
        var ch1=row.insertCell(-1);
        var ch2=row.insertCell(-1);
        ch1.innerHTML="Repository".bold();
        ch2.innerHTML="Description".bold();
        try{
            res.forEach((element)=>{
                var r1=t.insertRow(-1);
                var c1=r1.insertCell(-1);
                var c2=r1.insertCell(-1);
                c1.innerHTML=element.name;
                c2.innerHTML=element.description;
                console.log(element)
            })
            tableDiv=document.getElementById("tempTable")
            tableDiv.innerHTML="";
            tableDiv.append(t);
        }catch(err){
            alert("Please enter valid user name");
            location.reload(true);
        }
       
        console.log("end")
    }
   
}
// const fetch=require("node-fetch")

// const url=`https://api.github.com/users/AlekhyaReddy15/repos`
// fetch(url)
// .then((response)=>{
//         return response.json()
//     })
// .then(data=>
// {
//     data.forEach((element)=>{
       
//         console.log(element.name)
//         console.log(element.description)
        
//     })
// })