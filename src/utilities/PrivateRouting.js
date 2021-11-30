import { Route } from 'react-router-dom'

function PrivateRouting({ component: Component, ...rest }) {
    return (
        <div>
            <Route
                {...rest}
                render={(props) => {
                    return <Component {...props} />
                }}
            >
            </Route>
        </div>
    )
}

export default PrivateRouting
