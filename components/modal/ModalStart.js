import React from 'react';
import BrownButtonLink from "@components/ui/BrownButtonLink";
import Modal from "react-bootstrap/Modal";
import styles from "@components/modal/index.module.scss";
import TransparentButtonLink from "@components/ui/TransparentButtonLink";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const ModalStart = ({ handleClose, show }) => {
    return (
        <Modal show={show} onHide={handleClose} centered contentClassName={cx(styles.customContentModal, styles.modalStart)}>
            <BrownButtonLink title='Начать обучение' link='/auth/registration' additionalClass={styles.additionalBrownButtonLink}/>
            <TransparentButtonLink title='Войти в аккаунт' link='/auth/log-in'/>
        </Modal>
    );
};

export default ModalStart;