import React from "react";

const Home = () => {
    return (
        <div className="grid grid-cols-2 gap-4 h-screen pt-16" id="home">
            <div>
                <div className="flex flex-col justify-center h-full p-8">
                    <h1 className="text-4xl font-bold text-primary">Florian Beudaert</h1>
                    <p className="text-lg text-secondary">Développeur Web</p>
                </div>
            </div>
            <div>
                <img src="assets/svg/background.svg" alt="background" className="h-full w-full object-cover"/>
            </div>
        </div>
    );
}

export default Home