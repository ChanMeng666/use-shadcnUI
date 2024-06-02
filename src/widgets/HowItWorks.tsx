function HowItWorks() {
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold">How it works</h2>
            <div className="flex flex-col md:flex-row mt-10">
                <div className="md:w-1/3 p-4">
                    <h3 className="text-2xl font-bold">Step 1</h3>
                    <p className="mt-4">Sign up for a free account</p>
                </div>
                <div className="md:w-1/3 p-4">
                    <h3 className="text-2xl font-bold">Step 2</h3>
                    <p className="mt-4">Create your first project</p>
                </div>
                <div className="md:w-1/3 p-4">
                    <h3 className="text-2xl font-bold">Step 3</h3>
                    <p className="mt-4">Invite your team and start collaborating</p>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;