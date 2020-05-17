import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header = () => (
	<header class={style.header}>
		<h1>K11 | Numerologia</h1>
		<nav>
			<Link activeClassName={style.active} href="/">Principal</Link>
			<Link activeClassName={style.active} href="/sobre">Sobre</Link>
		</nav>
	</header>
);

export default Header;
