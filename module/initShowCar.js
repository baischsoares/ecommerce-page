export default function initShowCar(){

  const btnCar = document.querySelector('[data-car]')
  const modalCarrinho = document.querySelector('.modal-carrinho')
  btnCar.addEventListener('click', function(e) {
    e.preventDefault()
    modalCarrinho.classList.toggle('ativoCarrinho')
  })
}
