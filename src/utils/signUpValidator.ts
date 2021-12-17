export const signUpValidator = ({
  lastName,
  firstName,
  phone,
  email,
  password,
  passwordCheck,
}: signUpValidatorProps): [boolean, string | null] => {
  if (lastName.length === 0) {
    return [false, 'Та овгоо оруулна уу.'];
  }

  if (firstName.length === 0) {
    return [false, 'Та нэрээ оруулна уу.'];
  }

  if (phone.toString().length !== 8 || isNaN(+phone)) {
    return [false, 'Та утасны дугаараа зөв оруулна уу.'];
  }

  if (email.length === 0 || !email.includes('@') || !email.includes('.')) {
    return [false, 'Та и-мэйлээ зөв оруулна уу.'];
  }

  if (password.length < 8) {
    return [false, 'Та нууц үгээ 8-аас дээш тэмдэгтээр оруулна уу.'];
  }

  if (password !== passwordCheck) {
    return [false, 'Баталгаажуулах нууц үг таарахгүй байна.'];
  }

  return [true, null];
};

type signUpValidatorProps = {
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  password: string;
  passwordCheck: string;
};
