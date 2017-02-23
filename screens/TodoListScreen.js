import React from 'react';
import {
    ScrollView,
    View,
    StyleSheet,
} from 'react-native';
import ListItem from '../components/ListItem';
import Router from '../navigation/Router';
import AddTodo from '../containers/AddTodo';

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
                <View style={styles.container}>
                    {
                        [1, 2, 3, 4, 5, 6].map((item) =>
                            <ListItem key={item}
                                title="Todo List"
                                description="A demo of a todo list"
                                onPress={this._goToScreen('todoList')}
                            />
                        )
                    }
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});

        // <AddTodo />
        // <VisibleTodoList />
        // <Footer />
