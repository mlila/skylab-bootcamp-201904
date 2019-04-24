const Register = (() => {
    const literals= {
        en: {
            title: 'Register',
            name: 'Name',
            surname: 'Surname',
            email: 'E-mail',
            password: 'Password'
        },
        es: {
            title: 'Registro',
            name: 'Nombre',
            surname: 'Apellido',
            email: 'E-milio',
            password: 'Contraseña'
        },
        ca: {
            title: 'Registre',
            name: 'Nom',
            surname: 'Cognom',
            email: 'E-mil·li',
            password: 'Contrasenya'
        },
        ga: {
            title: 'Rexistro',
            name: 'Nome',
            surname: 'Apelido',
            email: 'E-miliño',
            password: 'Contrasinal'
        }
    }

    return function ({lang, onRegister, error}){
        const{ title, name, surname, email, password }= literals[lang]
        

        function handleSubmit(e) {
            e.preventDefault()

            const name= e.target.name.value
            const surname=e.target.surname.value
            const username = e.target.username.value
            const password = e.target.password.value

            onRegister(name, surname, username, password)
        }

        return <>    
            <h2>{literals.title}</h2>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li/><input type="text" name="name" placeholder={name}/>
                    <li/><input type="text" name="surname" placeholder={surname}/>
                    <li/><input type="text" name="username" placeholder={email}/>
                    <li/><input type="password" name="password" placeholder={password}/>
                </ul>
                <button>{title}</button>
                <span>{error}</span>
            </form>
        </>

    }
})()