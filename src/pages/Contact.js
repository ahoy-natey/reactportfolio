import React from 'react'

export default function Contact() {
  return (
    <React.Fragment>

<div id="myModal" >
      <div class="modal-ccontent">
        
        <form class="formP">
          <fieldset>
  
            <div class="form-group">
              <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Enter email"/>
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
  
            <div class="form-group">
              <label for="exampleTextarea" class="form-label mt-4">Let me know how I can help</label>
              <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
            </div>
  
            <button type="submit" class="btn btn-primary">Submit</button>
          </fieldset>
        </form>
      </div>
  
    </div>





    </React.Fragment>
  )
}
