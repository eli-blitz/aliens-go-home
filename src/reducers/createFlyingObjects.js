import { 
  createInterval, flyingObjectsStarterYAxis, maxFlyingObjects,
  flyingObjectsStarterPositions
} from '../utils/constants';

export default state => {
  if(!state.gameState.started) return state;

  const now = Date.now();
  const { lastObjectCreatedAt, flyingObjects } = state.gameState;
  const createNewObject = (
    now - lastObjectCreatedAt.getTime() > createInterval &&
    flyingObjects.length < maxFlyingObjects
  );

  if (!createNewObject) return state;

  const id = Date.now();
  const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects);
  const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition];
  const newFlyingObject = {
    position: {
      x: flyingObjectPosition,
      y: flyingObjectsStarterYAxis,
    },
    createdAt: Date.now(),
    id
  };

  return {
    ...state,
    gameState: {
      ...state.gameState,
      flyingObjects:[
        ...state.gameState.flyingObjects,
        newFlyingObject
      ],
      lastObjectCreatedAt: new Date()
    },
  };
};
