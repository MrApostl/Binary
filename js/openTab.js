const tabsItems = document.getElementsByClassName('tabsItem');  
const sections = document.getElementsByClassName('tabsBlock'); 

for(let i =0; i<tabsItems.length; i++){
  tabsItems[i].onclick = tabclick
}

function tabclick(event){
  let tabsItem = event.target;
  let tabId = tabsItem.dataset.id;

  for(let k =0; k<tabsItems.length; k++){
    tabsItems[k].classList.remove('active');
    tabsItems[tabId-1].classList.add('active');

    sections[k].classList.remove('active');
    sections[tabId-1].classList.add('active'); 

  }
}