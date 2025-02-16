import './employees-add-form.css'
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const {name, salary} = this.state;

        if(name.trim() === '' || name.trim().length < 3) {return};

        const newItem = {
            id: uuidv4(),
            name: name,
            salary: salary.trim() === '' ? '1000' : salary,
            increase: false,
            nameLike: false
        }

        this.props.onAddItem(newItem);
        this.setState({name:'', salary:''})
        
    }

    render () {
        const {name, salary} = this.state

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form d-flex" onSubmit={this.onFormSubmit}>
                    <input 
                        type="text" 
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'
                        value={name}
                        onChange={this.onValueChange}
                    />
    
                    <input 
                        type="number" 
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'
                        value={salary}
                        onChange={this.onValueChange}
                    />
    
                    <button type='submit' className="btn btn-outline-light">
                        Добавить
                    </button>
    
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm;