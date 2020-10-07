import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import App from '../../pages/main/App';
import About from '../../pages/about/About';
import Blog from '../../pages/blog/Blog';
import Contact from '../../pages/contact/Contact';
import Music from '../../pages/music/Music';
import Portfolio from '../../pages/portfolio/Portfolio';
import Professional from '../../pages/professional/Professional';

const Menu = (props) => {

    return (

        <HashRouter basename={process.env.PUBLIC_URL}>

            {/* <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                Allan Vieira Ribeiro
            </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" to="/">Accueil</Link>
                        <Link className="nav-link" to="/professional">Professionel</Link>
                        <Link className="nav-link" to="/blog">Blog</Link>
                        <Link className="nav-link" to="/portfolio">Portfolio</Link>
                        <Link className="nav-link" to="/music">Musique</Link>
                        <Link className="nav-link" to="/about">À propos</Link>
                        <Link className="nav-link" to="/contact">Contactez-moi</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={Contact} />
                <Route path="/music" component={Music} />
                <Route path="/portfolio" component={Portfolio} />
                <Route path="/professional" component={Professional} />
            </Switch>
        </HashRouter>
    )
}

export default Menu;