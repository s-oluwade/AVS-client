import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

interface InquirySelectorProps {
  onChange: (inquiry: string) => void;
}

export default function InquirySelector({onChange}: InquirySelectorProps) {
  const [inquiry, setInquiry] = React.useState('general');

  const handleChange = (event: SelectChangeEvent) => {
    setInquiry(event.target.value as string);
    onChange(event.target.value as string);
  };

  return (
    <Box sx={{minWidth: 120, marginBottom: '10px'}}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Nature of Inquiry</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={inquiry}
          label='Nature of Inquiry'
          onChange={handleChange}>
          <MenuItem value={'general'}>General</MenuItem>
          <MenuItem value={'billing'}>Billing</MenuItem>
          <MenuItem value={'compliance-inquiry'}>Compliance Inquiry</MenuItem>
          <MenuItem value={'sales-support'}>Sales Support</MenuItem>
          <MenuItem value={'technical-support'}>Technical Support</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
