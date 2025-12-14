export type GenericList<T> = {
    items: T[],
    renderFunction: (item: T) => React.ReactNode;
}