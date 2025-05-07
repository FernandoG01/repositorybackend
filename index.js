require('dotenv').config()
const http= require('http')

function requestController(){

}

const server=http.createServer(requestController)

const PORT=process.env.PORT
server.listen(PORT, function(){
    console.log("Aplicaction corriente en: " + PORT)
})