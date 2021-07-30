import * as Yup from 'yup';
import CommonSchema from './CommonSchema';

const ContactUsSchema = Yup.object().shape({
  ...CommonSchema,
  subject: Yup.string().min(5).max(50).required('Required'),
  message: Yup.string().min(5).max(500).required('Required'),
});

export default ContactUsSchema;
