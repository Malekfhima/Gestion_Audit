import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../lib/api';
import Navigation from '../components/Navigation';
import { Plus } from 'lucide-react';

interface Risk {
  id: string;
  riskNumber: string;
  title: string;
  description: string;
  category: string;
  probability: number;
  impact: number;
  riskScore: number;
  riskLevel: string;
  status: string;
  createdAt: string;
}

const Risks: React.FC = () => {
  const [risks, setRisks] = useState<Risk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRisks();
  }, []);

  const fetchRisks = async () => {
    try {
      setLoading(true);
      const response = await api.get('/risks');
      setRisks(response.data.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch risks');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case 'CRITICAL': return 'bg-red-100 text-red-800';
      case 'HIGH': return 'bg-orange-100 text-orange-800';
      case 'MEDIUM': return 'bg-yellow-100 text-yellow-800';
      case 'LOW': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
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
          <h1 className="text-3xl font-bold text-gray-900">Risks</h1>
          <button
            onClick={() => navigate('/risks/new')}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Risk
          </button>
        </div>
        <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Probability</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Impact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Level</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {risks.map((risk) => (
              <tr key={risk.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{risk.riskNumber}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{risk.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{risk.category}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{risk.probability}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{risk.impact}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{risk.riskScore}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskLevelColor(risk.riskLevel)}`}>
                    {risk.riskLevel}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{risk.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {risks.length === 0 && (
          <div className="p-6 text-center text-gray-500">No risks found</div>
        )}
      </div>
      </main>
    </div>
  );
};

export default Risks;
