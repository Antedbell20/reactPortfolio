import React from 'react';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>Download Resume: <a href="https://github.com/antedbell20/reactPortfolio/raw/master/src/assets/andi-resume.pdf">Andi</a>
                                </h3>
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Computer Science Fundamentals</div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Data Structures</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Algorithm</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Design Patterns</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>

                                
                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Quality Assurance</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Jest & Enzyme (Unit Testing)</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Cypress (End-to-End Testing)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Project Management</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Agile Principles and Practices</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Project Schedule and Risk Management</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Project Scope and Quality Management</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Software Project Management</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resume;