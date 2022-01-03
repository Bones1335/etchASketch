const gridContainer = document.querySelector('#gridContainer');

function grid(){
    for (let i = 0; i < (16*16); i++) {
        const gridDivs = document.createElement('div');
            gridDivs.classList.add('gridDivs');
            gridDivs.textContent = 'T';
        
        gridContainer.appendChild(gridDivs);
    };
      
};

grid();

const gridDivsColor = document.querySelectorAll('.gridDivs');

function addColor() {
    for (let i = 0; i < gridDivsColor.length; i++) {
        gridDivsColor[i].addEventListener('mouseover', () => {
            gridDivsColor[i].classList.add('new');
        });
    };
};

addColor();


// test function
function sole() {
    console.log('help');
};
    
