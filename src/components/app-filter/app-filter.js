import { Component } from 'react';
import './app-filter.css'

class AppFilter extends Component {
    constructor(props) {
        super(props)
    }
    render () {
        const {onClickFilter} = this.props

        return (
            <div className="btn-group">
                <button className="btn btn-light" type='button' onClick={onClickFilter}>
                    Все сотрудники
                </button>
                <button className="btn btn-outline-light" type='button' onClick={onClickFilter} data-toggle='like'>
                    На повышение
                </button>
                <button className="btn btn-outline-light" type='button' onClick={onClickFilter} data-toggle='salary'>
                    З\П больше 1000$
                </button>
            </div>
        )
    }
}

export default AppFilter;