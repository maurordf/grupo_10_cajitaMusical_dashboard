import React from 'react';


function ChartRowUser(props){
    return (
                <tr>
                    <td>{props.user}</td>
                    <td>{props.email}</td>
                    <td>{props.url}</td>
                   
                </tr>
            )
    }
    
        

export default ChartRowUser;