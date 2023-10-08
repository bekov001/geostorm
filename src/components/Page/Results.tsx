import {
    Bar,
    CartesianGrid,
    ComposedChart,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const data = [
    {
      name: "Oct 7",
      uv: 2.33,
    },
    {
      name: "Oct 8",
      uv: 2,
    },
    {
      name: "Oct 9",
      uv: 1,
    },
    {
      name: "Oct 10",
      uv: 1.5,
    },
    {
      name: "Oct 11",
      uv: 1,
    },
    {
      name: "Oct 12",
      uv: 6,
    },
    {
      name: "Oct 13",
      uv: 6,
    },
    {
      name: "Oct 14",
      uv: 6,
    },
  ];

function Results() {
  return (
    <>
        <h1 className="headerone">asdfajsdhlf</h1>
        <h3 className="headerthree">asoibdfbasd</h3>
        <ComposedChart
            width={1300}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20
            }}
            >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="name" scale="band"/>
            <YAxis
                label={{ value: 'Kp index', angle: -90, position: 'insideLeft' }}
                domain={[0, 9]} // Modify the Y-axis range
                ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]} // Set custom ticks
            />
            <Tooltip />
            <Bar dataKey="uv" barSize={40} fill="#413ea0" />
        </ComposedChart>
    </>
  );
}

export default Results;
