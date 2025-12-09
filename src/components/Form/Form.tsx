import styles from "./Form.module.css";
import { FormProps } from "./types";

export default function Form(props:FormProps){
    const {onSubmit, children} = props;
    return  <form
                className={styles.form}
                action="" 
                onSubmit={e => onSubmit(e)}
            >
                {children}
            </form>
}