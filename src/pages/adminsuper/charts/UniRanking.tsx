import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid
} from "recharts";


function UniRanking() {

    const data = [
        { name: "Unical", rank: 85 },
        { name: "Unilag", rank: 76 },
        { name: "Unijos", rank: 67 },
        { name: "Uniben", rank: 72 },
        { name: "Uniikeja", rank: 81 }
    ];
    return (
        <BarChart width={"100%"} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="rank" fill="#3298ebff" />
        </BarChart>
    );
}

export default UniRanking;