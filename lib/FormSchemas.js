import * as Yup from 'yup';

const CommonSchema = {
  firstName: Yup.string()
    .min(3, 'Too Short!')
    .max(16, 'Too Long!')
    .require('Required!'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid e-mail').require('Required!'),
  phone: Yup.string(),
};

const FreeQuoteSchema = Yup.object().shape({
  ...CommonSchema,
  streetAddress: Yup.string().min(5).max(50).required('Required'),
  city: Yup.string().min(5).max(50).required('Required'),
  state: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  'how-can-we-help': Yup.string().min(10).max(500).required('Required'),
  budget: Yup.string().required('Required'),
  'how-did-you-hear-about-us': Yup.string().required('Required'),
});

export { FreeQuoteSchema };
