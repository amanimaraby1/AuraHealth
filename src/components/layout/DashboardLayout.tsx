export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <h1 className="p-6 text-2xl font-bold">AuraHealth</h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white shadow p-6">
          <h2 className="text-3xl font-bold">Dashboard</h2>
        </div>

        {/* Content Area */}
        <div className="p-6">
          <p>Your dashboard content will go here</p>
        </div>
      </div>
    </div>
  );
}