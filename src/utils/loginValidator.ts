export const loginValidator = ({
  email,
  password,
}: loginValidatorProps): [boolean, string | null] => {
  if (email.length === 0 || !email.includes('@') || !email.includes('.')) {
    return [false, 'Та и-мэйлээ зөв оруулна уу.'];
  }

  if (password.length < 8) {
    return [false, 'Та нууц үгээ 8-аас дээш тэмдэгтээр оруулна уу.'];
  }

  return [true, null];
};

type loginValidatorProps = {
  email: string;
  password: string;
};
