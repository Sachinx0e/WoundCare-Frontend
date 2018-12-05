import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Navbar from '../components/Navbar';
import BookAppointments from '../components/BookAppointment';
import PatientReturnRate from '../components/PatientReturnRate';
import { PieChart, Pie, Sector, Cell } from 'recharts';

class PatientPage extends Component {

    get_person_image = () => {
        var index =Math.floor(Math.random() * 8);
        return "images/person_" + index + ".png" ;
    }

    render() {
        return (
            <div id="page" className={css(styles.page)} > 
                <Navbar />

                <div id="info_container" className={css(styles.infoContainer)}>
                    <div id="info" className={css(styles.info)}>
                        <div id="bio" className={css(styles.bio, styles.card)}>
                                <div className={css(styles.patientPic)}>
                                    <img src={this.get_person_image()} style={{marginLeft: 26,}} />
                                    </div>
                    
                                    <div style={{
                                        backgroundColor: "#d2d2d2ff",
                                        width: 1,
                                        height: "60%"
                                    }}/>

                                    <div className={css(styles.patientInfo)} >
                        
                                    <div className={css(styles.ageLabel)} >
                                        AGE:  63
                                    </div>

                                    <div className={css(styles.nameContainer)} >
                                        <div className={css(styles.nameLabel)} > 
                                            Iris
                                        </div>
                                        <div className={css(styles.nameLabel)} > 
                                            Brown
                                        </div>
                                    </div>
                    
                                </div>
                        </div>

                        <div id="detail_info" className={css(styles.detailInfo, styles.card)}>
                            <div className={css(styles.detailInfoItem)} >
                                <div className={css(styles.detailInfoItemImage)} >
                                    <img src="images/heart.png" />
                                </div>
                                <div className={css(styles.detailInfoLabelsContainer)} >
                                    <div className={css(styles.detailInfoLabel)}>
                                        56
                                    </div>
                                    <div className={css(styles.detailInfoLabel)}>
                                        Heart Rate
                                    </div>
                                </div>
                            </div>

                            <div className={css(styles.detailInfoItem)} >
                                <div className={css(styles.detailInfoItemImage)} >
                                    <img src="images/blood-drop.png" />
                                </div>
                                <div className={css(styles.detailInfoLabelsContainer)} >
                                    <div className={css(styles.detailInfoLabel)}>
                                        120/80
                                    </div>
                                    <div className={css(styles.detailInfoLabel)}>
                                        Blood pressure
                                    </div>
                                </div>
                            </div>

                            <div className={css(styles.detailInfoItem)} >
                                <div className={css(styles.detailInfoItemImage)} >
                                    <img src="images/height.png" />
                                </div>
                                <div className={css(styles.detailInfoLabelsContainer)} >
                                    <div className={css(styles.detailInfoLabel)}>
                                        5’7’’ft
                                    </div>
                                    <div className={css(styles.detailInfoLabel)}>
                                        Height
                                    </div>
                                </div>
                            </div>

                            <div className={css(styles.detailInfoItem)} >
                                <div className={css(styles.detailInfoItemImage)} >
                                    <img src="images/weight.png" />
                                </div>
                                <div className={css(styles.detailInfoLabelsContainer)} >
                                    <div className={css(styles.detailInfoLabel)}>
                                        135 lb
                                    </div>
                                    <div className={css(styles.detailInfoLabel)}>
                                        Weight
                                    </div>
                                </div>
                            </div>

                            <div className={css(styles.detailInfoItem)} >
                                <div className={css(styles.detailInfoItemImage)} >
                                    <img src="images/pulse.png" />
                                </div>
                                <div className={css(styles.detailInfoLabelsContainer)} >
                                    <div className={css(styles.detailInfoLabel)}>
                                        78
                                    </div>
                                    <div className={css(styles.detailInfoLabel)}>
                                        Pulse Rate
                                    </div>
                                </div>
                            </div>

                            <div className={css(styles.detailInfoItem)} >
                                <div className={css(styles.detailInfoItemImage)} >
                                    <img src="images/calories.png" />
                                </div>
                                <div className={css(styles.detailInfoLabelsContainer)} >
                                    <div className={css(styles.detailInfoLabel)}>
                                        2800
                                    </div>
                                    <div className={css(styles.detailInfoLabel)}>
                                        Calories
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div style={{flex: 0.1}} >

                    </div>


                    <ul id="history" className={css(styles.history)}>
                          {this.getHistory().map(this.renderHistoryItem)}         
                    </ul>
                </div>

                <div id="spacer" style={{flex: 1}}  >

                </div>

                <div id="appointments_overview_container" className={css(styles.appointmentsOverviewContainer)}>

                    <div style={{flex: 10}} >
                        <BookAppointments />
                    </div>

                    <div id="spacer" style={{flex: 0.3}}  >

                    </div>

                    <div style={{flex: 5}} > 
                        <PatientReturnRate />
                    </div>

                </div>

            </div>
        );
    }

    getHistory = () => {
        var patients  = []
        for(var i =0;i<100;i++){
            patients.push(i)
        }
        return patients;
    }

    renderHistoryItem = (entry,index) => {
        var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        var date = new Date();
        date.setDate(date.getDate() - index)
        return (
            <li className={css(styles.historyItemContainer, styles.card)}>
                <div className={css(styles.historyItem)} >
                    <div className={css(styles.dateLabel)} >
                        {(date.toLocaleDateString("en-US", options))}
                    </div>

                    <div className={css(styles.woundAreaLabel)}>
                        Wound Area
                    </div>

                    <div className={css(styles.woundAreaValue)}>
                        20.33 cm^2
                    </div>

                    <div className={css(styles.chartContainer)} >
                        <PieChart 
                                width={100}
                                height={100}
                                className={css(styles.chart)}
                                >
                                <Pie 
                                    activeIndex={0}
                                    data={this.getReturnRateData()} 
                                    innerRadius={10}
                                    outerRadius={50}
                                    isAnimationActive={false} 
                                    fill="#8884d8"
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

                    <div className={css(styles.legendContainer)} >
                        {this.getReturnRateData().map(this.renderColorLegend)}
                    </div>
                </div>
            </li>
        )
    }

    renderColorLegend = (entry,index) => {
        return (
            <div className={css(styles.legendItemContainer)}>
                <div className={css(styles.lengendLabel)} >
                    {entry.label}
                </div>
                <div className={css(styles.lengendValue)} >
                    {entry.count} %
                </div> 
            </div>
        );
    }

    getReturnRateData = () => {
        return [
            {
                label : "red",
                color : "#ff5a5aff",
                count : Math.floor(Math.random() * 100)
            },
            {
                label : "brown",
                color : "#8D6E63",
                count : Math.floor(Math.random() * 100)
            },
            {
                label : "yellow",
                color : "#cbca009e",
                count : Math.floor(Math.random() * 100)
            },
            {
                label : "green",
                color : "#59ba89ff",
                count : Math.floor(Math.random() * 100)
            },
            {
                label : "black",
                color : "#4d4d4dff",
                count : Math.floor(Math.random() * 100)
            },
        ]
    }

}

export default PatientPage;

const styles = StyleSheet.create({
    page : {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    },

    infoContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
        marginTop: 30
    },

    info: {
        flex: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    detailInfo: {
        display: "grid",
        gridTemplateColumns: "auto auto",
        gridTemplateRows: "auto auto auto",
        gridColumnGap : 20,
        gridRowGap: 40,
        minWidth: "100%",
        maxWidth: "100%",        
        ":hover": {
            cursor: "pointer"
        },
        marginTop: 20,
        paddingTop: 30,
        paddingBottom: 30
    },

    detailInfoItem: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 30
    },
    
    detailInfoItemImage: {
         
    },

    detailInfoLabelsContainer: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "start",
        marginLeft: 10
    },

    detailInfoLabel: {
        marginBottom: 5
    },
    
   
    bio: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 120,        
        ":hover": {
            cursor: "pointer"
        }
    },


    patientPic: {
        flex: 1.2,
    },
    
    patientInfo: {
        flex: 2.5,
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        marginLeft: 40        
    },

    ageLabel: {
        fontSize: 18,
        color: "#4d4d4de8",
        marginBottom: 20
    },

    nameContainer : {
        display: "flex",
        flexDirection: "row",
    },

    nameLabel: {
        fontSize: 18,
        color: "#4d4d4de8",
        marginRight: 20,
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
    
    history : {
        display: "inline",
        listStyleType: "none",
        flex: 5,
        overflowX: "auto",
        whiteSpace: "nowrap",
        height : 410,
    },

    historyItemContainer: {
        display: "inline-block",
        listStyleType: "none",
        marginRight: 20,
        width: 250,
        height: "90%"
    },

    historyItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
    },

    dateLabel: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#43425D",
        textTransform: "uppercase",
        letterSpacing: 0.5,
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto",
        marginTop: 10,
        marginLeft: 20,    
    },

    woundAreaLabel : {
        fontSize: 16,
        marginTop: 10,
        marginLeft: 20,
        color: "#5B5B5B",
    },

    woundAreaValue : {
        fontSize: 14,
        marginTop: 5,
        marginLeft: 20,
        color: "#5B5B5B"
    },

    chartContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: 'center',
        height: 100,
        marginTop: 30
    },

    chart: {
        margin: "auto"
    },

    legendContainer : {
        display: "flex",
        flexDirection : "column",
        marginTop: 10,
        color: "#5B5B5B",
        width: "60%",
        alignSelf: 'center'
    },

    legendItemContainer : {
        display: "flex",
        flexDirection: "row",
        marginBottom: 8,
        width: "100%",
        marginLeft: 20,
    },

    lengendLabel: {
        flex: 2,
        fontSize: 14,
        color: "#5B5B5B",
    },

    lengendValue: {
        flex: 2,
        fontSize: 14,
        color: "#5B5B5B",
    },

    appointmentsOverviewContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30
    },


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