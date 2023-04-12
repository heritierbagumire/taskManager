import Button from './Button';
// import PropTypes from 'prop-types';
const Header = ({title}) => {

    const onClick = () => {
        console.log('click');
    }
    return (
  <header className='header'>
     <h1>Task  {title}</h1>
    <Button color='green' text='Add' onClick={onClick} />
    
     
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

