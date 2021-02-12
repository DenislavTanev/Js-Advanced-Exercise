function search() {
   let list = document.getElementById('towns');
   let towns = list.getElementsByTagName('li');
   let text = document.getElementById('searchText').value;
   let count = 0;
   for (i = 0; i < towns.length; i++) {
      if (towns[i].textContent.includes(text)) {
         towns[i].style.textDecoration = "underline";
         towns[i].style.fontWeight = "bold";
         count++;
      }
      console.log(towns[i].textContent);
   }

   document.getElementById('result').textContent = `${count} matches found`;
}

