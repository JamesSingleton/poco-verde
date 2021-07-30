import * as Yup from 'yup';
import CommonSchema from './CommonSchema';

const FreeQuoteSchema = Yup.object().shape({
  ...CommonSchema,
  'street-address': Yup.string().min(5).max(50).required('Required'),
  city: Yup.string().min(5).max(50).required('Required'),
  state: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  'how-can-we-help': Yup.string().min(10).max(500).required('Required'),
  budget: Yup.string().required('Required'),
  'how-did-you-hear-about-us': Yup.string().required('Required'),
});

export default FreeQuoteSchema;
