import React from "react";

function TodoHeader({ children, loading }) {


    return (
        <header>
            {/* {React.Children.toArray(children).map((child) => {return React.cloneElement(child, { loading })})} */}
            {React.Children.toArray(children).map((child) => React.cloneElement(child, { loading }))}
        </header>
    );
}

export { TodoHeader };