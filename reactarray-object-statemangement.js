  // ✅ Add an object to a state array
  const addObjectToArray = obj => {
    setEmployees(current => [...current, obj]);
  };

  // ✅ Update one or more objects in a state array
  const updateObjectInArray = () => {
    setEmployees(current =>
      current.map(obj => {
        if (obj.id === 2) {
          return {...obj, name: 'Sophia', country: 'Sweden'};
        }

        return obj;
      }),
    );
  };

  // ✅ Remove one or more objects from state array
  const removeObjectFromArray = () => {
    setEmployees(current =>
      current.filter(obj => {
        return obj.id !== 2;
      }),
    );
  };
