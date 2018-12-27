const indexDBfunc = (self, type, obj) => {
  if (!window.indexedDB) {
    alert("Your browser does not support IndexedDB. Some problems might occur");
  }

  let request = window.indexedDB.open("TodoAppDB", 1),
    db,
    tx,
    store;

  request.onupgradeneeded = e => {
    db = request.result;
    store = db.createObjectStore("StateStore", { keyPath: "id" });
  };

  request.onerror = e => {
    alert("There was an error: " + e.target.errorCode);
  };

  request.onsuccess = e => {
    db = request.result;
    tx = db.transaction("StateStore", "readwrite");
    store = tx.objectStore("StateStore");

    db.onerror = e => {
      alert("ERROR: " + e.target.errorCode);
    };

    if (type === "get") {
      let state = store.get(0);

      state.onsuccess = _ => {
        if (state.result !== undefined) {
          self.setState(state.result);
        }
      };
    } else if (type === "post") {
      store.put(obj);
    }

    tx.oncomplete = _ => {
      db.close();
    };
  };
};

export default indexDBfunc;
