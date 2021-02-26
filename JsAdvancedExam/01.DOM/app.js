function solve() {
   const PostSection = document.querySelector('.site-content>main>section');
   const archiveSection = document.querySelector(".archive-section>ol");

   const authorInput = document.getElementById('creator');
   const titleInput = document.getElementById('title');
   const categoryInput = document.getElementById('category');
   const contentInput = document.getElementById('content');

   const createButton = document.getElementsByClassName('create')[0];

   createButton.addEventListener('click', addPost);

   function addPost(e) {

      e.preventDefault();

      if (!(authorInput.value && titleInput.value && categoryInput.value && contentInput.value)) {
         return;
      }

      const articleEl = document.createElement('article');
      const h1El = document.createElement('h1');
      h1El.textContent = titleInput.value;
      const pCategory = document.createElement('p');
      pCategory.innerHTML = `Category:  <strong>${categoryInput.value}</strong>`;
      const pCreator = document.createElement('p');
      pCreator.innerHTML = `Creator:  <strong>${authorInput.value}</strong>`;
      const pContent = document.createElement('p');
      pContent.textContent = contentInput.value;
      const divEl = document.createElement('div');
      divEl.className = 'buttons'

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'btn delete';
      deleteBtn.textContent = 'Delete';
      const archiveBtn = document.createElement('button');
      archiveBtn.className = 'btn archive';
      archiveBtn.textContent = 'Archive';

      divEl.appendChild(deleteBtn);
      divEl.appendChild(archiveBtn);

      articleEl.appendChild(h1El);
      articleEl.appendChild(pCategory);
      articleEl.appendChild(pCreator);
      articleEl.appendChild(pContent);
      articleEl.appendChild(divEl);

      PostSection.appendChild(articleEl);

      deleteBtn.addEventListener('click', (e) => {
         e.target.parentElement.parentElement.remove();
      })

      archiveBtn.addEventListener('click', (e) => {
         const article = e.target.parentElement.parentElement;
         const title = document.createElement('li');
         title.textContent = article.children[0].textContent;

         archiveSection.appendChild(title);
         e.target.parentElement.parentElement.remove();

         sortList(archiveSection);
      })
   }

   function sortList(e) {
      var list, i, sortFlag, LiEl, sorted;
      list = e;
      sortFlag = true;
      while (sortFlag) {
         sortFlag = false;
         LiEl = list.getElementsByTagName("LI");
         for (i = 0; i < LiEl.length - 1; i++) {
            sorted = false;
            if (LiEl[i].innerHTML.toLowerCase() > LiEl[i + 1].innerHTML.toLowerCase()) {
               sorted = true;
               break;
            }
         }
         if (sorted) {
            LiEl[i].parentNode.insertBefore(LiEl[i + 1], LiEl[i]);
            sortFlag = true;
         }
      }
   }
} 