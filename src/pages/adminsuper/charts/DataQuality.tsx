import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";


function DataQuality() {

    const data = [
        { name: "Accuracy", value: 85 },
        { name: "Complete", value: 76 },
        { name: "Consistency", value: 67 },
        { name: "Timeless", value: 72 },
        { name: "Validity", value: 81 }
    ];
    return (
        <BarChart width={"100%"} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill="#3298ebff" />
        </BarChart>
    );
}

export default DataQuality;