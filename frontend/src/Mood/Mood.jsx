// import React from 'react'
// import logo from "../images/logo.jpg"
// import logo1 from "../images/logo1.jpg"
// import logo2 from "../images/logo2.jpg"
// import logo3 from "../images/logo3.jpg"
// import logo4 from "../images/logo4.jpg"

// const Mood = () => {
//     return (
//         <div>
//             <div style={{ marginTop: "-10pc" }}>
//                 {/* <div className="text-center p-10">
//                     <h1 className="font-bold text-4xl mb-4">Responsive Product card grid</h1>
//                 </div> */}
//                 <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
//                     <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                         <a href="#">
//                             <img src={logo} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
//                         </a>
//                     </div>
//                     <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                         <a href="#">
//                             <img src={logo1} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
//                         </a>
//                     </div>
//                     <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                         <a href="#">
//                             <img src={logo2} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
//                         </a>
//                     </div>
//                     <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                         <a href="#">
//                             <img src={logo3} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
//                         </a>
//                     </div>
//                     <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                         <a href="#">
//                             <img src={logo4} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
//                         </a>
//                     </div>
//                     <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
//                         <a href="#">
//                             <img src={logo} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
//                         </a>
//                     </div>
//                 </section>
//             </div>
//         </div>
//     )
// }

// export default Mood  

// import React from 'react';
// import logo1 from "../images/logo1.jpg";
// import logo2 from "../images/logo2.jpg";
// import logo3 from "../images/logo3.jpg";
// import logo4 from "../images/logo4.jpg";

// const Mood = () => {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-6">
//                     <h2 className="text-center">Different Modes</h2>
//                 </div>
//                 <div className="col-6 flex justify-center">
//                     <div className="grid grid-cols-2 gap-4">
//                         <img src={logo1} alt="Logo 1" className="img-fluid" />
//                         <img src={logo2} alt="Logo 2" className="img-fluid" />
//                         <img src={logo3} alt="Logo 3" className="img-fluid" />
//                         <img src={logo4} alt="Logo 4" className="img-fluid" />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Mood;


import React from 'react';
import logo1 from "../images/logo1.jpg";
import Angry from "../images/Angry.jpg";
import logo3 from "../images/logo3.jpg";
import logo4 from "../images/logo4.jpg";
import "./Mode.css"

const Mood = () => {
    const ImageBox = ({ src, alt, text }) => {
        return (
            <div className="image-box">
                <div className="image-container">
                    <img className="image" src={src} alt={alt} />
                    <div className="overlay">{text}</div>
                    <div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="mood-container">
            <div className="mood-title">
                <h1 id="h1">DIFFERENT MOODS</h1>
                <p>The AI DeepFace captures a myriad of emotions through facial expressions: melancholy shadows behind downturned lips, curiosity flickering in widened eyes, and a hint of apprehension in furrowed brows. Each pixel holds a story—joy, sorrow, anticipation—forming a mosaic of human sentiment, unveiling the complexity of the human experience</p>
            </div>
            <div className="images">
                <ImageBox src={logo1} alt="Image 1" text="Confused" />
                <ImageBox src={Angry} alt="Image 2" text="Angry" />
                <ImageBox src={logo3} alt="Image 3" text="Happy" />
                <ImageBox src={logo4} alt="Image 4" text="surprised" />
            </div>
        </div>
    );
};

export default Mood;

