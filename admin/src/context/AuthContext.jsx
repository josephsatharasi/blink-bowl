import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedAuth = localStorage.getItem('adminAuth');
    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      setIsAuthenticated(true);
      setUser(authData.user);
    }
  }, []);

  const login = (email, password) => {
    // Dummy credentials
    const validCredentials = [
      { email: 'admin@schoolmart.com', password: 'admin123', name: 'Admin User', role: 'Super Admin' },
      { email: 'manager@schoolmart.com', password: 'manager123', name: 'Manager User', role: 'Manager' }
    ];

    const user = validCredentials.find(
      cred => cred.email === email && cred.password === password
    );

    if (user) {
      const userData = { email: user.email, name: user.name, role: user.role };
      setIsAuthenticated(true);
      setUser(userData);
      localStorage.setItem('adminAuth', JSON.stringify({ user: userData }));
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem('adminAuth');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
