import React, { FC, PropsWithChildren } from 'react';
import { Modal } from 'react-native';

import { CentredView, ModalView } from '~components/CustomModal/style';

export const CustomModal: FC<PropsWithChildren> = ({ children }) => (
    <Modal animationType="slide" transparent visible>
        <CentredView>
            <ModalView>{children}</ModalView>
        </CentredView>
    </Modal>
);
