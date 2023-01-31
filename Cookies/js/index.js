"use strict"
var form = `<div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Your Name">
  </div>
  <div class="form-group mt-3">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Your email">
  </div>
  <button type="submit" class="btn btn-primary mt-3" onclick="save()">Save</button>
</div>`;

function table() {
    let table = `<table class="table">
  <thead>
    <tr>
      <th clsaa="col-3">Name</th>
      <th clsaa="col-4">Email</th>
      <th clsaa="col-2">Edit</th>
      <th clsaa="col-2">Delete</th>
    </tr>
  </thead>
  <tbody>`;

    for (let i = 0; i < details.length; i++){
        table += `<tr>
      <td>${details[i].name}</td>
      <td>${details[i].email}</td>
      <td><button type="button" class="btn btn-warning" onclick="edit(${i})">Edit</button></td>
      <td><button type="button" class="btn btn-danger" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
    };
    table = table+`</tbody>
    </table>`;
    document.getElementById("table").innerHTML = table;
};

document.getElementById("form").innerHTML = form;
var details = [];
table();

function save() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let expiraCookie = 1*60*1000;
  let date = new Date();
  let current = date.getTime();
  let caducidad = current + expiraCookie;
  date.setTime(caducidad);
  document.cookie = name.value + "=" + email.value + ";expires=" + date.toUTCString()+ ";path=./;SameSite=Strict;Secure";
  let datos ={
    name: name.value,
    email: email.value
  };
  details.push(datos);
  table();
  name.value = "";
  email.value = "";
}

function edit(index) {
  let editForm = `<div>
<div class="form-group">
  <label for="name">Update Name</label>
  <input type="text" value="${details[index].name}" class="form-control" id="newName" aria-describedby="emailHelp" placeholder="Update Your Name">
</div>
<div class="form-group mt-3">
  <label for="email">Email</label>
  <input type="email" value="${details[index].email}" class="form-control" id="newEmail" placeholder="Update Your email">
</div>
<button type="submit" class="btn btn-primary mt-3" onclick="update(${index})">Update</button>
</div>`;
  document.getElementById("form").innerHTML = editForm;
};

function update(index) {
  let newName = document.getElementById('newName');
  let newEmail = document.getElementById('newEmail');
  let expiraCookie = 1*60*1000;
  let date = new Date();
  let current = date.getTime();
  let caducidad = current + expiraCookie;
  date.setTime(caducidad);

  details[index] = {
      name: newName.value,
      email: newEmail.value
  };
  document.cookie = newName.value + "=" + newEmail.value + ";expires=" + date.toUTCString()+ ";path=./;SameSite=Strict;Secure";
  table();
  document.getElementById("form").innerHTML = form;
}

function deleteData(index){
  console.log(index);
  details.splice(index,1);
  document.cookie = details[index].name + "=" + details[index].email + ";expires=Thu, 16 Dec 2015 12:00:00 UTC;path=./;SameSite=Strict;Secure";
  table();

}


