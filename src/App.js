import './App.css';

function App() {
    return (
        <div className="App">
            <section id="home" class="text-white mb-10">
                <div class="bg-scroll">
                    <div class="mt-10 flex flex-col justify-center items-center">
                        <div class="flex justify-center items-center w-full">
                            <section class="mx-auto items-center text-center bg-white dark:bg-gray-900">
                                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                                    <h1 class="mb-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">
                                        Udbav 2023
                                    </h1>
                                    <p class="m-4 text-justify text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 text-gray-400">
                                        Indian Institute of Technology (IIT) Kanpur is a premier
                                        technical institute in India known for its excellent
                                        academic programs and talented student body. Students'
                                        Placement Office, IIT Kanpur, proposes the first
                                        <span class="bg-blue-700 tracking-tight text-white font-bold rounded-xl px-2 py-1">
                                            Ph.D. Career Fest
                                        </span>
                                        to provide students with a unique opportunity to connect
                                        with potential employers and explore their career options.
                                    </p>
                                    <p class="text-blue-600 text-justify m-4 mb-12 text-lg font-semibold lg:text-xl sm:px-16 lg:px-48">
                                        The mission of the Career Festival at IIT Kanpur is to
                                        provide a platform for students to connect with leading
                                        companies and organisations and to explore career
                                        opportunities in various industries. Register with us to
                                        participate.
                                    </p>
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
        </div>
    );
}

export default App;
