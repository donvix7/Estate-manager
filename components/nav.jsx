"use client";

import Link from 'next/link';
import Image from 'next/image';
import {useState,useEffect} from 'react';
import {signIn, signOut, useSession, getProviders} from 'next-auth/react'

const Nav = () => {

    const isUserloggedIn = false;
    const {providers, setProviders} = useState(null);

    useEffect(() => {
        const setProviders = async () => {
            const reponse = await getProviders();
            setProviders(reponse);
        }
            setProviders();
    },[])
  return (
    <div>
        <nav>
            <a href='' className="logo ">
                <h3>My Estate.</h3>
            </a>

            {isUserloggedIn ? (
                
            <div className="menu">
                <button onClick={signOut}>Sign Out</button>


            </div>
            ):
            <>
                <button onClick={signIn}>Sign In</button>


            </>
            }
        </nav>
    </div>
  )
}

export default Nav