const gridContainer = document.querySelector('#gridContainer');

function grid(num) {
    gridContainer.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for (let i = 0; i < (num**2); i++) {
        const gridDivs = document.createElement('div');
            gridDivs.classList.add('gridDivs');

        
        gridContainer.appendChild(gridDivs);
    }; 
};

grid(100);

const button16 = document.querySelector('#sixteen');
    button16.addEventListener('click', () => {
        grid(16);
        clear()
    });

const button32 = document.querySelector('#thirtyTwo');
    button32.addEventListener('click', () => {
        grid(32);
        clear();
    });

const button64 = document.querySelector('#sixtyFour');
    button64.addEventListener('click', () => {
        grid(64);
        clear();
    });

const buttonCustom = document.querySelector('#custom');
    buttonCustom.addEventListener('click', () => {
        let num = prompt('Input desired grid size upto 100:')
        grid(num);
        clear();
    });


const gridDivsColor = document.querySelectorAll('.gridDivs');

function addColor() {
    for (let i = 0; i < gridDivsColor.length; i++) {
        gridDivsColor[i].addEventListener('mouseover', () => {
            gridDivsColor[i].classList.add('new');
        });
    };
};

addColor();

function clear() {
    for (let i = 0; i < gridDivsColor.length; i++) {
        const classes = gridDivsColor[i].getAttribute('class');
        if (classes === 'gridDivs new') {
            gridDivsColor[i].classList.toggle('new')
        } 
    };
};

const clearButton = document.querySelector('#clear');
    clearButton.addEventListener('click', () => {
        clear()
    });

// test function
function sole() {
    console.log('help');
};
    
