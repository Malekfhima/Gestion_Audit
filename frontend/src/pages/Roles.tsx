import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../lib/api";
import Navigation from "../components/Navigation";
import { Plus } from "lucide-react";

interface Role {
  id: string;
  name: string;
  description: string;
  permissions: string[];
  createdAt: string;
}

const Roles: React.FC = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const fetchRoles = useCallback(async () => {
    try {
      setLoading(true);
      const response = await api.get("/roles");
      setRoles(response.data.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch roles");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRoles();
  }, [fetchRoles]);

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Roles</h1>
          <button
            onClick={() => navigate("/roles/new")}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Role
          </button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Permissions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {roles.map((role) => (
                <tr key={role.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {role.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {role.description}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <div className="flex flex-wrap gap-1">
                      {role.permissions.map((permission, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {permission}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(role.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {roles.length === 0 && (
            <div className="p-6 text-center text-gray-500">No roles found</div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Roles;
