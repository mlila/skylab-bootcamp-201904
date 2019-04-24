const { Component, /* Fragment */ } = React

class App extends Component {
    state = { lang: i18n.language, visible: logic.isUserLoggedIn ? 'home' : 'landing', error: null, name: null }

    handleLanguageChange = lang => this.setState({ lang: i18n.language = lang })

    handleRegisterNavigation = () => this.setState({ visible: 'register' })

    handleRegister=(name, surname, username, password) => {
        try{
            logic.registerUser(name, surname, username, password, error => {
                if (error) return this.setState({error: error.message})
                this.setState({visible: 'register-ok', error:null})

            })
        }catch({message}){
            this.setState({error:message})


        }
    }
    

    handleLoginNavigation = () => this.setState({ visible: 'login' })

    handleLogin = (username, password) =>{
        try{

            logic.loginUser(username, password, error => {
                if (error) return this.setState({ error: error.message })
    
                logic.retrieveUser((error, user) => {
                    if (error) return this.setState({ error: error.message })
    
                    this.setState({ visible: 'home', name: user.name, error: null })
                })
            })
        }catch({message}){
            this.setState({error:message})
        }
    }
    handleLogout = ()=> {
        logic.logoutUser()
        this.setState({ visible: 'landing' })
    }

    componentDidMount() {
        logic.isUserLoggedIn && logic.retrieveUser((error, user) => {
            if (error) return this.setState({ error: error.message })

            this.setState({ name: user.name })
        })
    }

    render() {
        const {
            state: { lang, visible, error, name },
            handleLanguageChange,
            handleRegisterNavigation,
            handleRegister,
            handleLoginNavigation,
            handleLogin,
            handleLogout,
        } = this

        // return <Fragment>
        return <>
            <LanguageSelector onLanguageChange={handleLanguageChange} />

            {visible === 'landing' && <Landing lang={lang} onRegister={handleRegisterNavigation} onLogin={handleLoginNavigation} />}

            {visible == 'register' && <Register lang={lang}  onRegister={handleRegister} error={error} />}

            {visible === 'register-ok' && <RegisterOk lang={lang} onRegisterOk={handleLoginNavigation} />}

            {visible === 'login' && <Login lang={lang} onLogin={handleLogin} error={error} />}

            {visible === 'home' && <Home lang={lang} name={name} onLogout={handleLogout} />}

        </>
        // </Fragment>
    }
}