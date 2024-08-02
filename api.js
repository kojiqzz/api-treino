import express from 'express' 
const servidor = express() ;






servidor.get('/calculadora/soma/:n1/:n2', (req, resp) => {

    let n1= Number(req.params.n1);
    let n2= Number(req.params.n2);
    let calculo = n1 + n2

   
    resp.send({
            entradas:{ 
                entrada1: n1,
                entrada2: n2
            },
        soma : calculo

    })   
})

// ola tudo bem 
servidor.get('/calculadora/subtrair/:n1/:n2', (req, resp) => {
    let n1=Number(req.params.n1)
    let n2=Number(req.params.n2)

    let calculo= n1 - n2

    resp.send({
            entradas:{
                entrada1: n1,
                entrada2: n2
            },
            subtracao: calculo
    })
})

servidor.listen(2008, () => console.log("api subiu na porta 2008"))



;