function solve() {
    const sectionElements = document.getElementsByTagName("section");
    const openSection = sectionElements[1].children[1];
    const inProgressSection = sectionElements[2].children[1];
    const completeSection = sectionElements[3].children[1];

    const taskInput = document.getElementById('task');
    const descriptionInput = document.getElementById('description');
    const dateInput = document.getElementById('date');
    const addButton = document.getElementById('add');

    //add event listener to add button
    addButton.addEventListener('click', addTask);

    function addTask(e) {
        //prevent default
        e.preventDefault();
        //validate input
        if (!(taskInput.value && descriptionInput.value && dateInput.value)) {
            return;
        }
        //create elements
        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        h3Element.textContent = taskInput.value;
        const descriptionP = document.createElement('p');
        descriptionP.textContent = `Description: ${descriptionInput.value}`;
        const dateP = document.createElement('p');
        dateP.textContent = `Due Date: ${dateInput.value}`;

        const divElement = document.createElement('div');
        divElement.className = 'flex';
        const startButton = document.createElement('button');
        startButton.className = 'green';
        startButton.textContent = 'Start';
        const deleteButton = document.createElement('button');
        deleteButton.className = 'red';
        deleteButton.textContent = 'Delete';

        divElement.appendChild(startButton);
        divElement.appendChild(deleteButton);

        articleElement.appendChild(h3Element);
        articleElement.appendChild(descriptionP);
        articleElement.appendChild(dateP);
        articleElement.appendChild(divElement);
        //add elements to open section

        openSection.appendChild(articleElement);

        deleteButton.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        });

        startButton.addEventListener('click', inProgress);
    }

    function inProgress(e) {
        const divEl = e.target.parentElement;
        const parentEl = divEl.parentElement;
        e.target.remove();
        const finishButton = document.createElement('button');
        finishButton.className = 'orange';
        finishButton.textContent = 'Finish';
        divEl.appendChild(finishButton);
        inProgressSection.appendChild(parentEl);

        finishButton.addEventListener('click', (el) =>{
            const parent = el.target.parentElement.parentElement;
            parent.children[3].remove();
            completeSection.appendChild(parent);
        })
    }


}