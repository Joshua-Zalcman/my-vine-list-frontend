import { useContext, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router';
// reactstrap components
import {
	Collapse,
	UncontrolledCollapse,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	UncontrolledDropdown,
	FormGroup,
	Form,
	Input,
	NavbarBrand,
	Navbar,
	NavItem,
	NavLink,
	Nav,
	Container,
} from 'reactstrap';
import { GlobalContext } from '../context/GlobalState';

const MainNavbar = () => {
	const { userInfo, logoutUser } = useContext(GlobalContext);
	const history = useHistory();
	const [bodyClick, setBodyClick] = useState(false);
	const handleLogout = () => {
		logoutUser();
		history.push('/');
	};
	return (
		<>
			{bodyClick ? (
				<div
					id="bodyClick"
					onClick={() => {
						document.documentElement.classList.toggle('navbarNav');
						setBodyClick(false);
					}}
				/>
			) : null}
			<Navbar className="bg-primary" expand="lg">
				<Container>
					<LinkContainer to="/">
						<NavbarBrand>My Vine List</NavbarBrand>
					</LinkContainer>
					<button
						style={{ zIndex: '1000',color:'rgba(255, 255, 255, 0.8)'}}
						className="navbar-toggler "
						id="navbarNavDropdown"
						type="button"
						onClick={() => {
							document.documentElement.classList.toggle('navbarNav');
							setBodyClick(true);
						}}>
						&#9776;
					</button>
					<UncontrolledCollapse navbar toggler="#navbarNavDropdown">
						<Nav navbar className="ms-auto">
							{/* login/register or user options */}
							{userInfo && userInfo.username ? (
								<>
									<NavItem className="active">
										<LinkContainer to="/">
											<NavLink>
												<i className="fas fa-home"></i>
												Home <span className="sr-only">(current)</span>
											</NavLink>
										</LinkContainer>
									</NavItem>
									<NavItem>
										<LinkContainer to="/wines">
											<NavLink>
												<i className="fas fa-wine-bottle"></i>
												My Wines <span className="sr-only">(current)</span>
											</NavLink>
										</LinkContainer>
									</NavItem>
									<NavItem>
										<LinkContainer to="/stats">
											<NavLink>
												{' '}
												<i className="fas fa-globe-americas"></i>
												My Stats <span className="sr-only">(current)</span>
											</NavLink>
										</LinkContainer>
									</NavItem>
									<UncontrolledDropdown nav>
										<DropdownToggle
											aria-expanded={false}
											aria-haspopup={true}
											caret
											color="default"
											data-toggle="dropdown"
											href="#pablo"
											id="navbarDropdownMenuLink"
											nav
											onClick={(e) => e.preventDefault()}>
											<i className="fas fa-user"></i>
											{userInfo.username}
										</DropdownToggle>
										<DropdownMenu aria-labelledby="navbarDropdownMenuLink">
											<LinkContainer to="/profile">
												<DropdownItem
													href="#pablo"
													onClick={(e) => e.preventDefault()}>
													My Profile
												</DropdownItem>
											</LinkContainer>
											<LinkContainer to="/settings">
												<DropdownItem
													href="#pablo"
													onClick={(e) => e.preventDefault()}>
													My Settings
												</DropdownItem>
											</LinkContainer>
											<DropdownItem href="#pablo" onClick={handleLogout}>
												Logout
											</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								</>
							) : (
								<>
									<NavItem>
										<LinkContainer to="/login">
											<NavLink>
												<i className="fas fa-sign-in-alt"></i>Login
											</NavLink>
										</LinkContainer>
									</NavItem>
									<NavItem>
										<LinkContainer to="/register">
											<NavLink>
												<i className="fas fa-user-plus"></i>Register
											</NavLink>
										</LinkContainer>
									</NavItem>
								</>
							)}
						</Nav>
					</UncontrolledCollapse>
				</Container>
			</Navbar>
		</>
	);
};

export default MainNavbar;
