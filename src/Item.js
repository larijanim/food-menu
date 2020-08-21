import React, {Component} from 'react';

class Item extends Component {






    render() {
        const {itemList, catTitle}=this.props;
        const currList = itemList.filter((a)=>(a.cat==catTitle))

        return (
            <div >
               <label>

                   {currList.map((item)=>(
                        <p> <input type="checkbox" name={this.props.catTitle}/> {item.namef}</p>
                   ))}
               </label>
            </div>
        );
    }
}

export default Item;
