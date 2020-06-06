import React from 'react';

export default class Toolbar extends React.Component {

    onSelectFilter = () => {
        this.props.onSelectFilter(this.props.onSelectFilter); // передаём объект
    }

    render() {
    const { filters, selected, onSelectFilter } = this.props;
    return (
    <>
        <ul className="btn_container">{filters.map(o => <li key={o} onClick={onSelectFilter} className={`${o === selected ? 'active' : 'non_active'} filter_item`}>{o}</li>)}</ul>;
    </>
    )
    
    }
}