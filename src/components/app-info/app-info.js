import './app-info.css'

const AppInfo = (props) => {
    const {total, totalIncrease} = props;

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {total}</h2>
            <h2>Премию получат: {totalIncrease}</h2>
        </div>
    );
}

export default AppInfo;