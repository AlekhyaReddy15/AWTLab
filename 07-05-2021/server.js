var express=require("express")
var jwt=require("jsonwebtoken")
var app=new express()
var secretkey="12345"
var students=[
    {
        id:1204,
        name:"alekhya"
    }
    ,{
        id:1200,
        name:"abc"
    }
]

app.get("/students",verifytoken,(req,res)=>{
    res.send(students)
})

app.get("/",(req,res)=>{
    res.send(students)
})
app.post("/login",(req,res)=>{
    const user={
        uname:"alekhya",
        pass:123
    }
    jwt.sign({user:user},secretkey,(err,token)=>{
        res.send({token:token})
    })
})
function verifytoken(req,res,next){
    let token=req.headers["authorization"]
    token=token.split(' ')[1]
    if(token){
        jwt.verify(token,secretkey,(err,decoded)=>{
            if(err){
                return res.json({
                    success:false,
                    message:"Token is not valid"
                })
            }else{
                req.decoded=decoded;
                next()
            }
        })
    }  
}
app.listen(3000,()=>{
    console.log("Server Started Successfully...")
})