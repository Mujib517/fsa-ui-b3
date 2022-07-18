import React from 'react';
import axios from 'axios';
import User from './User';

export default class UserList extends React.Component {

    state = {
        users: []
    };

    constructor() {
        super();

        // async
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
            {this.state.users.map(usr => <User user={usr} />)}
        </div>
    }
}
