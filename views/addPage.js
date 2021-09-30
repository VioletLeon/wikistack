const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () =>
  layout(html`
    <h3>Add a Page</h3>
    <hr />
    <form method="POST" action="/wiki/">
      <div class="form-group">
        <label for="username" class="col-sm-2 control-label">User Name</label>
        <div class="col-sm-10">
          <input id="username" name="Username" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="useremail" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <input id="useremail" name="Useremail" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="title" class="col-sm-2 control-label">Page Title</label>
        <div class="col-sm-10">
          <input id="title" name="title" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="pagecontent" class="col-sm-2 control-label">Page Content</label>
        <div class="col-sm-10">
          <input id="pagecontent" name="pagecontent" type="text" class="form-control" />
        </div>
      </div>

      <div class="form-group">
        <label for="useremail" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
          <select id="pagestatus" name="pagestatus">
            <option>open</option>
            <option>closed</option>
          </select>
        </div>
      </div>

      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-primary">submit</button>
      </div>
    </form>
  `);
