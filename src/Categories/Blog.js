import React from 'react';

const Blog = () => {
    return (
        
        <div className='w-1/2 ms-auto text-white'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-emerald-400  mb-4 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    what is cors?
                </div>
                <div className="collapse-content">
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-based security mechanism controlled and enforced by the client (web browser). It allows a service (API) to indicate any origin other than its own from which the client can request resources. It has been designed in response to the same-origin policy (SOP) that restricts how a website (HTML document or JS script) loaded by one origin can interact with a resource from another origin. CORS is used to explicitly allow some cross-origin requests while rejecting others.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-emerald-400 mb-4 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more..</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-emerald-400  mb-4 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-arrow border border-black bg-emerald-400  mb-4 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</p>
                </div>
            </div>
        </div>

        
    );
};

export default Blog; 