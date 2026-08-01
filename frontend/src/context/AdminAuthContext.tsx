"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const ADMIN_EMAIL = "awsscd@rajalakshmi.edu.in";
const ADMIN_PASSWORD = "SCD@2026";
const SESSION_KEY = "admin_auth";

interface AdminAuthContextType {
  isAuthenticated: boolean;
  isLoaded: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextType>({
  isAuthenticated: false,
  isLoaded: false,
  login: () => false,
  logout: () => {},
});

export const AdminAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem(SESSION_KEY) === "true";
    }
    return false;
  });
  const [isLoaded, setIsLoaded] = useState(false);

  // Restore session on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem(SESSION_KEY);
      if (stored === "true") {
        document.cookie = "token=admin_token; path=/; max-age=28800";
        setIsAuthenticated(true);
      }
      setIsLoaded(true);
    }
  }, []);

  const login = (email: string, password: string): boolean => {
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "true");
      document.cookie = "token=admin_token; path=/; max-age=28800";
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsAuthenticated(false);
  };

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, isLoaded, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
