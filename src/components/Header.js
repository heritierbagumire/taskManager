import Button from './Button';
// import PropTypes from 'prop-types';
const Header = ({title, onAdd,  showAdd}) => {
    return (
  <header className='header'>
     <h1>Task {title}</h1>
    <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd} />
    
     
</header>
    )




}

//  css outside an element

// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }



Header.defaultProps = {
    title: 'Tracker',
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired, 





// }
export default  Header;



