import React, {Component} from 'react';
import logo from '../img/logo.png'


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: 0,
            menuOpen: 0,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }
    resize(){
        this.setState({isMobile: window.innerWidth < 992});
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    toggleMenu(){
        this.setState({menuOpen: !this.state.menuOpen})
    }
    render() {
        let menuClass = 'menu-wrap',
            burgerClass = 'btn-burger';
        if (this.state.menuOpen && this.state.isMobile) {
            menuClass += ' menu-open';
            burgerClass += ' active';
        }
        if((this.state.isMobile)){
            menuClass += ' menu-mobile';
        }

        return (
            <header className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-4 col-sm-3">
                            <img src={logo} alt="Company Name"/>
                        </div>
                        <div className="col-auto ml-2 col-md-6 ml-md-5 col-lg-6 ml-lg-4 pl-lg-4">
                            <div
                                className={this.state.isMobile ? burgerClass : 'hidden'} onClick={this.toggleMenu}>
                            <span></span>
                            </div>
                            <nav className={menuClass}>
                                <ul className="menu">
                                    <li className="menu__item  menu__item-parent">
                                        <a href="/">Products</a>
                                        <ul className="menu__item-child">
                                            <li className="menu__item">
                                                <a href="/">Product 1</a>
                                            </li>
                                            <li className="menu__item">
                                                <a href="/">Product 2</a>
                                            </li>
                                            <li className="menu__item">
                                                <a href="/">Product 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="menu__item">
                                        <a href="/">News & Events</a>
                                    </li>
                                    <li className="menu__item">
                                        <a href="/">Support</a>
                                    </li>
                                    <li className="menu__item">
                                        <a href="/">Contacts</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-auto ml-auto">
                            <div className="header__links">
                                <a href="/">Login</a>
                                <a href="/">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;
