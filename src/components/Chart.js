import React from 'react';
import ChartRow from './ChartRow';



class Chart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        products: [{
        name: '',
        price: '',
        category_name: ''
      }]};
    }
  
    componentDidMount() {
      fetch('/api/productos')
        .then(response => {
          return response.json()
        })
        .then(data => {
            console.log(`este es el resultado del the ${Object.values(data.data)}`);

          let products = data.data.map(product=>{
              return {
                  title: product.title,
                  price: product.price,
                  category_name: product.categoria.category_name
              }
          });
  
          return this.setState({ products: products })
        })
        .catch(e => { console.log(e) });
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
                      
                        <tbody>
                            {
                            this.state.products.map( (product , i) => {
                                return<ChartRow { ...product} key={i}/>
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