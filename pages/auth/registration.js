import React, {useEffect, useState} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./index.module.scss";
import Container from "react-bootstrap/Container";
import Input from "@components/ui/Input";
import BrownButtonBtn from "@components/ui/BrownButtonBtn";
import DisabledButton from "@components/ui/DisabledButton";
import { CheckedIconSm, CheckedIconMd } from '@components/Icon';
import {useDebounce} from '@components/hooks/useDebounce';
import { checkedIsSubmitBtn, validationEmail, validationName, identityValidationPasswords } from "@utils/validation";
import ModalConfirmEmail from '@components/modal/ModalConfirmEmail';


const Registration = () => {
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    const [isSubmitButton, setIsSubmitButton] = useState(false);
    const [error, setError] = useState({
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
    });
    const [checkedAgreePrivatePolice, setCheckedAgreePrivatePolice] = useState(false);

    const debouncedEmailValue = useDebounce(value.email, 1000);
    const debouncedPasswordValue = useDebounce(value.password, 1000);
    const debounceNameValue = useDebounce(value.name, 1000);
    const debounceCheckedRepeatPassword = useDebounce(value.repeatPassword, 1000);


    useEffect(() => {
        const reqValidEmailError = validationEmail(value.email);

        setError({
            ...error,
            email: reqValidEmailError
        });

        setIsSubmitButton(checkedIsSubmitBtn(value, reqValidEmailError))
    }, [debouncedEmailValue]);

    useEffect(() => {
        const reqValidPassError = identityValidationPasswords(value.password, value.repeatPassword);
        setError({
            ...error,
            ...reqValidPassError,
        });

        const errorPass = Object.values(reqValidPassError).find(err => err !== '') || '';

        setIsSubmitButton(checkedIsSubmitBtn(value, errorPass))
    }, [debouncedPasswordValue, debounceCheckedRepeatPassword]);

    useEffect(() => {
       const reqValidNameError = validationName(value.name);

        setError({
            ...error,
            name: reqValidNameError
        });

        setIsSubmitButton(checkedIsSubmitBtn(value, reqValidNameError))
    }, [debounceNameValue]);

    const handleInput = event => {
        if(!event.target.value) {
            setIsSubmitButton(false);

            setError({
                ...error,
                [event.target.name]: ''
            })
        }

        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <Container className='px-0 mainContainer'>
            <Row className='m-0'>
                <Col xs='12' className={styles.colAuth}>
                    <div className={styles.wrapperAuth}>
                        <p className={styles.registrationPrice}>Стоимость курса: 450 грн</p>
                        <Input
                            value={value.name}
                            onChange={handleInput}
                            name='name'
                            type='text'
                            label='Ваше Имя'
                            error={error.name}
                            placeholder='Ваше Имя'
                        />
                        <Input
                            value={value.email}
                            onChange={handleInput}
                            name='email'
                            type='email'
                            label='Ваш Email'
                            error={error.email}
                            placeholder='mail@mail.com'
                        />
                        <Input
                            value={value.password}
                            onChange={handleInput}
                            name='password'
                            type='password'
                            label='Придумайте пароль для доступа к курсу'
                            error={error.password}
                            placeholder='Введите пароль'
                        />
                        <Input
                            value={value.repeatPassword}
                            onChange={handleInput}
                            name='repeatPassword'
                            type='password'
                            label='Проверим совпадают ли пароли'
                            error={error.repeatPassword}
                            placeholder='Введите пароль еще раз'
                        />
                        <div className={styles.agreePrivacyPolicy}>
                            <button onClick={() => setCheckedAgreePrivatePolice(prev => !prev)}>
                                {checkedAgreePrivatePolice && (
                                    <>
                                        <span className='d-md-none'><CheckedIconSm/></span>
                                        <span className='d-none d-md-flex'><CheckedIconMd/></span>
                                    </>
                                )}
                            </button>
                            <p>Соглашаюсь с <a href='/'>Политикой конфиденциальности</a></p>
                        </div>
                        {(isSubmitButton && checkedAgreePrivatePolice) ?
                            <BrownButtonBtn title='Оплатить' onClick={() => setShowModal(true)}/>
                            :
                            <DisabledButton title='Оплатить'/>
                        }
                        <p className={styles.accessMsg}>Доступ к курсу на 6 месяцев</p>

                        <ModalConfirmEmail show={showModal} handleClose={handleCloseModal} callback={() => {}} email={value.email}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Registration