new ProductList(new Cart());

const copyEmailBtn = document.getElementById("copy-email");
copyEmailBtn.addEventListener('click', function(event) {  
  // Выборка ссылки с электронной почтой 
  const text = document.getElementById("email"); 
  var range = document.createRange();  
  range.selectNode(text);  
  window.getSelection().addRange(range);  
  try {  
    // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
    let successful = document.execCommand('copy');  
    let msg = successful ? 'successful' : 'unsuccessful';  
    console.log('Copy email command was ' + msg);  
  } catch(err) {  
    console.log('Oops, unable to copy');  
  }  
    
  // Снятие выделения - ВНИМАНИЕ: вы должны использовать
  // removeRange(range) когда это возможно
  window.getSelection().removeAllRanges();  
  alert("Емайл скопійований");
});
