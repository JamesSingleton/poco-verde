import * as Yup from 'yup';

const CommonSchema = {
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .required('Required!'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid e-mail').required('Required!'),
  phone: Yup.string(),
};

export default CommonSchema;
