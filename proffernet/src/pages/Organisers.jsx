import React from 'react';
import img1 from '../img/team-1.jpg';
import img2 from '../img/team-2.jpg';
import img3 from '../img/team-3.jpg';
import img4 from '../img/team-4.jpg';
import '../CSS/Organisers.css';
import { useNavigate } from 'react-router-dom';

const FileOrganiser = () => {
    const navigate = useNavigate();
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h6 className="section-title bg-white text-center text-primary px-3">Organisers</h6>
                   
                </div>
                <div className="row g-4">
                    {/* Instructor 1 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src={img1} alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>

                    {/* Instructor 2 */}
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src={img2} alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src={img3} alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                        <div className="team-item bg-light">
                            <div className="overflow-hidden">
                                <img className="img-fluid" src={img4} alt="" />
                            </div>
                            <div className="position-relative d-flex justify-content-center" style={{ marginTop: '-23px' }}>
                                <div className="bg-light d-flex justify-content-center pt-2 px-1">
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-sm-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div className="text-center p-4">
                                <h5 className="mb-0">Instructor Name</h5>
                                <small>Designation</small>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FileOrganiser;
