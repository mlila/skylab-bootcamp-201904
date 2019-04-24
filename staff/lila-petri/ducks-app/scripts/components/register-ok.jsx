const RegisterOk = (() => {
    const literals = {
        en: {
            title: 'User successfully registered, you can proceed to',
            link: 'Login',
        
        },
        es: {
            title: 'Usuario registrado correctamente, puede proceder a ',
            link: 'Logarse',
        },
        ca: {
            title: 'Usuari registrat correctament, pot procedir a',
            link: 'Login',
        },
        ga: {
            title: 'User successfully registered, you can proceed to',
            link: 'Login',
        }
    }


    return function ({lang, onRegisterOk}){
        const { title, link } = literals[lang]

        return <section onClick={e => e.preventDefault()}>
                <h2>{title}</h2>
                <a href="" onClick={() => onRegisterOk()}>{link}</a>.
            </section>
    }
})()