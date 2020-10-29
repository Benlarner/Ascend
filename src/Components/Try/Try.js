import React from 'react';
import Build from '../Build/Build';
import Built from '../Built/Built';
import './Try.scss';

class Try extends React.Component{

    state = {
        shop: []
    }


    sendToBuilt = (store) => {
        let newStore = this.state.shop.concat([store])
        this.setState({
            shop: newStore
        });
    }
    

    render(){
        return(
            <main className = 'try'>
                <Build addStore = {this.sendToBuilt}/>
                <Built shop = {this.state.shop}/>
            </main>
        )
    }
}

export default Try;