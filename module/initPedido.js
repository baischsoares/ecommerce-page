export default function initPedido(){

  let produto = {
   nome: 'Fall Limited Edition Sneakers',
   empresa: 'Sneaker Company', 
   descricao: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, theyll withstand everything the weather can offer.",
   preco: 250.00,
   desconto: 0.5,
   quantidade: 0,
   image:  "../images/image-product-1-thumbnail.jpg"
  }

  const btnRemove = document.querySelector('[data-diminuirQtde]');
  const btnAdd = document.querySelector( '[data-aumentarQtde]');


  btnAdd.addEventListener('click', add)
  function add(){
    produto.quantidade += 1
    setarQuantidade()
  }
  btnRemove.addEventListener('click', remove)
  function remove(){
    produto.quantidade -= 1
    setarQuantidade()
  }
  function setarQuantidade(){
    document.querySelector(' [data-quantidade]').innerText = produto.quantidade;
   }

 
  const btnCart = document.querySelector('.comprar')
  btnCart.addEventListener('click', setarCarrinho)
  
  function setarCarrinho(){
    const carrinhoVerificar = document.querySelector('.produtosCarrinho')
    if(carrinhoVerificar){
      carrinhoVerificar.remove()
      criarCarrinho()
    } else {
      criarCarrinho()
      alertaCarrinho()
    }
  }

  function criarCarrinho(){
    const div = document.createElement('div')
    div.classList.add('produtosCarrinho')

    const imgProdutoCarrinho = document.createElement('img')
    imgProdutoCarrinho.setAttribute('src', produto.image)

    const divDescricao = document.createElement('div')
    divDescricao.classList.add('descricaoCompra')

    const p = document.createElement('p')
    p.innerText = produto.nome

    const spanPreco = document.createElement('span');
    spanPreco.setAttribute('data-precoCarrinho', '');

    const precoFinal = produto.preco * produto.desconto;
    const precoTotal = precoFinal * produto.quantidade;

    spanPreco.innerHTML = `${precoFinal} x ${produto.quantidade} <span style="font-weight: bold;">$ ${precoTotal}</span>`;

    const imgLixo = document.createElement('ímg')
    imgLixo.setAttribute('src', '../images/icon-delete.svg')
    imgLixo.style.height = '20px'
    
    div.appendChild(imgProdutoCarrinho)
    divDescricao.appendChild(p)
    divDescricao.appendChild(spanPreco)
    div.appendChild(divDescricao)
    div.appendChild(imgLixo)

    const modalCarrinho = document.querySelector('.modal-carrinho')
    modalCarrinho.insertAdjacentElement('afterbegin', div)
  }


  function alertaCarrinho(){
    const carrinho = document.querySelector('[data-car]')
    carrinho.classList.add('ativo')
    
  }
}

