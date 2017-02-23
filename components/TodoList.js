import React, { PropTypes } from 'react'
import {
    StyleSheet, 
    Text,
    View,
} from 'react-native';
import ListItem from '../components/ListItem';

const TodoList = ({ todos, onTodoClick }) => (
    <View style={styles.container}>
        {todos.map(todo =>
            <ListItem key={todo.id}
                title={todo.text}
                description={todo.completed ? 'Completed' : '...'}
                onPress={() => {
                    onTodoClick(todo.id);
                }}
            />
        )}
    </View>
)



TodoList.propTypes = {

    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,

    onTodoClick: PropTypes.func.isRequired

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});

export default TodoList
