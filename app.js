var findr = document.getElementById('find');
  findr.addEventListener("click",function()
  {
 
  var to_num = document.getElementById('to-num').value;
  var numb = document.getElementById('numb').value;
  if(String(to_num) === '' || String(numb) === ''){
 document.getElementById('error-500-cont').innerHTML = ` <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
       <strong class="font-bold">Input Missing!</strong><br>
         <span class="block sm:inline"></span>
         <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
         <button id='error-500' ><svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg><button>
        </span>
       </div>`;
      var error_500 = document.getElementById('error-500');
error_500.addEventListener("click", function()
  {
 document.getElementById('error-500-cont').innerHTML = '';
  })
  }
  try{
  to_num = parseInt(to_num)
  numb = parseInt(numb)
  }
  catch(err){
 document.getElementById('error-500-cont').innerHTML = ` <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
       <strong class="font-bold">Invalid Input!</strong><br>
         <span class="block sm:inline"></span>
         <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
         <button id='error-500' ><svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg><button>
        </span>
       </div>`;
      var error_500 = document.getElementById('error-500');
error_500.addEventListener("click", function()
  {
 document.getElementById('error-500-cont').innerHTML = '';
  })
  
  }
  if (to_num <= 500 && numb <= 1000000){
  document.getElementById('table-of-number').innerHTML = '';
    let ga = "";
  for(let i = 1; i<=to_num; i++){
    let f = i*numb;
    ga = ga + ` <tr>
            <td class="border-t-2 border-gray-800 px-4 py-3">${numb}</td>
            <td class="border-t-2 border-gray-800 px-4 py-3">x</td>
            <td class="border-t-2 border-gray-800 px-4 py-3">${i}</td>
            <td class="border-t-2 border-gray-800 px-4 py-3">=</td>
            <td class="border-t-2 border-gray-800 px-4 py-3">${f}</td>
          </tr>`;
  }
  document.getElementById('table-of-number').innerHTML = ga;
 }
 else if(to_num > 500 && numb < 1000000){
document.getElementById('error-500-cont').innerHTML = ` <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
       <strong class="font-bold">Invalid Input!</strong><br>
         <span class="block sm:inline">Please Enter below 501 </span>
         <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
         <button id='error-500' ><svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg><button>
        </span>
       </div>`;
      var error_500 = document.getElementById('error-500');
error_500.addEventListener("click", function()
  {
 document.getElementById('error-500-cont').innerHTML = '';
  })
 }
 else if(to_num < 500 && numb > 1000000){
document.getElementById('error-500-cont').innerHTML = ` <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
       <strong class="font-bold">Invalid Input!</strong><br>
         <span class="block sm:inline">Please Enter below 1000001</span>
         <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
         <button id='error-500' ><svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg><button>
        </span>
       </div>`;
      var error_500 = document.getElementById('error-500');
error_500.addEventListener("click", function()
  {
 document.getElementById('error-500-cont').innerHTML = '';
  })
 }
 
 else if(to_num > 500 && numb > 1000000){
  document.getElementById('error-500-cont').innerHTML = ` <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
       <strong class="font-bold">Invalid Input!</strong><br>
         <span class="block sm:inline">Please Enter below 501 and 1000001</span>
         <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
         <button id='error-500' ><svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg><button>
        </span>
       </div>`;
      var error_500 = document.getElementById('error-500');
error_500.addEventListener("click", function()
  {
 document.getElementById('error-500-cont').innerHTML = '';
  })
 
}})
