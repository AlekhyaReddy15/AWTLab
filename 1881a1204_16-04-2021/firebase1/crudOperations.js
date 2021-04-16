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
var dbReference=firebase.database().ref().child("users")

//insertion
function insertUser(){
    let uname=document.getElementById("uname").value
    let email=document.getElementById("email").value
    
    dbReference.child(uname).set({
        uname:uname,
        email:email
    })
    console.log("Inserted")
    displayUsers()
}

//deletion
function deleteUser(){
    let uname=window.prompt("ENTER USERNAME TO DELETE")
    dbReference.child(uname).remove();
    console.log(uname," deleted")
    displayUsers();
}

//updation
function updateUser(){
    let uname=document.getElementById("uname").value
    let email=document.getElementById("email").value
    dbReference.child(uname).update({
        uname:uname,
        email:email
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
    ch1.innerHTML="SlNo".bold(); 
    ch2.innerHTML="UserName".bold();
    ch3.innerHTML="Email".bold();
    var i=0;
    dbReference.on('child_added',(snap)=>{
        r=t.insertRow(-1)
        c1=r.insertCell(-1);
        c2=r.insertCell(-1);
        c3=r.insertCell(-1);
        c1.innerHTML=i+1;
        c2.innerHTML=snap.val().uname;
        c3.innerHTML=snap.val().email;
        i++;
    })
    displayD=document.getElementById("display")
    displayD.innerHTML="";
    if(i!=0)
        displayD.appendChild(t)


}