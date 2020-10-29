import React from 'react';
import Store from '../Store/Store'

class Built extends React.Component{


    render(){
        return(
            <section className = "built">
            <h2>New Store</h2>
            <div className = "built__store">
                <div className = "built__item">
                {this.props.shop.map((item, key) => (
                    <Store item = {item} key = {key} />
                ))}
                </div>
            </div>
        </section>
        )
    }
}

export default Built;