let addButton = document.querySelector('.btnAjouter');
let selStudent = document.querySelector('#sel_student');
let selQuantity = document.querySelector('#sel_quantity');
let txtName = document.querySelector('#txtName');
let listDiv = document.querySelector('.list');


addButton.addEventListener("click", addItem);


function addItem() {
    var studentName = selStudent.value;
    var qty = selQuantity.value;
    var name = txtName.value;

    listDiv.innerHTML += `<div><span class="listStudentName">${studentName}</span><span class="listQty">x${qty}</span><span class="listName">${name}</span><span class="btnDelete">X</span></div>`
    document.querySelector('#txtName').value = ""
    
    let delButtons = document.querySelectorAll('.btnDelete')
    delButtons.forEach(function (button) {
        button.addEventListener('click', function(){
            button.parentElement.remove();
        })
    })
}


