export type ButtonProps = {
    text: string; /*Внутренний текс кнопки*/
    onClick: () => void; /*Обработчик события кнопки*/
    disabled: boolean; /*Активна или неактивна кнопка во время*/
    type: 'submit' | 'reset' | 'button' /*Значение кнопки*/
    className: string /*Класс*/
}