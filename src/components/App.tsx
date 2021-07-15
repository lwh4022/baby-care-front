import React from 'react';
import MenuBar from './main/Header'
import MainImage from './main/MainImage'
import Section from './main/Section'

export default function FixedContainer() {
  return (
    <div>
      <MenuBar />
      <MainImage />
      <Section/>
    </div>
  )
}