import PropTypes from 'prop-types';
import Button from'./Button'

const Header = ({title, onAdd, showAddTask}) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color={showAddTask? 'red':'green'} text={showAddTask ? 'Close':'Add'} onClick = {onAdd}/>
    </header>
  );
}

Header.defaultProps = {
    title: 'Task Tracker',

}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in js 
//const headingSyle = {color: 'red', backgroundColor: 'black'}

export default Header