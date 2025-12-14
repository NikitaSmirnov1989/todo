import styles from "./TodoItem.module.css";
import { TodoItemProps } from "./types";
import { UseDispatch } from "react-redux";
import { remove } from "../../features/todos/todoSLices";
import Button from "../Button";
import deleteLogo from "../../assets/icons/delete.svg";
import editLogo from "../../assets/icons/edit.svg";
import Icon from "../Icon";

export default function TodoItem(props: TodoItemProps) {
    const {title, id, done} = props;
    return <span className={styles.todo_item}>
                <div className={styles.todo_item_checkbox}>
                    Чекбокс
                </div>
                <div className={styles.todo_item_content}>
                    {title}
                </div>
                <div className={styles.todo_item_buttons}>
                    <Icon 
                        width="30px"
                        height='30px'
                        src={deleteLogo}
                        alt='Удалить'
                        className="delete_icon"
                        />
                    <Icon 
                        width="30px"
                        height='30px'
                        src={editLogo}
                        alt='Редактировать'
                        className="edit_icon"
                        />
                </div>
            </span>
}