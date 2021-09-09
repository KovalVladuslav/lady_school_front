export function validationEmail(email) {
    if (!email) return '';

    const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return regularExpression.test(String(email).toLowerCase())? '' : 'Введен некорректный Email'
}

export const checkedIsSubmitBtn = (objectFields, errorMsg) => (
    Object.values(objectFields).every(item => item !== '') && errorMsg === ''
);

export function validationName(str) {
    if (!str) {
        return ''
    }

    const validName = str.split(' ').map(item => item.replace(/^a-Za-Я/g, '')).join(' ').trim();

    return validName.length < 2 ? 'Имя должно содержать минимум два символа' : ''
}

const validationPass = pass => {
    if (!pass) {
        return ''
    }
    return pass.length < 5 ? 'Не менее 5 символов' : ''
};

export function identityValidationPasswords(password, repeatPassword) {
    const regValidationPassError = {
        password: validationPass(password),
        repeatPassword: '',
    };

    if (regValidationPassError.password) {
        return regValidationPassError
    } else {
        if (!password && repeatPassword) {
            regValidationPassError.password = 'Введите пароль'
        } else if (repeatPassword && password !== repeatPassword) {
            regValidationPassError.repeatPassword = 'Ваши пароли не совпадают'
        }
    }
    return regValidationPassError
}