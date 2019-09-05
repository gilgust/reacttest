import React, { Component } from "react";


export class SeminarList extends Component {
    constructor(props) {
        super(props);
        this.state = ({ loading: true, seminars: [] });

        fetch('api/Seminar/Get')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading: false,
                    seminars: data
                });
                console.log(data);
            });

        //this.renderSeminarList = this.renderSeminarList.bind(this);
    }

    renderSeminarList(seminars) {
        return (<div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul>
                    {seminars.map(seminarInfo =>
                        <li key={seminarInfo.seminarId}>
                            <h4>{seminarInfo.name}</h4>
                        </li>)
                    }
                </ul>
            </nav>
        </div>
        );
    }
        
    render() {
        const result = this.state.loading
            ? <div>loading...</div>
            : this.renderSeminarList(this.state.seminars);

        return (
            <div>{result}</div>
        );
    }
}
//const SlidesAll = slides.map((slideProp, index) =>
//    <Slide link={link} {...slideProp} index={index} key={index} current={current} />);