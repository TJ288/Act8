import React from "react";
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const testCases = [
  {
    element: "Radio Button",
    functionality: "Verify only one selection allowed",
    steps: [
      "Click on each radio button option one by one.",
      "Observe the selection behavior."
    ],
    data: "Option 1, Option 2, Option 3",
    expected: "Only one radio button can be selected at a time.",
    observed: "Works as expected."
  },
  {
    element: "Checkbox",
    functionality: "Verify multiple selections allowed",
    steps: [
      "Click the checkbox to select and deselect.",
      "Observe the state change."
    ],
    data: "Checked/Unchecked",
    expected: "Checkbox toggles between checked and unchecked.",
    observed: "Works as expected."
  },
  {
    element: "Dropdown",
    functionality: "Verify selection from options",
    steps: [
      "Click the dropdown.",
      "Select each option and observe the value."
    ],
    data: "Option 1, Option 2, Option 3",
    expected: "Selected value updates correctly.",
    observed: "Works as expected."
  },
  {
    element: "Textbox",
    functionality: "Verify text input",
    steps: [
      "Type text into the textbox.",
      "Check if the value updates."
    ],
    data: "Any text",
    expected: "Textbox displays entered text.",
    observed: "Works as expected."
  },
  {
    element: "Slider",
    functionality: "Verify slider movement",
    steps: [
      "Drag the slider handle.",
      "Observe value change."
    ],
    data: "0-100",
    expected: "Slider value updates as moved.",
    observed: "Works as expected."
  },
  {
    element: "Button",
    functionality: "Verify button click",
    steps: [
      "Click the button.",
      "Observe any action or feedback."
    ],
    data: "Click",
    expected: "Button responds to click.",
    observed: "Works as expected."
  },
  {
    element: "Image/Video",
    functionality: "Verify display and controls",
    steps: [
      "Check if image/video is visible.",
      "Play/pause video."
    ],
    data: "Sample image/video",
    expected: "Image displays, video plays/pauses.",
    observed: "Works as expected."
  },
  {
    element: "Table",
    functionality: "Verify table rendering",
    steps: [
      "Check if table displays rows and columns correctly."
    ],
    data: "Sample data",
    expected: "Table displays all data correctly.",
    observed: "Works as expected."
  }
];

function TestCasesPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>Sample Test Scenarios</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Element</TableCell>
              <TableCell>Functionality</TableCell>
              <TableCell>Steps</TableCell>
              <TableCell>Data/Actions</TableCell>
              <TableCell>Expected Behavior</TableCell>
              <TableCell>Observed Behavior</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {testCases.map((tc, idx) => (
              <TableRow key={idx}>
                <TableCell>{tc.element}</TableCell>
                <TableCell>{tc.functionality}</TableCell>
                <TableCell>{tc.steps.join(" ")}</TableCell>
                <TableCell>{tc.data}</TableCell>
                <TableCell>{tc.expected}</TableCell>
                <TableCell>{tc.observed}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TestCasesPage;
