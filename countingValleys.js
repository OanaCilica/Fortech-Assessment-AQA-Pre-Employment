/*
  Defined a constant called seaLevel and initialized it to 0. 
  Knowing that seaLevel = 0, in order to account for down or up steps, I defined 2 more variables: downSteps = -1 & upStep = 1;
  In valleysNumber will be stored the number of valleys;
  tempStatus is a temporary variable that gets updated on every new step. 

  Loop through the path array, check if the current path is "U" and if it is, 
  check if the sum of the tempStatus and the upStep(1) gets the runner to the seaLevel and if this condition is met, increase the valleysNumber. 
  Also, for every step made, update the tempStatus.

  When the loop ends, return the valleysNumber.

  I chose this approach because I tought it needs a minimum number of steps to solve the problem.
*/

function countingValleys(_steps, path) {
  const [downStep, seaLevel, upStep] = [-1, 0, 1];

  let valleysNumber = 0;
  let tempStatus = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "U") {
      if (tempStatus + upStep === seaLevel) {
        valleysNumber++;
      }

      tempStatus += upStep;
    } else {
      tempStatus += downStep;
    }
  }

  return valleysNumber;
}

const hikeRecords = [
  {
    steps: 11,
    path: "UDDDUDUUDUU",
  },
  {
    steps: 8,
    path: "UDDDUDUU",
  },
  {
    steps: 12,
    path: "DDUUDDUDUUUD",
  },
];

hikeRecords.forEach((input) => { 
  console.log(
    `"${input.path}" contains ${countingValleys(input.steps, input.path)} valleys`,
  );
});
