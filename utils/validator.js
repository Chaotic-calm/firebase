const validateUser = (user) => {
    if (!user.name || !user.email || !user.password) {
      return "Name, Email, and Password are required";
    }
    return null;
  };
  
  module.exports = { validateUser };
  