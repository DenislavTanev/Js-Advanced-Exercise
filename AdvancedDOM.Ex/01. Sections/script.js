function create(words) {
   const parent = document.getElementById('content');

   for (let i = 0; i < words.length; i++) {
      //create div
      const div = document.createElement('div');
      //create p 
      const paragraph = document.createElement('p');
      //insert text into p
      paragraph.textContent = words[i];
      paragraph.style.display = 'none';
      //add p to div
      div.appendChild(paragraph);
      //add event
      div.addEventListener('click', onClick);
      //add all divs to content
      parent.appendChild(div); 
   }
   
   function onClick(ev) {
      ev.target.children[0].style.display = 'inline';
   }
}