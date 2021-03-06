export const addToManager = (data: any): any => {
  return {
    type: "ADDTOMANAGER",
    payload: data,
  };
};

export const removeFromManager = (data: any): any => {
  return {
    type: "REMOVEFROMMANAGER",
    payload: data,
  };
};
