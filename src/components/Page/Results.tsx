import {
    Bar,
    CartesianGrid,
    ComposedChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from 'recharts';

const data = [
    {
      name: "Oct 7, 0:00",
      uv: 2.33,
    },
    {
      name: "Oct 7, 3:00",
      uv: 2.33,
    },
    {
      name: "Oct 7, 6:00",
      uv: 2.33,
    },
    {
      name: "Oct 7, 9:00",
      uv: 2.33,
    },
    {
      name: "Oct 7, 12:00",
      uv: 2.33,
    },
    {
      name: "Oct 7, 15:00",
      uv: 2.33,
    },
    {
      name: "Oct 7, 18:00",
      uv: 2.33,
    },
    {
      name: "Oct 7, 21:00",
      uv: 2.33,
    },
    {
      name: "Oct 8, 0:00",
      uv: 2,
    },
    {
      name: "Oct 8, 3:00",
      uv: 2.33,
    },
    {
      name: "Oct 8, 6:00",
      uv: 2.33,
    },
    {
      name: "Oct 8, 9:00",
      uv: 2.33,
    },
    {
      name: "Oct 8, 12:00",
      uv: 2.33,
    },
    {
      name: "Oct 8, 15:00",
      uv: 2.33,
    },
    {
      name: "Oct 8, 18:00",
      uv: 2.33,
    },
    {
      name: "Oct 8, 21:00",
      uv: 2.33,
    },
  ];

function Results() {
  return (
    <>
        <h1 className="headerone">asdfajsdhlf</h1>
        <h3 className="headerthree">asoibdfbasd</h3>
        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
                width={2000}
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
        </ResponsiveContainer>
    </>
  );
}

export default Results;
