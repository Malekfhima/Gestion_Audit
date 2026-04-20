import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import Navigation from '../components/Navigation';
import { Plus } from 'lucide-react';

interface LegalRequirement {
  id: string;
  requirementNumber: string;
  title: string;
  reference: string;
  description: string;
  category: string;
  jurisdiction: string;
  authority: string;
  effectiveDate: string;
  status: string;
  createdAt: string;
}

const Legal: React.FC = () => {
  const [requirements, setRequirements] = useState<LegalRequirement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      setLoading(true);
      const response = await api.get('/legal/requirements');
      setRequirements(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch legal requirements');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
          <h1 className="text-3xl font-bold text-gray-900">Legal Requirements</h1>
          <button
            onClick={() => navigate('/legal/new')}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Requirement
          </button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reference</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jurisdiction</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Authority</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effective Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {requirements.map((req) => (
              <tr key={req.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{req.requirementNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{req.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.reference}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.jurisdiction}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.authority}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(req.effectiveDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {requirements.length === 0 && (
          <div className="p-6 text-center text-gray-500">No legal requirements found</div>
        )}
      </div>
      </main>
    </div>
  );
};

export default Legal;
