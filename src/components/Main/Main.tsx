import styles from './Main.module.css';
import Form from '../Form';
import InputField from '../InputField/InputField';
import Button from '../Button';
import { useState } from 'react';
import type { RootState, AppDispatch } from '../../features/store';
import { useDispatch } from 'react-redux'
import { add, remove } from '../../features/todos/todoSLices';
import ListLayout from '../ListLayout/ListLayout';


export default function Main(){
    const dispatch: AppDispatch = useDispatch();


    function onSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }
    const [value, setValue] = useState<string>('');
    function onChange(value: string){
        setValue(value);
    }
    function onClick(){
        dispatch(add(value));
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
                <ListLayout text={"Здесь пусто"}/>
            </div>
}