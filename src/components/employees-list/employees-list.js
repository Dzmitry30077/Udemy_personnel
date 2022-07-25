import EmployessListItem from "../employees-list-item/employees-list-item";
import "./employees-list.css";

const EmployessList = ({ data, onDelete, onToggleProp, selectSalary }) => {
  return (
    <ul className="app-list list-group">
      {data.map((item) => {
        const { id, ...itemProps } = item;
        return (
          <EmployessListItem
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) =>
              onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
            }
            selectSalary={(e) => selectSalary(e.target.value, id)}
          />
        );
      })}
    </ul>
  );
};

export default EmployessList;
