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
						className="navbar-toggler"
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
							{userInfo.username ? (
								<>
									<NavItem className="active">
										<LinkContainer to="/">
											<NavLink>
												Home <span className="sr-only">(current)</span>
											</NavLink>
										</LinkContainer>
									</NavItem>
									<NavItem>
										<LinkContainer to="/wines">
											<NavLink>
												My Wines <span className="sr-only">(current)</span>
											</NavLink>
										</LinkContainer>
									</NavItem>
									<NavItem>
										<LinkContainer to="/stats">
											<NavLink>
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
											<DropdownItem onClick={handleLogout}>Logout</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								</>
							) : (
								<>
									<NavItem>
										<LinkContainer to="/login">
											<NavLink>Login</NavLink>
										</LinkContainer>
									</NavItem>
									<NavItem>
										<LinkContainer to="/register">
											<NavLink>Register</NavLink>
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
