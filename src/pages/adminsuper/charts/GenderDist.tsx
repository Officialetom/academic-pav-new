import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

function GenderDist() {
    const data = [
        { name: "Male", value: 55 },
        { name: "Female", value: 45 }
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FF8042", "#AA00FF", "#210563ff"];
    return (
        <PieChart width={"100%"} height={300}>
        <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
        >
            {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
        </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    )
}


export default GenderDist;