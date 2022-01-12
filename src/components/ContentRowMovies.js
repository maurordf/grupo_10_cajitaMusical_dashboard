import React from 'react';
import SmallCard from './SmallCard';


class ContentRowMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersQuantity: 0,
      categorysInDb: 0,
      productsInDB: 0,

    };
  }

  componentDidMount() {
    fetch('api/usuarios/')
      .then(response => {
        return response.json()
      })
      .then(data => {
        return this.setState({ usersQuantity: data.metadata.quantity })
      }).catch(e => { console.log(e) });
      fetch('api/productos/')
      .then(response => {
        return response.json()
      })
      .then(data => {
        return this.setState({ productsInDB: data.metadata.quantity, categorysInDb: data.metadata.categoryQuantity })
      }).catch(e => { console.log(e) })
  }
  render() {
    let usersQuantity = {
      title: 'Total de Usuarios',
      color: 'primary',
      cuantity: this.state.usersQuantity,
      icon: 'fa-user-check'
    };
    let categorysInDb = {
      title: 'Total de categorias',
      color: 'primary',
      cuantity: this.state.categorysInDb,
      icon: 'fa-sitemap'
    }
    let productsInDB = {
      title: 'Total de productos',
      color: 'primary',
      cuantity: this.state.productsInDB,
      icon: 'fa-clipboard-list'
    };
    let cartProps = [productsInDB, categorysInDb, usersQuantity];
    return (
      <div className="row">
        {cartProps.map((movie, i) => {
          return <SmallCard {...movie} key={i} />
        })}
      </div>
    );
  }
}
export default ContentRowMovies;