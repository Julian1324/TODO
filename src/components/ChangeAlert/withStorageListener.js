import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props){

        const [storageChange, setStorageChange] = React.useState(false);

        window.addEventListener('storage', (change)=>{
            if (change.key  === 'TODOS_V1') {
                console.log('Hubo cambios en Todos_v1');
                setStorageChange(true);
            }
        } );

        const toggleShow = ()=>{
            setStorageChange(false);
            props.sincronize();
        }
        return (
            <WrappedComponent show={storageChange} toggleShow={toggleShow} />
        )
    }
}

export {withStorageListener}