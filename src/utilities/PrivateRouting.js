import { Route, Redirect } from 'react-router-dom'

function PrivateRouting({ component: Component, ...rest }) {
    return (
        <div>
            <Route
                {...rest}
                render={(props) => {
                    return localStorage.getItem('token') ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to={{ pathname: '/login' }} />
                    )
                }}
            >
            </Route>
        </div>
    )
}

export default PrivateRouting
