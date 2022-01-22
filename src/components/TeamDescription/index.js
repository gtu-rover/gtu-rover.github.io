const TeamDescription = (props) => {
  return (
    <div class="container-fluid" style={{ marginBottom: 50 }}>
      {props.children}
    </div>
  );
};

TeamDescription.Title = (props) => (
  <div class="row " style={{ marginBottom: 25 }}>
    <div class="col-xs-4 col-lg-2">
      <img class="first-div-icon" src={props.image} />
    </div>

    <div class="col-lg-3">
      <h3 class="h3-about1 font-windlesham">{props.children}</h3>
    </div>
  </div>
);

TeamDescription.Body = (props) => (
  <p class="animate__animated animate__fadeInRight p-sixth-div">
    {props.children}
  </p>
);

export default TeamDescription;
