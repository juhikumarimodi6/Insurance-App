import React, { useState } from 'react';
import TabButton from './TabButton'
import { BiMaleFemale } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { MdPerson3 } from "react-icons/md";
import { MdGirl } from "react-icons/md";
import { MdBoy } from "react-icons/md";
import { Link } from 'react-router-dom';
import Counter from './Counter';
import './SelfFamilyTab.css'

const SelfFamilyTab = () => {
    const [showDependents, setShowDependents] = useState(false);
    const [showSelf, setShowSelf] = useState(false);
    const [showSelfDependent, setShowSelfDependent] = useState(false);
    const [showSpouseDependent, setShowSpouseDependent] = useState(false);
    const [showSonDependent, setShowSonDependent] = useState(false);
    const [showDaughterDependent, setShowDaughterDependent] = useState(false);

    const handleFamilyClick = () => {
      setShowDependents(prevState => !prevState);
      setShowSelf(false);
    };

    const handleSelfClick = () => {
        setShowDependents(false);
        setShowSelf(true);
    };

    const handleSelfDependent = () => {
        setShowSelfDependent(prevState => !prevState)
    }

    const handleSpouseDependent = () => {
        setShowSpouseDependent(prevState => !prevState)
    }

    const handleSonDependent = () => {
        setShowSonDependent(prevState => !prevState)
    }

    const handleDaughterDependent = () => {
        setShowDaughterDependent(prevState => !prevState)
    }

    return (
        <div className='SelfFamilyTab-container'>
        <p>Choose Members</p>
        <div >
            <TabButton 
                icon = {<IoPersonOutline />}
                title ='Self'
                onClick = {handleSelfClick}
                isActive = {showSelf}
            />
            <TabButton 
                icon = {<BiMaleFemale />}
                title ='family'
                onClick = {handleFamilyClick}
                isActive = {showDependents}
            />
        </div>
        <div>
        {showDependents && (
            <div className='dependents'>
                <TabButton 
                    icon = {<IoPersonOutline />} 
                    title='Self' 
                    onClick = {handleSelfDependent}
                    isActive = {showSelfDependent}
                />
                <TabButton 
                    icon = {<MdPerson3 />} 
                    title='Spouse' 
                    onClick = {handleSpouseDependent}
                    isActive = {showSpouseDependent}
                />
                <div className='Dependent-Son-Counter'>
                    <TabButton 
                        icon = {<MdBoy />} 
                        title='Dependent Son'                     
                        onClick = {handleSonDependent}
                        isActive = {showSonDependent}
                    />
                    {showSonDependent && <Counter />}
                </div>
                <div className='Dependent-Daughter-Counter'>
                    <TabButton 
                        icon = {<MdGirl />} 
                        title='Dependent Daughter' 
                        onClick = {handleDaughterDependent}
                        isActive = {showDaughterDependent}
                    />
                    {showDaughterDependent && <Counter />}
                </div>
            </div>
        )}
        </div>
        
        
        <div>
            <p>Personal Details</p>
            <input
                type='tel'
                id='phoneNumber'
                placeholder='Mobile Number(10-digit)'
            />
            <input
                type='email'
                id='email'
                placeholder='Email Id'
            />
        </div>

        <Link to={'/userform'}>
            <button>Proceed</button>
        </Link>
        </div>
    )
}

export default SelfFamilyTab
