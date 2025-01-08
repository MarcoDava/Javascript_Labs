const unorderedlist = document.querySelector('ul');
const inpt = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let currentValue = inpt.value;
    inpt.value='';
    const newItem = document.createElement('li');
    const newSpan = document.createElement('span');
    const newbtn = document.createElement('button');
    newItem.appendChild(newSpan);
    newItem.appendChild(newbtn);
    newSpan.textContent=currentValue;
    newbtn.textContent='Delete';
    unorderedlist.appendChild(newItem);
    newbtn.addEventListener('click',()=> {
        unorderedlist.removeChild(newItem);
    });
    inpt.focus();
});



