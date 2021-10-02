import React from 'react';
import ReactDOM from 'react-dom';

const DutyForm = () => {
    return (
    <form>
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Duty Form</div>
                        <div className="card-body">
                            <div className ="row">
                            <div class="mb-3 col">
                            <label for="exampleInputEmail1" class="form-label">Title</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  placeholder="Title"/>
                            </div>
                            </div>
                            <div className ="row">
                            <div className="mb-3 col">
                            <span class="input-group-text">With textarea</span>
                            <textarea class="form-control" aria-label="With textarea"></textarea>
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

export default DutyForm;