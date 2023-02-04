import './Grid.css';

const Grid = ({ children, className }) => {
  const classNames = className ? `Grid ${className}` : 'Grid';
  return <div className={classNames}>{children}</div>;
};

export default Grid;
