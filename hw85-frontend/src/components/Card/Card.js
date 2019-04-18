import React from 'react';
import {apiURL} from "../../constants";
import {NavLink} from "react-router-dom";

const Card = props => {
    return (
        <div className="col-12 col-sm-6 col-md-4">
            <div className="card mb-2">
                {props.image
                    ? <img src={`${apiURL}/uploads/${props.image}`} className="card-img-top" alt={props.title}/>
                    : null
                }

                <div className="card-body">
                    <h5 className="card-title">
                        {props.routePath
                            ? <NavLink to={props.routePath}>{props.title}</NavLink>
                            : props.title
                        }
                    </h5>

                    {props.year
                        ? <span>{props.year}</span>
                        : null
                    }

                </div>
            </div>
        </div>
    );
};

export default Card;
