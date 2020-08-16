import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                {this.props.catTitle}-Item
            </div>
        );
    }
}

export default Item;
