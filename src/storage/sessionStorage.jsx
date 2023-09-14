export const saveStorageSess = (keyName, token) => {
  console.log(token);
  sessionStorage.setItem(keyName, token);
};

export const getStorageSess = (key) => {
  return sessionStorage.getItem(key);
};

export const removeStorageSess = (key) => {
  return sessionStorage.removeItem(key);
};
