function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 mt-20">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-lg font-bold">Company</h3>
                        <ul className="mt-4">
                            <li className="mt-2">About</li>
                            <li className="mt-2">Careers</li>
                            <li className="mt-2">Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Products</h3>
                        <ul className="mt-4">
                            <li className="mt-2">Pricing</li>
                            <li className="mt-2">Documentation</li>
                            <li className="mt-2">Integrations</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Support</h3>
                        <ul className="mt-4">
                            <li className="mt-2">FAQs</li>
                            <li className="mt-2">Contact Support</li>
                            <li className="mt-2">System Status</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold">Social</h3>
                        <ul className="mt-4">
                            <li className="mt-2">Twitter</li>
                            <li className="mt-2">LinkedIn</li>
                            <li className="mt-2">Facebook</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; 2021 MyCompany. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
