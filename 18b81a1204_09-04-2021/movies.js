const fetch=require("node-fetch")
const url=`https://imdb-api.com/en/API/Top250Movies/k_ykkxbjw8`
fetch(url)
.then((response)=>{
        return response.json()
    })
.then(data=>
{
            console.log(data)
     
})
.catch(err=>
{
        console.log(err)
})