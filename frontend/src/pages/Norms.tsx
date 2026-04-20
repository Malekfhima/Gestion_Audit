import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import Navigation from '../components/Navigation';
import { Plus } from 'lucide-react';

interface Norm {
  id: string;
  normNumber: string;
  title: string;
  reference: string;
  version: string;
  category: string;
  status: string;
  effectiveDate: string;
  expiryDate?: string;
  createdAt: string;
}

const Norms: React.FC = () => {
  const [norms, setNorms] = useState<Norm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchNorms();
  }, []);

  const fetchNorms = async () => {
    try {
      setLoading(true);
      const response = await api.get('/norms');
      setNorms(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch norms');
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
          <h1 className="text-3xl font-bold text-gray-900">Norms</h1>
          <button
            onClick={() => navigate('/norms/new')}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Norm
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
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effective Date</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {norms.map((norm) => (
              <tr key={norm.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{norm.normNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{norm.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{norm.reference}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{norm.category}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    norm.status === 'ACTIVE' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {norm.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(norm.effectiveDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {norms.length === 0 && (
          <div className="p-6 text-center text-gray-500">No norms found</div>
        )}
      </div>
      </main>
    </div>
  );
};

export default Norms;
