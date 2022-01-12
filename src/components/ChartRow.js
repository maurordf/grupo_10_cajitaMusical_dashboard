import React from 'react';

class ChartRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productName: '',
            productPrice:'',
            productCategory:''
        };
    }

    componentDidMount() {
        fetch('api/productos/')
            .then(response => {
               
                return response.json()
            })
            .then(data => {
              fetch('api/productos/'+data.data[0].id)
              console.log(data)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    return this.setState({ 
                        productName: data.data.title, 
                        productPrice: data.data.price, 
                        productCategory: data.data.category_name})
                }).catch(e => { console.log(e) });

            }).catch(e => { console.log(e) });
    }
    render() {
        return (
            <tr>
            <td>{this.state.productName}</td>
            <td>{this.state.productPrice}</td>
            <td>{this.state.productCategory}</td>
        </tr>

            // <div className="col-lg-6 mb-4">
            //     <div className="card shadow mb-4">
            //         <div className="card-header py-3">
            //             <h5 className="m-0 font-weight-bold text-blue-600">Último producto cargado</h5>
            //         </div>
            //         <div className="card-body">
            //             <div className="text-center">
            //                 <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 10 + 'rem' }} src={this.state.productImage} alt=" Star Wars - Mandalorian " />
            //             </div>
            //             <p>{this.state.productDescription}</p>
            //             {/* <a className="btn btn-info" rel="nofollow" href="http://localhost:3000/LastMovieInDb">VER DETALLE</a> */}
            //         </div>
            //     </div>
            // </div>
        )
    }
}

// function ChartRow(props){
//     return (
//                 <tr>
//                     <td>{props.productName}</td>
//                     <td>{props.Length}</td>
//                     <td>
//                         <ul>
//                             {props.products.map( (category,i) => 
//                                 <li key={`category ${i}`}>{category}</li>
//                             )}
//                         </ul>
//                     </td>
//                 </tr>
//             )
//     }
    
        

export default ChartRow;