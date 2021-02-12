function solve() {

   let search = document.getElementById("searchField")
   let args = Array.from(document.querySelectorAll(".container tbody tr"));
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let toBeUnselected = Array.from(document.querySelectorAll(".select"));

      if (toBeUnselected) {
         toBeUnselected.forEach(el =>{
            el.removeAttribute('class','select')
         })
      }

      args.forEach(e =>{
         let input = search.value;
         if (e.innerHTML.includes(input)) {
            e.setAttribute("class", "select")
         }
      })

      search.value = "";
   }

}