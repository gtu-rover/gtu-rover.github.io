const Card = ({ image, link, imgPos, end, children }) => {
  const imageDiv = (
    <div class="col-xs-12 col-md-6">
      <img class="lib-img-show" src={image} />
    </div>
  );

  const textDiv = <div class="col-xs-12 col-md-6">{children}</div>;

  let content;

  switch (imgPos) {
    case 'right':
      content = (
        <>
          {textDiv}
          {imageDiv}
        </>
      );
      break;
    case 'left':
    default:
      content = (
        <>
          {imageDiv}
          {textDiv}
        </>
      );
      break;
  }

  const positionClass = end
    ? 'justify-content-md-end'
    : 'justify-content-md-start';

  return (
    <a href={link} target="_blank">
      <div
        class={`row ${positionClass} justify-content-center`}
        style={{ marginBottom: 60, marginTop: 40 }}
      >
        <div class="lib-panel" style={{ borderRadius: 10 }}>
          <div class="row box-shadow ">{content}</div>
        </div>
      </div>
    </a>
  );
};

Card.Title = (props) => (
  <div class="lib-row lib-header font-sifonn">
    <p class="p-lib-desc">{props.children}</p>
    <div class="seperator">
      <div class="lib-header-seperator"></div>
    </div>
  </div>
);

Card.Body = (props) => (
  <div class="lib-row lib-desc">
    <p class="p-lib-desc">{props.children}</p>
  </div>
);

export default Card;
