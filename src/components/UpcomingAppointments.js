import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Calendar from 'react-calendar';

class UpcomingAppointments extends Component {
    
    render(){
        return (
            <div id="appointment_container" className={css(styles.appointmentContainer, styles.card)}  >
                <div className={css(styles.card_label)}>
                    Upcoming appointments
                </div>
                
                <div className={css(styles.seperator)} />

                <div className={css(styles.appointmentsView)} >
                    <div >
                        <Calendar 
                            className={css(styles.calendar)}
                        />
                    </div>
                    
                    <div style={{
                        backgroundColor: "#d2d2d2ff",
                        width: 1,
                        height: "70%"
                    }}/>

                    <div className={css(styles.appointmentsListContainer)} >
                        {this.getPatients().map(this.renderPatient)}
                    </div>

                </div>

            </div>
        );
    }

    getPatients = () => {
        var patients  = []
        for(var i =0;i<20;i++){
            patients.push(i)
        }
        return patients;
    }

    renderPatient = (patient,index) => {
        return (
            <div id="patient_item" className={css(styles.patientItem)} >

                <div className={css(styles.patientPic)}>
                    <img src="images/person_1.png" style={{marginLeft: 26, width: 30}} />
                </div>
                
                <div className={css(styles.patientInfo)} >
                                        
                    <div className={css(styles.nameContainer)} >
                        <div className={css(styles.label)} > 
                            Name : Iris Brown
                        </div>
                    </div> 

                    <div className={css(styles.label)} >
                        AGE:  63
                    </div>

                    <div className={css(styles.timeContainer)} >

                    </div>

                </div>

            </div>  
        );
    }

}

export default UpcomingAppointments;

const styles = StyleSheet.create({

    appointmentContainer: {
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

    appointmentsView: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 300
    },

    appointmentsListContainer : {
        flex: 3,
        width: 200,
        height: 280,
        overflowY: "auto",
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10
    },

    calendar: {
        border: "none",
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
        marginBottom: 10
    },

    monthLabel: {
        fontSize: 14,
        marginTop: 10
    },

    weekDayStrip: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
        width: "100%",
        justifyContent: "space-around"
    },

    weekDayItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 5,
        ":hover":{
            cursor: "pointer"
        }
    },

    weekDayNameLabel: {
        fontSize: 14,
        color: "#707070",
        paddingBottom: 5
    },

    weekDateLabel: {
        fontSize: 14,
        color: "#707070"
    },

    patientItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        ":hover": {
            backgroundColor: "#eaeaeae8"
        },
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10
    },

    patientPic: {

    },
    
    patientInfo: {
        display: "flex",
        flexDirection: "row",
        alignItems: "start",
        marginLeft: 40        
    },

    nameContainer : {
        display: "flex",
        flexDirection: "row",
    },

    label: {
        fontSize: 16,
        color: "#4d4d4de8",
        marginRight: 20,
    },

    timeContainer: {
        marginLeft: "auto",
        marginRight: 20
    }

    
})