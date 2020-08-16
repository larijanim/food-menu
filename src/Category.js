import React, {Component} from 'react';
import Item from "./Item";





class Category extends Component {


    state = {
        catvalue:this.props.catTitle ,
    };

    handleCatClicked = (event)=> {
        this.setState({ catvalue: event.target.value });
        // console.log(this.props);
        //this.props.moveMe(this.props.cbook, event.target.value);
    }

    render() {
        return (
            <div>
                <p><button value={this.state.catvalue} onClick={(event) => this.handleCatClicked(event)}>   {this.props.catTitle}</button></p>


                    <Item
                              catTitle={this.state.catvalue}
                             // catIndex={this.props.catIndex}
                             //foodinCat={this.props.foodList.filter(food=>(food.cat===cat.title))}
                             // moveB={this.props.onUpdate}
                    />

            </div>
        );
    }
}

export default Category;
