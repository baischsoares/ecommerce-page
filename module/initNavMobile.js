export default function initNavMobile(){

class NavNext {
    constructor(seletor, imagens, classe){
      this.btn = document.querySelectorAll(seletor)
      this.imagens = document.querySelectorAll(imagens)
      this.classe = classe
      this.trocarImagem = this.trocarImagem.bind(this)
    }

    trocarImagem(e){
      const ultimaImagem = this.imagens[this.imagens.length - 1];
      const imgAtiva = document.querySelector('.ativo');
      const imgArray = Array.from(this.imagens);
      const indexAtivo = imgArray.indexOf(imgAtiva);

      if(ultimaImagem.classList.contains(this.classe)){
        ultimaImagem.classList.remove(this.classe)
        this.imagens[0].classList.add(this.classe)
      } else {
        this.imagens[indexAtivo].classList.remove(this.classe)
        this.imagens[indexAtivo + 1].classList.add(this.classe)      
      }
    }

    addEvent(){
      this.btn.forEach((btn) => {
        btn.addEventListener('touchstart', this.trocarImagem)
      }
    )}

    init(){
      this.addEvent()
    }
  }
class NavPrev {
    constructor(seletor, imagens, classe){
      this.btn = document.querySelectorAll(seletor)
      this.imagens = document.querySelectorAll(imagens)
      this.classe = classe
      this.trocarImagem = this.trocarImagem.bind(this)
    }

    trocarImagem(e){

      const primeiraImagem = this.imagens[0];
      const imgAtiva = document.querySelector('.ativo');
      const imgArray = Array.from(this.imagens);
      const indexAtivo = imgArray.indexOf(imgAtiva);

      if(primeiraImagem.classList.contains(this.classe)){
        primeiraImagem.classList.remove(this.classe)
        this.imagens[this.imagens.length - 1].classList.add(this.classe)
      } else {
        this.imagens[indexAtivo].classList.remove(this.classe)
        this.imagens[indexAtivo - 1].classList.add(this.classe)      
      }
    }

    addEvent(){
      this.btn.forEach((btn) => {
        btn.addEventListener('touchstart', this.trocarImagem)
      }
    )}

    init(){
      this.addEvent()
    }
  }

const navNext = new NavNext('[data-next]', '.imgProduto', 'ativo')
const navPrev = new NavPrev('[data-prev]', '.imgProduto', 'ativo')
navNext.init()
navPrev.init()
}
