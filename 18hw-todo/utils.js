function removeParentElement(e) {
    //TODO remove
    elementText = e.target.parentElement.firstChild.textContent;
    e.target.parentElement.remove();
    index = taskList.findIndex((t, i) => t === elementText);
    taskList.splice(index,1);
}

function changeFontStyle(checkbox, listItem) {
    if (checkbox.checked) {
        listItem.style.fontWeight = 'bold';
    } else {
        listItem.style.fontWeight = 'normal';
    }
}

function editParentElement(e) {
    elementText = e.target.parentElement.firstChild.textContent;
    index = taskList.findIndex((t, i) => t.name === elementText);

    const divEdit = document.createElement('div');
    divEdit.classList.add("divEdit");
    e.target.parentElement.appendChild(divEdit);

    const editField = document.createElement('input');
    editField.type = "text";
    editField.value = elementText;
    editField.classList.add('edit');



    // Add button Change
    const buttonOk = document.createElement('button');
    buttonOk.appendChild(document.createTextNode('Ok'));
    buttonOk.onclick = changeParentElement;

    // Add button delete
    const buttonDel = document.createElement('button');
    buttonDel.appendChild(document.createTextNode('X'));
    buttonDel.classList.add('del');
    buttonDel.onclick = removeParentElement2;

    divEdit.append(editField, buttonOk, buttonDel);
}

function removeParentElement2(e) {
    //TODO remove
    e.target.parentElement.remove();

}

function changeParentElement(e){
    elementText = e.target.parentElement.parentElement.firstChild.textContent;
    index = taskList.findIndex((t, i) => t.name === elementText);
    taskList[index] = e.target.parentElement.firstChild.value;
    e.target.parentElement.parentElement.firstChild.textContent = e.target.parentElement.firstChild.value;
    e.target.parentElement.remove();
}

function dateString() {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth()+1).padStart(2, '0');
    const yy = String(date.getFullYear()).padStart(2, '0');

    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    const s = String(date.getSeconds()).padStart(2, '0');
    return `${dd}/${mm}/${yy} ${h}:${m}:${s}`;
}