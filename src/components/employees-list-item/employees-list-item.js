import { Component } from 'react';
import './employees-list-item.css'

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    onUpdateValue = (e) => {
        const value = e.target.value.slice(0, -1);
        this.setState({value})
        this.props.onUpdateSalary(value)
    }

    render() {
        const {name, salary, onDelete, onToggleProp, nameLike, increase} = this.props;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {classNames += ' increase'}
        if (nameLike) {classNames += ' like'}

        return (
            <li className={classNames}>
                <span className='list-group-item-label' onClick={onToggleProp} data-toggle='nameLike'>
                {name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"} onChange={this.onUpdateValue}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type='button' className="btn-cookie btn-sm" onClick={onToggleProp} data-toggle='increase'>
                    <i className="fas fa-cookie"></i>
                    </button>

                    <button type='button' className='btn-trash btn-sm' onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                    </button>

                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
    }


export default EmployeesListItem;