import React, {useState} from 'react';
import ModalStart from '@components/modal/ModalStart';
import LeftSideBar from '../LeftSideBar';
import styles from './CardTitle.module.scss';

const CardTitle = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <div className='position-relative'>
            <div className={styles.wrapperCardTitle}>
                <h1>Lady<span/>school</h1>
                <h2>Женский онлайн курс</h2>
                <button onClick={handleShowModal} className={styles.buttonStartCourse}>
                    Перейти к обучению
                </button>

                {/*<LeftSideBar handleShowModal={handleShowModal}/>*/}

                <ModalStart show={showModal} handleClose={handleCloseModal} handleShow={handleShowModal}/>
            </div>
            <LeftSideBar handleShowModal={handleShowModal}/>
        </div>

    )
};

export default CardTitle