import React, {Component} from 'react';
import Category from "./Category";



const catTitle=[{title: 'Vegan', index: 1},{title: 'Meat',index:2},{title: 'Sea Food', index:3}];
const items=[{cat:'Vegan' , index:1 , namef:"food1"},
    {cat:'Vegan' , index:2 , namef:"food2"},
    {cat:'Meat' , index:3 , namef:"food3"},
    {cat:'Meat' , index:4 , namef:"food4"},
    {cat:'Sea Food' , index:5 , namef:"food5"}]



class MenuFood extends Component {

   render() {
        return (
            <div>
                {catTitle.map((cat,i)=>(

                    <Category  key={i}
                               catTitle={cat.title}
                               catIndex={cat.index}
                               itemList={items}
                        //foodinCat={this.props.foodList.filter(food=>(food.cat===cat.title))}
                        // moveB={this.props.onUpdate}
                    />
                ))}</div>
        );
    }
}

export default MenuFood;
