

export const valueFromUserData = (key) => {
    const UserData = localStorage.getItem('userData');
    if (UserData !== undefined && UserData !== null) {
        return UserData[key];
    } else {
        return '';
    }
};

export const setLocalData = (key, value) => {
   localStorage.setItem(key, value);
};

export const removeLocalData = (key) => {
    localStorage.removeItem(key);
 };