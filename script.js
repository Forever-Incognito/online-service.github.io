function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


var ele = document.getElementsByName('radio');
function onPriceChange() {
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      document.getElementById("selectedPrice").innerHTML
              = ele[i].value;
  }
}

function checkCheckbox() {  

  var bed = document.getElementById("bed");  
  var one_drink = document.getElementById("one-drink");
  var two_drinks = document.getElementById("two-drinks"); 

  for(i = 0; i < ele.length; i++) {
    
    if(ele[i].checked)
    document.getElementById("selectedPrice").innerHTML = ele[i].value;

    if(ele[i].checked == true && bed.checked == true){      
     //bed 
      return document.getElementById("selectedPrice").innerHTML = +ele[i].value + 50; 
    }//one drink 
    else if (ele[i].checked == true && one_drink.checked == true){
      return document.getElementById("selectedPrice").innerHTML = +ele[i].value + 25;  
    }//two drinks 
    else if (ele[i].checked == true && two_drinks.checked == true){  
      return document.getElementById("selectedPrice").innerHTML = +ele[i].value + 50;  
    }//bed + one drink   
    else if (ele[i].checked == true && bed.checked == true && one_drink.checked == true){  
      return document.getElementById("selectedPrice").innerHTML = +ele[i].value + 75;  
    }//bed + two drinks 
    else if (ele[i].checked == true && bed.checked == true && two_drinks.checked == true){  
      return document.getElementById("selectedPrice").innerHTML = +ele[i].value + 100;  
    }//one drink + two drinks 
    else if (ele[i].checked == true && one_drink.checked == true && two_drinks.checked == true){  
      return document.getElementById("selectedPrice").innerHTML = +ele[i].value + 75;  
    }//bed + onedrink + two drinks 
    else if (ele[i].checked == true && bed.checked == true && one_drink.checked == true && two_drinks.checked == true){  
      return document.getElementById("selectedPrice").innerHTML = +ele[i].value + 125;  
    }  
  }

}  

/*
        const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

        // generate the radio groups        
        const group = document.querySelector("#group");
        group.innerHTML = sizes.map((size) => `<div>
                <input type="radio" name="size" value="${size}" id="${size}">
                 <label for="${size}">${size}</label>
            </div>`).join(' ');
        
        // add an event listener for the change event
        const radioButtons = document.querySelectorAll('input[name="size"]');
        for(const radioButton of radioButtons){
            radioButton.addEventListener('change', showSelected);
        }        
        
        function showSelected(e) {
            console.log(e);
            if (this.checked) {
                document.querySelector('#output').innerText = `You selected ${this.value}`;
            }
        }
*/

/*function checkButton() {    
  if(document.getElementById('summer').checked) {   
      document.getElementById("disp").innerHTML   
          = document.getElementById("summer").value   
          + " radio button is checked";   
  }   
  else if(document.getElementById('winter').checked) {   
      document.getElementById("disp").innerHTML   
          = document.getElementById("winter").value   
          + " radio button is checked";     
  }   
  else if(document.getElementById('rainy').checked) {   
      document.getElementById("disp").innerHTML   
          = document.getElementById("rainy").value   
          + " radio button is checked";     
  }   
  else if(document.getElementById('autumn').checked) {   
      document.getElementById("disp").innerHTML   
          = document.getElementById("autumn").value   
          + " radio button is checked";     
  }  
  else {   
      document.getElementById("error").innerHTML   
          = "You have not selected any season";   
  }   
}*/