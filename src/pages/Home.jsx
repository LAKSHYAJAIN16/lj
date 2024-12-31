import React from 'react'
import { Link } from 'react-router'
import { motion } from 'framer-motion'

export default function Home () {
  return (
    <>
      <div className='container'>
        <a>
          <div className='letter L'>
            <div className='rect vertical'></div>
            <div className='rect horizontal'></div>
          </div>
        </a>

        <div className='letter A'>
          <div className='rect vertical left'></div>
          <div className='rect horizontal'></div>
          <div className='rect vertical right'></div>
        </div>
      </div>
    </>
  )
}
