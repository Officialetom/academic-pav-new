import { PieChart, Pie, Tooltip, Legend, Cell } from "recharts";

function UniData() {
    const data = [
        { name: "UNICAL", value: 4000 },
        { name: "UNILAG", value: 3400 },
        { name: "UNIBEN", value: 4200 },
        { name: "UNIPORT", value: 3590 },
        { name: "Others", value: 1530 },
    ];

    const COLORS = ["#0088FE", "#00C49F", "#FF8042", "#AA00FF", "#210563ff"];
    return (
        <PieChart width={500} height={400}>
        <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={120}
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


export default UniData;