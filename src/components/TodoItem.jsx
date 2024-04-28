import { useDispatch } from "react-redux";
import { toggleComplete, removeTodo } from "../store/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleComplete({ id }))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
    </li>
  );
};

export default TodoItem;

// компоненты React используют хуки Redux для взаимодействия с
// Redux store. Например, useDispatch используется для получения
// функции dispatch, которая позволяет отправлять действия в store.
// useSelector используется для доступа к данным из store.
// Ваши компоненты также передают действия и данные друг другу
// через пропсы.
