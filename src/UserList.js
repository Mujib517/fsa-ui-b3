import React from 'react';
import axios from 'axios';

export default class UserList extends React.Component {

    state = {
        users: []
    };

    constructor() {
        super();

        axios.get('https://api.github.com/users')
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return <div className="col-md-5">
            <h1>Users</h1>
            {this.state.users.map(user => {
                return <div className="card col-md-5">
                    <img src={user.avatar_url} className="card-img-top" alt="image"></img>
                    <div className="card-body">
                        <h3 className="card-title">{user.login}</h3>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-sm btn-success">
                            Favorite &nbsp;
                            <i className="fa fa-heart"></i>
                        </button>
                    </div>
                </div>
            })}
        </div>
    }
}
