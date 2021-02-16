
import React from 'react'
import BuildControls from './Burger/BurgerControls/BuildControls';

const Layout = (props) => {
    return (
        <React.Fragment>
            <div>tool bar</div>
            <main>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout;