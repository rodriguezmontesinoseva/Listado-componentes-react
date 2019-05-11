import React, { Component } from 'react';

class App extends Component {
    render() {

        const headerIndex = (
            <header className="header-container">
                <img className="header-avatar" src={this.props.avatar} alt="" />
                <p className="header-item1"> {this.props.name}</p>
                <p className="header-item2"> {this.props.date}</p>

            </header>
        );


        const mainIndex = (
            <main>
                <p>{this.props.paragraph}</p>
            </main>

        );

        const footerIndex = (
            <footer className="footer-container">
                <p>{this.props.more}</p>
                <p>{this.props.likes}{this.props.heart}</p>
            </footer>
        );

        const pageIndex = (
            <div className="app-container">
                {headerIndex}
                {mainIndex}
                {footerIndex}
            </div>
        );

        return pageIndex;
    }
}

export default App;