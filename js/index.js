document.addEventListener('click', function(e){
  const el = e.target;
  if(el.classList.contains('icon')){
    const el = e.target
    const src = e.target.src
    sucesso(el)
    copySrc(src)
  } 
})

function sucesso(el){
  const msg = document.querySelector('.mensagem-sucesso');
  msg.innerText =`Copiado para area de tranferencia o incone do ${el.alt}!`
}

function copySrc(src) {
  var textToCopy = src;
  var InputElement = document.createElement("input");
  InputElement.type = "text";
  InputElement.value = textToCopy;
  document.body.appendChild(InputElement);
  InputElement.select();
  document.execCommand("Copy");
  document.body.removeChild(InputElement);
}


