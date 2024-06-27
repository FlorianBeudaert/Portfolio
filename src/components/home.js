import React from "react";

const Home = () => {
    const today = new Date();
    const birth = new Date(2004, 2, 29);
    let age = today.getFullYear() - birth.getFullYear();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 h-screen pt-16" id="home">
            <div style={{
                backgroundImage: 'url(assets/svg/background.svg)',
            }} className="bg-cover bg-center flex items-center justify-center">
                <div className="flex flex-col justify-center h-full p-8">
                    <h1 className="text-4xl font-bold text-primary">Florian Beudaert</h1>
                    <p className="text-lg text-secondary">Développeur Web</p>
                </div>
            </div>
            <div className="flex items-center justify-center text-xl">
                <div className="card bg-base-200 p-8 border border-base-300 gap-2">
                    <p className="text-secondary text-left"><span className="font-bold">Nom Prénom :</span> Florian Beudaert</p>
                    <p className="text-secondary text-left"><span className="font-bold">Age :</span> {age} ans</p>
                    <p className="text-secondary text-left"><span className="font-bold">Adresse :</span> 195 Avenue des fusillées, Henin-Beaumont</p>
                    <p className="text-secondary text-left"><span className="font-bold">Téléphone :</span> 07 93 74 03 54</p>
                    <p className="text-secondary text-left"><span className="font-bold">Email :</span> <a href="mailto:beudaertflorian2@gmail.com" className="text-primary hover:underline">beudaertflorian2@gmail.com</a></p>
                    <p className="text-secondary text-left"><span className="font-bold">Permis B :</span> En cours</p>
                    <button className="btn btn-primary mt-4">Télécharger CV</button>
                </div>
            </div>
        </div>
    );
}

export default Home