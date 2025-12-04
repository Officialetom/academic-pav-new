import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

function EnrollmentTrend() {

    const data = [
        { name: "2018", undergraduate: 3000, graduate: 2000 },
        { name: "2019", undergraduate: 4000, graduate: 3000 },
        { name: "2020", undergraduate: 9000, graduate: 4000 },
        { name: "2021", undergraduate: 20000, graduate: 18300 },
        { name: "2022", undergraduate: 23000, graduate: 16000 },
        { name: "2023", undergraduate: 25000, graduate: 20000 }
    ];
    

    return (
            <LineChart
                width={"100%"}
                height={300}
                data={data}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="undergraduate" stroke="#07611bff" strokeWidth={2} />
            <Line type="monotone" dataKey="graduate" stroke="#4038ceff" strokeWidth={2} />
            </LineChart>
    )
}

export default EnrollmentTrend;