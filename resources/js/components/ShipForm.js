import React from 'react';
import ReactDOM from 'react-dom';

const ShipForm = () => {
    return (
    <form>
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Ship Form</div>
                        <div className="card-body">
                            <div className ="row">
                            <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">First And Last Name</label>
                              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="First Name"/>
                            </div>
                            <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Route</label>
                            <select className="form-select" aria-label="Default select example">
                             <option selected>Open this select menu</option>
                             <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                             </select>
                        
                            </div>
                            </div>
                            
          
                            
                        
                              <div class="btn-group">
                             <button class="btn btn-success" type="submit">Save</button>
                              </div>
                              <div class="btn-group ml-2">
                             <button class="btn btn-secondary" type="submit">Cancel</button>
                              </div>
                            
                          
                         
                             

                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
}

export default ShipForm;