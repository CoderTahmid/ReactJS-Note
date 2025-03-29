import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentMarksData = [
        { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 75 },
        { id: 2, name: "Bob", math: 85, physics: 79, chemistry: 80 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 85 },
        { id: 4, name: "David", math: 67, physics: 74, chemistry: 70 },
        { id: 5, name: "Emma", math: 74, physics: 78, chemistry: 72 },
        { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 80 },
        { id: 7, name: "Grace", math: 95, physics: 90, chemistry: 92 },
        { id: 8, name: "Henry", math: 81, physics: 83, chemistry: 78 },
        { id: 9, name: "Ivy", math: 90, physics: 87, chemistry: 88 },
        { id: 10, name: "Jack", math: 76, physics: 80, chemistry: 74 }
      ];

    return (
        <div>
            <LChart width={900} height={400} data={studentMarksData}>
                <XAxis dataKey="name"/>
                <YAxis></YAxis>
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;