function Table(props) {
    const formatName = (name) => {
      return name[0].toUpperCase() + name.substr(1).toLowerCase();
    };
  
    // The return of a component returns/computes JSX every render
    return (
      <span className="my-table">
        <table>
          <thead>
            <tr>
              {props.columnNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((val, i) => (
              <tr key={i}>
                <td>{val[0]}</td>
                <td>{formatName(val[1])}</td>
                <td>{val[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </span>
    );
  }
  
  // Export the component for importing into other components
  export default Table;
  