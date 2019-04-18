import React from 'react';
import {apiURL} from "../../constants";
import {NavLink} from "react-router-dom";

const Card = props => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-2">
                {props.image
                    ? <NavLink to={props.routPath}>
                        <img src={`${apiURL}/uploads/${props.image}`}
                           className="card-img-top" alt={props.title}
                        />
                    </NavLink>
                    : null
                }

                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                </div>
            </div>
        </div>
    );
};

export default Card;
