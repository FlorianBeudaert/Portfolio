import React from "react";

const Skill = () => {
    return (
        <div className="pt-16 min-h-screen flex justify-center" id="skill">
            <div className="flex flex-col gap-4 w-full max-w-2xl">
                <h1 className="text-4xl font-bold text-primary text-center">Compétences</h1>

                <div className="collapse collapse-arrow bg-base-200 w-full">
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl font-medium">Outils Front-End</div>
                    <div className="collapse-content">

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">HTML</h1>
                            <div className="flex items-center gap-4">
                                <div className="w-12">
                                    <img src="/assets/images/html.png" alt="html"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">CSS</h1>
                            <div className="flex items-center gap-4">
                                <div className="w-12">
                                    <img src="/assets/images/css.png" alt="css"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">JavaScript</h1>
                            <div className="flex items-center gap-4">
                                <div className="w-12">
                                    <img src="/assets/images/js.png" alt="javascript"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">React</h1>
                            <div className="flex items-center gap-4">
                                <div className="w-12">
                                    <img src="/assets/images/react.png" alt="react"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 w-full">
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl font-medium">Outils Back-End</div>
                    <div className="collapse-content">

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">PHP</h1>
                            <div className="flex items-center gap-4">
                                <div className="w-12">
                                    <img src="/assets/images/php.png" alt="php"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">Python</h1>
                            <div className="flex items-center gap-4">
                            <div className="w-12">
                                    <img src="/assets/images/python.png" alt="python"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">Node.js</h1>
                            <div className="flex items-center gap-4">
                            <div className="w-12">
                                    <img src="/assets/images/nodejs.png" alt="nodejs"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">Ruby</h1>
                            <div className="flex items-center gap-4">
                            <div className="w-12">
                                    <img src="/assets/images/ruby.png" alt="ruby"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">MySQL</h1>
                            <div className="flex items-center gap-4">
                            <div className="w-12">
                                    <img src="/assets/images/mysql.png" alt="mysql"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="collapse collapse-arrow bg-base-200 w-full">
                    <input type="radio" name="my-accordion-2"/>
                    <div className="collapse-title text-xl font-medium">Autres Outils</div>
                    <div className="collapse-content">

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">Git</h1>
                            <div className="flex items-center gap-4">
                                <div className="w-12">
                                    <img src="/assets/images/git.png" alt="git"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between items-center gap-4 h-20">
                            <h1 className="text-xl font-bold text-primary">Docker</h1>
                            <div className="flex items-center gap-4">
                                <div className="w-12">
                                    <img src="/assets/images/docker.png" alt="docker"/>
                                </div>
                                <div className="flex gap-1 my-auto">
                                    <div className="w-12 h-6 bg-primary transform skew-x-12"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                    <div
                                        className="w-12 h-6 border-2 border-base-300 transform skew-x-12 bg-base-300"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skill;