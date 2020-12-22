import React from 'react';
import TodoItem from "../../Components/TodoItem/TodoItem";
import RadioBadge from "../../Components/RadioBadge/RadioBadge";
import {filters} from "../../constants/todo";
import "./TodoList.css";
import {connect} from 'react-redux';
import {
    AddTodoItem,
    CompleteAll,
    CompleteTodo,
    DeleteAllCompleted,
    DeleteTodo,
} from "../../Reducers/actions";
import cx from "classnames";

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
            activeFilter: "All",
        }
        this.onCheck = this.onCheck.bind(this)
        this.onAdd = this.onAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onRemove = this.onRemove.bind(this)
        this.setFilter = this.setFilter.bind(this)
        this.filteredList = this.filteredList.bind(this)
        this.checkedArrLength = this.checkedArrLength.bind(this)
        this.deleteCompleted = this.deleteCompleted.bind(this)
        this.completeAll = this.completeAll.bind(this)
    }

    onCheck(id) {
        this.props.completeTodo(id)
    }


    onAdd() {
        this.props.addTodoItem(this.state.value)
    }

    completeAll() {
        this.props.completeAll()
    }

    deleteCompleted() {
        this.props.deleteAllCompleted()
    }

    checkedArrLength() {
        const checkedArr = this.props.list.filter(el => el.completed === true)
        return checkedArr.length;

    }

    onRemove(id) {
        this.props.deleteTodo(id)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    setFilter(filter) {
        switch (filter) {
            case "Completed":
                this.setState({
                    activeFilter: filter
                });
                break;
            case "ToDo":
                this.setState({
                    activeFilter: filter
                });
                break;
            default:
                this.setState({
                    activeFilter: "All"
                });
        }
    }

    filteredList() {
        switch (this.state.activeFilter) {
            case "Completed":
                return this.props.list.filter(e => e.completed === true)
            case "ToDo":
                return this.props.list.filter(e => e.completed !== true)
            default:
                return this.props.list;
        }
    }

    render() {
        return (
            <div className="p-3 mx-auto block-size">
                <h3 className="text-center pb-4">Your ToDo List</h3>

                <div className="box-shadow">
                    <div className="d-flex container p-3 block-size">
                        <input placeholder="Enter your task name here" type='text' value={this.state.value}
                               className="borders block-size p-3 mx-auto "
                               onChange={this.handleChange} onKeyPress={event => {
                            if (event.which === 13) {
                                this.onAdd()
                                this.setState({value: "", visible: "visible"})
                            }
                        }}/>
                    </div>
                    <section className="scroll">
                        <div className="block-size">
                            {this.filteredList().map(el =>
                                <TodoItem text={el.text}
                                          completed={el.completed}
                                          onChange={() => this.onCheck(el.id)}
                                          onRemove={() => this.onRemove(el.id)}
                                />
                            )}
                        </div>
                    </section>
                    {
                        !!this.props.list.length &&
                        <div className="d-flex container p-3 block-size border-footer">
                            <div onClick={() => this.completeAll()} className="col-3 btn-sm text-btn">
                                {+this.props.list.length - +this.checkedArrLength()} tasks left
                            </div>
                            <RadioBadge
                                onChange={this.setFilter}
                                filters={filters}
                                selected={this.state.activeFilter}/>
                            <div onClick={this.deleteCompleted}
                                 className="d-flex col-4 btn-sm justify-content-end text-btn block-size">
                                <span
                                    className={cx(!this.checkedArrLength() && "invisible", "visible")}>Clear complete</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}


const mapStateToProps = function (state) {
    return {
        list: state.list
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        addTodoItem: (text) => {
            dispatch(AddTodoItem(text))
        },
        deleteTodo: (id) => {
            dispatch(DeleteTodo(id))
        },
        completeTodo: (id) => {
            dispatch(CompleteTodo(id))
        },
        deleteAllCompleted: () => {
            dispatch(DeleteAllCompleted())
        },
        completeAll: () => {
            dispatch(CompleteAll())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)