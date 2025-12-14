import styles from "./List.module.css";
import { GenericList } from "./types";

export default function List<U>(props: GenericList<U>) {
    const {items, renderFunction} = props;
    return  <ul className={styles.list}>
                {items.map((el, id) => {
                    return <li key={id}>{renderFunction(el)}</li>
                })}
            </ul>
}