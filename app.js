const gridContainer = document.querySelector('#gridContainer');

function grid(){
    for (let i = 0; i < (16*16); i++) {
        const gridDivs = document.createElement('div');
            gridDivs.classList.add('gridDivs');
            gridDivs.textContent = 'Test';
        
        gridContainer.appendChild(gridDivs);
    };
};

grid();
