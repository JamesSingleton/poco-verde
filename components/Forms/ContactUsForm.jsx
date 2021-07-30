import { Formik, Field, Form, ErrorMessage } from 'formik';
import classNames from 'classnames';
import { ExclamationCircleIcon } from '@heroicons/react/solid';
import { ContactUsSchema } from '@/lib/Schemas';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

const ContactUsForm = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={ContactUsSchema}>
      {({ errors, touched }) => (
        <Form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-warm-gray-900"
            >
              First name
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
                aria-describedby="firstName-error"
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
              Last name
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                type="text"
                name="lastName"
                id="lastName"
                autoComplete="family-name"
                className={classNames(
                  errors.lastName
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                aria-invalid={errors.lastName}
                aria-describedby="lastName-error"
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
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                className={classNames(
                  errors.email
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                aria-invalid={errors.email}
                aria-describedby="email-error"
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
          <div>
            <div className="flex justify-between">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-warm-gray-900"
              >
                Phone
              </label>
              <span id="phone-optional" className="text-sm text-warm-gray-500">
                Optional
              </span>
            </div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                type="tel"
                id="phone"
                name="phone"
                autoComplete="tel"
                placeholder="(555) 987-6543"
                className={classNames(
                  errors.phone
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                aria-describedby="phone-optional"
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
          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-warm-gray-900"
            >
              Subject
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                type="text"
                name="subject"
                id="subject"
                className={classNames(
                  errors.subject
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
              />
              {errors.subject && touched.subject ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.subject && touched.subject ? (
              <p className="mt-2 text-sm text-red-600" id="subject-error">
                {errors.subject}
              </p>
            ) : null}
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-warm-gray-900"
              >
                Message
              </label>
              <span id="message-max" className="text-sm text-warm-gray-500">
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1 relative rounded-md shadow-sm">
              <Field
                as="textarea"
                id="message"
                name="message"
                rows={4}
                className={classNames(
                  errors.message
                    ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300',
                  'sm:text-sm block w-full pr-10 rounded-md'
                )}
                aria-describedby="message-max"
              />
              {errors.message && touched.message ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ExclamationCircleIcon
                    className="h-5 w-5 text-red-500"
                    aria-hidden="true"
                  />
                </div>
              ) : null}
            </div>
            {errors.message && touched.message ? (
              <p className="mt-2 text-sm text-red-600" id="message-error">
                {errors.message}
              </p>
            ) : null}
          </div>
          <div className="sm:col-span-2 sm:flex sm:justify-end">
            <button
              type="submit"
              className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 sm:w-auto"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
