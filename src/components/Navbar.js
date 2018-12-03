import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Navbar extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            selectedTab : 0
        }
    }

    render() {
        return (
            <div id="header" className={css(styles.header)} >

                    <a id="branding" className={css(styles.headerBrandingItem)} href="/" >
                        <div className={css(styles.headerBrandingLabel)} >
                            WOUNDCARE
                        </div>
                    </a>

                    <a id="home" className={css(styles.headerItem)} href="/home" >
                       
                       <div style={{height:5}}/>

                        <div className={css(styles.headerLabel)} >
                            HOME
                        </div>
                        
                        <div className={css(this.getHeaderSelectioIndicatorCss(0))} />
                    </a>

                    <div id="Appointments" className={css(styles.headerItem)}>
                       
                       <div style={{height:5}}/>

                       <div className={css(styles.headerLabel)} >
                           APPOINTMENTS
                       </div>
                       
                       <div className={ css(this.getHeaderSelectioIndicatorCss(1))} >

                       </div>
                   </div>

                   <div id="Messages" className={css(styles.headerItem)}>
                       <div style={{height:5}}/>
                       
                       <div className={css(styles.headerLabel)} >
                           INBOX
                       </div>
                       
                       <div className={css(this.getHeaderSelectioIndicatorCss(2))} >

                       </div>
                   </div>

                   <input type="text" className={css(styles.searchField)} placeholder="Search patients"/>


                    <div id="profile" className={css(styles.profileContainer)} >
                        
                        <div id="doctor_name" className={css(styles.doctorName)}  >
                            DR. CHIO
                        </div>

                        <div id="profile_pic_container" className={css(styles.profilePicContainer)}  >
                            <img  style={{height: 40, width:40, margin: "auto", paddingTop:5}}  src="images/doctor.png" />
                        </div>

                    </div>

                </div>
        );
    }

    getHeaderSelectioIndicatorCss = (index) => {
        if(this.props.selectedTab === index){
            return [styles.headerSelectionBar,styles.visible];
        }else{
            return [styles.headerSelectionBar]
        }
    }

}

export default Navbar;

Navbar.defaultProps = {
    selectedTab: 0
}

const styles = StyleSheet.create({   
    header : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 55,
        minWidth: "100%",
        backgroundColor: "#FFFFFF"
    },

    headerBrandingItem : {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        textDecoration: "none",
        marginLeft: 50,
        marginRight: 50,
        ":hover" : {
            cursor: "pointer",
        }
    },

    headerBrandingLabel : {
        margin: "auto",
        color: "#8288AC",
        paddingLeft: 20,
        paddingRight: 20,
        fontWeight: "bold",
        letterSpacing: 1,
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto" 
    },

    headerItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        paddingLeft: 5,
        paddingRight: 5,
        textDecoration: "none",
        ":hover" : {
            cursor: "pointer",
            backgroundColor:"#ececf261"
        }
    },

    headerLabel : {
        color: "#8288AC",
        marginTop: "auto",
        paddingLeft: 20,
        paddingRight: 20,
        letterSpacing: 1,
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto" 
    },

    headerSelectionBar : {
        height: 5,
        minWidth: "100%",
        backgroundColor: "#8288AC",
        marginTop: "auto",
        visibility: "hidden"
    },

    visible : {
        visibility : "visible"
    },

    profileContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: "auto",
        height: "100%",
        marginRight: 10,
        ":hover" : {
            cursor: "pointer",
        }
    },

    doctorName: {
        fontWeight: "bold",
        color: "#707070"
    },

    profilePicContainer : {
        marginLeft: 20,
        marginTop: "auto",
        marginBottom: "auto",
    },

    searchField: {
        marginLeft: 50,
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
});