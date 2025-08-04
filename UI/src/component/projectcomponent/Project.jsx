import "./Project.css";
function Project(){
    return(
        <>
            <div className="main-heading-div">
                <h4> MERN Stack Projects</h4>
           </div>
        <div className="main-project-container">
            
            <div className="main-shippingwar-myfirst-project">
                <img src="/assets/images/Shippingwar.jpg" alt="shippingwar" />
                <h4>Shippingwar</h4>
                <div className="main-button-div">
                    <button className="github-button"> <a target="_blank" href="https://github.com/haricharanahirwar/the-shipping-war">Github</a></button>
                    <button className="github-button"> <a target="_blank" href="https://the-shipping-war-oiw4.vercel.app/">Live</a></button>
                </div>
            </div>
            <div className="main-electrohub-mysecond-project">
                <img src="assets\images\screen.jpg" alt="electrohub" />
                <h4>electroHub</h4>
                <div className="main-button-div">
                    <button className="github-button"> <a target="_blank" href="https://github.com/haricharanahirwar/electrohub">Github</a></button>
                    <button className="github-button"> <a target="_blank" href="https://electrohub-nu.vercel.app/">Live</a></button>
                </div>
            </div>

            
        </div>
        </>
    )
}
export default Project;
