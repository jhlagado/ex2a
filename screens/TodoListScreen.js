import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
} from 'react-native';
import Router from '../navigation/Router';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList'

export default class HomeScreen extends React.Component {
    static route = {
        navigationBar: {
            title: 'Home',
            backgroundColor: '#0084FF',
            tintColor: '#fff',
        }
    }

    _goToScreen = name => () => {
        this.props.navigator.push(Router.getRoute(name));
    }

    render() {
        return (
            <ScrollView>
                <AddTodo />
                <VisibleTodoList />
            </ScrollView>
        )
    }
}


        // <AddTodo />
        // <VisibleTodoList />
        // <Footer />
