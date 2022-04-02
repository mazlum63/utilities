const listOfNames = [{
    type: 'BUILDING MATERIALS',
    names: [
        'brick',
        'cement',
        'concrete',
        'glass',
        'gravel',
        'marble',
        'metal',
        'plastic',
        'sand',
        'slate',
        'stone',
        'wood',
    ]
},

{
    type: 'FABRICS',
    names: [
        'cloth',
        'cotton',
        'lace',
        'leather',
        'linen',
        'nylon',
        'polyester',
        'silk',
        'wool',
    ]
},
{
    type: 'METALS',
    names: [
        'aluminium',
        'brass',
        'bronze',
        'copper',
        'gold',
        'iron',
        'lead',
        'magnesium',
        'mercury',
        'nickel',
        'platinum',
        'silver',
        'steel',
        'tin',
        'uranium',
        'zinc',
    ]
}
]

const gameContainer = document.querySelector('.find-name');
const hidedNameContainer = document.querySelector('.hided-name-container');
const typeOfName = document.querySelector('.type-of-name');
const btnReset = document.querySelector('.footer button');
const gameStatus = document.querySelector('.footer .status span');
const used = document.querySelector('.footer h4 span');
let counter = 5;

let choiceType = Math.floor(Math.random() * 3);
let type = listOfNames[choiceType].type;
typeOfName.innerHTML = "TYPE: " + type;
let choiceName = Math.floor(Math.random() * listOfNames[choiceType].names.length)
let selectedItem = listOfNames[choiceType].names[choiceName];

let selectedItemArr = Array.from(selectedItem.toUpperCase());
for (var i = 0; i < selectedItemArr.length; i++) {
    hidedNameContainer.innerHTML += `<div class="letter"><span>${selectedItemArr[i]}</span></div>`;
}
let showCounter = 0;
const alphabeth = document.querySelectorAll('.alphabet button');
alphabeth.forEach(item => {
    item.addEventListener('click', () => {
        let val = item.innerHTML;
        let letter = document.querySelectorAll('.letter');
        item.style.pointerEvents = 'none';
        item.style.backgroundColor = '#f17979';

        if (!selectedItemArr.includes(val)) {
            counter--;
            console.log(counter)
        };
        used.innerHTML = counter;
        for (var i = 0; i < selectedItemArr.length; i++) {
            let val2 = selectedItemArr[i];
            if (val2 == val) {
                letter[i].classList.add('show');
                showCounter++;
            }
            if (showCounter == selectedItemArr.length) {
                gameStatus.innerHTML = 'success';
                for (var i = 0; i < alphabeth.length; i++) {
                    alphabeth[i].style.pointerEvents = 'none';
                    alphabeth[i].style.backgroundColor = 'aqua';
                }
                btnReset.style.opacity = 1;
                btnReset.style.pointerEvents = 'initial';
                btnReset.style.backgroundColor = 'green';
                return false;
            }
        }
        if (counter == 0) {
            gameStatus.innerHTML = 'failed';
            for (var i = 0; i < selectedItemArr.length; i++) {
                letter[i].classList.add('show');
            }
            for (var i = 0; i < alphabeth.length; i++) {
                alphabeth[i].style.pointerEvents = 'none';
                alphabeth[i].style.backgroundColor = '#f17979';
            }
            btnReset.style.opacity = 1;
            btnReset.style.pointerEvents = 'initial';
        }
    })
});