import React from "react";

class GenresInDb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryNames: []
    };
  }

  componentDidMount() {
    fetch('api/productos/')
      .then(response => {
        return response.json()
      })
      .then(data => {
        let categoryNames = Object.keys(data.metadata.categoryByQuantity);

        return this.setState({ categoryNames: categoryNames })
      }).catch(e => { console.log(e) });
  }

  render() {
    let categoryNames = this.state.categoryNames;
    return (

      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-blue-600">
              {/* 3483FA */}
              CATEGORIAS
            </h5>
          </div>
          <div className="card-body">
            <div className="row">

              {categoryNames.map(categoryName => {
                console.log(categoryName);
                return (
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{categoryName}</div>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GenresInDb;
