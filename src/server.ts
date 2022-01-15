import express from "express"

const app = express(); 

app.use(express.json());

app.listen(3333, () => console.log("Server running port 3333"))

app.get("/",(request,response)=>{
    return response.json({ message: "Hello World1"});
})

