const p1 = new Promise((resolve, reject) => {

    setTimeout(() => { resolve('Sucesso!') }, 2000) // setTimeOut serve para simular tempo de espera
})

// ------ Barreira de sincronia

// Função then é para tornar uma função assincrona em sincrona

p1.then(resp => {
    console.log(resp)
})
console.log(p1)