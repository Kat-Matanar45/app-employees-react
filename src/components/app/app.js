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
            total: 0,
            totalIncrease: 0
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

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, increase: !item.increase}
                    };
                    return item;
                })
            })
        )
    }

    onToggleLike = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, nameLike: !item.nameLike}
                };
                return item
            })
        })

        )
    }

    render() {
        const {data, total, totalIncrease} = this.state

        return (
            <div className="app">
                <AppInfo
                    total= {total}
                    totalIncrease= {totalIncrease}
                />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                    data= {data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike}
                    />
                <EmployeesAddForm
                    onAddItem={this.addItem}
                />
            </div>
        );
    } 
}

export default App;