export type FormProps = {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children?: React.ReactNode;
}