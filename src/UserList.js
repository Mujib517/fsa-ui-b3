import React, { Component } from 'react';
import axios from 'axios';

class UserList extends Component {

    state = {
        users: []
    };

    constructor() {
        super();

        const url = 'https://api.github.com/users?since=1&per_page=10';
        axios.get(url)
            .then(res => {
                this.setState({ users: res.data });
            })
            .catch(err => console.log(err));
    }

    render() {
        return <h1>UserList</h1>
    }
}

export default UserList;
