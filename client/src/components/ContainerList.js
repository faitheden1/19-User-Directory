import React from "react";

function ContainerList(props) {
    return (
        <div>
            <ul>
                {props.userArray.map((item, index) => {
                    return (
                        <li key={index}>
                            <p>{item.name.first} {item.name.last}</p>
                            <p>{item.email} </p>

                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ContainerList;