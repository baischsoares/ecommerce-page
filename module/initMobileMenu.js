export default function initMobileMenu(){

  const btnMobile = document.getElementById('BtnMobile')
  const btnFechar = document.getElementById('fecharMenu')
  const menuMobile = document.querySelector('.menuPaginasMobile')
  
  function openMenu(){
  menuMobile.classList.add('ativo')
  }
  
  function closeMenu(){
    menuMobile.classList.remove('ativo')
    }
  
  btnMobile.addEventListener('click', openMenu)
  btnFechar.addEventListener('click', closeMenu)
}
