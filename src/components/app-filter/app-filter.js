import './app-filter.css'

const AppFilter = (props) => {
    const buttonData = [
        {name: 'all', text: "Все сотрудники"},
        {name: 'like', text: "На повышение"},
        {name: 'increase', text: "Премирование"},
        {name: 'salary1000', text: "ЗП больше 1000$"}
    ];

    const buttons = buttonData.map(({name, text}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button className={`btn ${clazz}`} 
                    type='button' 
                    key={name}
                    onClick={() => props.onFilterSelect(name)}
                    >
                    {text}
            </button>
        ) 
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;