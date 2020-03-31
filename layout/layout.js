import React, { Component } from "react";
import { connect } from "react-redux";
import { TextInput, Text, ScrollView, View } from "react-native";
import { TouchableOpacity, StyleSheet } from "react-native";
const addTodo = todo => ({
  payload: todo,
  type: "ADD_ITEM"
});
const removeTodo = todo => ({
  payload: todo,
  type: "REMOVE_ITEM"
});
const complete = todo => ({
  payload: todo,
  type: "CHANGE_COMPLETE"
});
class Layout extends Component {
  submit = a => {
    this.props.removeTodo({ todo: a });
  };
  complete = a => {
    this.props.complete({ todo: a });
  };
  mint = () => {
    return this.props.todos.map(todo => {
      return (
        <View style={styles.comb}>
          <Text>
            {"\n"}
            {"\n"}
            {"\n"}
          </Text>
          <Text style={styles.tt}>
            {"\n"}
            {todo}
            {"  "}
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.complete(todo)}
          >
            <Text style={styles.textt}>{"      "} Completed</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.submit(todo)}
            disabled={true}
          >
            <Text style={styles.textt}>{"\n "} Delete</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };
  list = () => {
    return this.mint();
  };
  render() {
    return (
      <ScrollView style={styles.main1}>
        <Text>
          {"\n"}
          {"\n"}
          {"\n"}
        </Text>

        <TextInput
          placeholder=" Add todo"
          placeholderTextColor="#C495C1"
          style={{
            alignSelf: "center",
            width: "90%",
            height: 40,
            borderWidth: 2,
            borderRadius: 10
          }}
          onSubmitEditing={e =>
            this.props.addTodo({ todo: e.nativeEvent.text })
          }
        />
        <Text style={styles.complete}>
          COMPLETED TASK:{this.props.completed}
          {"\n"}
        </Text>

        {this.list()}
      </ScrollView>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state.todos,
    completed: state.completed
  };
};
const mapDispatchToProps = {
  addTodo: addTodo,
  removeTodo: removeTodo,
  complete: complete
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    width: "25%",
    height: 45,
    marginLeft: "5%",
    borderRadius: 20
  },

  comb: {
    flexDirection: "row",
    marginLeft: "2%",
    flexWrap: "wrap",
    display: "flex",
    color: "#69a9e9"
  },
  main1: {
    color: "blue"
  },
  tt: {
    marginLeft: "2%",
    fontSize: 22,
    color: "blue",
    flex: 1
  },
  textt: {
    fontSize: 20
  },
  complete: {
    fontSize: 18,
    color: "orange",
    top: "8%",
    left: "5%"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
