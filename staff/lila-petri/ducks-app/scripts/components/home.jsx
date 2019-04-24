
 const Home  = (() =>{  

     const literals= {
        en: {
            title: 'Hello',
            logout: 'Logout',
            search: 'Search',
        },
        es: {
            title: 'Hola',
            logout: 'Cerrar Sesión',
            search: 'Buscar',
        },
        ca: {
            title: 'Hola',
            logout: 'Tanca Sesio',
            search: 'Cerca',
        },
        ga: {
            title: 'Hola',
            logout: 'Cerrar Sesión',
            search: 'Buscar',
        }
    }


    return function({lang, name, onLogout}) {
        const {title, logout, search} = literals[lang]

        function handleOnClick(){
        onLogout()
        }

        return <main>
            <h1>{title}, {name}!</h1>
            <button onClick={handleOnClick}>{logout}</button>
            <form>
                <input type="text" name="query"/>
                <button>{search}</button>
            </form>

        </main>
    }
 })()