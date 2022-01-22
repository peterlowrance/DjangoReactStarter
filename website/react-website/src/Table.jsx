function Table(props) {

    return (
      <span className="my-table">
        {props.data.length > 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(props.data[0]).map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((val, i) => (
              <tr key={i}>
                {Object.values(val).map((v, i) => (
                  <td key={i}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      </span>
    );
  }
  
  export default Table;
  