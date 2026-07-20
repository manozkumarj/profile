const Services = () => {
    return (
        <section className="flex-1 px-6 py-12 pt-4 lg:px-12" id="services">
            <div className="flex items-center justify-center max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    Services
                </h2>
            </div>

            {/* Web Development */}
            <div className="w-full px-6 py-6 lg:px-12 relative z-50">
                <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                    Web Development
                </h5>
                <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-600 dark:text-gray-400">
                    I specialize in building modern, scalable, and user-friendly web applications that deliver exceptional performance and seamless user experiences.
                    With over 9 years of expertise, I leverage cutting-edge technologies to transform ideas into interactive digital solutions.
                </div>
                <p className="max-w-7xl mx-auto text-gray-600 dark:text-gray-400 mt-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">What I Offer:</h4>
                    <ul className="list-disc list-inside mt-2">
                        <li><span className="font-semibold">React & Next.js Development</span> – Crafting fast, dynamic, and SEO-optimized web applications with reusable components and server-side rendering for maximum performance.</li>
                        <li><span className="font-semibold">Responsive Design</span> – Ensuring your website looks perfect and functions smoothly across all devices — from desktops to tablets to smartphones.</li>
                        <li><span className="font-semibold">UI/UX with Bootstrap & Tailwind CSS</span> – Creating sleek, professional, and highly customizable designs with modern styling frameworks that speed up development without sacrificing creativity.</li>
                        <li><span className="font-semibold">Authentication & Security</span> – Implementing secure login systems with JWT, OAuth, Firebase Auth, and role-based access control, ensuring your application and user data stay safe.</li>
                        <li><span className="font-semibold">Real-Time Applications with WebSockets</span> – Developing real-time chat, notifications, and live updates using WebSockets and libraries like Socket.IO, enhancing user engagement with instant interactivity.</li>
                        <li><span className="font-semibold">Performance & Scalability</span> – Writing clean, maintainable code that keeps applications lightweight, efficient, and ready to grow with your business.</li>
                        <li><span className="font-semibold">Cross-Browser Compatibility</span> – Guaranteeing consistent experiences across Chrome, Firefox, Safari, and Edge.</li>
                    </ul>
                </p>
            </div>

            {/* Mobile Development */}
            <div className="w-full px-6 pt-2 pb-3 lg:px-12 relative z-50">
                <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                    Mobile Application Development
                </h5>
                <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-600 dark:text-gray-400">
                    I design and develop cross-platform mobile applications that deliver a seamless, native-like experience on both iOS and Android.
                    With React Native at the core, I build apps that are fast, scalable, and tailored to your business needs — all while reducing development time and cost.
                </div>
                <p className="max-w-7xl mx-auto text-gray-600 dark:text-gray-400 mt-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">What I Offer:</h4>
                    <ul className="list-disc list-inside mt-2">
                        <li><span className="font-semibold">React Native Development</span> – Building high-performance, cross-platform mobile apps with a single codebase, ensuring faster delivery and consistent user experiences across devices.</li>
                        <li><span className="font-semibold">Firebase Integration</span> – Leveraging Firebase for real-time databases, analytics, cloud storage, and crash reporting to create robust and scalable mobile solutions.</li>
                        <li><span className="font-semibold">Authentication & Security</span> – Implementing secure login systems with Firebase Auth, JWT, and OAuth for user management, role-based access, and data protection.</li>
                        <li><span className="font-semibold">Real-Time Chat & Messaging</span> – Developing chat and collaboration features using WebSockets / Firebase Realtime Database, enabling instant communication and live updates within your app.</li>
                        <li><span className="font-semibold">Push Notifications</span> – Keeping users engaged with personalized push notifications powered by Firebase Cloud Messaging (FCM), including scheduling, targeting, and custom alerts.</li>
                        {/* <li><span className="font-semibold">App Store & Play Store Deployment</span> – End-to-end support in preparing, testing, and publishing your app to the Apple App Store and Google Play Store.</li> */}
                    </ul>
                </p>
            </div>

            {/* Mobile Development */}
            <div className="w-full px-6 pt-5 pb-3 lg:px-12 relative z-50">
                <h5 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                    Backend Application Development
                </h5>
                <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-600 dark:text-gray-400">
                    I specialize in building scalable, secure, and high-performance backend systems that power modern applications.
                    From designing robust APIs to managing data flow and real-time communication, I ensure your application runs smoothly and reliably.
                </div>
                <p className="max-w-7xl mx-auto text-gray-600 dark:text-gray-400 mt-3">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">What I Offer:</h4>
                    <ul className="list-disc list-inside mt-2">
                        <li><span className="font-semibold">Node.js & FastAPI Development</span> – Building fast, efficient, and event-driven backend services. With Node.js, I deliver high-traffic, real-time systems, while FastAPI enables lightning-fast, Python-powered APIs with excellent performance and scalability.</li>
                        <li><span className="font-semibold">Database Design & Management</span> – Expertise in both SQL (MySQL) and NoSQL (MongoDB, Firebase) databases, ensuring optimal performance, scalability, and data integrity.</li>
                        <li><span className="font-semibold">Authentication & Security</span> – Implementing secure user authentication with JWT, OAuth, Firebase Auth, and role-based access control, protecting both users and data.</li>
                        <li><span className="font-semibold">Real-Time Communication</span> – Enabling live updates, chat, notifications, and collaboration tools using WebSockets, Socket.IO, and Redis Pub/Sub for maximum reliability.</li>
                        <li><span className="font-semibold">Event Streaming with Kafka</span> – Designing event-driven architectures with Apache Kafka to manage large-scale data pipelines and real-time processing.</li>
                        <li><span className="font-semibold">Caching & Performance Optimization</span> – Using Redis for caching, session management, and real-time data handling, significantly improving application speed and scalability.</li>
                        <li><span className="font-semibold">CI/CD Automation</span> – Streamlining development workflows with GitHub Actions, automating testing, deployments, and continuous integration for faster delivery.</li>
                        <li><span className="font-semibold">API Development</span> – Designing and integrating RESTful and GraphQL APIs, enabling seamless communication between services and clients.</li>
                    </ul>
                </p>
            </div>
        </section>
    );
};

export default Services;
