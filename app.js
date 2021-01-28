// Pega-pega
// Criar o botão (  )
// Locia que faça o botão correr (  )
// Logica quando ganha o jogo (  )
// variáveis -> number (positivo, negativo, inteiro, real), string (qualquer frase letra, acentuação; usando ['valores'] ou ["valores"] ou [`valores`]), boolean (true, false)-> primário
// function nomeDaFuncao(Valores, ...) {
// executa algo e pode ou não retornas algum valor    
// }
// 

const btn = document.getElementById("btn");

btn.addEventListener('mouseover', () => {
    btn.style.position = "absolute";
    btn.style.top = `${(Math.floor(Math.random() * (window.innerHeight - 18)))}px`;
    btn.style.left = `${(Math.floor(Math.random() * (window.innerWidth - 16)))}px`;
})

btn.addEventListener('click', () => {
    console.log('Você ganhou')
})
