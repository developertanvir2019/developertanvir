import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bf4cjql', 'template_fooe34r', form.current, 'rrQNCHh0h-dCjQs6_')
            .then((result) => {
                alert('success');
            }, (error) => {
                alert(error.text);
            });
    };
    return (
        <div>
            <h3 className="text-4xl font-semibold pt-12 text-info"> Sent mail from hare</h3>
            <div className="hero min-h-screen bg-base-200 py-12">
                <div className="card w-[900px] shadow-2xl bg-base-100">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input name='client-name' type="text" placeholder="Enter Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='client-email' type="text" placeholder="Enter Your Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='message' className="textarea textarea-bordered h-52" placeholder="Enter Your Message"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" value="Send" className="btn btn-primary">Send Email</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;