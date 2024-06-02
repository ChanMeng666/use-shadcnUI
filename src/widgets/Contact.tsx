function Contact() {
    return (
        <div className='bg-gray-100 p-4'>
            <div className='container mx-auto'>
                <h2 className='text-2xl font-bold text-center'>Contact Us</h2>
                <form className='mt-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <input type='text' placeholder='Name' className='p-2 border border-gray-300 rounded' />
                        <input type='email' placeholder='Email' className='p-2 border border-gray-300 rounded' />
                    </div>
                    <textarea placeholder='Message' className='p-2 border border-gray-300 rounded w-full mt-4'></textarea>
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded w-full mt-4'>Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;