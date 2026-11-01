/**
 * Master Solution: Drill 01 — State Machines & useReducer for Streaming AI
 */

export const initialAgentState = {
  status: 'IDLE',
  tokens: '',
  error: null,
};

export function agentReducer(state, action) {
  switch (action.type) {
    case 'START_STREAM':
      return {
        status: 'STREAMING',
        tokens: '',
        error: null,
      };

    case 'APPEND_CHUNK':
      return {
        ...state,
        tokens: state.tokens + action.payload,
      };

    case 'COMPLETE_STREAM':
      return {
        ...state,
        status: 'SUCCESS',
      };

    case 'FAIL_STREAM':
      return {
        ...state,
        status: 'ERROR',
        error: action.payload,
      };

    case 'RESET':
      return initialAgentState;

    default:
      return state;
  }
}
