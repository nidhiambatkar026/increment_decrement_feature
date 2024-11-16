const quant = document.getElementById('quantity')
         function increase(){
             let no_quantity = parseInt(quant.innerText)
             quant.innerText = ++no_quantity
         }
         function decrese(){
            let no_quantity = parseInt(quant.innerText)
            if(no_quantity > 1){
            quant.innerText = --no_quantity
            }
         }