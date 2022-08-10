const selectAll = () =>{
    let fruitCheck = document.querySelectorAll("#checkbox");
    let fruitLength = fruitCheck.length;
    for(let i = 0; i < fruitLength; i++){
        fruitCheck[i].checked = true;
    }

}

const DeselectAll = () =>{
    let fruitUnCheck = document.querySelectorAll("#checkbox");
    let fruitUnLength = fruitUnCheck.length;
    for(let i = 0; i < fruitUnLength; i++){
        fruitUnCheck[i].checked = false;
    }
}