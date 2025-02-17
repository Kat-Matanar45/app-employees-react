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
            term: ''
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

    render() {
        const {data, term} = this.state

        const total = data.length;
        const totalIncrease = data.filter(item => item.increase).length;

        const visibleData = this.onSearchEmp(data, term);

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
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data= {visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                    />
                <EmployeesAddForm
                    onAddItem={this.addItem}
                />
            </div>
        );
    } 
}

export default App;