const UserCard = (props) => {
  return (
    <div key={props.index}>
      <div className="card">
        <div>
          <div className="title">
            <div className="name">
              <h2 className="firstName"> {props.user.firstName}</h2>
              <h2 className="lastName"> {props.user.lastName}</h2>
            </div>
            <p> Designer</p>
          </div>
          <div className="infoContainer">
            <div className="info">
              <div className="phone photo"> </div>
              <p> {props.user.phoneNumber}</p>
            </div>
            <div className="info">
              <div className="mail photo"></div>
              <p>{props.user.email}</p>
            </div>
            <div className="info">
              <div className="address photo"></div>
              <p> {props.user.address}</p>
            </div>
          </div>
        </div>
        <div className="rightPhoto">
          <div>
            <div className="logoPhoto"></div>
            <p className="companyName"> {props.user.companyName}</p>
          </div>
          <div className="qrcode"> </div>
        </div>
      </div>
    </div>
  );
};
export { UserCard };
