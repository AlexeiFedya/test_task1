import React from 'react';

import {Form} from '../components/form/Form';
import './home-page.scss'

export const HomePage = () => {
    return (
        <main className='home-page'>
            <div className="home-page__wrap">
                <Form/>
            </div>
        </main>
    )
}