import React, {useEffect} from "react";

const Input = ({ changeFilter, filterString }) => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="input-group flex-wrap mt-2">
                        <input
                          value={filterString}
                          className="form-control"
                          placeholder="country name"
                          onChange={(e) => changeFilter(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Input;
