import {
    Bar,
    CartesianGrid,
    ComposedChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    Cell
} from 'recharts';


const barColors = ["#65e219", "#ebff00", "#ffd600", "#ff8a00", "#ff4d00", "#ff0000"]

interface DAta  {
  name: string,
  uv: number,
  fill?: string
}

let data : DAta[] = [
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
      uv: 7.5,
    },
    {
      name: "Oct 8, 9:00",
      uv: 6,
    },
    {
      name: "Oct 8, 12:00",
      uv: 7,
    },
    {
      name: "Oct 8, 15:00",
      uv: 9,
    },
    {
      name: "Oct 8, 18:00",
      uv: 6,
    },
    {
      name: "Oct 8, 21:00",
      uv: 2.33,
    },
  ];

data =  data.map((entry, index) => {
  if (entry.uv < 5) {
    entry.fill = barColors[0];
  }
  else if (entry.uv >= 5 && entry.uv < 6) {
    entry.fill = barColors[1];
  }
  else if (entry.uv >= 6 && entry.uv < 7)  {
    entry.fill = barColors[2];
  }
  else if (entry.uv >= 7 && entry.uv < 8)  {
    entry.fill = barColors[3];
  }
  else if (entry.uv >= 8 && entry.uv < 9) {
    entry.fill = barColors[4];
  } 
  else if (entry.uv >= 9) {
    entry.fill = barColors[5];
  } 
  
  return entry;})


function Results() {
  return (
    <div>
    <div style={{position: 'relative', height: 50}}>
    </div>
     

      
        <h1 className="headerone">Table</h1>
        <h3 className="headerthree">Results</h3>

        <ResponsiveContainer width="100%" height={400}>
            <ComposedChart
                width={1000}
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
                <Bar dataKey="uv" barSize={40}  />
                {/* {data.map((entry, index) => (<Cell key={`cell-${index}`} fill={barColors[index % 3]} />))} */}
            </ComposedChart>
            
        </ResponsiveContainer>

  <table style={{width:'100%', color:"white", marginLeft: "2em", marginRight: "2em", height: 20, border: "none"}}>
  <tr>
    <td  style={{backgroundColor: barColors[0]}}></td>
    <td style={{backgroundColor: barColors[1]}}></td>
    <td style={{backgroundColor: barColors[2]}}></td>
    <td style={{backgroundColor: barColors[3]}}></td>
    <td style={{backgroundColor: barColors[4]}}></td>
    <td style={{backgroundColor: barColors[5]}}></td>
    {/* <td style={{backgroundColor: "orange"}}></td> */}
  </tr>
</table>
        
    </div>
  );
}

export default Results;
