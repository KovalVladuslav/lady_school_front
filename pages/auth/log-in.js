import React, {useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from '@components/ui/Input';
import {useDebounce} from '@components/hooks/useDebounce';
import { validationEmail, checkedIsSubmitBtn } from '@utils/validation';
import BrownButtonBtn from '@components/ui/BrownButtonBtn';
import DisabledButton from '@components/ui/DisabledButton';
import styles from './index.module.scss';

const LogIn = () => {
    const [value, setValue] = useState({
        email: '',
        password: ''
    });
    const [errorEmail, setErrorEmail] = useState('');
    const [isSubmitButton, setIsSubmitButton] = useState(false);

    const handleInput = event => {
        if(event.target.name === 'email') {
            setErrorEmail('');
        }
        if(!event.target.value) {
            setIsSubmitButton(false)
        }

        setValue({
            ...value,
            [event.target.name]: event.target.value
        })
    };

    const debouncedEmailValue = useDebounce(value.email, 1000);
    const debouncedPasswordValue = useDebounce(value.password, 1000);

    useEffect(() => {
        const reqValidEmailError = validationEmail(value.email);

        setErrorEmail(reqValidEmailError);

        setIsSubmitButton(checkedIsSubmitBtn(value, reqValidEmailError))
    }, [debouncedEmailValue]);

    useEffect(() => {
        setIsSubmitButton(checkedIsSubmitBtn(value, errorEmail))
    }, [debouncedPasswordValue]);

    return (
        <Container className='px-0 mainContainer'>
            <Row className='m-0'>
                <Col xs='12' className={styles.colAuth}>
                    <div className={styles.wrapperAuth}>
                        <h1>Введите свои данные для доступа к обучению</h1>
                        <Input
                            value={value.email}
                            onChange={handleInput}
                            name='email'
                            type='email'
                            label='Ваш Email'
                            error={errorEmail}
                            placeholder='mail@mail.com'
                        />
                        <Input
                            value={value.password}
                            onChange={handleInput}
                            name='password'
                            type='password'
                            label='Ваш пароль'
                            placeholder='Пароль'
                        />
                        <a className={styles.forgotPassword}>Забыли пароль?</a>
                        {isSubmitButton ?
                            <BrownButtonBtn title='Войти в аккаунт' onClick={() => {}}/>
                            :
                            <DisabledButton title='Войти в аккаунт'/>
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default LogIn;