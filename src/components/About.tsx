const About = () => {
    return (
        <section className="flex-1 px-6 py-12 pt-4 lg:px-12" id="about">
            <div className="flex items-center justify-center max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                    About Me
                </h2>
            </div>
            <div className="w-full px-6 py-6 lg:px-12 relative z-50">
                <p className="max-w-7xl mx-auto flex items-center justify-between text-gray-600 dark:text-gray-400">
                    I'm a self-taught Web and Mobile App Developer with experience in designing new features from ideation to production,
                    implementation of wireframes and design flows into high performance software applications.
                    I take into consideration the user experience while writing reusable and efficient code.
                    I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. Currently, I'm focused on the Generative AI space.
                </p>
            </div>
        </section>
    );
};

export default About;
