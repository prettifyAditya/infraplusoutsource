"use client"
import React, { useState, useEffect } from "react";
import Select from "react-select";
import ButtonMain from "./ButtonMain";
import "../styles/header/header.css"

const options = [
    { value: "Frontend Developer", label: "Frontend Developer"},
    { value: "Backend Developer", label: "Backend Developer"},
    { value: "Fullstack Developer", label: "Fullstack Developer"},
]

const customStyles = {
    control: (base, state) => ({
        ...base,
        height: "100%",
        backgroundColor: "none",
        border: state.isFocused ? "none" : "none",
        boxShadow: state.isFocused ? "none" : "none",
        "&:hover": {
          borderColor: "#007bff"
        }
    }),
    valueContainer: (base) => ({
        ...base,
        height: "100%",
      }),
    input: (base, state) => ({
        ...base,
        height: "100%",
        minHeight: "100%",
        minWidth: "100%"
    }),
    placeholder: (base, state) => ({
        ...base,
        color: "var(--text)",
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

export default function CareerPop() {
    const [selectedOption, setSelectedOption] = useState(null)
    const closePop = () => {
        document.querySelector('.enquire-pop').classList.remove('is-open')
        document.querySelector('.overlay').classList.remove('is-open')
        document.querySelector('body').classList.remove('overflow-hidden')
    }
    useEffect(() => {
        const fileInputs = document.querySelectorAll('input[type="file"].form-control');
    
        const handleChange = (event) => {
          const input = event.target;
          const fileName = input.value.replace(/C:\\fakepath\\/i, '');
          const sibling = input.parentElement.querySelector('.file-name'); 
    
          if (sibling) {
            sibling.style.setProperty('--filenameinitial', fileName ? `"${fileName}"` : 'var(--filename)');
          }
        };
    
        fileInputs.forEach(input => {
          input.addEventListener('change', handleChange);
        });
    
        // Cleanup on unmount
        return () => {
          fileInputs.forEach(input => {
            input.removeEventListener('change', handleChange);
          });
        };
      }, []);
    return(
        <div className="model career-pop">
        <button className="close" onClick={closePop}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 0.5L25.5 25.5M0.5 25.5L25.5 0.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
        <div className="model-body">
            <div className="title">
                <h4>Apply Now</h4>
                <p>Submit your CV, we will contact you as soon as we have relevant openings</p>
            </div>
            <div className="form form-grid">
            <div className="form-group">
                <input type="text" className="form-control" />
                <label htmlFor="">Name</label>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" />
                <label htmlFor="">Email</label>
            </div>
            <div className="form-group">
                <input type="tel" className="form-control" />
                <label htmlFor="">Phone</label>
            </div>
            <div className="form-group">
                <Select 
                    placeholder="Apply for"
                    options={options}
                    value={selectedOption}
                    onChange={setSelectedOption}
                    styles={customStyles}
                    components={{
                        IndicatorSeparator: () => null 
                        }}
                ></Select>
                {selectedOption && <label>{selectedOption.label}</label>}
                {/* <label for="">Apply For</label> */}
            </div>
            <div className="form-group file-input full">
                <input type="file" name="" id="careerResume" className="form-control" accept=".pdf"/>
                <div className="file-name"></div>
            </div>
            <div className="form-group full">
                <textarea name="" id="" className="form-control"></textarea>
                <label htmlFor="">Message</label>
            </div>
            <button className="btn full">
                Apply Now
            </button>
        </div>
        </div>
    </div>
    )
}