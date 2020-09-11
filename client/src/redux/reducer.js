const initialState = {
  data: [],
  language: "ru"
}

const reducer = (state= initialState, action) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...state,
        data: action.payload
      };

    case 'RU':
      return {
        ...state,
        language: "ru"
      };

    case 'ENG':
      return {
        ...state,
        language: "eng"
      };

    default:
      return state;
  }
}

export {reducer};
