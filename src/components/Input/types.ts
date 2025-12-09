export type InputProps = {
    placeholder: string; /*Подсказка в поле input*/
    value: string; /*Значение внутри поля*/
    type: 'button' | 'checkbox' | 'radio' | 'reset' | 'submit' | 'text' /*Тип поля инпут*/
    id: string; /*Значение для for элемента */
    name?: string; /*Имя поля*/
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void /*Функция для обработки значения из поля input*/
    className: string; /*Название класса*/
}