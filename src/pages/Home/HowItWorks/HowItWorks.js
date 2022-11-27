import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Tab } from '@headlessui/react'

const HowItWorks = ({ color }) => {
  console.log(color);

 
  return (
    <div className="flex justify-center mt-8">
      <Tab.Group>
      <Tab.List>
        <Tab>Seller</Tab>
        <Tab>Buyer</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Seller</Tab.Panel>
        <Tab.Panel>Buyer</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  );
};

export default HowItWorks;
