import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Navbar from '../Header/Navbar';
import Coffeeblast2 from '../../assets/image/Coffee_blast 2.png';
import coffeeblast from '../../assets/image/Coffee_blast 1.png';
export default function SignUp() {
    const formik = useFormik({
        initialValues: {
            email: '',            
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Please enter a valid email address')
                .required('This field is required'),
            password: Yup.string()
                .min(6, 'Your password must be more than 6 characters long')
                .required('this field is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'The entered phrase does not match the password')
                .required('this field is required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <Navbar />

            <div className='flex items-start justify-center min-h-screen '>
                <div className="w-full max-w-md rounded-lg p-4 m-4 shadow-lg  shadow-[#603809]">
                    <div className="flex mb-6 justify-center text-[#603809]  ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-32">
                            <path d="M5.25 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM2.25 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM18.75 7.5a.75.75 0 0 0-1.5 0v2.25H15a.75.75 0 0 0 0 1.5h2.25v2.25a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-2.25V7.5Z" />
                        </svg>
                    </div>
                    <form onSubmit={formik.handleSubmit} className="space-y-6">
                        <div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className={`w-full p-2 text-md text-stone-600 outline-none my-2 shadow-md rounded-full ${formik.touched.email && formik.errors.email ? 'shadow-[#603809]' : 'shadow-stone-400'}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-[#603809] text-sm mt-1">{formik.errors.email}</p>
                            )}
                        </div>

                        <div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Your Password"
                                className={`w-full p-2 text-md  my-2 shadow-md outline-none rounded-full ${formik.touched.password && formik.errors.password ? 'shadow-[#603809]' : 'shadow-stone-400'}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-[#603809] text-sm mt-1">{formik.errors.password}</p>
                            )}
                        </div>
                        <div>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirm Password"
                                className={`w-full p-2 text-md  my-2 shadow-md  outline-none rounded-full ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'shadow-[#603809]' : 'shadow-stone-400'}`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <p className="text-[#603809]  text-sm mt-1">{formik.errors.confirmPassword}</p>
                            )}
                        </div>
                        <div className=' text-center'>

                            <button
                                type="submit"
                                className="w-40 rounded-full bg-[#F9C06A] py-2 text-lg my-6 text-[#603809] font-semibold hover:bg-[#f4b26b]"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
                <div className="hidden lg:block absolute top-0 right-0 w-64 xl:w-80">
                    <img src={Coffeeblast2} alt="Decoration Top Right" className="w-full h-auto" />
                </div>

                <div className="hidden lg:block absolute bottom-0 left-0 w-64 xl:w-80">
                    <img src={coffeeblast} alt="Decoration Bottom Left" className="w-full h-auto" />
                </div>
            </div>
        </>
    );
}