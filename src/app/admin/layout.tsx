import Link from 'next/link';
import { 
    LayoutDashboard, 
    CalendarCheck, 
    Users, 
    PackageSearch, 
    Settings,
    LogOut
} from 'lucide-react';
import { AuthGuard } from '@/components/ui/AuthGuard';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthGuard>
      <div className="flex min-h-screen bg-cream font-sans">
        {/* Sidebar */}
        <aside className="w-64 bg-beige border-r border-gold/20 hidden md:flex flex-col">
          <div className="p-6 border-b border-gold/20">
            <h2 className="text-2xl font-heading font-bold text-charcoal tracking-tight">Ara Spa CRM</h2>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 text-charcoal-light rounded-lg hover:bg-gold/10 hover:text-charcoal transition-colors">
              <LayoutDashboard size={20} className="text-gold" />
              <span className="font-medium">Dashboard</span>
            </Link>
            <Link href="/admin/appointments" className="flex items-center gap-3 px-4 py-3 text-charcoal-light rounded-lg hover:bg-gold/10 hover:text-charcoal transition-colors">
              <CalendarCheck size={20} className="text-gold" />
              <span className="font-medium">Appointments</span>
            </Link>
            <Link href="/admin/customers" className="flex items-center gap-3 px-4 py-3 text-charcoal-light rounded-lg hover:bg-gold/10 hover:text-charcoal transition-colors">
              <Users size={20} className="text-gold" />
              <span className="font-medium">Customers</span>
            </Link>
            <Link href="/admin/services" className="flex items-center gap-3 px-4 py-3 text-charcoal-light rounded-lg hover:bg-gold/10 hover:text-charcoal transition-colors">
              <PackageSearch size={20} className="text-gold" />
              <span className="font-medium">Services</span>
            </Link>
          </nav>

          <div className="p-4 border-t border-gold/20 space-y-2">
            <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 text-charcoal-light rounded-lg hover:bg-gold/10 hover:text-charcoal transition-colors">
              <Settings size={20} className="text-gold" />
              <span className="font-medium">Settings</span>
            </Link>
            <button className="w-full flex items-center gap-3 px-4 py-3 text-red-600 rounded-lg hover:bg-red-500/10 transition-colors">
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto text-charcoal">
          {/* Mobile Header */}
          <header className="md:hidden bg-beige border-b border-gold/20 p-4 flex justify-between items-center">
              <h2 className="text-xl font-heading font-bold text-charcoal">Ara Spa CRM</h2>
              <button className="p-2 text-charcoal-light hover:text-charcoal">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </button>
          </header>
          
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
