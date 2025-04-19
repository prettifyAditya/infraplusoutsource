import ThreeDright from "./ThreeDright";
import '../styles/components/components.css'
import EnquireForm from "./EnquireForm";

export default function FormComponent() {
    return(
        <div className="formComWrapper">
            <div className="container sec-padd-all flex">
                <div className="colA">
                    <ThreeDright className="form-3d" />       
                </div>
                <div className="colB">
                  <div className="title">
                    <h2>Your Engineering Design Partner</h2>
                    <p>Engineering Design & CAD Services</p>
                  </div>
                  <EnquireForm className="full text-center" />
                </div>
            </div>
        </div>
    )
}