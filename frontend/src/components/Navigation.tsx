import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {
  LogOut,
  LayoutDashboard,
  FileText,
  Scale,
  Building2,
  Workflow,
  AlertTriangle,
  Scale as LegalIcon,
  CheckCircle,
  FileText as ReportIcon,
  Bell,
  Users,
  Shield,
} from "lucide-react";

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1
              className="text-xl font-bold text-gray-900 cursor-pointer hover:text-indigo-600"
              onClick={() => navigate("/dashboard")}
            >
              Audit Management
            </h1>
            <nav className="hidden md:flex items-center gap-4">
              <button
                onClick={() => navigate("/dashboard")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <LayoutDashboard className="w-4 h-4" />
                Dashboard
              </button>
              <button
                onClick={() => navigate("/audits")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4" />
                Audits
              </button>
              <button
                onClick={() => navigate("/norms")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Scale className="w-4 h-4" />
                Norms
              </button>
              <button
                onClick={() => navigate("/sites")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Building2 className="w-4 h-4" />
                Sites
              </button>
              <button
                onClick={() => navigate("/processes")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Workflow className="w-4 h-4" />
                Processes
              </button>
              <button
                onClick={() => navigate("/risks")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <AlertTriangle className="w-4 h-4" />
                Risks
              </button>
              <button
                onClick={() => navigate("/legal")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <LegalIcon className="w-4 h-4" />
                Legal
              </button>
              <button
                onClick={() => navigate("/non-conformities")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <AlertTriangle className="w-4 h-4" />
                Non-Conformities
              </button>
              <button
                onClick={() => navigate("/corrective-actions")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <CheckCircle className="w-4 h-4" />
                Corrective Actions
              </button>
              <button
                onClick={() => navigate("/reports")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <ReportIcon className="w-4 h-4" />
                Reports
              </button>
              <button
                onClick={() => navigate("/notifications")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Bell className="w-4 h-4" />
                Notifications
              </button>
              <button
                onClick={() => navigate("/users")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Users className="w-4 h-4" />
                Users
              </button>
              <button
                onClick={() => navigate("/roles")}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <Shield className="w-4 h-4" />
                Roles
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-700 text-sm">
              {user?.firstName} {user?.lastName}
            </span>
            <button
              onClick={logout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
