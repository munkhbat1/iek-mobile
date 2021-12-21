export const deliveryInfoValidator = ({
  name,
  phone,
  address,
}: deliveryInfoValidatorProps): [boolean, string | null] => {
  if (name.length === 0) {
    return [false, 'Та хүлээн авагч хүний нэрийг оруулна уу.'];
  }

  if (phone.toString().length !== 8 || isNaN(+phone)) {
    return [false, 'Та утасны дугаараа зөв оруулна уу.'];
  }

  if (address.length === 0) {
    return [false, 'Та хаягаа оруулна уу.'];
  }

  return [true, null];
};

type deliveryInfoValidatorProps = {
  name: string;
  phone: string;
  address: string;
};
