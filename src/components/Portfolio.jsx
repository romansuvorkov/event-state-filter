import React from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

export default class Portfolio extends React.Component {
    state = {
        selected: 'All'
    }

    constructor (props) {
        super(props);
        this.images = props.images;
    }

    render() {
    const {selected} = this.state;
    let images = null;
    if (this.state.selected === 'All') {
        images = this.images;
    } else {
        images = this.images.filter(o => o.category === this.state.selected);
    }
    let i = 0;
    for (let file of images) {
        file.id = i;
        i++;
    }
    return (
        <>
        <div className="filters">
            <Toolbar
            filters={["All", "Websites", "Flayers", "Business Cards"]}
            selected={selected}
            onSelectFilter={(filter) => {this.setState({selected: filter.target.textContent})}}/>
        </div>
        <ProjectList images={images}/>
        </>
    );
    }
}