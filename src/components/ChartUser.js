import React from 'react';
import ChartRowUser from './ChartRowUser';



class ChartUser extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: [{
        user: '',
        email: '',
        url: ''
      }]};
    }
  
    componentDidMount() {
      fetch('/api/usuarios')
        .then(response => {
          return response.json()
        })
        .then(data => {

          let users = data.data.map(user=>{
              return {
                user: user.user,
                  email: user.email,
                  url: user.url
              }
          });
  
          return this.setState({ users: users })
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
                                <th>Email</th>
                                <th>URL</th>
                            </tr>
                        </thead>
                      
                        <tbody>
                            {
                            this.state.users.map( (user , i) => {
                                return<ChartRowUser { ...user} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}}

export default ChartUser;