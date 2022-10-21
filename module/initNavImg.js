export default function initNavImg(){
  const imgsNav = document.querySelectorAll('.thumbImg');
  const imgs = document.querySelectorAll('.imgProduto');


  imgsNav.forEach((imgNav, index) => {

    imgNav.addEventListener('click', () => {

      imgsNav.forEach(img =>{
        img.classList.remove('thumbAtivo')
      })
      imgNav.classList.add('thumbAtivo')
      
      mostarImg(index)

    }
  )
});

  function mostarImg(index){
    imgs.forEach(img =>{
      img.classList.remove('ativo')
    })

    imgs[index].classList.add('ativo')
  }
}
