import React, {useEffect} from "react";

const Input = ({func}) => {

    useEffect(() => {
        return () => {
            func('');
        }
    }, []);

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <div className="input-group flex-wrap mt-2">
                        <input className="form-control" placeholder="country name"
                               onChange={(e) => func(e.target.value)}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Input;
