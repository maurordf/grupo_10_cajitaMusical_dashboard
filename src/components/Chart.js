import React from 'react';
import ChartRow from './ChartRow';

// let tableRowsData = [
//     {
//         Title: 'Billy Elliot ',
//         Length: '123',
//         Rating: '5',
//         Categories: ['Drama','Comedia'],
//         Awards: 2
//     },
//     {
//         Title: 'Alicia en el país de las maravillas',
//         Length: '142',
//         Rating: '4.8',
//         Categories: ['Drama','Acción','Comedia'],
//         Awards: 3
//     },
    
// ]

class Chart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: []
      };
    }
  
    componentDidMount() {
      fetch('api/productos/')
        .then(response => {
          return response.json()
        })
        .then(data => {
          let products = data.data.map(product=>{
              return {
                  name:product.title,
                  price:product.price,
                  category: product.category
                
              }
          });
  
          return this.setState({ products: products })
        }).catch(e => { console.log(e) });
    }

render (){
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr className='text-blue-600'>
                                <th>Nombre</th>
                                <th>Costo</th>
                                <th>Categoría</th>
                            </tr>
                        </thead>
                        <tfoot>
                        <tr className='text-blue-600'>
                            <th>Nombre</th>
                            <th>Costo</th>
                            <th>Categoría</th>
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            this.state.products.map( (product , i) => {
                                return <ChartRow { ...product} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}}

export default Chart;