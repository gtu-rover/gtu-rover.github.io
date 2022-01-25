

const SponsorImage = ({ border, src }) => (
  <img
    src={src}
    style={border ? { border: '1px red solid' } : null}
    className="img-sponsor-div2 img-first-div animate__animated animate__zoomIn"
  />
);

export default SponsorImage;