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

const SuccessStories = () => {
  return (
    <Columns isDisplay="flex" isMultiline>
      <JobCore />
      <Massone />
      <Weedmatch />
      <GeeksAcademy />
      <Payklever />
      <Propagad />
      <MyVoice />
      <Pitazo />
      <Mama />
      <CollabToGrow />
    </Columns>
  );
};
export default SuccessStories;
