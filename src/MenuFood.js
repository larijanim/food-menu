import React, {Component} from 'react';
import Category from "./Category";



const catTitle=[{title: 'Vegan', index: 1},{title: 'Meat',index:2},{title: 'Sea Food', index:3}];




class MenuFood extends Component {

   render() {
        return (
            <div>
                {catTitle.map((cat,i)=>(

                    <Category  key={i}
                               catTitle={cat.title}
                               catIndex={cat.index}
                        //foodinCat={this.props.foodList.filter(food=>(food.cat===cat.title))}
                        // moveB={this.props.onUpdate}
                    />
                ))}</div>
        );
    }
}

export default MenuFood;
