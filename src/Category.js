import React, {Component} from 'react';
import Item from "./Item";





class Category extends Component {


    state = {
        catvalue:this.props.catTitle ,
        showItem:false,
    };

    handleCatClicked = (event)=> {
        this.setState({ catvalue: event.target.value,
            showItem: true});


        // console.log(this.props);
        //this.props.moveMe(this.props.cbook, event.target.value);
    }

    render() {
        return (
            <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-3">
                    <button className="btn btn-secondary"
                            value={this.state.catvalue}
                            onClick={(event) => this.handleCatClicked(event)}>   {this.props.catTitle}
                    </button>
                </div>
                <div className="col-md-9">
                        {this.state.showItem &&<Item
                            catTitle={this.state.catvalue}
                            itemList={this.props.itemList}
                        /> }
                    </div>


            </div>
            </div>
        );
    }
}

export default Category;
