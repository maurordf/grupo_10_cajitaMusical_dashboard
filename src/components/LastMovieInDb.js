import React from 'react';

class LastMovieInDb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productImage: '',
            productDescription:''
        };
    }

    componentDidMount() {
        fetch('api/productos/')
            .then(response => {
                return response.json()
            })
            .then(data => {
              fetch('api/productos/'+data.data[0].id)
                .then(response => {
                    return response.json()
                })
                .then(data => {
                    return this.setState({ 
                        productImage: data.data[0].image, 
                        productDescription: data.data[0].description })
                }).catch(e => { console.log(e) });

            }).catch(e => { console.log(e) });
    }
    render() {
        return (
            <div className="col-lg-6 mb-4">
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-blue-600">Último producto cargado</h5>
                    </div>
                    <div className="card-body">
                        <div className="text-center">
                            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 10 + 'rem' }} src={this.state.productImage} alt=" Star Wars - Mandalorian " />
                        </div>
                        <p>{this.state.productDescription}</p>
                        {/* <a className="btn btn-info" rel="nofollow" href="http://localhost:3000/LastMovieInDb">VER DETALLE</a> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default LastMovieInDb;
