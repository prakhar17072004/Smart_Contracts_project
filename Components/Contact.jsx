import React from "react";
import toast from "react-hot-toast"
import{useForm } from "@formspree/react"

const Contact = () => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.err(msg, { duration: 2000 });
  const[state,handleSubmit]=useForm("mzbnzpqr");

  if(state.succeeded){
    window.location.reload();
  }
  return (
    <section  id="contact"className="ico-contact pos-rel">
     <div className="container"
     
     >
      <div className="ico-contact__wrap">
        <h2 className="title">
          Contact with coindex
        </h2>
     
      <form onSubmit={handleSubmit}>
      <div className="row ">
        <div className="col-lg-12">
        <input type="text" id="name" placeholder="ether name"/>
        </div>
        <div className="col-lg-12 mb-4">
        <input type="email" id="email" placeholder="ether email"/>
        </div>
        <div className="col-lg-12 ">
        <textarea
        type="message" id="messege" name="message" placeholder="ether message">

        </textarea>
        </div>

        <div className="ico-contact__btn text-center mt-10">
        <button className="thm-btn"
        type="submit" disabled={state.submitting}>
           send messege
          </button>        </div>
      </div>
      </form>
      <div className="ico-contact__shape-img">
        <div className="shape shape--1">
         <div data-parallax ='{"y":-50}'>
         <img src ="assets/img/shape/c_shape1.png"/>
         </div>
        </div>
        <div className="shape shape--2">
         <div data-parallax ='{"y":60}'>
         <img src ="assets/img/shape/c_shape2.png"/>
         </div>
        </div>
      </div>
     </div>
     </div>
     <div className="ico-contact__shape">
     <div className="shape shape--1">
         
         <img src ="assets/img/shape/f_shape1.png"/>
        
        </div>
        <div className="shape shape--1">
         
         <img src ="assets/img/shape/f_shape1.png"/>
        
        </div>
        <div className="shape shape--2">
         
         <img src ="assets/img/shape/f_shape2.png"/>
        
        </div>
        <div className="shape shape--3">
         
         <img src ="assets/img/shape/f_shape3.png"/>
        
        </div>
     </div>
  </section>
  )
  
};

export default Contact;
