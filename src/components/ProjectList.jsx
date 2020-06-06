import React from 'react';

export default class ProjectList extends React.Component {

    render() {
    const { images } = this.props;
    return (
    <div className="list">
        {images.map(o => <img key={o.id} src={o.img} className="list_item" />)};
    </div>
    )
    
    }
}