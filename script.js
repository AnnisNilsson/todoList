(function(){
  
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');


    form.addEventListener('submit',function(e){
      e.preventDefault();
      if(item.value === undefined || item.value === '') alert('Du måste skriva en uppgift'); 
      else
      list.innerHTML += '<li>' + item.value + '</li>';
      store();
      item.value = "";
    },false)
    
    list.addEventListener('click',function(e){
      var t = e.target;
      if(t.classList.contains('checked')){
        t.parentNode.removeChild(t);

      } else {
        t.classList.add('checked');
      }

      store();
    },false)
    
    function store() {
      window.localStorage.myitems = list.innerHTML;
    }
    
    function getValues() {
      var storedValues = window.localStorage.myitems;
      if(!storedValues) {
        list.innerHTML = '<li>Skapa en lista på det som ska göras</li>';
      }
      else {
        list.innerHTML = storedValues;
      }
    }
    getValues();
  })();




