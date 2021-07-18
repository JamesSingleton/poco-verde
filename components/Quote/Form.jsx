import Image from 'next/image';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import states from '@/data/states.json';

const FreeQuoteSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string(),
  streetAddress: Yup.string().min(5).max(50).required('Required'),
  city: Yup.string().min(5).max(50).required('Required'),
  state: Yup.string().required('Required'),
  postalCode: Yup.string().required('Required'),
  'how-can-we-help': Yup.string().min(10).max(500).required('Required'),
  budget: Yup.string().required('Required'),
  'how-did-you-hear-about-us': Yup.string().required('Required'),
});

const FreeQuoteForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        streetAddress: '',
        city: '',
        state: 'AZ',
        postalCode: '',
        'how-can-we-help': '',
        budget: 'under-25k',
        'how-did-you-hear-about-us': '',
      }}
      validationSchema={FreeQuoteSchema}
    >
      {({ errors, touched }) => (
        <Form className="mt-9 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors.firstName
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                name="firstName"
                id="firstName"
                type="text"
                autoComplete="given-name"
                aria-invalid={errors.firstName}
              />
              {errors.firstName && touched.firstName ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.firstName && touched.firstName ? (
              <p className="mt-2 text-sm text-red-600" id="firstName-error">
                {errors.firstName}
              </p>
            ) : null}
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors.lastName
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                name="lastName"
                id="lastName"
                type="text"
                autoComplete="family-name"
                aria-invalid={errors.lastName}
              />
              {errors.lastName && touched.lastName ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.lastName && touched.lastName ? (
              <p className="mt-2 text-sm text-red-600" id="lastName-error">
                {errors.lastName}
              </p>
            ) : null}
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors.email
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                aria-invalid={errors.email}
              />
              {errors.email && touched.email ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.email && touched.email ? (
              <p className="mt-2 text-sm text-red-600" id="email-error">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors.phone
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                type="tel"
                name="phone"
                id="phone"
                autoComplete="tel"
                aria-invalid={errors.phone}
                placeholder="(555) 987-6543"
              />
              {errors.phone && touched.phone ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.phone && touched.phone ? (
              <p className="mt-2 text-sm text-red-600" id="phone-error">
                {errors.phone}
              </p>
            ) : null}
          </div>
          <div className="col-span-6">
            <label
              htmlFor="streetAddress"
              className="block text-sm font-medium text-gray-700"
            >
              Street address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors.streetAddress
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                id="streetAddress"
                name="streetAddress"
                type="text"
                autoComplete="street-address"
              />
              {errors.streetAddress && touched.streetAddress ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.streetAddress && touched.streetAddress ? (
              <p className="mt-2 text-sm text-red-600" id="streetAddress-error">
                {errors.streetAddress}
              </p>
            ) : null}
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors.city
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                type="text"
                name="city"
                id="city"
              />
              {errors.city && touched.city ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.city && touched.city ? (
              <p className="mt-2 text-sm text-red-600" id="city-error">
                {errors.city}
              </p>
            ) : null}
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="state"
              className="block text-sm font-medium text-gray-700"
            >
              State
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors.state
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                as="select"
                name="state"
                id="state"
              >
                {states.map((state) => (
                  <option value={state.abbreviation} key={state.name}>
                    {state.name}
                  </option>
                ))}
              </Field>
              {errors.state && touched.state ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.state && touched.state ? (
              <p className="mt-2 text-sm text-red-600" id="state-error">
                {errors.state}
              </p>
            ) : null}
          </div>
          <div className="col-span-6 sm:col-span-6 lg:col-span-2">
            <label
              htmlFor="postalCode"
              className="block text-sm font-medium text-gray-700"
            >
              ZIP / Postal
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors.postalCode
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                type="text"
                name="postalCode"
                id="postalCode"
              />
              {errors.postalCode && touched.postalCode ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.postalCode && touched.postalCode ? (
              <p className="mt-2 text-sm text-red-600" id="postalCode-error">
                {errors.postalCode}
              </p>
            ) : null}
          </div>
          <div className="col-span-6">
            <div className="flex justify-between">
              <label
                htmlFor="how-can-we-help"
                className="block text-sm font-medium text-gray-700"
              >
                How can we help you?
              </label>
              <span
                id="how-can-we-help-description"
                className="text-sm text-gray-500"
              >
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors['how-can-we-help']
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                as="textarea"
                id="how-can-we-help"
                name="how-can-we-help"
                aria-describedby="how-can-we-help-description"
                rows={4}
              />
              {errors['how-can-we-help'] && touched['how-can-we-help'] ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors['how-can-we-help'] && touched['how-can-we-help'] ? (
              <p
                className="mt-2 text-sm text-red-600"
                id="how-can-we-help-error"
              >
                {errors['how-can-we-help']}
              </p>
            ) : null}
          </div>
          <fieldset className="col-span-6">
            <legend className="block text-sm font-medium text-gray-700">
              Expected budget
            </legend>
            <div className="mt-4 grid grid-cols-1 gap-y-4">
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="budget-under-25k"
                  name="budget"
                  value="under-25k"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                />
                <label htmlFor="budget-under-25k" className="ml-3">
                  <span className="block text-sm text-gray-700">
                    Less than $25K
                  </span>
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="budget-25k-50k"
                  name="budget"
                  value="25k-50k"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                />
                <label htmlFor="budget-25k-50k" className="ml-3">
                  <span className="block text-sm text-gray-700">
                    $25K – $50K
                  </span>
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="budget-50k-100k"
                  name="budget"
                  value="50k-100k"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                />
                <label htmlFor="budget-50k-100k" className="ml-3">
                  <span className="block text-sm text-gray-700">
                    $50K – $100K
                  </span>
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  id="budget-over-100k"
                  name="budget"
                  value="over_100k"
                  type="radio"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                />
                <label htmlFor="budget-over-100k" className="ml-3">
                  <span className="block text-sm text-gray-700">$100K+</span>
                </label>
              </div>
            </div>
          </fieldset>
          <div className="col-span-6">
            <label
              htmlFor="how-did-you-hear-about-us"
              className="block text-sm font-medium text-gray-700"
            >
              How did you hear about us?
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                type="text"
                name="how-did-you-hear-about-us"
                id="how-did-you-hear-about-us"
                className={classNames(
                  errors['how-did-you-hear-about-us']
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
              />
              {errors['how-did-you-hear-about-us'] &&
              touched['how-did-you-hear-about-us'] ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors['how-did-you-hear-about-us'] &&
            touched['how-did-you-hear-about-us'] ? (
              <p
                className="mt-2 text-sm text-red-600"
                id="how-did-you-hear-about-us-error"
              >
                {errors['how-did-you-hear-about-us']}
              </p>
            ) : null}
          </div>
          <div className="text-right col-span-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FreeQuoteForm;
