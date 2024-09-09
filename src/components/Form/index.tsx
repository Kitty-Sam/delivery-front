import { Formik } from 'formik';
import React, { FC, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

import { AppButton } from '~components/Buttons/Button';
import { CenteredContainer } from '~components/Form/style';
import { IForm } from '~components/Form/type';
import { Gap } from '~components/Gap';
import { InputWithLabel } from '~components/InputWithLabel';
import { paymentMethods } from '~src/contants/paymentMethods';
import { useAppDispatch } from '~src/redux/configureStore';
import { setModalType } from '~src/redux/slices/modalSlice';

export const Form: FC<IForm> = ({ onOrderPress }) => {
    const [paymentMethod, setPaymentMethod] = useState(paymentMethods[0]);

    const dispatch = useAppDispatch();

    return (
        <Formik
            initialValues={{ name: '', phone: '', address: '', comment: '' }}
            onSubmit={(values: any) => {
                if (!values.name || !values.phone || !values.address) {
                    dispatch(setModalType({ type: 'error' }));
                    return;
                }
                onOrderPress(values.name, values.phone, values.address, values.comment, paymentMethod);
            }}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <CenteredContainer>
                            <InputWithLabel
                                label="Name"
                                placeholder="Name"
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            <InputWithLabel
                                label="Phone"
                                placeholder="Phone"
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                value={values.phone}
                                hasPhone
                            />
                            <InputWithLabel
                                label="Address"
                                placeholder="Address"
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values.address}
                            />
                            <InputWithLabel
                                label="Comments"
                                placeholder="Comment"
                                onChangeText={handleChange('comment')}
                                onBlur={handleBlur('comment')}
                                value={values.comment}
                            />
                            <Gap scale={2} />
                            <AppButton title="Submit" onPress={handleSubmit} />
                        </CenteredContainer>
                    </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            )}
        </Formik>
    );
};
