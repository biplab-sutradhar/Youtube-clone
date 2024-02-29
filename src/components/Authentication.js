import React, { useState, useEffect } from 'react';
import {  signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from './utils/config'; 
import { getUserDetail } from './utils/getUserDetail';
import {  FaSignOutAlt } from 'react-icons/fa';

const Authentication = () => {
  const [user, setUser] = useState(null);
  const [Menu, setMenu] = useState(false)
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const profile = await getUserDetail();
      setProfileData(profile);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchProfile();
      }
    });

    return () => {
      unsubscribeAuth();
    };
  }, []);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      fetchProfile();
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setProfileData(null); 
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

 

  return (
    <div >
      {isLoading ? (
        <p className=' size-8 rounded-lg bg-gray-200'> Loading..</p>
      ) : user ? (
        <>
          <img src={profileData?.photoURL} referrerPolicy='no-referrer' alt="user" className=' size-8 rounded-full' onClick={() => setMenu(!Menu)}/>
        { Menu && <div className='transition delay-300 absolute z-50 flex flex-col items-center justify-start top-14 right-5 p-4 gap-2 border drop-shadow-md rounded-lg text-base bg-white ' onMouseLeave={() => setMenu(!Menu)}>
         <h2 className='flex '>
         <img src={profileData?.photoURL} referrerPolicy='no-referrer' alt="user" className=' mr-2 size-8 rounded-full'/>
           {profileData?.name}</h2>
          <button onClick={handleSignOut} className='flex items-center gap-2'> <FaSignOutAlt/> Sign Out</button>
         </div>
          } </>
      ) : (
        <button onClick={handleSignIn} className=' flex text-base border p-1 rounded-lg'>  Sign In</button>
      )}
    </div>
  );
};

export default Authentication;
