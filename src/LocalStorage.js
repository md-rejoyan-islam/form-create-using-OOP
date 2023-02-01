class LocalStorage {
  static save = (key, value) => {
    let data = [];
    if (localStorage.getItem(key)) {
      data = JSON.parse(localStorage.getItem(key));
    }
    data.push(JSON.stringify(value));
    localStorage.setItem(key, JSON.stringify(data));
  };
}

export default LocalStorage;
