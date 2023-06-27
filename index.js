const $html=document.querySelector('html')
const $checkbox =document.querySelector('.dark__topo #switch')
$checkbox.addEventListener('change',function(){
    $html.classList.toggle('dark-mode')
})