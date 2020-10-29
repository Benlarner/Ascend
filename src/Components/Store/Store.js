import React from 'react';
import './Store.scss'


class Store extends React.Component {

    render(){
        return(
            <div className = "item">
                <p className = "item__name">{this.props.item.name}</p>
                <p className = "item__quantity">{this.props.item.itemone}</p>
                <img src={this.props.item.imageone} alt="spongebob"/>
                <p className = "item__quantity">{this.props.item.priceone}</p>
                <button>{this.props.item.button}</button>
                <p className = "item__quantity">{this.props.item.itemtwo}</p>
                <img src={this.props.item.imagetwo} alt="baloons"/>
                <p className = "item__quantity">{this.props.item.pricetwo}</p>
                <button>{this.props.item.button}</button>
                <p className = "item__quantity">{this.props.item.itemthree}</p>
                <img src={this.props.item.imagethree} alt="archway"/>
                <p className = "item__quantity">{this.props.item.pricethree}</p>
                <button>{this.props.item.button}</button>
            </div>
        )
    }
}

export default Store;