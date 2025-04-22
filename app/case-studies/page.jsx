"use client"
import { useState } from "react";
import FormComponent from "../../components/FormComponent"
import "../../styles/case/case.css"
import Select from "react-select";
import Image from "next/image";
import ButtonMain from "../../components/ButtonMain";

const customStyles = {
    control: (base, state) => ({
        ...base,
        height: "100%",
        padding: "5px 30px",
        borderRadius: "25px",
        border: '1px solid #000',
        backgroundColor: "none",
        boxShadow: state.isFocused ? "none" : "none",
        "&:hover": {
          
        }
    }),
    valueContainer: (base) => ({
        ...base,
        height: "100%",
        fontWeight: "600"
      }),
    input: (base, state) => ({
        ...base,
        height: "100%",
        minHeight: "100%",
        minWidth: "100%",
        fontWeight: "700"
    }),
    label: (base) => ({
        ...base,
        display: "none"
    }),
    placeholder: (base, state) => ({
        ...base,
        color: "var(--text)",
        fontWeight: "700"
    }),
    option: (base, state) => ({
        ...base,
        background: state.isFocused ? "var(--gradient-a)" : "#fff",
        marginBottom: "5px",
        fontSize: "16px",
        padding: "20px 10px",
        color: state.isFocused ? "#fff" : "#000",
        "&:hover": {
          borderColor: "#000",
          color: "#fff"
        }
      }),
    menu: (base) => ({
    ...base,
    zIndex: 100,
    }),
    indicatorsContainer: (base, state) => ({
        ...base,
        padding: state.isFocused ? "0" : "0",
    })
}

const options = [
    { value: "Mechanical engineering", label: "Mechanical engineering"},
    { value: "Architectural Services", label: "Architectural Services"},
    { value: "Civil Engineering", label: "Civil Engineering"},
    { value: "Electrical Engineering", label: "Electrical Engineering"},
]

export default function CaseStudy() {
    const [selectedOption, setSelectedOption] = useState(null)
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        console.log(selectedOption);
      };
    return(
        <main>
            <div className="case-secA mt-hdr">
                <div className="container sec-padd-all">
                    <div className="heading text-center">
                        <h2>Case Studies</h2>
                        <p>Leverage our mechanical engineering services to optimize production. Identify system challenges and speed-up delivery with our objective evaluation</p>
                    </div>
                </div>
            </div>
            <div className="case-secB">
                <div className="container sec-padd-all">
                    <div className="top-nav">
                        <h6>Filter by categories</h6>
                        <Select 
                        placeholder="Category"
                        options={options}
                        value={selectedOption}
                        onChange={handleChange}
                        styles={customStyles}
                        components={{
                            IndicatorSeparator: () => null 
                          }}
                      ></Select>
                      {selectedOption && <label>{selectedOption.label}</label>}
                    </div>
                    <div className="casestudies_wrapper">
                        <div className="case-grid grid-3">
                            <div className="case-col item-md">
                                <figure>
                                    <Image src="/assets/images/case/case1.jpg" alt="Case Studies" width="362" height="287"></Image>
                                </figure>
                                <figcaption>
                                    <h6>Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer</h6>
                                </figcaption>
                            </div>
                            <div className="case-col item-md">
                                <figure>
                                    <Image src="/assets/images/case/case1.jpg" alt="Case Studies" width="362" height="287"></Image>
                                </figure>
                                <figcaption>
                                    <h6>Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer</h6>
                                </figcaption>
                            </div>
                            <div className="case-col item-md">
                                <figure>
                                    <Image src="/assets/images/case/case1.jpg" alt="Case Studies" width="362" height="287"></Image>
                                </figure>
                                <figcaption>
                                    <h6>Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer</h6>
                                </figcaption>
                            </div>
                            <div className="case-col item-md">
                                <figure>
                                    <Image src="/assets/images/case/case1.jpg" alt="Case Studies" width="362" height="287"></Image>
                                </figure>
                                <figcaption>
                                    <h6>Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer</h6>
                                </figcaption>
                            </div>
                            <div className="case-col item-md">
                                <figure>
                                    <Image src="/assets/images/case/case1.jpg" alt="Case Studies" width="362" height="287"></Image>
                                </figure>
                                <figcaption>
                                    <h6>Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer</h6>
                                </figcaption>
                            </div>
                            <div className="case-col item-md">
                                <figure>
                                    <Image src="/assets/images/case/case1.jpg" alt="Case Studies" width="362" height="287"></Image>
                                </figure>
                                <figcaption>
                                    <h6>Infra outsource Provided CFD Simulation Services to a Leading HVAC Products Manufacturer</h6>
                                </figcaption>
                            </div>
                        </div>
                        <div className="btn-wrapper text-center">
                            <ButtonMain desc="Load More" />
                        </div>
                    </div>
                </div>
            </div>
            <FormComponent />
        </main>
    )
}