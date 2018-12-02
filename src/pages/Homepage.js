import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Navbar from '../components/Navbar';
import UpcomingAppointments from '../components/UpcomingAppointments';
import PatientReturnRate from '../components/PatientReturnRate';

class Homepage extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="page" className={css(styles.page)} > 
                <Navbar />


                <div className={css(styles.patientLabelContainer)} >
                    
                    <div className = {css(styles.patientLabel)} >
                        PATIENT RECOVERY TRACKING
                    </div>

                </div>

                <div className={css(styles.patientContainer)} >
                        {this.getPatients().map(this.renderPatientRow)}
                </div> 

                <div id="appointments_overview_container" className={css(styles.appointmentsOverviewContainer)}>

                    <div style={{flex: 10}} >
                        <UpcomingAppointments />
                    </div>

                    <div id="spacer" style={{flex: 0.3}}  >

                    </div>

                    <div style={{flex: 5}} > 
                        <PatientReturnRate />
                    </div>

                </div>

            </div>
        )
    }

    getPatients = () => {
        var patients  = []
        for(var i =0;i<4;i++){
            patients.push(i)
        }
        return patients;
    }
    
    renderPatientRow = (patient,index) => {
        return (
            <div className={css(styles.patientRow)} >
                {this.renderPatientItem()}
                {this.renderPatientItem()}
                {this.renderPatientItem()}
                {this.renderPatientItem()}
            </div>

            
        );
    }

    renderPatientItem = () => {
        return (
            <div id="patient_item" className={css(styles.patientItem,styles.card)} >
                <div className={css(styles.patientPic)}>
                    <img src="images/person_1.png" style={{marginLeft: 26,}} />
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
        );
    }

}

export default Homepage;

const styles = StyleSheet.create({
    page : {
        display: "flex",
        flexDirection: "column",
        height: "100vh"
    },
    
    appointmentsOverviewContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 30
    },

    patientLabelContainer : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30,
        marginLeft: 30
    },

    patientLabel : {
        marginLeft: 30,
        fontWeight: "bold",
        color: "#43425D",
        textTransform: "uppercase",
        letterSpacing: 0.5,
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto"    
    },

    
    searchField: {
        marginLeft: "auto",
        marginRight: 0,
        height: 20,
        borderRadius: 0,
        outline: 0,
        height: 42,
        width: 244,
        lineHeight: 42,
        padding: "0 16px",
        backgroundColor: "#fafafae8",
        color: "#212121",
        border: 0,
        fontSize: 14
    },

    patientContainer: {
        display: "inline-block",
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        flex: 1,
        overflowY: "auto"
    },

    patientRow: {
        display : "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 15,
    },

    patientItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: 300,
        height: 120,
        marginTop: 10,        
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

    


    
    
})