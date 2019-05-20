import React from 'react';
import logo from './logo.svg';
import './index.scss';
import Header from './components/Header'
import background from './img/main-bg.jpg'
import articlesLinked from './api/articles-linked'
import products from './api/products'
import companies from './api/companies'
import icons from './api/icons'

function App(){
    const articlesList = articlesLinked.map(article =>
        <div className="col-sm-6 col-lg-4 m-auto" key={article.title}>
            <div className="item-article item">
                <div className="item-article__img item-img">
                    <img src={article.img} className="item-article__img item-img" alt={article.title}/>
                </div>
                <p className="item-title">
                    {article.title}
                </p>
                <p className="item-text">
                    {article.text}
                </p>
                <a href={article.link} className="item-article__link">Learn more</a>
            </div>
        </div>
    );
    const productList = products.map(product =>
        <div className="col-sm-6 col-md-4 col-lg-4" key={product.title}>
            <div className="item-product item">
                <div className="item-product__img item-img">
                    <img src={product.img} alt={product.title}/>
                </div>
                <p className="item-title">
                    {product.title}
                </p>
                <p className="item-product__text item-text">
                    {product.text}
                    <a href={product.link} className="item-product__link"> {product.linkText} </a>
                </p>

            </div>
        </div>
    );
    const companiesList = companies.map(company =>
        <div className="companies-list__item" key={company.name}>
            <img src={company.img} alt={company.name}/>
        </div>
    );
    const iconsList = icons.map(icon=>
        <div className="icon-item" key={icon.name}>
            <a href={icon.link}>
                <img src={icon.img} alt={icon.name}/>
            </a>
        </div>
    );
    return (
        <div className="App">
            <Header/>
            <section className="first-screen"
                     style={{
                         backgroundImage: 'url(' + background + ')'
                     }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="first-screen__title">we solve<br/>your problems</h1>
                        </div>
                        <div className="col-lg-10 m-auto">
                            <p className="first-screen__subtitle">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec accumsan velit. Ut
                                gravida
                                id
                                sem
                                id sodales. Aenean quis enim dui. Vestibulum ullamcorper vel urna quis congue.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="second-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="block-title">Etiam ac nisl ac quam sodales scelerisque elementum quis
                                purus.</h2>
                        </div>
                    </div>
                    <div className="row">
                        {articlesList}
                    </div>
                </div>
            </section>
            <section className="product-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="block-title">
                                Etiam ac nisl ac quam sodales scelerisque elementum quis purus.
                            </h2>
                            <p className="block-subtitle">
                                Integer bibendum turpis sit amet pretium commodo. Cras justo elit, dapibus at viverra
                                non,
                                dapibus vitae est. Morbi facilisis mi non iaculis porttitor. Phasellus a nibh a lacus
                                dignissim pharetra. Vivamus ullamcorper finibus mauris, sit amet volutpat enim
                                sollicitudin
                                sed.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {productList}
                        <div className="col-auto m-auto">
                            <a href="/" className="btn btn-lg btn-green">View All Our Products</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="companies-block">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="block-title">
                                Wordlwide recognition
                            </h2>
                            <p className="block-subtitle">
                                Integer bibendum turpis sit amet pretium commodo. Cras justo elit, dapibus at viverra
                                non, dapibus vitae est.</p>
                            <p className="block-subtitle">
                                Fusce pretium enim sit amet elementum eleifend. Quisque at dui nunc. Curabitur
                                sodales,
                                turpis at luctus suscipit, nisl leo dignissim turpis, quis blandit justo nulla sed
                                nisi.
                                Vivamus urna eros, malesuada non massa sed, vestibulum maximus dui. Fusce facilisis
                                nunc
                                a urna lacinia, nec sagittis felis efficitur. Phasellus commodo porttitor odio, eu
                                commodo nisi vehicula ut. Maecenas congue nisi lorem, et maximus ante vestibulum eu.
                                Vivamus non imperdiet ex.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="companies-list">
                                {companiesList}
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <footer className="footer">
                <div className='container'>
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-nav">
                                <a href="/">PRIVACY POLICY</a>
                                <a href="/">ABOUT US</a>
                                <a href="/">SUPPORT</a>
                            </div>
                            <div className="footer-soc">
                                {iconsList}
                            </div>
                            <div className="footer-copiright">
                                Copright © 1999 - 2019
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
