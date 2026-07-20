"use client";

import { useState, useEffect } from 'react';
import { Plus, Filter, Edit3, Search } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Modal } from '@/components/ui/Modal';

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Edit Status Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApt, setEditingApt] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [newStatus, setNewStatus] = useState('Pending');

  // Add Booking Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [addFormData, setAddFormData] = useState({
      name: '',
      phone: '',
      email: '',
      service: '',
      custom_service: '',
      preferred_date: ''
  });

  const fetchAppointments = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error("Error fetching appointments:", error);
      setError(true);
    } else {
      setAppointments(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Not specified';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const openEditModal = (apt: any) => {
    setEditingApt(apt);
    setNewStatus(apt.status || 'Pending');
    setIsModalOpen(true);
  };

  const handleSaveStatus = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingApt) return;
    setIsSaving(true);

    const { error } = await supabase
        .from('contact_submissions')
        .update({ status: newStatus })
        .eq('id', editingApt.id);

    setIsSaving(false);

    if (error) {
        alert("Error updating status: " + error.message + "\n\n(Make sure you have run the RLS SQL to allow updates!)");
    } else {
        setIsModalOpen(false);
        fetchAppointments();
    }
  };

  const openAddModal = () => {
      setAddFormData({
          name: '',
          phone: '',
          email: '',
          service: '',
          custom_service: '',
          preferred_date: ''
      });
      setIsAddModalOpen(true);
  };

  const handleAddSave = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsAdding(true);

      const finalService = addFormData.service === 'other' 
          ? (addFormData.custom_service || 'Other') 
          : addFormData.service;

      const { error } = await supabase.from('contact_submissions').insert([{
          name: addFormData.name,
          phone: addFormData.phone,
          email: addFormData.email,
          service: finalService,
          preferred_date: addFormData.preferred_date || null,
          status: 'Pending'
      }]);

      setIsAdding(false);

      if (error) {
          alert("Error creating booking: " + error.message + "\n\n(Make sure you have run the RLS SQL to allow inserts!)");
      } else {
          setIsAddModalOpen(false);
          fetchAppointments();
      }
  };

  const getStatusColor = (status: string) => {
      switch(status?.toLowerCase()) {
          case 'confirmed': return 'bg-forest text-cream-fixed border-forest-dark';
          case 'completed': return 'bg-charcoal text-cream-fixed border-charcoal-dark';
          case 'cancelled': return 'bg-red-600 text-white border-red-700';
          default: return 'bg-gold text-charcoal-fixed border-gold-dark';
      }
  };

  const filteredAppointments = appointments.filter(apt => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      (apt.name && apt.name.toLowerCase().includes(query)) ||
      (apt.email && apt.email.toLowerCase().includes(query)) ||
      (apt.phone && apt.phone.includes(query)) ||
      (apt.service && apt.service.toLowerCase().replace('-', ' ').includes(query))
    );
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Appointments</h1>
          <p className="text-charcoal-light mt-1 font-sans">Manage all spa bookings and requests from the website.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-beige border border-gold/30 rounded-lg text-sm font-medium text-charcoal hover:bg-gold/10 transition-colors w-full sm:w-auto font-sans cursor-not-allowed opacity-50" title="Coming soon">
            <Filter size={16} />
            Filter
          </button>
          <button 
            onClick={openAddModal}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gold text-charcoal-fixed rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors w-full sm:w-auto font-sans shadow-sm"
          >
            <Plus size={16} />
            New Booking
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 font-sans">
          Failed to load appointments from the database.
        </div>
      )}

      <div className="bg-beige rounded-xl shadow-sm border border-gold/20 overflow-hidden">
        <div className="p-4 border-b border-gold/20 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="relative w-full sm:w-96 font-sans">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-light" size={18} />
                <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by name, email, phone, or service..." 
                    className="w-full pl-10 pr-4 py-2 bg-cream/50 border border-gold/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gold text-charcoal placeholder:text-charcoal-light/70"
                />
            </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap font-sans">
            <thead className="bg-cream/50 text-charcoal-light border-b border-gold/20">
              <tr>
                <th className="px-6 py-4 font-medium">Submitted On</th>
                <th className="px-6 py-4 font-medium">Customer</th>
                <th className="px-6 py-4 font-medium">Requested Service</th>
                <th className="px-6 py-4 font-medium">Pref. Date</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {loading ? (
                <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-charcoal-light">
                        <div className="flex justify-center"><div className="animate-spin rounded-full h-6 w-6 border-b-2 border-forest"></div></div>
                    </td>
                </tr>
              ) : appointments.length === 0 && !error ? (
                <tr>
                    <td colSpan={6} className="px-6 py-8 text-center text-charcoal-light">
                        No appointment requests found.
                    </td>
                </tr>
              ) : null}
              {filteredAppointments.map((apt: any) => (
                  <tr key={apt.id} className="hover:bg-cream/30 transition-colors">
                    <td className="px-6 py-4 text-charcoal">
                        <div className="font-medium">{formatDate(apt.created_at)}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-charcoal">{apt.name}</div>
                      <div className="text-xs text-charcoal-light">{apt.phone} | {apt.email}</div>
                    </td>
                    <td className="px-6 py-4 text-charcoal capitalize">
                        {apt.service ? apt.service.replace('-', ' ') : 'Not specified'}
                    </td>
                    <td className="px-6 py-4 text-charcoal">
                        {formatDate(apt.preferred_date)}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 text-xs font-bold border shadow-sm rounded-full ${getStatusColor(apt.status || 'Pending')}`}>
                          {apt.status || 'Pending'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                        <button onClick={() => openEditModal(apt)} className="p-2 text-charcoal-light hover:text-forest transition-colors flex items-center gap-1 text-xs font-medium">
                            <Edit3 size={14} /> Update
                        </button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Status Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Update Appointment Status"
      >
        <form onSubmit={handleSaveStatus} className="space-y-4">
            <div className="space-y-1 text-sm text-charcoal-light mb-4">
                <p><strong>Customer:</strong> {editingApt?.name}</p>
                <p><strong>Service:</strong> {editingApt?.service?.replace('-', ' ')}</p>
                <p><strong>Requested Date:</strong> {formatDate(editingApt?.preferred_date)}</p>
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-charcoal">Status</label>
                <select 
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
            </div>

            <div className="pt-4 flex justify-end gap-3">
                <button 
                    type="button" 
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 text-charcoal-light hover:bg-gold/10 rounded-lg transition-colors font-medium"
                >
                    Cancel
                </button>
                <button 
                    type="submit" 
                    disabled={isSaving}
                    className="px-4 py-2 bg-gold text-charcoal-fixed rounded-lg hover:bg-gold-dark transition-colors font-medium disabled:opacity-50"
                >
                    {isSaving ? 'Saving...' : 'Update Status'}
                </button>
            </div>
        </form>
      </Modal>

      {/* Add Booking Modal */}
      <Modal 
        isOpen={isAddModalOpen} 
        onClose={() => setIsAddModalOpen(false)} 
        title="Create New Booking"
      >
        <form onSubmit={handleAddSave} className="space-y-4">
            <div className="space-y-1">
                <label className="text-sm font-medium text-charcoal">Customer Name</label>
                <input 
                    required 
                    type="text" 
                    value={addFormData.name}
                    onChange={(e) => setAddFormData({...addFormData, name: e.target.value})}
                    className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                    <label className="text-sm font-medium text-charcoal">Phone Number</label>
                    <input 
                        required 
                        type="tel" 
                        value={addFormData.phone}
                        onChange={(e) => setAddFormData({...addFormData, phone: e.target.value})}
                        className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-sm font-medium text-charcoal">Email (Optional)</label>
                    <input 
                        type="email" 
                        value={addFormData.email}
                        onChange={(e) => setAddFormData({...addFormData, email: e.target.value})}
                        className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                    />
                </div>
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-charcoal">Service</label>
                <select 
                    required
                    value={addFormData.service}
                    onChange={(e) => setAddFormData({...addFormData, service: e.target.value})}
                    className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                >
                    <option value="">Select a service...</option>
                    <option value="aroma-therapy">Aroma</option>
                    <option value="balinese-therapy">Balinese Therapy</option>
                    <option value="thai-therapy">Thai Therapy</option>
                    <option value="deep-tissue-massage">Deep Tissue</option>
                    <option value="swedish-massage">Swedish Therapy</option>
                    <option value="tantra">Tantra</option>
                    <option value="other">Other / Custom</option>
                </select>
            </div>

            {addFormData.service === 'other' && (
                <div className="space-y-1">
                    <label className="text-sm font-medium text-charcoal">Custom Service (Optional)</label>
                    <input 
                        type="text" 
                        value={addFormData.custom_service}
                        onChange={(e) => setAddFormData({...addFormData, custom_service: e.target.value})}
                        className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                        placeholder="Type custom service..."
                    />
                </div>
            )}

            <div className="space-y-1">
                <label className="text-sm font-medium text-charcoal">Preferred Date</label>
                <input 
                    type="date" 
                    required
                    value={addFormData.preferred_date}
                    onChange={(e) => setAddFormData({...addFormData, preferred_date: e.target.value})}
                    className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                />
            </div>

            <div className="pt-4 flex justify-end gap-3">
                <button 
                    type="button" 
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 text-charcoal-light hover:bg-gold/10 rounded-lg transition-colors font-medium"
                >
                    Cancel
                </button>
                <button 
                    type="submit" 
                    disabled={isAdding}
                    className="px-4 py-2 bg-forest text-cream rounded-lg hover:bg-forest-dark transition-colors font-medium disabled:opacity-50"
                >
                    {isAdding ? 'Saving...' : 'Create Booking'}
                </button>
            </div>
        </form>
      </Modal>

    </div>
  );
}
