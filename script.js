let table=document.createElement("div")
document.body.append(table)
table.innerHTML=`<form class="table">
<table>
  <tr>
    <th>Name*<input/> Last Name*<input/></th>
 
  </tr>
  <tr>
    <th>Address : <textarea></textarea></th>

  </tr>
  <tr>
  <th>Pincode :<input></th>

  </tr>
  <tr>
  <th>Gender : <input type="radio" name="gender"/>Male
  <input type="radio" name="gender" />Female
  <input type="radio" name="gender"/>Others</th>

  </tr>
  <tr>
  <th class="food">Choice of Food : 
  <input type="radio" name="food"/>Chappathi
  <input type="radio" name="food" />Parotta
  <input type="radio" name="food"/>Veg Noodles
  <input type="radio" name="food" />Meals
  <input type="radio" name="food"/>Briyani
  </th>

  <tr>
  <th>State:<textarea></textarea></th>

  </tr>
  <tr>
  <th>Country:<textarea></textarea></th>

  </tr>
</table>

</body>
</html>









`