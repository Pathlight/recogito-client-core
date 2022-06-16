import React from 'react';
import Select from 'react-select-rcc';

export const PURPOSES = [
  {'value': 'assessing', 'label': 'Assessing'}, 
  {'value': 'bookmarking', 'label': 'Bookmarking'}, 
  {'value': 'classifying', 'label': 'Classifying'}, 
  {'value': 'commenting', 'label': 'Commenting'}, 
  {'value': 'describing', 'label': 'Describing'},
  {'value': 'editing', 'label': 'Editing'}, 
  {'value': 'highlighting', 'label': 'Highlighting'},
  {'value': 'identifying', 'label': 'Identifying'},
  {'value': 'linking', 'label': 'Linking'},
  {'value': 'moderating', 'label': 'Moderating'},
  {'value': 'questioning', 'label': 'Questioning'},
  {'value': 'replying', 'label': 'Replying'},
  {'value': 'supplementing', 'label': 'Transcription'}
]

const PurposeSelect = props => {

  const selectedOption = props.content ?
    PURPOSES.find(p => p.value === props.content) : null;

  return null;

}

export default PurposeSelect;
