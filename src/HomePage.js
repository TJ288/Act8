import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Slider,
  Button,
  IconButton,
  Typography,
  Switch,
  Rating
} from "@mui/material";
import Masonry from '@mui/lab/Masonry';
import { motion } from 'framer-motion';
import { PlayArrow, PhotoCamera } from "@mui/icons-material";

const tableRows = [
  { name: "Alice", age: 25, role: "Developer" },
  { name: "Bob", age: 30, role: "Designer" },
  { name: "Charlie", age: 28, role: "Manager" }
];

function HomePage() {
  const [text, setText] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [radio, setRadio] = useState("option1");
  const [checked, setChecked] = useState(false);
  const [slider, setSlider] = useState(30);
  const [switchOn, setSwitchOn] = useState(false);
  const [rating, setRating] = useState(2);

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 4, md: 6 }, background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)', minHeight: '100vh' }}>
      <Typography variant="h3" align="center" sx={{ fontWeight: 800, color: '#1976d2', letterSpacing: 2, mb: 4, fontFamily: 'Roboto, Helvetica, Arial, sans-serif' }}>
        GUI Elements Showcase
      </Typography>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={4}>
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 } }}>
            <CardMedia
              component="img"
              height="220"
              image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
              alt="Sample"
            />
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <Typography variant="subtitle1" sx={{ color: '#1976d2', fontWeight: 600 }}>Image</Typography>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 } }}>
            <CardMedia component="video" controls height="220"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
            />
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <Typography variant="subtitle1" sx={{ color: '#1976d2', fontWeight: 600 }}>Video</Typography>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 } }}>
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <TextField label="Textbox" variant="outlined" fullWidth value={text} onChange={e => setText(e.target.value)} sx={{ mb: 2 }} />
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 } }}>
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <FormControl fullWidth>
                <InputLabel id="dropdown-label">Dropdown</InputLabel>
                <Select labelId="dropdown-label" value={dropdown} label="Dropdown" onChange={e => setDropdown(e.target.value)} sx={{ mb: 2 }}>
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>
              </FormControl>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 } }}>
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <Typography sx={{ color: '#1976d2', fontWeight: 600 }}>Radio Buttons</Typography>
              <RadioGroup value={radio} onChange={e => setRadio(e.target.value)} row sx={{ justifyContent: 'center', mt: 1 }}>
                <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                <FormControlLabel value="option2" control={<Radio />} label="Option 2" />
                <FormControlLabel value="option3" control={<Radio />} label="Option 3" />
              </RadioGroup>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 } }}>
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <FormControlLabel control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />} label="Checkbox" sx={{ mx: 'auto' }} />
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 } }}>
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: '#1976d2', fontWeight: 600 }}>Table</Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Age</TableCell>
                      <TableCell>Role</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableRows.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.age}</TableCell>
                        <TableCell>{row.role}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 } }}>
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <Typography gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>Slider</Typography>
              <Slider value={slider} onChange={(e, val) => setSlider(val)} min={0} max={100} sx={{ width: '90%', mx: 'auto', color: '#1976d2' }} />
            </CardContent>
          </Card>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: '#1976d2', fontWeight: 600 }}>Button</Typography>
              <Button variant="contained" color="primary" sx={{ mb: 1, px: 4, fontWeight: 700, fontSize: '1rem', letterSpacing: 1 }}>Submit</Button>
              <IconButton color="primary" aria-label="play" sx={{ mx: 1 }}>
                <PlayArrow />
              </IconButton>
              <IconButton color="secondary" aria-label="camera" sx={{ mx: 1 }}>
                <PhotoCamera />
              </IconButton>
            </CardContent>
          </Card>
        </motion.div>
        {/* Extra GUI Element: Switch */}
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: '#1976d2', fontWeight: 600 }}>Switch</Typography>
              <Switch checked={switchOn} onChange={e => setSwitchOn(e.target.checked)} sx={{ color: '#1976d2' }} />
              <Typography sx={{ mt: 1 }}>{switchOn ? 'On' : 'Off'}</Typography>
            </CardContent>
          </Card>
        </motion.div>
        {/* Extra GUI Element: Rating */}
        <motion.div whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <Card sx={{ borderRadius: 4, boxShadow: 6, minHeight: 270, background: '#f5faff', transition: 'box-shadow 0.3s', '&:hover': { boxShadow: 12 }, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CardContent sx={{ textAlign: 'center', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', py: 2 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: '#1976d2', fontWeight: 600 }}>Rating</Typography>
              <Rating value={rating} onChange={(e, newValue) => setRating(newValue)} sx={{ color: '#1976d2' }} />
              <Typography sx={{ mt: 1 }}>Value: {rating}</Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Masonry>
    </Box>
  );
}

export default HomePage;
