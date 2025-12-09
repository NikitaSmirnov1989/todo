import styles from './Input.module.css';
import { InputProps } from './types';

export default function Input(props: InputProps){
    const {placeholder, value, type, id, onChange, className} = props;
    return <input
                type={type}
                value={value}
                placeholder={placeholder}
                id={id}
                onChange={onChange}
                className={`${styles.input} ${styles[className]}` }
                />
}

