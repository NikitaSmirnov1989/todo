import styles from "./ListLayout.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../features/store";
import List from "../List/List";
import TodoItem from "../TodoItem";
import { ListLayoutProps } from "./types";

export default function ListLayout<U extends string>(props: ListLayoutProps<U> ) {
    const todos = useSelector((state: RootState) => state.todos);
    const {text} = props;
    return  <div className={styles.listLayout_content}>
                {todos.length === 0 
                    ? <div className={styles.listLayout_list}>
                        {text}
                    </div>
                    : <List 
                        items={todos}
                        renderFunction={(item) => <TodoItem {...item}/>}
                        />
                }
            </div>


}

