import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { detections } from '../data'
import type { Vessel } from '../types'
import type { ReactNode } from 'react'

function ChartCard({title,sub,children}:{title:string;sub:string;children:ReactNode}) {
 return <div className="chart-card"><div><strong>{title}</strong><span>{sub}</span></div>{children}</div>
}

export default function AnalyticsCharts({vesselRows}:{vesselRows:Vessel[]}) {
 return <div className="chart-grid">
  <ChartCard title="Spill detections" sub="Last 6 months">
   <ResponsiveContainer width="100%" height={150}>
    <AreaChart data={detections}><defs><linearGradient id="a" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#23b5d3" stopOpacity={.35}/><stop offset="1" stopColor="#23b5d3" stopOpacity={0}/></linearGradient></defs><CartesianGrid stroke="#183047" vertical={false}/><XAxis dataKey="month" stroke="#71899b"/><YAxis stroke="#71899b"/><Tooltip/><Area type="monotone" dataKey="value" stroke="#38c7df" fill="url(#a)"/></AreaChart>
   </ResponsiveContainer>
  </ChartCard>
  <ChartCard title="Severity distribution" sub="Active incidents">
   <ResponsiveContainer width="100%" height={150}>
    <PieChart><Pie data={[{name:'Critical',value:2},{name:'High',value:1},{name:'Medium',value:1}]} innerRadius={42} outerRadius={60} dataKey="value">{['#f97355','#f2b84b','#38bdf8'].map((color)=><Cell key={color} fill={color}/>)}</Pie><Tooltip/></PieChart>
   </ResponsiveContainer>
  </ChartCard>
  <ChartCard title="Candidate proximity" sub="Distance from spill center">
   <ResponsiveContainer width="100%" height={150}>
    <BarChart data={vesselRows.map(v=>({name:v.name.replace('MV ',''),value:Number(v.distanceKm.toFixed(1))}))}><CartesianGrid stroke="#183047" vertical={false}/><XAxis dataKey="name" stroke="#71899b"/><YAxis stroke="#71899b"/><Tooltip/><Bar dataKey="value" fill="#2f9db7" radius={[2,2,0,0]}/></BarChart>
   </ResponsiveContainer>
  </ChartCard>
 </div>
}
