import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { PieChart, Pie, Sector, Cell } from 'recharts';

class PatientReturnRate extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            activeIndex: 0
        }
    }

    render(){
        return (
            <div id="patient_return_rate_container" className={css(styles.returnRateContainer, styles.card)}  >
                <div className={css(styles.card_label)}>
                    Overall patient follow-up Rate
                </div>
                
                <div className={css(styles.seperator)} />

                <div className={css(styles.chartContainer)} >
                    <PieChart 
                            width={450}
                            height={300}
                            className={css(styles.chart)}
                            >
                            <Pie 
                                activeIndex={this.state.activeIndex}
                                activeShape={renderActiveShape} 
                                data={this.getReturnRateData()} 
                                innerRadius={80}
                                outerRadius={100} 
                                fill="#8884d8"
                                label={renderLabel}
                                labelLine={false}
                                nameKey={"name"}
                                dataKey={"count"}
                                onMouseEnter={this.onPieEnter}
                                onClick={this.onPieClick}
                            >
                            {
                               this.getReturnRateData().map((entry, index) => <Cell fill={entry.color} label={entry.label} />)
                            } 
                        </Pie>
                    </PieChart>
                </div>

            </div>
        );
    }

    getReturnRateData = () => {
        return [
            {
                label : "return",
                color : "#A4A1FB",
                count : 60
            },
            {
                label : "not-return",
                color : "#EDECFE",
                count: 40
            }
        ]
    }

    onPieEnter = (data, index) => {
        this.setState({
            activeIndex: index,
        });
    }

}

export default PatientReturnRate;

const styles = StyleSheet.create({

    returnRateContainer: {
        display: "flex",
        flexDirection: 'column'
    },

    card : {
        backgroundColor: "#fff",
        borderRadius: 5,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        transition: "all 0.3s cubic-bezier(.25,.8,.25,1)",
        ":hover": {
            boxShadow: "0 10px 20px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
        }
    },

    card_label: {
        marginLeft: 25,
        marginTop: 15,
        marginBottom: 15,
        fontSize: 16,
        fontWeight: "bold",
        color: "#5a5a5aff"
    },

    seperator: {
        backgroundColor: "#d2d2d2ff",
        height: 1
    },

    chartContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: 300
    },

    chart : {
        margin: "auto"
    }

});

const renderLabel = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, outerRadius,
      fill, payload, percent } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 50) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g className={css(styles.hover)} >
        
        
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.label} (${(percent * 100).toFixed(2)}%)`}</text>
      </g>
    );
};
  

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 50) * cos;
    const my = cy + (outerRadius + 20) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g className={css(styles.hover)} >
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.label}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.label} (${(percent * 100).toFixed(2)}%)`}</text>
      </g>
    );
};

