import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Audits from "./pages/Audits";
import Norms from "./pages/Norms";
import Sites from "./pages/Sites";
import Processes from "./pages/Processes";
import Risks from "./pages/Risks";
import Legal from "./pages/Legal";
import NonConformities from "./pages/NonConformities";
import CorrectiveActions from "./pages/CorrectiveActions";
import Reports from "./pages/Reports";
import Notifications from "./pages/Notifications";
import Users from "./pages/Users";
import Roles from "./pages/Roles";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return !isAuthenticated ? <>{children}</> : <Navigate to="/dashboard" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/audits"
            element={
              <ProtectedRoute>
                <Audits />
              </ProtectedRoute>
            }
          />
          <Route
            path="/norms"
            element={
              <ProtectedRoute>
                <Norms />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sites"
            element={
              <ProtectedRoute>
                <Sites />
              </ProtectedRoute>
            }
          />
          <Route
            path="/processes"
            element={
              <ProtectedRoute>
                <Processes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/risks"
            element={
              <ProtectedRoute>
                <Risks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/legal"
            element={
              <ProtectedRoute>
                <Legal />
              </ProtectedRoute>
            }
          />
          <Route
            path="/non-conformities"
            element={
              <ProtectedRoute>
                <NonConformities />
              </ProtectedRoute>
            }
          />
          <Route
            path="/corrective-actions"
            element={
              <ProtectedRoute>
                <CorrectiveActions />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reports"
            element={
              <ProtectedRoute>
                <Reports />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route
            path="/users"
            element={
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            }
          />
          <Route
            path="/roles"
            element={
              <ProtectedRoute>
                <Roles />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
