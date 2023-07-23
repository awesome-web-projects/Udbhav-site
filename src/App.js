import './App.css';
import iitklogo from './assets/iitklogo.png';
import bannerImage1 from './assets/IMG_1896.JPG';
import bannerImage2 from './assets/IMG_1898.JPG';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function App() {
    return (
        <div className="App">
            <nav class="bg-white border-gray-200 items-center justify-center  dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://spo.iitk.ac.in" class="flex items-center">
                        <LazyLoadImage
                            src={iitklogo}
                            effect="blur"
                            loading="lazy"
                            placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
                            className="h-8 mr-3"
                        />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            IIT Kanpur
                        </span>
                    </a>
                    <div class="flex md:order-2">
                        <button
                            type="button"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Register Now!
                        </button>
                        <button
                            data-collapse-toggle="navbar-cta"
                            type="button"
                            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-cta"
                            aria-expanded="false"
                        >
                            <span class="sr-only">Open main menu</span>
                            <svg
                                class="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                        id="navbar-cta"
                    >
                        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section id="home" class="text-white mb-10">
                <div class="bg-scroll">
                    <div class="mt-10 flex flex-col justify-center items-center">
                        <div class="flex justify-center items-center w-full">
                            <section class="mx-auto items-center text-center bg-white dark:bg-gray-900">
                                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                                    <h1 class="mb-24 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                                        Udbav 2023
                                    </h1>
                                    <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 mb-16">
                                        <div className="">
                                            {' '}
                                            <p class="mb-4 text-justify text-lg font-normal text-gray-500 lg:text-xl  text-gray-400">
                                                Indian Institute of Technology (IIT) Kanpur is a
                                                premier technical institute in India known for its
                                                excellent academic programs and talented student
                                                body. Students' Placement Office, IIT Kanpur,
                                                proposes the first{' '}
                                                <span class="bg-blue-700 tracking-tight text-white font-bold rounded-xl px-2 py-1">
                                                    Ph.D. Career Fest
                                                </span>
                                                to provide students with a unique opportunity to
                                                connect with potential employers and explore their
                                                career options.
                                            </p>
                                            <p class="text-blue-600 text-justify text-lg font-semibold lg:text-xl">
                                                The mission of the Career Festival at IIT Kanpur is
                                                to provide a platform for students to connect with
                                                leading companies and organisations and to explore
                                                career opportunities in various industries. Register
                                                with us to participate.
                                            </p>
                                        </div>
                                        <div className="hidden lg:block">
                                            <div className="inline-flex space-x-8">
                                                <LazyLoadImage
                                                    src={bannerImage1}
                                                    effect="blur"
                                                    loading="lazy"
                                                    placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
                                                    className="w-64 mt-6 rounded-2xl shadow-xl shadow-blue-300"
                                                />
                                                <LazyLoadImage
                                                    src={bannerImage2}
                                                    effect="blur"
                                                    loading="lazy"
                                                    placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
                                                    className="w-64 mb-6 rounded-2xl shadow-xl shadow-blue-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                                        <a
                                            href="#"
                                            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                                        >
                                            Company Registration
                                            <svg
                                                class="w-3.5 h-3.5 ml-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                        <a
                                            href="#"
                                            class="inline-flex justify-center items-center text-gray-900 py-3 px-5 text-base font-medium text-center rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 hover:text-gray-900 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                                        >
                                            Student Registration
                                            <svg
                                                class="w-3.5 h-3.5 ml-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div class="max-w-screen-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
                            <div class="hover:bg-blue-50 hover:shadow-blue-300 text-gray-800 border-2 border-gray-800 rounded-lg shadow-lg shadow-blue-400 p-4">
                                <span class="items-center mx-auto flex inline-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="blue"
                                        class="w-6 h-6 mr-2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
                                        />
                                    </svg>
                                    <h2 class="text-2xl text-blue-600 font-bold">
                                        Brand Awareness
                                    </h2>
                                </span>
                                <p>
                                    Companies can showcase their brand and increase visibility among
                                    potential candidates through their participation in the career
                                    fest.
                                </p>
                            </div>
                            <div class="hover:bg-blue-50 hover:shadow-blue-300 text-gray-800 border-2 border-gray-800 rounded-lg shadow-lg shadow-blue-400 p-4">
                                <span class="items-center mx-auto flex inline-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="blue"
                                        class="w-6 h-6 mr-2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                                        />
                                    </svg>

                                    <h2 class="text-2xl text-blue-600 font-bold">
                                        Access to Talent
                                    </h2>
                                </span>
                                <p>
                                    The career fest provides an opportunity for companies to connect
                                    with talented students from one of the top institutes of
                                    engineering and technology education, which can result in
                                    finding the right candidate for job or internship opportunities.
                                </p>
                            </div>
                            <div class="hover:bg-blue-50 hover:shadow-blue-300 text-gray-800 border-2 border-gray-800 rounded-lg shadow-lg shadow-blue-400 p-4">
                                <span class="items-center mx-auto flex inline-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="blue"
                                        class="w-6 h-6 mr-2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                        />
                                    </svg>

                                    <h2 class="text-2xl text-blue-600 font-bold">
                                        Building Relationships
                                    </h2>
                                </span>
                                <p>
                                    The career fest provides a platform for companies to build
                                    relationships with potential candidates and institutes, which
                                    can result in future collaborations and partnerships.
                                </p>
                            </div>
                            <div class="hover:bg-blue-50 hover:shadow-blue-300 text-gray-800 border-gray-800 border-2 rounded-lg shadow-lg shadow-blue-400 p-4">
                                <span class="items-center mx-auto flex inline-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="blue"
                                        class="w-6 h-6 mr-2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                                        />
                                    </svg>

                                    <h2 class="text-2xl text-blue-600 font-bold">
                                        Reputation Building
                                    </h2>
                                </span>
                                <p>
                                    Companies can enhance their reputation as attractive employers
                                    by participating in a career fest and showcasing their brand and
                                    culture to potential candidates.
                                </p>
                            </div>
                            <div class="hover:bg-green-50 hover:shadow-green-300 text-gray-800 border-2 border-gray-800 rounded-lg shadow-lg shadow-green-400 p-4">
                                <span class="items-center mx-auto flex inline-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="green"
                                        class="w-6 h-6 mr-2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                                        />
                                    </svg>

                                    <h2 class="text-2xl text-green-700 font-bold">
                                        Target Participants
                                    </h2>
                                </span>
                                <p>
                                    Ph.D. Students of IIT Kanpur along with companies and
                                    organisations interested in recruiting IIT Kanpur students
                                </p>
                            </div>
                            <div class="hover:bg-blue-50 hover:shadow-blue-300 text-gray-800 border-2 border-gray-800 rounded-lg shadow-lg shadow-blue-400 p-4">
                                <span class="items-center mx-auto flex inline-flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="blue"
                                        class="w-6 h-6 mr-2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                        />
                                    </svg>

                                    <h2 class="text-2xl text-blue-600 font-bold">
                                        Cost-Effective Recruitment
                                    </h2>
                                </span>
                                <p>
                                    Participating in a career fest can be more cost-effective than
                                    traditional recruitment methods, as companies can meet with
                                    multiple potential candidates in one location.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Event Details
                    </h1>
                    <p class="m-4 text-justify text-lg font-normal mb-12 text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        The vision of the Career Festival is to foster a dynamic and engaging
                        environment where students can network with professionals, gain insights
                        into different industries, and find meaningful and fulfilling career paths.
                        Know more about our policies below.
                    </p>
                    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a
                            href="https://spo.iitk.ac.in/docs/samvardhan/company_policies_2022-23.pdf"
                            target="_blank"
                            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg bg-blue-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="mr-2 -ml-1 w-5 h-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                />
                            </svg>
                            Policy for Company
                            <svg
                                class="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                        <a
                            href="https://spo.iitk.ac.in/docs/samvardhan/student_policies_2022-23.pdf"
                            target="_blank"
                            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="mr-2 -ml-1 w-5 h-5"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                />
                            </svg>
                            Policy for Students
                            <svg
                                class="ml-2 -mr-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
            <section class="max-w-screen-xl items-center justify-center mx-auto mb-8">
                <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
                    <section class="bg-white m-4 shadow-xl rounded-2xl border-2 border-yellow-600 shadow-yellow-200 dark:g-gray-900 antialiased">
                        <div class="max-w-screen-xl px-4 py-4 mx-auto lg:px-6 sm:py-16 lg:py-24">
                            <div class="max-w-3xl mx-auto text-center">
                                <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                                    Day-1 Schedule
                                </h2>

                                <div class="mt-4">
                                    <a
                                        href="#"
                                        title=""
                                        class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        See more details for schedule on 30.09.2023
                                        <svg
                                            aria-hidden="true"
                                            class="w-5 h-5 ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                                <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            08:00 - 09:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Opening remarks
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            09:00 - 10:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Event-1
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            10:00 - 11:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            L17
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Event-2
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            11:00 - 12:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Coffee Break
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            12:00 - 13:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Scaling your brand from €0 to multimillion euros
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            13:00 - 14:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Updates from the Open Source Multimedia community
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            14:00 - 15:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            L20
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Exploring the balance between customer acquisition
                                                and retention
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            15:00 - 16:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            L20
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Event-2
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            16:00 - 14:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Scaling your brand from €0 to multimillion euros
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="bg-white m-4 shadow-xl rounded-2xl border-2 border-blue-600 shadow-blue-200 dark:bg-gray-900 antialiased">
                        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                            <div class="max-w-3xl mx-auto text-center">
                                <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                                    Day-2 Schedule
                                </h2>

                                <div class="mt-4">
                                    <a
                                        href="#"
                                        title=""
                                        class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        See more details for schedule on 01.10.2023
                                        <svg
                                            aria-hidden="true"
                                            class="w-5 h-5 ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
                                <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            08:00 - 09:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Opening remarks
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            09:00 - 10:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Event-1
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            10:00 - 11:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Event-2
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            11:00 - 12:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Coffee Break
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            12:00 - 13:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Scaling your brand from €0 to multimillion euros
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            13:00 - 14:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Updates from the Open Source Multimedia community
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            14:00 - 15:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Exploring the balance between customer acquisition
                                                and retention
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            15:00 - 16:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Event-2
                                            </a>
                                        </h3>
                                    </div>

                                    <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                                        <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                                            16:00 - 14:00
                                        </p>
                                        <p class="w-16 text-lg font-bold text-blue-500 sm:text-right dark:text-gray-400 shrink-0">
                                            RM101
                                        </p>
                                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                            <a href="#" class="hover:underline">
                                                Scaling your brand from €0 to multimillion euros
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <footer class="bg-white dark:bg-gray-900">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0">
                            <a href="https://spo.iitk.ac.in" class="flex items-center">
                                <LazyLoadImage
                                    src={iitklogo}
                                    effect="blur"
                                    loading="lazy"
                                    placeholderSrc="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
                                    className="h-8 mr-3"
                                />
                                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                                    SPO IIT Kanpur
                                </span>
                            </a>
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Resources
                                </h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a
                                            href="https://spo.iitk.ac.in/administration"
                                            class="hover:underline"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://iitk.ac.in/" class="hover:underline">
                                            Location
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Follow us
                                </h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="https://linkedin.com" class="hover:underline ">
                                            LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://instagram.com" class="hover:underline">
                                            Instagram
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                                    Legal
                                </h2>
                                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">
                                            Terms &amp; Conditions
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                            © 2023{' '}
                            <a href="https://spo.iitk.ac.in/" class="hover:underline">
                                SPO IIT Kanpur - Udbhav 2023™
                            </a>
                            . All Rights Reserved.
                        </span>
                        <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                            <a
                                href="#"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 8 19"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span class="sr-only">Facebook page</span>
                            </a>
                            <a
                                href="#"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 21 16"
                                >
                                    <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                                </svg>
                                <span class="sr-only">Discord community</span>
                            </a>
                            <a
                                href="#"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 17"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span class="sr-only">Twitter page</span>
                            </a>
                            <a
                                href="#"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span class="sr-only">GitHub account</span>
                            </a>
                            <a
                                href="#"
                                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            >
                                <svg
                                    class="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                <span class="sr-only">Dribbble account</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
