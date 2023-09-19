/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
    return (
        <div className='bg-yellow-600 h-90 px-28'>
            <h1 className='text-4xl flex justify-center pt-8'>About Us</h1>
            <div className='text-2xl font-bold text-justify leading-7'>
                <p className='mt-4'>Welcome to our culinary journey! At AYO MASAK, we're passionate about making cooking accessible, enjoyable, and budget-friendly for everyone. Our team is a blend of food enthusiasts, experienced chefs, and creative minds who are dedicated to helping you explore the world of delicious dishes.</p>
                <p className='mt-4'>Our mission is simple:
                    <ul className='mt-2'>
                        <li>to provide you with culinary inspiration, guidance, and resources, regardless of your cooking experience or budget constraints. We believe that anyone can cook, and our focus is on empowering you to create mouthwatering meals from the ingredients you have on hand.</li>
                    </ul>
                </p>
                <p>What We Offer:
                    <ul className='mt-2'>
                        <li className='mb-2'>Recipe Ideas: Discover a wide range of recipes that are easy to follow, delicious, and suitable for various dietary preferences and restrictions.</li>
                        <li className='mb-2'>Cooking Tips: Whether you're a beginner or an experienced cook, our cooking tips and techniques will enhance your skills and confidence in the kitchen.</li>
                        <li className='mb-2'>Budget-Friendly Solutions: We understand the importance of cooking within a budget. Our recipes and ideas are tailored to help you make the most of affordable ingredients without compromising on taste.</li>
                        <li className='mb-2'>Contact Us: Have questions, suggestions, or feedback? Reach out to us through our "Contact Us" page. We value your input and are here to assist you on your culinary journey.</li>
                    </ul>    
                </p>
            </div>
        </div>
    )
}

export default AboutUs