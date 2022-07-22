{getuserdata.map((element, id) => {
    return (
      <>
        <tr>
          <th scope="row">{id + 1}</th>

          <td>{element.name}</td>
          <td>
            <img
              src={element.url}
              class="rounded"
              alt="Paris"
            ></img>
          </td>
          <td>{element.condition}</td>
          <td>{element.price}</td>
          <td className="d-flex  justify-content-between">
            <NavLink to={`/view/${element._id}`}>
              <button className="btn btn-success">
                <i className="fas fa-eye"></i>
              </button>
            </NavLink>
            <NavLink to={`/edit/${element._id}`}>
              <button className="btn btn-primary">
                {" "}
                <i className="fas fa-pen"></i>
              </button>
            </NavLink>

            <button
              className="btn btn-danger"
              onClick={() => deleteuser(element._id)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      </>
    );
  })}
</tbody>
</table>