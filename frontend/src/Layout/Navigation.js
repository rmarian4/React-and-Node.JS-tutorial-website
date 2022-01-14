import {Link} from 'react-router-dom';
import {Navbar, Container, Nav} from 'react-bootstrap';
import classes from './Navigation.module.css'

function Navigation(){
    return(
    <Navbar className={classes.header}>
        <Container>
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link as={Link} to='/' className={classes.links}>Home Page</Nav.Link>
                    <Nav.Link as={Link} to='/installTutorial' className={classes.links}>Installing React & Node.js</Nav.Link>
                    <Nav.Link as={Link} to='/webpagetutorial' className={classes.links}>Tutorial on how to create webpage</Nav.Link>
                    <Nav.Link as={Link} to='/conclusion' className={classes.links}>Conclusion</Nav.Link>
                    <Nav.Link as={Link} to='/credits' className={classes.links}>Credits</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}

export default Navigation;