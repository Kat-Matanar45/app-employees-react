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
                {name: 'Вася Пупкин', salary: 800, increase: false, nameLike: true, id: 0},
                {name: 'Иван Иванов', salary: 3000, increase: true, nameLike: false, id: 1},
                {name: 'Кирилл Денисов', salary: 5000, increase: false, nameLike: false, id: 2}
            ],
            term: '',
            filter: 'all',
            value: ''
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

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, [prop]: !item[prop]}
                    };
                    return item;
                })
            })
        )
    }

    onSearchEmp = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPost = (items, filter) => {
        switch(filter) {
            case 'like':
                return items.filter(item => item.nameLike);
            case 'increase': 
                return items.filter(item => item.increase);
            case 'salary1000':
                return items.filter(item => item.salary > 1000);
            default: 
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter})
    }

    onUpdateSalary = (id, value) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, salary: value}
                }
                return item
            })
        }))
    }

    render() {
        const {data, term, filter} = this.state

        const total = data.length;
        const totalIncrease = data.filter(item => item.increase).length;

        const visibleData = this.filterPost (this.onSearchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    total= {total} 
                    totalIncrease= {totalIncrease}
                />
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch= {this.onUpdateSearch}
                    />
                    <AppFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}
                    />
                </div>
    
                <EmployeesList 
                    data= {visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    onUpdateSalary={this.onUpdateSalary}
                    />
                <EmployeesAddForm
                    onAddItem={this.addItem}
                />
            </div>
        );
    } 
}

export default App;