import React from 'react';
import BrownButtonBtn from "@components/ui/BrownButtonBtn";
import Modal from "react-bootstrap/Modal";
import styles from "@components/modal/index.module.scss";
import TransparentButtonBtn from "@components/ui/TransparentButtonBtn";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);


const ModalConfirmEmail = ({ handleClose, show, email, callback}) => {
    return (
        <Modal show={show} onHide={handleClose} centered contentClassName={cx(styles.customContentModal, styles.modalConfirmEmail)}>
            <h3>Вы правильно ввели свой Email?</h3>
            <p className={styles.email}>{email}</p>
            <div className={styles.modalConfirmEmailButtons}>
                <TransparentButtonBtn title='Редактировать' onClick={handleClose} additionalClass={styles.modalConfirmEmailEditBtn}/>
                <BrownButtonBtn title='Всё верно!' onClick={callback} additionalClass={styles.modalConfirmEmailSuccessBtn}/>
            </div>
        </Modal>
    );
};

export default ModalConfirmEmail;