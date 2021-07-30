import * as Yup from 'yup';
import CommonSchema from './CommonSchema';

const WarrantySchema = Yup.object().shape({
  ...CommonSchema,
  'street-address': Yup.string().min(5).max(50).required('Required'),
  city: Yup.string().required('Required!'),
  state: Yup.string().required('Required!'),
  'postal-code': Yup.string().required('Required!'),
  community: Yup.string(),
  'lot-number': Yup.string(),
  contact: Yup.string().required('Required!'),
  'nature-of-problem': Yup.string().min(5).max(500).required('Required'),
});

export default WarrantySchema;
