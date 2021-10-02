import React from 'react';
import ReactDOM from 'react-dom';

const CrewForm = () => {
    return (
    <form>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Crew Form</div>
                        <div className="card-body">
                            <div className ="row">
                            <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">First Name</label>
                              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="First Name"/>
                            </div>
                            <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder ="Last Name" />
                            </div>
                            </div>
                            
                            <div className ="row">
                            <div className="mb-3 col">
                            <label for="exampleInputEmail1" className="form-label">Work</label>
                            <select className="form-select" Name="Work" aria-label="Default select example">
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

export default CrewForm;