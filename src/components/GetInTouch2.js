import './GetInTouch2.css'

function GetInTouch2() {
    return(
        <div className="col-lg-6"> 
               <div className="contact-details">
                              
                              <div className="ci-box d-flex">
                                  <div className="icon1">
                                     <i className="fa fa-map-marker"></i>
                                  </div>
                                  <div className="detail align-self-center">
                                      <h4>Office Address</h4>
                                      <p style={{marginleft: "12px"}}>Lorem Ipsum is simply dummy text of the printing ok okay </p>
                                  </div>
                              </div>
                              <div className="ci-box d-flex">
                                  <div className="icon1">
                                     <i className="fa fa-phone"></i>
                                  </div>
                                  <div className="detail ">
                                      <h4>Phone Number</h4>
                                      <p>
                                          <a style={{color: "#fc9808", marginleft: "12px"}}  href="#">7852895075</a>
                                      </p>
                                  </div>
                              </div>
                              <div className="ci-box d-flex">
                                  <div className="icon1">
                                   <i className="fa fa-envelope"></i>
                                  </div>
                                  <div className="detail ">
                                      <h4>Email Address</h4>
                                      <p>
                                          <a style={{color: "#fc9808", marginleft: "12px"}} href="#">mail-dave@blackthorn-usa.com</a>
                                      </p>
                                  </div>
                              </div>
                            
                          </div>
                          </div>
    );

}

export default GetInTouch2;