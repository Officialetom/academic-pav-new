import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";


function PerformanceResource() {

    const data = [
        { name: "Unical", performance: 85, resource: 76 },
        { name: "Unilag", performance: 76, resource: 89 },
        { name: "Unijos", performance: 67, resource: 55 },
        { name: "Uniben", performance: 72, resource: 78 },
        { name: "Uniikeja", performance: 81, resource: 68 }
    ];
    return (
        <BarChart width={"100%"} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="performance" fill="#3298ebff" />
            <Bar dataKey="resource" fill="#00C49F" />
        </BarChart>
    );
}

export default PerformanceResource;