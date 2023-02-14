export const persistInLocalStorage = (key,userState) => {
    localStorage.setItem(key,JSON.stringify(userState))
}
export const clearLocalStorage = (key) => {
    localStorage.removeItem(key);
  };
  