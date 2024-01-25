addItem.onclick = createItem;
item.onkeyup = function (e) {
    if(e.key === "Enter") {
        createItem();
    }
}
/*1. Date and time
2. add checkbox for <li/> and create bold text.

*
1. Добавить уник. (массив li)
2. Изменять таск.

**
1. Сделать с дизайном.*/

const taskList = [];

function createItem() {
    const text = item.value.trim();
    if(text) {
        index = taskList.findIndex((t,i) => t.name === text);
        if(index > -1)
        {
            alert(`this task is on position ${index+1}`);
        }
        else {
            let date = dateString();
            const li = document.createElement('li');
            // Add check box
            const checkBox = document.createElement('input');
            checkBox.type = "checkbox";
            checkBox.classList.add('check');
            checkBox.onchange = function () {
                changeFontStyle(this, li);
            };


            // Add button edit
            const buttonEdit = document.createElement('button');
            buttonEdit.appendChild(document.createTextNode('Edit'));
            buttonEdit.classList.add('edit');
            buttonEdit.onclick = editParentElement;

            // Add button delete
            const buttonDel = document.createElement('button');
            buttonDel.appendChild(document.createTextNode('X'));
            buttonDel.classList.add('del');
            buttonDel.onclick = removeParentElement;


            let t = new task(text, date, checkBox.value);
            taskList.push(t);

            const p = document.createElement('div');
            p.appendChild(document.createTextNode("added " + date));

            li.append( document.createTextNode(text), checkBox, buttonEdit, buttonDel, p);
            todoList.appendChild(li);
        }
    }
    item.value = "";
}

function task(name, date, check) {
    this.date = date;
    this.name = name;
    this.check = check;
}
