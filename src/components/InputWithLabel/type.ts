export interface IInputWithLabel {
    label: string;
    placeholder: string;
    onChangeText: (value: string) => void;
    onBlur: (e: any) => void;
    value: string;
    hasPhone?: boolean;
}
