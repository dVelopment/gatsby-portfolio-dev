import { Container } from 'components/common'
import { Link } from 'gatsby'
import NavbarLinks from '../NavbarLinks'
import React from 'react'
import { Wrapper } from './styles'

const Navbar = () => (
	<Wrapper as={Container}>
		<Link to="/">Daniel Holzmann</Link>
		<NavbarLinks desktop />
	</Wrapper>
)

export default Navbar
