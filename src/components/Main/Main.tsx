import styles from './Main.module.css';
import Form from '../Form';
import InputField from '../InputField/InputField';
import Button from '../Button';
import { useState } from 'react';


export default function Main(){
    function onSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }
    const [value, setValue] = useState<string>('');
    function onChange(value: string){
        setValue(value);
    }
    function onClick(){
        setValue("");
    }

    return  <div className={styles.main}>
                <Form onSubmit={onSubmit}>
                    <InputField
                        forValue={'inp'}
                        text="Введите название задачи"
                        placeholder='Введите значение'
                        type='text'
                        value={value}
                        onChange={e => onChange(e.target.value)}
                        className="add_field"
                    />
                    <Button
                        text={"+"}
                        type="submit"
                        onClick={onClick}
                        disabled={value.length === 0}
                        className="add_button"
                        />
                </Form>
            </div>
}