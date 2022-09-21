import { useNavigate } from "react-router";

function ItemRow({ item }) {
  const navigate = useNavigate();
  return (
    <div>
      <tr>
        <td>{item.name}</td>
        <td>
          <button onClick={() => navigate(`${item.id}`)}>Show detail</button>
        </td>
      </tr>
    </div>
  );
}

export default ItemRow;
