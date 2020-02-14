const managerhtml = `
<div class="card">
  <div class="card-body">
    <h3 class="card-title">${'name'}</h3>
    <h3 class="card-text">Manager</h3>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${'id'}</li>
    <li class="list-group-item">Email: ${'email'}</li>
    <li class="list-group-item">Office Number: ${'officeNumber'}</li>
  </ul>
</div>`

module.exports = managerhtml;