// January 2021
// this is used in the new design dont delete

import React from 'react';
import { Columns } from 'bloomer';

import Payklever from './card/stories/Payklever';
import JobCore from './card/stories/JobCore';
import Massone from './card/stories/Massone';
import Weedmatch from './card/stories/Weedmatch';
import GeeksAcademy from './card/stories/GeeksAcademy';
import Propagad from './card/stories/Propagad';
import MyVoice from './card/stories/MyVoice';
import Pitazo from './card/stories/Pitazo';
import Mama from './card/stories/Mama';
import CollabToGrow from './card/stories/CollabToGrow';
import LeadVolt from './card/stories/LeadVolt';
import Okroo from './card/stories/Okroo';
import Avsee from './card/stories/Avsee';

const SuccessStories = () => {
  return (
    <Columns isDisplay="flex" isMultiline>
      <Avsee />
      <Okroo />
      <LeadVolt />
      <CollabToGrow />
      <Mama />
      <Pitazo />
      <JobCore />
      <Massone />
      <Weedmatch />
      <GeeksAcademy />
      <Payklever />
      <Propagad />
      <MyVoice />
    </Columns>
  );
};
export default SuccessStories;
