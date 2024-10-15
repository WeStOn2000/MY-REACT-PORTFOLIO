import PropTypes from 'prop-types';

const Link = ({ href, children }) => {
  return (
    <a href={href} className="btn">{children}</a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired, // href must be a string and is required
  children: PropTypes.node.isRequired, // children can be anything that can be rendered and is required
};

export default Link;
