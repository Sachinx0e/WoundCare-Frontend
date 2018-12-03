import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

class WelcomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div id="page" className={css(styles.page)} > 
                <div id="content" className={css(styles.content)} >
                    <div id="welcome_message" className={css(styles.welcomeMessage)} >
                        
                        <div id="welcome_content" className={css(styles.welcomeContent)}>   
                            <img src="images/ud_logo.png" className={css(styles.udLogo)} />
                            
                            <div className={css(styles.udSlogan)} >
                                Dare to be first
                            </div>


                            <div className={css(styles.woundCareLogo)} >
                                WOUNDCARE
                            </div>

                            <div className={css(styles.appSlogan)} >
                                Your one stop solution for wound analysis and management
                            </div>

                        </div>
                        
                    </div>

                    <div id="user_area" className={css(styles.userArea)} >
                        <div id="header" className={css(styles.header)} >

                            <div className={css(styles.headerItemsContainer)} >
                                <div id="Appointments" className={css(styles.headerItem)}>
                        
                                    <div style={{height:5}}/>

                                    <div className={css(styles.headerLabel)} >
                                        LOGIN
                                    </div>
                                    
                                    <div className={ css(this.getHeaderSelectioIndicatorCss(0))} >

                                    </div>
                                </div>

                                <div id="Messages" className={css(styles.headerItem)}>
                                    <div style={{height:5}}/>
                                    
                                    <div className={css(styles.headerLabel)} >
                                        SIGN UP
                                    </div>
                                    
                                    <div className={css(this.getHeaderSelectioIndicatorCss(1))} >

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div id="input_area" className={css(styles.inputArea)}>
                            <div className={css(styles.inputContainer)} >
                                <FontAwesomeIcon icon={faEnvelope} className={css(styles.icon)}/>
                                <input type="email" className={css(styles.inputField)} placeholder="Email"/>
                            </div>
                            <div className={css(styles.inputContainer)} >
                                <FontAwesomeIcon icon={faLock} className={css(styles.icon)}/>
                                <input type="password" className={css(styles.inputField)} placeholder="Password"/>
                            </div>

                            <div class={css(styles.button)} onClick={()=>{this.props.history.push("/home")}}>
                                <div  class={css(styles.buttonText)} >
                                    LOGIN
                                </div>
                            </div>

                        </div>     
                    
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

export default WelcomePage;

WelcomePage.defaultProps = {
    selectedTab: 0
}

const styles = StyleSheet.create({
    page : {
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "white"
    },

    content: {
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh"
    },

    welcomeMessage: {
        width: 550,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "background-image": "url('images/welcome_background.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    },

    welcomeContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "auto",
        marginBottom: 'auto'
    },

    userArea: {
        display: "flex",
        flexDirection: "column",
        flex: 2,
        height: "100vh",
        alignItems: "center"
    },

    udLogo: {
        height: 150,
        width: 150,
        margin: 10,
        alignSelf: 'center'
    },

    udSlogan: {
        margin: "auto",
        color: "white",
        marginTop: 5,
        marginBottom: 50,
        fontWeight: "bold",
        letterSpacing: 1,
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto"
    },

    woundCareLogo: {
        color: "white",
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        fontSize: 50,
        fontWeight: "bold",
        letterSpacing: 1,
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto" 
    },

    appSlogan : {
        margin: "auto",
        color: "white",
        marginTop: 5,
        paddingLeft: 20,
        paddingRight: 20,
        marginBottom: 50,
        fontWeight: "bold",
        letterSpacing: 1,
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto",
        textAlign: "center"
    },

    header : {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 55,
        minWidth: "100%",
        backgroundColor: "#FFFFFF",
    },

    headerItemsContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: 55,
        marginLeft: "auto",
        marginRight: 10
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
        color: "#00539F",
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
        backgroundColor: "#00539F",
        marginTop: "auto",
        visibility: "hidden"
    },

    visible : {
        visibility : "visible"
    },

    inputArea: {
        display: 'flex',
        flexDirection: 'column',
        margin: "auto",
        alignItems: "center"
    },

    inputContainer: {
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        margin: "auto",
        marginBottom: 30,
    },

    inputField: {
        marginLeft: 10,
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
    
    icon: {
        marginRight: 10,
        fontSize: 20,
        color: "#5a5a5aff",
        ":hover": {
            cursor: "pointer",
            color: "#006bcfff"
        }
    },

    button: {
        display: "flex",
        flexDirection: 'column',
        alignItems: "center",
        borderRadius: 50,
        backgroundColor: "#0060b8ff",
        ":hover": {
            cursor: "pointer",
            backgroundColor: "#00539F",
        },
        marginLeft: "auto",
        marginRight: "auto"
    },

    buttonText: {
        color: "white",
        letterSpacing: 1,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
        "-webkit-font-smoothing": "auto",
        "-moz-osx-font-smoothing": "auto" 
    }

    

});