function solve() {
     
  const text = document.getElementById('text').value;
  const namingConvention = document.getElementById('naming-convention').value;

  let editedText = text
  .toLowerCase()
  .split(' ')
  .filter(x => x)
  .map(e => e.charAt(0).toUpperCase() + e.slice(1))
  .join('');

 if (namingConvention != 'Camel Case' && namingConvention != 'Pascal Case') {
   editedText = 'Error!';

 }else if(namingConvention == 'Camel Case'){
    editedText = editedText.charAt(0).toLowerCase() + editedText.slice(1);

 };
  
  document.getElementById('result').textContent = editedText;
}