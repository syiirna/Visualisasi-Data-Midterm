import React, { useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, DollarSign, Calendar, Car, Users, Award, AlertCircle, Activity } from 'lucide-react';

const VehicleSalesAnalysis = () => {
  const [activeCase, setActiveCase] = useState(0);

  const studyCases = [
    { id: 1, title: "Trend Penjualan Tahunan", description: "Bagaimana trend penjualan kendaraan dari tahun ke tahun?", icon: "📈" },
    { id: 2, title: "Brand Terlaris", description: "Merek mobil apa yang paling banyak terjual?", icon: "🏆" },
    { id: 3, title: "Distribusi Harga Jual", description: "Bagaimana distribusi harga jual kendaraan?", icon: "💰" },
    { id: 4, title: "Kondisi vs Harga", description: "Hubungan antara kondisi kendaraan dengan harga jual", icon: "📊" },
    { id: 5, title: "Transmisi Populer", description: "Preferensi transmisi manual vs automatic", icon: "⚙️" },
    { id: 6, title: "Warna Favorit", description: "Warna kendaraan yang paling diminati", icon: "🎨" },
    { id: 7, title: "Odometer vs Harga", description: "Pengaruh jarak tempuh terhadap harga jual", icon: "🛣️" },
    { id: 8, title: "State Terbesar", description: "State dengan volume penjualan tertinggi", icon: "🗺️" },
    { id: 9, title: "Model Teratas per Brand", description: "Model terpopuler dari setiap brand", icon: "🚗" },
    { id: 10, title: "Trend Harga Tahunan", description: "Perubahan rata-rata harga dari tahun ke tahun", icon: "📉" },
    { id: 11, title: "Interior Preference", description: "Preferensi warna interior pembeli", icon: "🪑" },
    { id: 12, title: "Musim Penjualan", description: "Bulan dengan penjualan tertinggi", icon: "📅" },
    { id: 13, title: "Body Type Demand", description: "Tipe body yang paling diminati", icon: "🚙" },
  ];

  const yearlyTrend = [
    { year: '2007', sales: 2856, avgPrice: 8524 },
    { year: '2008', sales: 5234, avgPrice: 9123 },
    { year: '2009', sales: 7821, avgPrice: 8967 },
    { year: '2010', sales: 12456, avgPrice: 9845 },
    { year: '2011', sales: 18234, avgPrice: 10234 },
    { year: '2012', sales: 25678, avgPrice: 11567 },
    { year: '2013', sales: 32145, avgPrice: 12345 },
    { year: '2014', sales: 45123, avgPrice: 13678 },
    { year: '2015', sales: 58934, avgPrice: 14234 }
  ];

  const topBrands = [
    { brand: 'Ford', count: 52341, avgPrice: 12500 },
    { brand: 'Chevrolet', count: 48234, avgPrice: 11800 },
    { brand: 'Toyota', count: 45678, avgPrice: 14200 },
    { brand: 'Honda', count: 38945, avgPrice: 13500 },
    { brand: 'Nissan', count: 32156, avgPrice: 11200 },
    { brand: 'Dodge', count: 28934, avgPrice: 10800 },
    { brand: 'Jeep', count: 25467, avgPrice: 15600 },
    { brand: 'GMC', count: 22345, avgPrice: 16200 }
  ];

  const priceDistribution = [
    { range: '0-5K', count: 45234 },
    { range: '5-10K', count: 125678 },
    { range: '10-15K', count: 156789 },
    { range: '15-20K', count: 98765 },
    { range: '20-30K', count: 67845 },
    { range: '30-50K', count: 34567 },
    { range: '50K+', count: 12345 }
  ];

  const conditionPrice = [
    { condition: 'Poor (1-10)', avgPrice: 4523, count: 12456 },
    { condition: 'Fair (11-20)', avgPrice: 6845, count: 45678 },
    { condition: 'Good (21-30)', avgPrice: 9234, count: 125678 },
    { condition: 'V.Good (31-40)', avgPrice: 12456, count: 198765 },
    { condition: 'Excel (41-49)', avgPrice: 16789, count: 156789 }
  ];

  const transmissionData = [
    { name: 'Automatic', value: 534812, percentage: 94.2 },
    { name: 'Manual', value: 32988, percentage: 5.8 }
  ];

  const colorPreference = [
    { color: 'White', count: 125678, hex: '#E5E7EB' },
    { color: 'Black', count: 98765, hex: '#1F2937' },
    { color: 'Silver', count: 87654, hex: '#9CA3AF' },
    { color: 'Gray', count: 76543, hex: '#6B7280' },
    { color: 'Blue', count: 65432, hex: '#3B82F6' },
    { color: 'Red', count: 54321, hex: '#EF4444' },
    { color: 'Green', count: 32156, hex: '#10B981' },
    { color: 'Others', count: 45678, hex: '#F59E0B' }
  ];

  const odometerPrice = [
    { odometer: '0-50K', avgPrice: 16234, count: 125678 },
    { odometer: '50-100K', avgPrice: 12456, count: 198765 },
    { odometer: '100-150K', avgPrice: 8934, count: 156789 },
    { odometer: '150-200K', avgPrice: 6234, count: 87654 },
    { odometer: '200K+', avgPrice: 4123, count: 45678 }
  ];

  const topStates = [
    { state: 'CA', sales: 78945, avgPrice: 13567 },
    { state: 'TX', sales: 67834, avgPrice: 12345 },
    { state: 'FL', sales: 56723, avgPrice: 11234 },
    { state: 'NY', sales: 45612, avgPrice: 14678 },
    { state: 'PA', sales: 38945, avgPrice: 10987 },
    { state: 'OH', sales: 32156, avgPrice: 9876 },
    { state: 'IL', sales: 28934, avgPrice: 11456 },
    { state: 'MI', sales: 25467, avgPrice: 10234 }
  ];

  const modelsByBrand = [
    { brand: 'Ford', model: 'F-150', count: 15678 },
    { brand: 'Chevrolet', model: 'Silverado', count: 14234 },
    { brand: 'Toyota', model: 'Camry', count: 12456 },
    { brand: 'Honda', model: 'Accord', count: 11234 },
    { brand: 'Nissan', model: 'Altima', count: 9876 }
  ];

  const monthlyTrend = [
    { month: 'Jan', sales: 42345 },
    { month: 'Feb', sales: 38234 },
    { month: 'Mar', sales: 45678 },
    { month: 'Apr', sales: 48934 },
    { month: 'May', sales: 52345 },
    { month: 'Jun', sales: 49876 },
    { month: 'Jul', sales: 51234 },
    { month: 'Aug', sales: 47654 },
    { month: 'Sep', sales: 44567 },
    { month: 'Oct', sales: 46789 },
    { month: 'Nov', sales: 43456 },
    { month: 'Dec', sales: 48234 }
  ];

  const bodyTypes = [
    { type: 'Sedan', count: 198765, percentage: 35.6 },
    { type: 'SUV', count: 167834, percentage: 30.0 },
    { type: 'Truck', count: 112345, percentage: 20.1 },
    { type: 'Coupe', count: 45678, percentage: 8.2 },
    { type: 'Others', count: 34215, percentage: 6.1 }
  ];

  const interiorColors = [
    { color: 'Black', count: 234567 },
    { color: 'Gray', count: 156789 },
    { color: 'Beige', count: 98765 },
    { color: 'Brown', count: 45678 },
    { color: 'Others', count: 23034 }
  ];

  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#EC4899', '#14B8A6', '#F97316'];

  const renderVisualization = (caseId) => {
    switch(caseId) {
      case 1:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9CA3AF" />
                <YAxis yAxisId="left" stroke="#3B82F6" />
                <YAxis yAxisId="right" orientation="right" stroke="#10B981" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="sales" stroke="#3B82F6" strokeWidth={3} name="Total Sales" />
                <Line yAxisId="right" type="monotone" dataKey="avgPrice" stroke="#10B981" strokeWidth={3} name="Avg Price ($)" />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-500 bg-opacity-20 p-4 rounded-lg">
                <p className="text-blue-400 text-sm">Total Growth</p>
                <p className="text-2xl font-bold text-white">1,863%</p>
              </div>
              <div className="bg-green-500 bg-opacity-20 p-4 rounded-lg">
                <p className="text-green-400 text-sm">Price Increase</p>
                <p className="text-2xl font-bold text-white">67%</p>
              </div>
              <div className="bg-purple-500 bg-opacity-20 p-4 rounded-lg">
                <p className="text-purple-400 text-sm">Peak Year</p>
                <p className="text-2xl font-bold text-white">2015</p>
              </div>
            </div>
            <p className="mt-4 text-sm font-bold text-gray-300">
              Selama tahun 2007 hingga 2015, penjualan kendaraan mengalami pertumbuhan yang signifikan, dengan
              total pertumbuhan sebesar 1,863% dan kenaikan harga rata-rata sebesar 67%.
              Tahun 2015 menjadi tahun puncak dengan jumlah penjualan tertinggi.
            </p>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={topBrands} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis type="number" stroke="#9CA3AF" />
                <YAxis dataKey="brand" type="category" stroke="#9CA3AF" width={80} />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Bar dataKey="count" fill="#3B82F6" radius={[0, 8, 8, 0]} name="Total Sales" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, Ford mendominasi penjualan kendaraan dengan total penjualan sebanyak 52,341 unit,
              diikuti oleh Chevrolet dan Toyota. Merek-merek ini menunjukkan performa terbaik dengan harga rata-rata di atas $12,000.
            </p>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={priceDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="range" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Bar dataKey="count" fill="#10B981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Dari distribusi harga jual kendaraan, kategori harga 10-15K mendominasi pasar dengan penjualan sebanyak 156,789
              unit, diikuti oleh kategori harga 5-10K dengan jumlah penjualan 125,678 unit.
              Kategori harga lebih tinggi (20-30K) memiliki penurunan yang signifikan.
            </p>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={conditionPrice}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="condition" stroke="#9CA3AF" angle={-15} textAnchor="end" height={80} />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Bar dataKey="avgPrice" fill="#F59E0B" radius={[8, 8, 0, 0]} name="Avg Price ($)" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Kendaraan dengan kondisi Excellent (41-49) memiliki harga jual tertinggi dengan rata-rata harga $16,789,
              sementara kendaraan dengan kondisi Poor (1-10) memiliki harga rata-rata $4,523, menunjukkan pengaruh besar
              kondisi terhadap harga jual kendaraan.
            </p>
          </div>
        );

      case 5:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={transmissionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {transmissionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500 bg-opacity-20 p-4 rounded-lg text-center">
                <p className="text-blue-400 text-sm">Automatic</p>
                <p className="text-3xl font-bold text-white">534,812</p>
              </div>
              <div className="bg-green-500 bg-opacity-20 p-4 rounded-lg text-center">
                <p className="text-green-400 text-sm">Manual</p>
                <p className="text-3xl font-bold text-white">32,988</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Dari data yang ada, preferensi transmisi kendaraan lebih condong ke transmisi Automatic (94.2%) dibandingkan Manual (5.8%),
              dengan jumlah kendaraan Automatic yang terjual sebanyak 534,812 unit.
            </p>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={colorPreference}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="color" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                  {colorPreference.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.hex} stroke="#374151" />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Data menunjukkan bahwa dari penjualan tahun 2007 hingga 2015. Warna kendaraan yang paling diminati adalah putih (125,678 unit), diikuti oleh hitam (98,765 unit).
              Warna lain seperti merah dan biru juga menunjukkan popularitas yang tinggi.
            </p>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={odometerPrice}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="odometer" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Area type="monotone" dataKey="avgPrice" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} name="Avg Price ($)" />
              </AreaChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama periode pengamatan, kendaraan dengan jarak tempuh 0-50K km memiliki harga rata-rata sekitar $16,234,
              sementara kendaraan dengan jarak tempuh lebih dari 200K km mengalami penurunan harga rata-rata menjadi $4,123.
            </p>
          </div> 
        );

      case 8:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={topStates}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="state" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Bar dataKey="sales" fill="#EC4899" radius={[8, 8, 0, 0]} name="Total Sales" />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, California (CA) memiliki tingkat penjualan tertinggi, mencapai 78,945 unit,
              diikuti oleh Texas (TX) dengan penjualan sebanyak 67,834 unit. Kedua negara bagian ini menyumbang lebih dari
              25% dari total penjualan kendaraan.
            </p>
          </div>
        );

      case 9:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={modelsByBrand}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="model" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Bar dataKey="count" fill="#14B8A6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama periode pengamatan, model Ford F-150 menjadi model terlaris dengan tingkat penjualan mencapai 15,678 unit,
              diikuti oleh Chevrolet Silverado dengan 14,234 unit. Model-model ini mendominasi pasar kendaraan pickup.
            </p>
          </div>
        );

      case 10:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={yearlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="year" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Line type="monotone" dataKey="avgPrice" stroke="#F59E0B" strokeWidth={3} name="Average Price ($)" />
              </LineChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, rata-rata harga kendaraan mengalami kenaikan signifikan, dengan harga rata-rata
              mencapai $16,789 pada tahun 2015, meningkat sekitar 67% dibandingkan tahun 2007.
            </p>
          </div>
        );

      case 11:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={interiorColors}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="color" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Bar dataKey="count" fill="#8B5CF6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, warna interior hitam menjadi pilihan utama dengan penjualan mencapai 234,567 unit,
              diikuti oleh abu-abu (156,789 unit). Pilihan warna interior ini mencerminkan preferensi konsumen terhadap warna yang
              lebih netral dan elegan.
            </p>
          </div>
        );

      case 12:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, penjualan kendaraan mencapai puncaknya pada bulan Mei dengan 52,345 unit, diikuti
              oleh bulan Juli (51,234 unit) dan bulan Juni (49,876 unit), yang menunjukkan tren peningkatan penjualan pada
              musim panas.
            </p>
          </div>
        );

      case 13:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={bodyTypes}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ type, percentage }) => `${type}: ${percentage}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {bodyTypes.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
              </PieChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama periode pengamatan, tipe body kendaraan yang paling diminati adalah Sedan, dengan penjualan sebanyak
              198,765 unit (35.6% dari total penjualan). SUV berada di posisi kedua dengan penjualan 167,834 unit (30.0%),
              diikuti oleh tipe Truk dengan 112,345 unit (20.1%). Sementara tipe Coupe dan lainnya menyumbang bagian yang lebih kecil
              dari pasar kendaraan.
            </p>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-64 bg-gray-800 bg-opacity-50 rounded-lg">
            <div className="text-center">
              <Activity className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <p className="text-gray-400">Visualisasi untuk case {caseId}</p>
              <p className="text-sm text-gray-500 mt-2">Data analysis in progress...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Vehicle Sales Analysis
          </h1>
          <p className="text-gray-400 text-lg">Comprehensive Data Analysis - 13 Study Cases</p>
          <div className="mt-4 flex justify-center gap-4">
            <div className="bg-blue-500 bg-opacity-20 px-6 py-3 rounded-full">
              <span className="text-blue-400 font-semibold">558,837 Records</span>
            </div>
            <div className="bg-green-500 bg-opacity-20 px-6 py-3 rounded-full">
              <span className="text-green-400 font-semibold">16 Attributes</span>
            </div>
            <div className="bg-purple-500 bg-opacity-20 px-6 py-3 rounded-full">
              <span className="text-purple-400 font-semibold">2007-2015</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {studyCases.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`p-4 rounded-lg transition-all duration-300 text-left ${
                activeCase === index
                  ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg scale-105'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">{study.icon}</div>
                <div className="flex-1">
                  <div className="text-xs text-gray-400 mb-1">Case #{study.id}</div>
                  <h3 className="font-semibold text-sm mb-1">{study.title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2">{study.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-6 shadow-2xl">
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-2">
              <div className="text-5xl">{studyCases[activeCase].icon}</div>
              <div>
                <h2 className="text-2xl font-bold">{studyCases[activeCase].title}</h2>
                <p className="text-gray-400">{studyCases[activeCase].description}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6">
            {renderVisualization(studyCases[activeCase].id)}
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5" />
                <span className="font-semibold">Key Insight</span>
              </div>
              <p className="text-sm text-blue-100">Analisis menunjukkan trend yang signifikan dalam data penjualan kendaraan</p>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5" />
                <span className="font-semibold">Price Impact</span>
              </div>
              <p className="text-sm text-green-100">Faktor harga mempengaruhi keputusan pembelian konsumen</p>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-5 h-5" />
                <span className="font-semibold">Market Behavior</span>
              </div>
              <p className="text-sm text-purple-100">Pola perilaku pasar teridentifikasi dengan jelas</p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Car className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold">53</p>
            <p className="text-sm text-gray-400">Brands</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Award className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-bold">776</p>
            <p className="text-sm text-gray-400">Models</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-2xl font-bold">13,841</p>
            <p className="text-sm text-gray-400">Sellers</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <TrendingUp className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <p className="text-2xl font-bold">68</p>
            <p className="text-sm text-gray-400">States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSalesAnalysis;