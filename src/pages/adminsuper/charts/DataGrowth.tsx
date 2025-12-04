import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function DataGrowth() {

    const data = [
        { name: "Jan", records: 3000 },
        { name: "Feb", records: 4000 },
        { name: "Mar", records: 5000 },
        { name: "Apr", records: 20000 },
        { name: "May", records: 23000 }
    ];
    

    return (
            <LineChart
                width={"100%"}
                height={"100%"}
                data={data}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="records" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
    )
}

export default DataGrowth;