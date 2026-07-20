"use client";

import { useState, useEffect } from 'react';
import { Plus, Edit3, Trash2, Upload } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { Modal } from '@/components/ui/Modal';

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingService, setEditingService] = useState<any>(null);
  const [isSaving, setIsSaving] = useState(false);

  // Form State
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    duration: '',
    image: '',
    href: '',
    order_index: 0
  });

  const fetchServices = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('order_index', { ascending: true });
    
    if (error) {
      console.error("Error fetching services:", error);
      setError(true);
    } else {
      setServices(data || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const openAddModal = () => {
    setEditingService(null);
    setFormData({ title: '', description: '', duration: '', image: '', href: '', order_index: services.length });
    setImageFile(null);
    setIsModalOpen(true);
  };

  const openEditModal = (service: any) => {
    setEditingService(service);
    setFormData({
      title: service.title || '',
      description: service.description || '',
      duration: service.duration || '',
      image: service.image || '',
      href: service.href || '',
      order_index: service.order_index || 0
    });
    setImageFile(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this service? It will be removed from your website immediately.")) {
        return;
    }
    
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (error) {
        alert("Error deleting service: " + error.message);
    } else {
        fetchServices();
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    let finalImageUrl = formData.image;

    // Handle Image Upload if a file was selected
    if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
            .from('spa-images')
            .upload(fileName, imageFile);
        
        if (uploadError) {
            alert("Error uploading image: " + uploadError.message + "\n\nMake sure you created the 'spa-images' bucket and set it to Public!");
            setIsSaving(false);
            return;
        }
        
        const { data: publicUrlData } = supabase.storage
            .from('spa-images')
            .getPublicUrl(fileName);
            
        finalImageUrl = publicUrlData.publicUrl;
    }

    const dataToSave = {
        title: formData.title,
        description: formData.description,
        duration: formData.duration,
        image: finalImageUrl,
        href: formData.href,
        order_index: formData.order_index
    };

    let error;

    if (editingService) {
        // Update
        const response = await supabase.from('services').update(dataToSave).eq('id', editingService.id);
        error = response.error;
    } else {
        // Insert
        const response = await supabase.from('services').insert([dataToSave]);
        error = response.error;
    }

    setIsSaving(false);

    if (error) {
        alert("Error saving service: " + error.message);
    } else {
        setIsModalOpen(false);
        fetchServices();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-charcoal">Services Menu</h1>
          <p className="text-charcoal-light mt-1 font-sans">Manage the spa treatments displayed on your website.</p>
        </div>
        <button 
            onClick={openAddModal}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gold text-charcoal-fixed rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors w-full sm:w-auto font-sans shadow-sm"
        >
          <Plus size={16} />
          Add Service
        </button>
      </div>

      {error && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg border border-red-200 font-sans">
          Failed to load services from the database.
        </div>
      )}

      {loading ? (
        <div className="flex justify-center p-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-forest"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-sans">
            {services.length === 0 && !error ? (
                <div className="col-span-full p-8 text-center text-charcoal-light bg-beige rounded-xl border border-gold/20">
                    No services found in the database.
                </div>
            ) : null}

            {services.map((service: any) => (
                <div key={service.id} className="bg-beige p-6 rounded-xl shadow-sm border border-gold/20 flex flex-col h-full overflow-hidden">
                    {service.image && (
                      <div className="w-full h-40 mb-4 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="flex justify-between items-start gap-4">
                        <h3 className="text-lg font-heading font-bold text-charcoal line-clamp-2">{service.title}</h3>
                        <span className="bg-forest/10 text-forest text-xs font-medium px-2.5 py-1 rounded-full whitespace-nowrap">Service</span>
                    </div>
                    <p className="text-charcoal-light text-sm mt-3 flex-grow line-clamp-4">
                        {service.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-gold/20 pt-4">
                        <div className="flex flex-col">
                            <span className="text-sm font-medium text-charcoal">{service.duration}</span>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => openEditModal(service)} className="p-2 text-charcoal-light hover:text-blue-500 transition-colors" title="Edit Service">
                                <Edit3 size={18} />
                            </button>
                            <button onClick={() => handleDelete(service.id)} className="p-2 text-charcoal-light hover:text-red-500 transition-colors" title="Delete Service">
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      )}

      {/* Add / Edit Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={editingService ? "Edit Service" : "Add New Service"}
      >
        <form onSubmit={handleSave} className="space-y-4">
            <div className="space-y-1">
                <label className="text-sm font-medium text-charcoal">Title</label>
                <input 
                    required 
                    type="text" 
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                    placeholder="e.g. Deep Tissue Massage"
                />
            </div>
            
            <div className="space-y-1">
                <label className="text-sm font-medium text-charcoal">Duration / Price text</label>
                <input 
                    required 
                    type="text" 
                    value={formData.duration}
                    onChange={(e) => setFormData({...formData, duration: e.target.value})}
                    className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                    placeholder="e.g. 60 Min / ₹2500"
                />
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-charcoal">Description</label>
                <textarea 
                    required 
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal resize-none" 
                    placeholder="Describe the treatment..."
                />
            </div>

            <div className="space-y-2 border-t border-gold/20 pt-4 mt-4">
                <label className="text-sm font-medium text-charcoal">Image</label>
                
                {/* Current Image Preview */}
                {formData.image && !imageFile && (
                   <div className="text-xs text-charcoal-light mb-2 flex items-center gap-2">
                       Current image: 
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                       <img src={formData.image} alt="Preview" className="h-8 w-8 object-cover rounded" />
                   </div>
                )}
                
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 px-4 py-2 bg-beige border border-gold/30 rounded-lg text-sm font-medium text-charcoal hover:bg-gold/10 transition-colors cursor-pointer">
                        <Upload size={16} />
                        Upload from PC
                        <input 
                            type="file" 
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                    setImageFile(e.target.files[0]);
                                }
                            }}
                        />
                    </label>
                    <span className="text-sm text-charcoal-light">
                        {imageFile ? imageFile.name : 'Or paste a URL below'}
                    </span>
                </div>
                
                {!imageFile && (
                    <input 
                        type="text" 
                        value={formData.image}
                        onChange={(e) => setFormData({...formData, image: e.target.value})}
                        className="w-full mt-2 px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                        placeholder="/images/massage.jpg or https://..."
                    />
                )}
            </div>

            <div className="space-y-1 pt-2">
                <label className="text-sm font-medium text-charcoal">Booking Link (Optional)</label>
                <input 
                    type="text" 
                    value={formData.href}
                    onChange={(e) => setFormData({...formData, href: e.target.value})}
                    className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                    placeholder="#booking"
                />
            </div>

            <div className="space-y-1">
                <label className="text-sm font-medium text-charcoal">Sort Order</label>
                <input 
                    type="number" 
                    value={formData.order_index}
                    onChange={(e) => setFormData({...formData, order_index: parseInt(e.target.value) || 0})}
                    className="w-full px-3 py-2 bg-cream border border-gold/30 rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-charcoal" 
                />
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
                    className="px-4 py-2 bg-gold text-charcoal-fixed rounded-lg hover:bg-gold-dark transition-colors font-medium disabled:opacity-50 flex items-center gap-2"
                >
                    {isSaving ? (
                        <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cream"></div>
                            Saving...
                        </>
                    ) : 'Save Service'}
                </button>
            </div>
        </form>
      </Modal>
    </div>
  );
}
