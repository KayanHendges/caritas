import app from "./app";

main()

async function main(){
    
    const port = 4343

    app.listen(port, () => {
        console.log(`servidor rodando na porta ${port}`)
    })

    app.get('/', (request, response) => {

        const query = request.query

        response.send(`você escreveu ${query.nome}`)
    })

}