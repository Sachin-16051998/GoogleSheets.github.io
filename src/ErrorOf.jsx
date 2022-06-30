const ErrorOf = ({error}) => {
    return ( 
        <div className="errorOf">
            <h2 align="center"><strike>{error}</strike>.</h2>
        </div>
     );
}
 
export default ErrorOf;