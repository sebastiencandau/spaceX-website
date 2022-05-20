
const Box = (props) => {

    const current = new Date();
    const dateLaunchYear = props.first_flight.split('-');
    const averageLauchPerYear = props.success_rate_pct / (current.getFullYear()-dateLaunchYear[0]);


    return (
        <div className="card mb-5">
            <img className="card-img-top" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.desc}</p>
                <a href={props.wikipedia} className="btn btn-primary">View more details</a>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">In activity {props.active===true && (
                    <div className="active_status_true"></div>
                )}
                {props.active === false && (
                    <div className="active_status_false"></div>
                )}
                </li>
                <li class="list-group-item">Average launches per year 
                <div className="dataContainer">{averageLauchPerYear}</div>
                </li>
                <li class="list-group-item">Country <div className="dataContainer">{props.country}</div></li>
            </ul>
        </div>
    )
}

export default Box;