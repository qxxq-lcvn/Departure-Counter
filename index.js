//dom = document object model -> how to use JavaScript to modify the website
//textContent is able to read all, but innerText is human-readable only

let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;

function increment() {
    count ++;
    countEl.textContent = count;
}

function save() {
    let note = count + " - ";
    saveEl.textContent += note;

    countEl.textContent = 0;
    count = 0;
    // count = 0;
    // countEl.textContent = count;
}

