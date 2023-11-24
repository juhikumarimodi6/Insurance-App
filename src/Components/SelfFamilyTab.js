import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMemberTitles,addDataToMemberTitles, removeDataFromMemberTitles, filterDataFromMemberTitles, clearMemberTitles} from "../Redux/userSlice";
import TabButton from './TabButton'
import { BiMaleFemale } from "react-icons/bi";
import { IoPersonOutline } from "react-icons/io5";
import { MdPerson3, MdGirl, MdBoy } from "react-icons/md";
import { Link, useNavigate} from 'react-router-dom';
import Counter from './Counter';
import MobileEmail from './MobileEmail';
import './SelfFamilyTab.css'

const SelfFamilyTab = () => {
    const memberTitles = useSelector(selectMemberTitles);
    const [showDependents, setShowDependents] = useState(false);
    const [showSelf, setShowSelf] = useState(false);
    const [showSelfDependent, setShowSelfDependent] = useState(false);
    const [showSpouseDependent, setShowSpouseDependent] = useState(false);
    const [showSonDependent, setShowSonDependent] = useState(false);
    const [showDaughterDependent, setShowDaughterDependent] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/')
    },[])

    const handleFamilyClick = () => {
      setShowDependents(prevState => !prevState);
      setShowSelf(false);
      setShowSelfDependent(false);
      setShowSpouseDependent(false);
      setShowSonDependent(false);
      setShowDaughterDependent(false);
      dispatch(clearMemberTitles());
      dispatch(removeDataFromMemberTitles("self"))
    };

    const handleSelfClick = () => {
        setShowDependents(false);
        setShowSelf(true);
        dispatch(clearMemberTitles());
        dispatch(addDataToMemberTitles("self"));
    };

    const handleSelfDependent = () => {
        setShowSelfDependent(prevState => !prevState);
        !showSelfDependent ? dispatch(addDataToMemberTitles("self")) : dispatch(removeDataFromMemberTitles("self"));
    }

    const handleSpouseDependent = () => {
        setShowSpouseDependent(prevState => !prevState);
        !showSpouseDependent ? dispatch(addDataToMemberTitles("spouse")) : dispatch(removeDataFromMemberTitles("spouse"));
    }

    const handleSonDependent = (event) => {
        console.log(event);
        setShowSonDependent(prevState => !prevState)
        !showSonDependent ? dispatch(addDataToMemberTitles("son")) : dispatch(filterDataFromMemberTitles("son"));
    }

    console.log(memberTitles);
    const handleDaughterDependent = () => {
        setShowDaughterDependent(prevState => !prevState)
        !showDaughterDependent ? dispatch(addDataToMemberTitles("daughter")) : dispatch(filterDataFromMemberTitles("daughter"));
    }

    return (
        <div className='SelfFamilyTab-container'>
        <p>Choose Members</p>
        <div>
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
                        onClick = {event => handleSonDependent(event)}
                        isActive = {showSonDependent}
                    />
                    {showSonDependent && <Counter title='son'/>}
                </div>
                <div className='Dependent-Daughter-Counter'>
                    <TabButton 
                        icon = {<MdGirl />} 
                        title='Dependent Daughter' 
                        onClick = {handleDaughterDependent}
                        isActive = {showDaughterDependent}
                    />
                    {showDaughterDependent && <Counter title = 'daughter' />}
                </div>
            </div>
        )}
        </div>
        
        <MobileEmail />

        <Link to={showSelf ? '/selfform': '/userform'}>
            <button
            className='Proceed-button'
            disabled={(memberTitles.length < 2 || memberTitles.length > 5) && !showSelf}
            style = {
                {
                    backgroundColor: ((memberTitles.length < 2 || memberTitles.length > 5) && !showSelf) ? 'grey' : 'red'
                }
            }>Proceed</button>
        </Link>
        </div>
    )
}

export default SelfFamilyTab
