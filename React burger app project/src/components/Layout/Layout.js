
import React from 'react'

const Layout = (props) => {
    return (
        <React.Fragment>
            <div>tool bar</div>
            <main>{props.children}</main>
        </React.Fragment>
    )
}

export default Layout;