import React, { useState } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";
import {
  TrendingUp,
  DollarSign,
  Car,
  Users,
  Award,
  Activity,
  Trophy,
  Palette,
  BarChart3,
  Settings,
  MapPin,
  Calendar,
  Package
} from "lucide-react";

const VehicleSalesAnalysis = () => {
  const [activeCase, setActiveCase] = useState(0);

  const studyCases = [
    {
      id: 1,
      title: "Trend Penjualan Tahunan",
      description: "Bagaimana trend penjualan kendaraan dari tahun ke tahun?",
      icon: TrendingUp
    },
    {
      id: 2,
      title: "Brand Terlaris",
      description: "Merek mobil apa yang paling banyak terjual?",
      icon: Trophy
    },
    {
      id: 3,
      title: "Distribusi Harga Jual",
      description: "Bagaimana distribusi harga jual kendaraan?",
      icon: DollarSign
    },
    {
      id: 4,
      title: "Kondisi vs Harga",
      description: "Hubungan antara kondisi kendaraan dengan harga jual",
      icon: BarChart3
    },
    {
      id: 5,
      title: "Transmisi Populer",
      description: "Preferensi transmisi manual vs automatic",
      icon: Settings
    },
    {
      id: 6,
      title: "Warna Favorit",
      description: "Warna kendaraan yang paling diminati",
      icon: Palette
    },
    {
      id: 7,
      title: "Odometer vs Harga",
      description: "Pengaruh jarak tempuh terhadap harga jual",
      icon: Activity
    },
    {
      id: 8,
      title: "State Terbesar",
      description: "State dengan volume penjualan tertinggi",
      icon: MapPin
    },
    {
      id: 9,
      title: "Model Teratas per Brand",
      description: "Model terpopuler dari setiap brand",
      icon: Car
    },
    {
      id: 10,
      title: "Trend Harga Tahunan",
      description: "Perubahan rata-rata harga dari tahun ke tahun",
      icon: TrendingUp
    },
    {
      id: 11,
      title: "Interior Preference",
      description: "Preferensi warna interior pembeli",
      icon: Palette
    },
    {
      id: 12,
      title: "Musim Penjualan",
      description: "Bulan dengan penjualan tertinggi",
      icon: Calendar
    },
    {
      id: 13,
      title: "Body Type Demand",
      description: "Tipe body yang paling diminati",
      icon: Package
    }
  ];

  const yearlyTrend = [
    { year: "2007", sales: 27577, avgPrice: 7973 },
    { year: "2008", sales: 29908, avgPrice: 9548 },
    { year: "2009", sales: 20692, avgPrice: 10607 },
    { year: "2010", sales: 27311, avgPrice: 12227 },
    { year: "2011", sales: 45781, avgPrice: 15219 },
    { year: "2012", sales: 94869, avgPrice: 15635 },
    { year: "2013", sales: 91325, avgPrice: 16298 },
    { year: "2014", sales: 72013, avgPrice: 17940 },
    { year: "2015", sales: 58934, avgPrice: 14234 }
  ];

  const topBrands = [
    { brand: "Ford", count: 86589, avgPrice: 14386 },
    { brand: "Chevrolet", count: 54814, avgPrice: 11391 },
    { brand: "Nissan", count: 51623, avgPrice: 11890 },
    { brand: "Toyota", count: 36186, avgPrice: 12720 },
    { brand: "Dodge", count: 29292, avgPrice: 11253 },
    { brand: "Honda", count: 24392, avgPrice: 11793 },
    { brand: "Hyundai", count: 21085, avgPrice: 10959 },
    { brand: "Kia", count: 17588, avgPrice: 11772 }
  ];

  const priceDistribution = [
    { range: "0-5K", count: 77565 },
    { range: "5-10K", count: 103698 },
    { range: "10-15K", count: 140721 },
    { range: "15-20K", count: 85052 },
    { range: "20-30K", count: 78827 },
    { range: "30-50K", count: 11382 },
    { range: "50K+", count: 0 }
  ];

  const conditionPrice = [
    { condition: "Poor (1-10)", avgPrice: 12998, count: 56922 },
    { condition: "Fair (11-20)", avgPrice: 5628, count: 35269 },
    { condition: "Good (21-30)", avgPrice: 9378, count: 105083 },
    { condition: "V.Good (31-40)", avgPrice: 13321, count: 156838 },
    { condition: "Excel (41-49)", avgPrice: 17601, count: 143133 }
  ];

  const transmissionData = [
    { name: "Automatic", value: 482615, percentage: 97.1 },
    { name: "Manual", value: 14630, percentage: 2.9 }
  ];

  const colorPreference = [
    { color: "White", count: 94715, hex: "#E5E7EB" },
    { color: "Black", count: 99083, hex: "#1F2937" },
    { color: "Silver", count: 75494, hex: "#9CA3AF" },
    { color: "Gray", count: 75640, hex: "#6B7280" },
    { color: "Blue", count: 45705, hex: "#3B82F6" },
    { color: "Red", count: 38715, hex: "#EF4444" },
    { color: "Green", count: 8599, hex: "#10B981" },
    { color: "Others", count: 59290, hex: "#F59E0B" }
  ];

  const odometerPrice = [
    { odometer: "0-50K", avgPrice: 17253, count: 244442 },
    { odometer: "50-100K", avgPrice: 11730, count: 145135 },
    { odometer: "100-150K", avgPrice: 6280, count: 80191 },
    { odometer: "150-200K", avgPrice: 3964, count: 27469 },
    { odometer: "200K+", avgPrice: 2928, count: 8 }
  ];

  const topStates = [
    { state: "CA", sales: 63449, avgPrice: 13362 },
    { state: "TX", sales: 40915, avgPrice: 12733 },
    { state: "FL", sales: 76504, avgPrice: 13380 },
    { state: "GA", sales: 30223, avgPrice: 12534 },
    { state: "PA", sales: 49032, avgPrice: 14962 },
    { state: "NJ", sales: 24787, avgPrice: 12919 },
    { state: "IL", sales: 21649, avgPrice: 14477 },
    { state: "TN", sales: 18904, avgPrice: 16252 }
  ];

  const modelsByBrand = [
    { brand: "Ford", model: "F-150", count: 13532 },
    { brand: "Ford", model: "Fusion", count: 13532 },
    { brand: "Toyota", model: "Camry", count: 11598 },
    { brand: "Ford", model: "Escape", count: 11421 },
    { brand: "Nissan", model: "Altima", count: 18941 }
  ];

  const monthlyTrend = [
    { month: "Jan", sales: 126160 },
    { month: "Feb", sales: 146419 },
    { month: "Mar", sales: 41102 },
    { month: "Apr", sales: 1227 },
    { month: "May", sales: 47255 },
    { month: "Jun", sales: 88174 },
    { month: "Jul", sales: 1113 },
    { month: "Aug", sales: 0 },
    { month: "Sep", sales: 0 },
    { month: "Oct", sales: 0 },
    { month: "Nov", sales: 0 },
    { month: "Dec", sales: 45795 }
  ];

  const bodyTypes = [
    { type: "Sedan", count: 224515, percentage: 53.8 },
    { type: "SUV", count: 128825, percentage: 30.9 },
    { type: "Hatchback", count: 24897, percentage: 6.0 },
    { type: "Minivan", count: 24129, percentage: 5.8 },
    { type: "Wagon", count: 15135, percentage: 3.6 }
  ];

  const interiorColors = [
    { color: "Black", count: 224994 },
    { color: "Gray", count: 158677 },
    { color: "Beige", count: 51817 },
    { color: "Tan", count: 37313 },
    { color: "Others", count: 13606 }
  ];

  const COLORS = [
    "#DC2626",
    "#991B1B",
    "#F59E0B",
    "#EA580C",
    "#7C2D12",
    "#B91C1C",
    "#C2410C",
    "#92400E"
  ];

  const renderVisualization = (caseId) => {
    switch (caseId) {
      case 1:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={yearlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="year" stroke="#71717a" />
                <YAxis yAxisId="left" stroke="#dc2626" />
                <YAxis yAxisId="right" orientation="right" stroke="#f97316" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Legend />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="sales"
                  stroke="#dc2626"
                  strokeWidth={3}
                  name="Total Sales"
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="avgPrice"
                  stroke="#f97316"
                  strokeWidth={3}
                  name="Avg Price ($)"
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-red-950 bg-opacity-50 border border-red-900 p-4 rounded-lg">
                <p className="text-red-400 text-sm">Total Growth</p>
                <p className="text-2xl font-bold text-white">1,863%</p>
              </div>
              <div className="bg-orange-950 bg-opacity-50 border border-orange-900 p-4 rounded-lg">
                <p className="text-orange-400 text-sm">Price Increase</p>
                <p className="text-2xl font-bold text-white">67%</p>
              </div>
              <div className="bg-red-950/30 bg-opacity-50 border border-red-800 p-4 rounded-lg">
                <p className="text-red-400 text-sm">Peak Year</p>
                <p className="text-2xl font-bold text-white">2015</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, penjualan kendaraan mengalami
              pertumbuhan yang signifikan, dengan total pertumbuhan sebesar
              1,863% dan kenaikan harga rata-rata sebesar 67%. Tahun 2014
              menjadi tahun puncak dengan jumlah penjualan tertinggi.
            </p>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={topBrands} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis type="number" stroke="#71717a" />
                <YAxis
                  dataKey="brand"
                  type="category"
                  stroke="#71717a"
                  width={80}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Bar
                  dataKey="count"
                  fill="#dc2626"
                  radius={[0, 8, 8, 0]}
                  name="Total Sales"
                />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, Ford mendominasi penjualan
              kendaraan dengan total penjualan sebanyak 86,589 unit, diikuti
              oleh Chevrolet dan Nissan. Merek-merek ini menunjukkan jaminan
              kualitas dan kepercayaan konsumen.
            </p>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={priceDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="range" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Bar dataKey="count" fill="#b91c1c" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Dari distribusi harga jual kendaraan, kategori harga 10-15K
              mendominasi pasar dengan penjualan sebanyak 140,721 unit, diikuti
              oleh kategori harga 5-10K dengan jumlah penjualan 103,698 unit.
              Kategori harga lebih tinggi (30-50K) memiliki penurunan yang
              signifikan.
            </p>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={conditionPrice}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis
                  dataKey="condition"
                  stroke="#71717a"
                  angle={-15}
                  textAnchor="end"
                  height={80}
                />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Bar
                  dataKey="avgPrice"
                  fill="#ea580c"
                  radius={[8, 8, 0, 0]}
                  name="Avg Price ($)"
                />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Kendaraan dengan kondisi Excellent (41-49) dihargai rata-rata
              $17,601, sementara Poor (1-10) sekitar $12,998, lebih tinggi
              dibandingkan Fair (11-20) yang hanya $5,628. Meskipun harga Poor
              lebih tinggi, kendaraan ini lebih diminati karena harganya yang
              lebih terjangkau dan banyak yang melihat kesempatan untuk
              memperbaiki kendaraan sesuai kebutuhan, sementara Fair sering
              dianggap kurang menarik untuk perbaikan.
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
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  itemStyle={{ color: "#ffffff" }}
                  labelStyle={{ color: "#ffffff" }}
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-950 bg-opacity-50 border border-red-900 p-4 rounded-lg text-center">
                <p className="text-red-400 text-sm">Automatic</p>
                <p className="text-3xl font-bold text-white">482,615</p>
              </div>
              <div className="bg-zinc-900 bg-opacity-70 border border-zinc-700 p-4 rounded-lg text-center">
                <p className="text-zinc-400 text-sm">Manual</p>
                <p className="text-3xl font-bold text-white">14,630</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Dari data yang ada, preferensi transmisi kendaraan lebih condong
              ke transmisi Automatic (97.1%) dibandingkan Manual (2.9%), dengan
              jumlah kendaraan Automatic yang terjual sebanyak 482,615 unit.
            </p>
          </div>
        );

      case 6:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={colorPreference}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="color" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  itemStyle={{ color: "#ffffff" }}
                  labelStyle={{ color: "#ffffff" }}
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Bar dataKey="count" radius={[8, 8, 0, 0]}>
                  {colorPreference.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.hex}
                      stroke="#3f3f46"
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Data menunjukkan bahwa dari penjualan tahun 2007 hingga 2015.
              Warna kendaraan yang paling diminati adalah hitam (99,083 unit),
              diikuti oleh putih (94,715 unit). Warna lain seperti merah dan
              biru juga menunjukkan popularitas yang lumayan peminatnya.
            </p>
          </div>
        );

      case 7:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <AreaChart data={odometerPrice}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="odometer" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="avgPrice"
                  stroke="#dc2626"
                  fill="#991b1b"
                  fillOpacity={0.7}
                  name="Avg Price ($)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama periode pengamatan, kendaraan dengan jarak tempuh 0-50K km
              memiliki harga rata-rata sekitar $17,253, sementara kendaraan
              dengan jarak tempuh lebih dari 200K km mengalami penurunan harga
              rata-rata menjadi $2,928.
            </p>
          </div>
        );

      case 8:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={topStates}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="state" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Bar
                  dataKey="sales"
                  fill="#dc2626"
                  radius={[8, 8, 0, 0]}
                  name="Total Sales"
                />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, Florida (FL) memiliki tingkat
              penjualan tertinggi, mencapai 76,504 unit, diikuti oleh California
              (CA) dengan penjualan sebanyak 63,449 unit. Kedua negara bagian
              ini menyumbang lebih dari 25% dari total penjualan kendaraan.
            </p>
          </div>
        );

      case 9:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={modelsByBrand}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="model" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Bar dataKey="count" fill="#c2410c" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama periode pengamatan, model Ford Altima menjadi model
              terlaris dengan tingkat penjualan mencapai 18,941 unit, diikuti
              oleh Ford F-150 dengan 13,532 unit. Model-model ini mendominasi
              pasar kendaraan.
            </p>
          </div>
        );

      case 10:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={yearlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="year" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="avgPrice"
                  stroke="#ea580c"
                  strokeWidth={3}
                  name="Average Price ($)"
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, rata-rata harga kendaraan mengalami
              kenaikan signifikan, dengan harga rata-rata mencapai $17,940 pada
              tahun 2014, namun mengalami penurunan pada tahun 2015 menjadi
              $14,234 tetapi tetap meningkat sekitar 60% dibandingkan tahun
              2007.
            </p>
          </div>
        );

      case 11:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={interiorColors}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="color" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Bar dataKey="count" fill="#b91c1c" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama tahun 2007 hingga 2015, warna interior hitam menjadi
              pilihan utama dengan penjualan mencapai 224,994 unit, diikuti oleh
              abu-abu (158,677 unit). Pilihan warna interior ini mencerminkan
              preferensi konsumen terhadap warna yang lebih netral dan elegan.
            </p>
          </div>
        );

      case 12:
        return (
          <div className="space-y-4">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="month" stroke="#71717a" />
                <YAxis stroke="#71717a" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46"
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#dc2626"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Penjualan tertinggi terjadi pada musim dingin (Januari, Februari,
              Desember), diikuti musim semi (Maret, April, Mei). Musim panas dan
              musim gugur menunjukkan penurunan atau tidak ada penjualan.
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
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#18181b",
                    border: "1px solid #3f3f46",
                    color: "#ffffff"
                  }}
                  itemStyle={{ color: "#ffffff" }}
                  labelStyle={{ color: "#ffffff" }}
                />
              </PieChart>
            </ResponsiveContainer>
            <p className="mt-4 text-sm text-gray-300">
              Selama periode pengamatan, tipe body kendaraan yang paling
              diminati adalah Sedan, dengan penjualan sebanyak 224,515 unit
              (53.8% dari total penjualan). SUV berada di posisi kedua dengan
              penjualan 128,285 unit (30.9%), diikuti oleh tipe Hatchback dengan
              24,897 unit (6.0%).
            </p>
          </div>
        );

      default:
        return (
          <div className="flex items-center justify-center h-64 bg-zinc-900 border border-zinc-800 bg-opacity-50 rounded-lg">
            <div className="text-center">
              <Activity className="w-16 h-16 text-red-600 mx-auto mb-4" />
              <p className="text-zinc-400">Visualisasi untuk case {caseId}</p>
              <p className="text-sm text-zinc-500 mt-2">
                Data analysis in progress...
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      {/* Header */}
      <div className="border-b border-zinc-800 bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-400 to-orange-500"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: "-0.03em"
                }}
              >
                Vehicle Sales Analysis
              </h1>
              <p
                className="text-zinc-400 text-sm mt-1 font-medium"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.01em"
                }}
              >
                Deep Dive into Vehicle Sales Data • 13 Critical Insights
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-red-950/40 border border-red-900/60 px-4 py-2 rounded-lg">
                <p className="text-xs text-red-400">Total Records</p>
                <p className="text-lg font-bold text-red-300">558,837</p>
              </div>
              <div className="bg-zinc-900/60 border border-zinc-700 px-4 py-2 rounded-lg">
                <p className="text-xs text-zinc-400">Attributes</p>
                <p className="text-lg font-bold text-zinc-300">16</p>
              </div>
              <div className="bg-orange-950/40 border border-orange-900/60 px-4 py-2 rounded-lg">
                <p className="text-xs text-orange-400">Time Period</p>
                <p className="text-lg font-bold text-orange-300">2007-2015</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar */}
        <div className="w-80 min-h-screen border-r border-zinc-800 bg-black/30 p-4 overflow-y-auto sticky top-[73px] h-[calc(100vh-73px)]">
          <div className="mb-4">
            <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3 px-2">
              Study Cases
            </h2>
          </div>

          <div className="space-y-2">
            {studyCases.map((study, index) => (
              <button
                key={study.id}
                onClick={() => setActiveCase(index)}
                className={`w-full p-3 rounded-lg transition-all duration-200 text-left border h-[110px] ${
                  activeCase === index
                    ? "bg-gradient-to-r from-red-900 to-red-950 border-red-700 shadow-lg shadow-red-900/30"
                    : "bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/70 hover:border-red-900/50"
                }`}
              >
                <div className="flex items-start gap-3 h-full">
                  <div className="flex-shrink-0">
                    <study.icon className={`w-6 h-6 ${activeCase === index ? "text-red-400" : "text-zinc-400"}`} />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    <div className="text-xs text-zinc-500 mb-1">
                      Case #{study.id}
                    </div>
                    <h3
                      className={`font-semibold text-sm mb-1 ${
                        activeCase === index ? "text-red-300" : "text-white"
                      }`}
                      style={{
                        fontFamily: "'Space Grotesk', sans-serif",
                        letterSpacing: "-0.01em"
                      }}
                    >
                      {study.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-2">
                      {study.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-2xl mb-6">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-red-950/30 border border-red-900/50 p-3 rounded-xl">
                  {React.createElement(studyCases[activeCase].icon, {
                    className: "w-8 h-8 text-red-400"
                  })}
                </div>
                <div>
                  <h2
                    className="text-2xl font-bold text-red-400"
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      letterSpacing: "-0.02em"
                    }}
                  >
                    {studyCases[activeCase].title}
                  </h2>
                  <p
                    className="text-zinc-400 font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {studyCases[activeCase].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black border border-zinc-800 rounded-lg p-6">
              {renderVisualization(studyCases[activeCase].id)}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-red-950 to-red-900 border border-red-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-300">
                    Key Insight
                  </span>
                </div>
                <p className="text-sm text-red-100">
                  Analisis menunjukkan trend yang signifikan dalam data
                  penjualan kendaraan
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-950 to-orange-900 border border-orange-700 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-orange-400" />
                  <span className="font-semibold text-orange-300">
                    Price Impact
                  </span>
                </div>
                <p className="text-sm text-orange-100">
                  Faktor harga mempengaruhi keputusan pembelian konsumen
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-950/50 to-red-900/50 border border-red-800 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-red-400" />
                  <span className="font-semibold text-red-300">
                    Market Behavior
                  </span>
                </div>
                <p className="text-sm text-red-100">
                  Pola perilaku pasar teridentifikasi dengan jelas
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg text-center hover:border-red-900 transition-colors">
              <Car className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">53</p>
              <p className="text-sm text-zinc-400">Brands</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg text-center hover:border-red-900 transition-colors">
              <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">776</p>
              <p className="text-sm text-zinc-400">Models</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg text-center hover:border-red-900 transition-colors">
              <Users className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <p className="text-2xl font-bold">13,841</p>
              <p className="text-sm text-zinc-400">Sellers</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg text-center hover:border-red-900 transition-colors">
              <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">68</p>
              <p className="text-sm text-zinc-400">States</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleSalesAnalysis;
