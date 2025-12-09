export type InputFieldProps = {
    forValue: string /*Значение для связывания с id инпута*/
    text: string /*Значение текста внутри поля label*/
    value: string /*Значение value для поля input*/
    placeholder: string /*Значение placeholder для внутреннего инпута*/
    type: 'button' | 'checkbox' | 'radio' | 'reset' | 'submit' | 'text' /*Тип поля инпут*/
    onChange: (e: React.ChangeEvent <HTMLInputElement>) => void /*Функция для обработки значения из поля input*/
    className: string /*Класс*/
}