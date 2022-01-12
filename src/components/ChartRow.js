import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.title}</td>
                    <td>{props.price}</td>
                    <td>{props.category_name}</td>
                   
                </tr>
            )
    }
    
        

export default ChartRow;