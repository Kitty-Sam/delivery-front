export interface IForm {
    onOrderPress: (name: string, phone: string, address: string, comment: string, paymentMethod: string) => void;
}
