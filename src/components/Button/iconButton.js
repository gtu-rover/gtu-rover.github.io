const IconButton = ({ faIcon, link, children }) => (
  <a target="_blank" href={link}>
    <button type="button" class="btn-has-icon btn-second-div btn btn-info">
      <i class={`fa-second-div fa ${faIcon}`} style={{ marginRight: 5 }}></i>
      {children}
    </button>
  </a>
);

export default IconButton;
