import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class PatientReturnRate extends Component {
    
    render(){
        return (
            <div id="patient_return_rate_container" className={css(styles.returnRateContainer, styles.card)}  >
                <div className={css(styles.card_label)}>
                    Patient follow-up Rate
                </div>
                
                <div className={css(styles.seperator)} />

                <div className={css(styles.chartContainer)} >
                    
                </div>

            </div>
        );
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

    
})