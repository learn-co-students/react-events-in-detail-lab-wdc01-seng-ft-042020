// Code DelayedButton Component Here

import React from 'react'

class DelayedButton extends React.Component{


    test = (event) => {

       event.persist()

        setTimeout( () => this.props.onDelayedClick(event), this.props.delay)

    }


    render(){
        return(
            <div>
                <button onClick={ (event) => this.test(event) } > Delay</button>
            </div>
        )
    }
}

export default DelayedButton;