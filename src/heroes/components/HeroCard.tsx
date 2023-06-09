import { Link } from "react-router-dom";
import { ISuperhero, Ibiography, Iimages } from "../helpers"

export const HeroCard = ({ id, name, biography, images, }: ISuperhero) => {
    const { publisher, fullName, firstAppearance, aliases }: Ibiography = biography;
    const { md, lg, xs, sm }: Iimages = images;

    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={md} className="card-img" alt={fullName}></img>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">
                                {name}
                            </h5>
                            <p className="card-text text-truncate">{fullName ? fullName : name}</p>

                            {/* <p>{aliases}</p> */}
                            {/* <p className="card-text">
                                <small className="text-muted">{firstAppearance}</small>
                            </p> */}

                            <Link to={`/hero/${id}`} className="btn btn-primary">
                                More...</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};
