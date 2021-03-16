import React from 'react';
import TodoItem from '../../Components/TodoItem';
import RadioBadge from '../../Components/RadioBadge';
import {filters} from '../../Constants';
import './style.css'
import {connect} from 'react-redux';
import * as actions from '../../Reducers/actions';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        this.handleChangeTodoText = this.handleChangeTodoText.bind(this)
        this.filteredList = this.filteredList.bind(this)
        this.checkedListLength = this.checkedListLength.bind(this)
        this.addNewTodo = this.addNewTodo.bind(this)
    }

    componentDidMount() {
        this.props.getTodoItems()
    }

    checkedListLength = () => (this.props.list.payload.filter(el => el.completed).length);

    handleChangeTodoText(event) {
        this.setState({value: event.target.value});
    }

    addNewTodo(event) {
        if (event.which !== 13) return;
        this.props.addTodoItem(this.state.value)
        this.setState({value: ""})
    }

    filteredList() {
        const list = this.props.list.payload
        switch (this.props.activeFilter) {
            case "Completed":
                return list.filter(e => e.completed)
            case "ToDo":
                return list.filter(e => !e.completed)
            default:
                return list;
        }
    }


    render() {
        return (
            <div className="p-3 mx-auto block-size font-sans-serif">
                <h3 className="heading">Your todo list</h3>
                <div className="box-shadow">
                    <div className="d-flex container p-3 block-size">
                        <input placeholder="Enter your task name here"
                               type="text"
                               value={this.state.value}
                               className="borders block-size mx-auto color-input-text"
                               onChange={this.handleChangeTodoText}
                               onKeyPress={this.addNewTodo}/>
                    </div>
                    <section className="scroll">
                        <div className="block-size">
                            {this.filteredList().map(el =>
                                <TodoItem text={el.text}
                                          completed={el.completed}
                                          onChange={() => this.props.completeTodo(el._id)}
                                          onRemove={() => this.props.deleteTodo(el._id)}
                                />
                            )}
                        </div>
                    </section>
                    {
                        !!this.props.list.payload.length &&
                        <div className="d-flex container block-size border-footer">
                            <div
                                onClick={() => this.props.completeAllTodos(this.props.list.payload.filter(el => !el.completed))}
                                className="col-3 btn-sm text-btn">
                                {this.props.list.payload.length - this.checkedListLength()} tasks left
                            </div>
                            <RadioBadge
                                onChange={this.props.changeListFilter}
                                filters={filters}
                                selected={this.props.activeFilter}/>
                            {
                                this.checkedListLength() ?
                                <div onClick={this.props.deleteAllCompletedTodos}
                                     className="d-flex col-4 btn-sm text-btn block-size text-btn-complete">
                                    <span>Clear complete</span>
                                </div> :
                                <div className="d-flex col-4 btn-sm block-size text-btn-complete">{""}</div>
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }

}


const mapStateToProps = state => ({
    list: state.list,
    activeFilter: state.activeFilter,
})

const mapDispatchToProps = dispatch => ({
    getTodoItems: () => dispatch(actions.getTodoItems()),
    addTodoItem: (text) => dispatch(actions.addTodoItem(text)),
    deleteTodo: (id) => dispatch(actions.deleteTodo(id)),
    completeTodo: (id) => dispatch(actions.completeTodo(id)),
    deleteAllCompletedTodos: () => dispatch(actions.deleteAllCompletedTodos()),
    completeAllTodos: (idArr) => dispatch(actions.completeAllTodos(idArr)),
    changeListFilter: (filter) => dispatch(actions.changeListFilter(filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
