import * as React from 'react';
import styled from 'styled-components';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Stack,
  Button,
  Typography,
  Box,
  Modal,
  TextField,
} from '@mui/material';

const onlyTextRegex = /^[a-zA-Z ]*$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const theme = createTheme({
  palette: {
    error: {
      main: 'rgb(229, 0, 81)',
    },
    primary: {
      main: 'rgb(216, 216, 216)',
    },
  },
});

const ContainerBox = styled(Box)`
  width: 620px;
  height: 704px;
  margin: 24px 48px 38px 146px;
  padding: 36px 48px 120px;
  border-radius: 4px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const CustomBox = styled(Box)`
  display: flex;
  margin-bottom: 3rem;
`;

const CustomTextfield = styled(TextField)`
  width: 254px;
  height: 56px;
  margin: 43px 16px 42px 0;
  padding: 16px 91px 16px 14px;
  border-radius: 4px;
  border: solid 1px #e50051;
  flex: 1;
`;

const CustomFormControl = styled(FormControl)`
  width: 254px;
  height: 56px;
  margin: 43px 16px 42px 0;
  padding: 16px 91px 16px 14px;
  border-radius: 4px;
  border: solid 1px #e50051;
  flex: 1;
`;

const CancelButton = styled(Button)`
  && {
    width: 142px;
    height: 36px;
    padding: 7px 16px;
    border-radius: 18.5px;
    border: solid 1px #003bb3;
    color: #003bb3;
    text-transform: none;
    font-weight: bold;
    &:hover {
      background-color: #003bb3;
      color: #fff;
    }
  }
`;

const SaveButton = styled(Button)`
  && {
    width: 142px;
    height: 36px;
    padding: 7px 8px;
    border-radius: 18.5px;
    border: solid 1px #003bb3;
    color: #fff;
    background-color: #003bb3;
    text-transform: none;
    font-weight: bold;
    &:hover {
      background-color: #003bb3;
    }
  }
`;

const DeleteButton = styled(Button)`
  && {
    width: 142px;
    height: 36px;
    padding: 7px 8px;
    border-radius: 18.5px;
    border: solid 1px #e50051;
    color: #fff;
    background-color: #e50051;
    text-transform: none;
    font-weight: bold;
    &:hover {
      background-color: #e50051;
    }
  }
`;

export default function BasicModal() {
  const [startDate, setStartDate] = React.useState(null);
  const [gender, setGender] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [birthday, setBirthday] = React.useState(null);
  const [check, setCheck] = React.useState(false);

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleBirthdayChange = (newValue) => {
    setBirthday(newValue);
  };

  const handleStartDateChange = (newValue) => {
    setStartDate(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ContainerBox>
          <CustomBox>
            <Typography sx={{ fontWeight: 'bold' }} variant="h5">
              EDIT EMPLOYEE PROFILE
            </Typography>
          </CustomBox>
          <CustomBox>
            <CustomTextfield
              error={firstName !== '' && !onlyTextRegex.test(firstName)}
              onChange={(e) => setFirstName(e.target.value)}
              variant="outlined"
              label="First name"
              placeholder="First name"
              helperText={
                firstName !== '' && !onlyTextRegex.test(firstName)
                  ? 'Wrong format'
                  : ''
              }
              sx={{ marginRight: '16px' }}
            />
            <CustomTextfield
              variant="outlined"
              error={lastName !== '' && !onlyTextRegex.test(lastName)}
              onChange={(e) => setLastName(e.target.value)}
              label="Last name"
              placeholder="Last name"
              helperText={
                lastName !== '' && !onlyTextRegex.test(lastName)
                  ? 'Wrong format'
                  : ''
              }
            />
          </CustomBox>
          <CustomBox>
            <CustomFormControl sx={{ marginRight: '16px' }}>
              <InputLabel>Gender</InputLabel>
              <Select
                value={gender}
                placeholder="Select gender"
                label="Gender"
                onChange={handleChange}
                error={gender === null}
              >
                <MenuItem value={'male'}>Male</MenuItem>
                <MenuItem value={'female'}>Female</MenuItem>
              </Select>
            </CustomFormControl>
            <CustomTextfield
              type={'email'}
              variant="outlined"
              error={email !== '' && !emailRegex.test(email)}
              onChange={(e) => setEmail(e.target.value)}
              label="Corporate email"
              placeholder="Corporate email"
              helperText={
                email !== '' && !onlyTextRegex.test(email) ? 'Wrong format' : ''
              }
            />
          </CustomBox>
          <CustomBox>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DesktopDatePicker
                error={birthday === null}
                label="Birthday Date"
                placeholder="dd/mm/yyyy"
                inputFormat="dd/MM/yyyy"
                value={birthday}
                onChange={handleBirthdayChange}
                renderInput={(params) => (
                  <CustomTextfield sx={{ marginRight: '16px' }} {...params} />
                )}
              />
              <DesktopDatePicker
                error={startDate === null}
                label="Start Date"
                placeholder="dd/mm/yyyy"
                inputFormat="dd/MM/yyyy"
                value={startDate}
                onChange={handleStartDateChange}
                renderInput={(params) => <CustomTextfield {...params} />}
              />
            </LocalizationProvider>
          </CustomBox>
          <CustomBox>
            <TextField
              sx={{ flex: 1 }}
              variant="outlined"
              label="Custom field 1"
              placeholder="Custom field 1"
            />
          </CustomBox>
          <CustomBox>
            <TextField
              sx={{ flex: 1 }}
              variant="outlined"
              label="Custom field 2"
              placeholder="Custom field 2"
            />
          </CustomBox>
          <CustomBox>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() => setCheck(!check)}
                    sx={{
                      color: 'primary',
                      '&.Mui-checked': {
                        color: '#003bb3',
                      },
                    }}
                    checked={check}
                  />
                }
                label="Remove this record"
              />
            </FormGroup>
          </CustomBox>
          <CustomBox>
            <Stack
              flex={1}
              spacing={2}
              direction="row"
              justifyContent="flex-end"
            >
              <CancelButton variant="outlined">Cancel</CancelButton>
              {!check ? (
                <SaveButton variant="contained">Save changes</SaveButton>
              ) : (
                <DeleteButton variant="contained">
                  Confirm &amp; delete
                </DeleteButton>
              )}
            </Stack>
          </CustomBox>
        </ContainerBox>
      </Modal>
    </ThemeProvider>
  );
}
