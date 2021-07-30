import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import classNames from 'classnames';
import states from '@/data/states.json';
import { WarrantySchema } from '@/lib/Schemas';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  'street-address': '',
  city: '',
  state: 'AZ',
  'postal-code': '',
  community: '',
  'lot-number': '',
  contact: 'e-mail',
  'nature-of-problem': '',
};

const WarrantyForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={WarrantySchema}>
      {({ errors, touched }) => (
        <Form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-warm-gray-900"
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
          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-warm-gray-900"
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
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-warm-gray-900"
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
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-warm-gray-900"
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
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="street-address"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Street Address
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors['street-address']
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-warm-gray-900"
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
          <div>
            <label
              htmlFor="state"
              className="block text-sm font-medium text-warm-gray-900"
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
          <div>
            <label
              htmlFor="postal-code"
              className="block text-sm font-medium text-warm-gray-900"
            >
              ZIP / Postal
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors['postal-code']
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                type="text"
                name="postal-code"
                id="postal-code"
              />
              {errors['postal-code'] && touched['postal-code'] ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors['postal-code'] && touched['postal-code'] ? (
              <p className="mt-2 text-sm text-red-600" id="postal-code-error">
                {errors['postal-code']}
              </p>
            ) : null}
          </div>
          <div>
            <label
              htmlFor="community"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Community
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors.community
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                type="text"
                id="community"
                name="community"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="lot-number"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Lot Number
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors['lot-number']
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                type="text"
                id="lot-number"
                name="lot-number"
              />
            </div>
          </div>
          <fieldset>
            <legend className="block text-sm font-medium text-warm-gray-900">
              Preferred method of contact?
            </legend>
            <div className="mt-4 grid grid-cols-2 gap-y-4">
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="e-mail"
                  name="contact"
                  value="e-mail"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                />
                <label htmlFor="e-mail" className="ml-3">
                  <span className="block text-sm text-warm-gray-900">
                    E-mail
                  </span>
                </label>
              </div>
              <div className="flex items-center">
                <Field
                  type="radio"
                  id="phone"
                  name="contact"
                  value="phone"
                  className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
                />
                <label htmlFor="phone" className="ml-3">
                  <span className="block text-sm text-warm-gray-900">
                    Phone
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="nature-of-problem"
                className="block text-sm font-medium text-warm-gray-900"
              >
                Nature of Problem
              </label>
              <span
                id="nature-of-problem-description"
                className="text-sm text-warm-gray-500"
              >
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                className={classNames(
                  errors['nature-of-problem']
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                as="textarea"
                id="nature-of-problem"
                name="nature-of-problem"
                aria-describedby="nature-of-problem-description"
                rows={4}
              />
            </div>
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-end">
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

export default WarrantyForm;
