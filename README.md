# Expo Camera Preview Freezing Issue

This repository demonstrates a bug encountered while using the Expo Camera API. Under conditions of high load or rapid changes in camera settings, the camera preview would intermittently freeze, requiring a full app restart to recover. 

## Bug Reproduction Steps
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run the app using Expo Go or a similar Expo client.
4. Rapidly switch between camera features (flash on/off, zoom in/out).
5. Observe that after a period of this activity, the camera preview may freeze.

## Solution
The solution involved optimizing the camera usage to minimize resource contention. This was achieved through a combination of techniques.  Please refer to `bugSolution.js` for the improved code.