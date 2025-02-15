import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: 'Вася Пупкин', salary: 800, increase: false, id: 0},
                {name: 'Иван Иванов', salary: 3000, increase: true, id: 1},
                {name: 'Кирилл Денисов', salary: 5000, increase: false, id: 2}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                    data: data.filter(item => item.id !== id)
                }
        })
    }

    addItem = (newItem) => {
        this.setState(({data}) => {
            return {
                data: [...data, newItem]
            }
        })
    }

    render() {
        const {data} = this.state

        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data= {data}
                    onDelete={this.deleteItem}
                    />
                <EmployeesAddForm
                    onAddItem={this.addItem}
                />
            </div>
        );
    } 
}

export default App;