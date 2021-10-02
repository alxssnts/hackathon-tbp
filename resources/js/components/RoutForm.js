import React from 'react';
import ReactDOM from 'react-dom';

const RoutForm = () => {
    return (
    <form>
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Route Form</div>
                        <div className="card-body">
                            <div className ="row">
                            <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Name</label>
                            <input type="text" className="form-control" name="Name" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="First Name"/>
                            </div>
                            <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Origin</label>
                            <input type="text" className="form-control" name="Origin" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Origin"/>
                            </div>
                            </div>
                            <div className ="row">
                            <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Destination</label>
                            <input type="text" className="form-control" name="Destination" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Destination"/>
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

export default RoutForm;