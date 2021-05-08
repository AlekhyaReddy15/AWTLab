var express=require("express")
var firebase=require("firebase")

var app=express();
app.use(express.urlencoded())
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  firebase.initializeApp(firebaseConfig)

  var dbRef=firebase.database().ref().child("employee")

  app.get("/employee",(req,res)=>{
      dbRef.once("value",(snap)=>{
          res.send(snap.val())
      })
  })
  app.get("/employee/:eid",(req,res)=>{
    var eid=req.params.eid
    dbRef.child(eid).once("value",(snap)=>{
        res.send(snap.val())
    })
  })
  app.post("/addEmployee",(req,res)=>{
      eid=req.body.eid
      dbRef.child(eid).set({
          eid:req.body.eid,
          ename:req.body.ename,
          ebranch:req.body.ebranch
      })
      res.send("Inserted Successfully")
  })
  app.delete("/deleteEmployee/:eid",(req,res)=>{
      var eid=req.params.eid
      dbRef.child(eid).remove()
      res.send("Deleted successfully")
  })
  app.listen(4000,()=>{
    console.log("Server Started.......")
  })