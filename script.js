let ul = document.querySelector('ul');

document.addEventListener('click', (elemento)=>{
    let e = elemento.target;

    if(e.className === 'produto'){
        let li = document.createElement('li');
        li.innerText = e.innerText;
        let quantidadeProdutos = document.getElementById('quantidadeProdutos');
        quantidadeProdutos.innerText = ul.childNodes.length;
        quantidadeProdutos.style.display = 'flex';
        ul.appendChild(li);
    } else if(e.id === 'carrinho'){
        let body = document.querySelector('body');
        body.classList.toggle('mostrarLista');
    }
});