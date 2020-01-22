var ulApp = document.querySelector('#app ul');
var inputApp = document.querySelector('#app input');
var buttonApp = document.querySelector('#app button');


var ListItem = JSON.parse(localStorage.getItem('listaDeItens')) || [];

function mountApp() {
    ulApp.innerHTML = '';

    for (item of ListItem) {

        let newLi = document.createElement('li');
        let textLi = document.createTextNode(item);
        let newDiv = document.createElement('div');
        let newImg = document.createElement('img');
        let newp = document.createElement('p');
        
        newImg.setAttribute('src', './img/bin.png')

        let linkDelete = document.createElement('a');
        let textlink = document.createTextNode('Excluir');

        newDiv.appendChild(linkDelete);
        linkDelete.appendChild(newImg);

        let index = ListItem.indexOf(item);
        newDiv.appendChild(linkDelete);
        linkDelete.setAttribute('onclick', 'deleteItem(' + index + ')');

        newLi.appendChild(newp);
        newp.appendChild(textLi);
        newLi.appendChild(newDiv);
        ulApp.appendChild(newLi);
    
    }  
}


function addItem() {
    let textInput = inputApp.value;
    
    ListItem.push(textInput);
    inputApp.value = '';
    
    mountApp();
    saveToStorage();
}

function deleteItem(index) {
    ListItem.splice(index, 1);
    
    mountApp();
    saveToStorage();
}

function saveToStorage() {

    localStorage.setItem('listaDeItens', JSON.stringify(ListItem));
}

buttonApp.onclick = addItem;
mountApp();




