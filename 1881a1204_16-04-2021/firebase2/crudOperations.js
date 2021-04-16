const firebaseConfig = {
    apiKey: "AIzaSyCkmhq3nQbpo9lddCHHyBIG1t9fD0r1Xc0",
    authDomain: "firstproject-cf299.firebaseapp.com",
    databaseURL: "https://firstproject-cf299-default-rtdb.firebaseio.com",
    projectId: "firstproject-cf299",
    storageBucket: "firstproject-cf299.appspot.com",
    messagingSenderId: "294263628600",
    appId: "1:294263628600:web:1956932b79169c9c2c17cd",
    measurementId: "G-G6VQ4NCV3J"
};  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var dbReference=firebase.database().ref().child("Students")

//insertion
function insertUser(){
    let name=document.getElementById("uname").value
    let rollno=document.getElementById("rollno").value
    let branch=document.getElementById("branch").value

    dbReference.child(rollno).set({
        name:name,
        rollno:rollno,
        branch:branch
    })
    console.log("Inserted")
    displayUsers()
}

//deletion
function deleteUser(rollno){
    dbReference.child(rollno).remove();
    console.log(rollno," deleted")
    displayUsers();
}

//updation
function updateUser(name,rollno,branch){
    dbReference.child(rollno).update({
        name:name,
        rollno:rollno,
        branch:branch
    })
    console.log("UPDATED")
    displayUsers();
}

//display records

function displayUsers(){

    t=document.createElement("TABLE");
    t.border="1"
    var row=t.insertRow(-1);
    var ch1=row.insertCell(-1);
    var ch2=row.insertCell(-1);   
    var ch3=row.insertCell(-1);
    var ch4=row.insertCell(-1);
    var ch5=row.insertCell(-1);
    var ch6=row.insertCell(-1);
    ch1.innerHTML="SlNo.".bold();
    ch2.innerHTML="Name".bold();
    ch3.innerHTML="Rollno".bold();
    ch4.innerHTML="Branch".bold();
    ch5.innerHTML="Operation 1".bold();
    ch6.innerHTML="Operation 2".bold();
    var i=0;
    
    dbReference.on('child_added',(snap)=>{
        r=t.insertRow(-1)
        c1=r.insertCell(-1);
        c2=r.insertCell(-1);
        c3=r.insertCell(-1);
        c4=r.insertCell(-1);
        c5=r.insertCell(-1);
        c6=r.insertCell(-1);
        c1.innerHTML=i+1;
        c2.innerHTML=snap.val().name;
        c3.innerHTML=snap.val().rollno;
        c4.innerHTML=snap.val().branch;
        var button=document.createElement("button")
        button.innerHTML=`<i class="fas fa-trash-alt"></i>`
        c5.appendChild(button);
        button.addEventListener("click",function(){
            deleteUser(snap.val().rollno)
        })
        var button2=document.createElement("button")
        button2.innerHTML=`<i class="fas fa-edit "></i>`
        c6.appendChild(button2);
        button2.addEventListener("click",function(){
            name1=window.prompt("Name:",snap.val().name)
            b=window.prompt("Branch:",snap.val().branch)
            updateUser(name1,snap.val().rollno,b)

        })
     
        i++;

    })
    displayD=document.getElementById("display")
    displayD.innerHTML="";
    if(i!=0)
        displayD.appendChild(t)


}
displayUsers();
function resetValues(){
    document.getElementById("uname").value="";
    document.getElementById("rollno").value="";
    document.getElementById("branch").value="";
}