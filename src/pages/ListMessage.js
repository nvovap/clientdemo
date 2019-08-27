import React, { Component } from 'react';

import socket from '../socket'


class ItemList extends Component {

    state = {
        listMassge: []
    }

    componentDidMount = () => {
        socket.on('user', function (obj) {
            console.log(obj);

            this.listMassge.push(obj.data)
        });

        socket.on('/user/create/', function (obj) {
            console.log(obj);

            this.listMassge.push(obj.data)
        });

        socket.on('create', function (obj) {
            console.log(obj);

            this.listMassge.push(obj.data)
        });

        socket.on('connection', (obj) => {
            console.log(obj);
        });
    }

   // http://localhost:1337/user/create?name=galaXXI

    onClickButton = () => {
        socket.post('/user/create/', {
            name: "User POST",
        });
    }

    onClickButton2 = () => {
        socket.get('/user/create/', {
            name: "User 2",
        });
    }

    render() {
        return (
            <div>
                test help
                <button onClick={this.onClickButton}>Button</button>
                <button onClick={this.onClickButton2}>Button 2</button>
            </div>
        )

    }
}

export default ItemList;