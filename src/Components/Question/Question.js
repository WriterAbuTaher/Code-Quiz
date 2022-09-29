import React from 'react';

const Question = () => {
    return (
        <div>
            <section className="container my-5 bg-white rounded">

                <h1 className="text-center text-success p-4">React Questions</h1>
                <div className="accordion px-2 py-3" id="accordionExample">

                    {/* <!-- accordion 1 --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How React Works ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. It designs simple views for each state in your application, and React will efficiently update and render just the right component when your data changes.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- accordion 2 --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Props vs State
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <b>Props</b>
                                <li>Props are read-only</li>
                                <li>Props can not be modified</li>
                                <b>State</b>
                                <li>State changes can be asynchronous</li>
                                <li>State can be modified using this.setState</li>
                            </div>
                        </div>
                    </div>

                    {/* <!-- accordion 3 --> */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How many uses of useEffect without API ?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <li>state change: validating input field</li>
                                <li>state change: live filtering</li>
                                <li>state change: trigger animation on new array value</li>
                                <li>props change: update paragraph list on fetched API data update</li>
                                <li>props change: updating fetched API data to get BTC updated price</li>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Question;