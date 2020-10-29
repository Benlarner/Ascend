import React from 'react';
import building from './2020-08-03-online-store-builder.jpg';
import './Build.scss';
import spongebob from './spongebob.jpeg';
import baloons from './ballons.jpg';
import art from './art.jpeg';


class Build extends React.Component{
    
    handleNewStore = (e) => {

        e.preventDefault();
        let store = e.target.store.value;
        let firstItem = e.target.firstitem.value;
        let priceOne = e.target.priceone.value;
        let secondItem = e.target.seconditem.value;
        let priceTwo = e.target.pricetwo.value;
        let thirdItem = e.target.thirditem.value;
        let priceThree = e.target.pricethree.value;

        if(!store || !firstItem || !priceOne || !secondItem || !priceTwo || !thirdItem || !priceThree){
            alert("Please fill in the blank fields")
        } else {
            
                let newStore = {
                    name: store,
                    itemone: firstItem,
                    imageone: spongebob,
                    priceone: priceOne,
                    itemtwo: secondItem,
                    imagetwo: baloons,
                    pricetwo: priceTwo,
                    itemthree: thirdItem,
                    imagethree: art,
                    pricethree: priceThree,
                    button: "Add to Basket"
                }

                this.props.addStore(newStore)
            }

            e.target.reset();
        } 
    


    render(){
        return(
        <section className = "store">
            <h2 className = "store__title">Build a Store!</h2>
            <form onSubmit={this.handleNewStore} className = "store__form">
                <img className = "store__image" src={building} alt="shopping cart"/>
                <div className = "store__container">
                    <input placeholder="Enter Your Store Name" name="store" className = "store__input" type="text"/>
                    <input placeholder="Enter Item 1" name= "firstitem" className = "store__input" type="text"/>
                    <input placeholder="Enter Item 1 Price" name= "priceone" className = "store__input" type="text"/>
                    <input placeholder="Enter Item 2" name= "seconditem" className = "store__input" type="text"/>
                    <input placeholder="Enter Item 2 Price" name= "pricetwo" className = "store__input" type="text"/>
                    <input placeholder="Enter Item 3" name= "thirditem" className = "store__input" type="text"/>
                    <input placeholder="Enter Item 3 Price" name= "pricethree" className = "store__input" type="text"/>
                    <button className = "store__button">add</button>
                </div>
            </form>
        </section>
        )
    }
}

export default Build;