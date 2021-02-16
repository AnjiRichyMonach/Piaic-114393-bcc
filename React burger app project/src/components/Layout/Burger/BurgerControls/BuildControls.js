import React from 'react';

import classes from './BurgerControls.css';
import BuildControl from './BurgerControl/BurgerControl';


//array hving objs
const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => {
                    props.addedIngre(ctrl.type)
                }}
                remove={() => {
                    props.removeIngre(ctrl.type)
                }}

                disabled={props.disabled[ctrl.type]}

            />
        ))}


    </div>
);

export default BuildControls;