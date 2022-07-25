import "./app-info.css";

const AppInfo = ({ counterOfItems, counterOfItemsToPrem }) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании Ronda</h1>
      <h2>Общее число сотрудников: {counterOfItems}</h2>
      <h2>Премию получат: {counterOfItemsToPrem} </h2>
    </div>
  );
};

export default AppInfo;
