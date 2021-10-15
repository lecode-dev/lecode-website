/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Dialog, Transition } from "@headlessui/react";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";
import { axiosApi } from "../../utils/axiosApi";

export default function ContactModal({ onClose, open }) {
  const sendButtonRef = useRef(null);
  const onSubmit = async (values, ...rest) => {
    try {
      const response = await axiosApi.post(`/contact`, values);
      const { message } = response.data;
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      toast.error("Invalid Email!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const sendMailValidation = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string()
      .min(2, "Too Short!")
      .max(100, "Too Long!")
      .required("This field is Required"),
    password: Yup.string(),
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme={"dark"}
        pauseOnHover
      />
      <Formik
        initialValues={{
          email: "",
          message: "",
          password: "",
        }}
        validationSchema={sendMailValidation}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              static
              className="fixed z-10 inset-0 overflow-y-auto"
              initialFocus={sendButtonRef}
              open={open}
              onClose={onClose}
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Form className="inline-block align-bottom bg-gray-dark rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                    <div>
                      <div className="mt-1 text-center sm:mt-5">
                        <div className="mt-">
                          <label
                            htmlFor="email"
                            className="block text-left text-sm font-medium text-green-500"
                          >
                            Email
                          </label>
                          <div className="mt-1">
                            <Field
                              type="email"
                              name="email"
                              id="email"
                              className=" shadow-sm p-2 focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-dark"
                              placeholder="you@example.com"
                            />
                          </div>
                          {errors.email && touched.email && (
                            <span className="text-gray-400 block mt-1 text-left">
                              {errors.email}
                            </span>
                          )}
                        </div>
                        <div className=" sm:border-gray-200 sm:pt-5">
                          <label
                            htmlFor="message"
                            className="block text-sm text-left font-medium mb-1 text-green-500 sm:mt-px sm:pt-2"
                          >
                            Message
                          </label>
                          <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <Field
                              id="message"
                              component="textarea"
                              name="message"
                              rows={4}
                              className="text-gray-dark p-2 max-w-lg shadow-sm block w-full focus:ring-green-500 focus:border-green-500 sm:text-sm border rounded-md"
                            />
                            {errors.message && touched.message && (
                              <span className="text-gray-400 block mt-1 text-left">
                                {errors.message}
                              </span>
                            )}
                          </div>
                          {/* Ohnohoney */}
                          <div className="opacity-0 absolute -top-full -left-full w-0 h-0">
                            <Field
                              id="password"
                              name="password"
                              type="password"
                            />
                            {errors.message && touched.message && (
                              <span className="text-gray-400 block mt-1 text-left">
                                {errors.message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      <button
                        type="button"
                        type="submit"
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:col-start-2 sm:text-sm"
                        ref={sendButtonRef}
                      >
                        Send
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:col-start-1 sm:text-sm"
                        onClick={onClose}
                      >
                        Cancel
                      </button>
                    </div>
                  </Form>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        )}
      </Formik>
    </>
  );
}
