import React from "react";

const ErrorBoundary = ({ children }: { children: any }) => {

    const returnErrors = () => {
        try {
            return (
                <>
                    {children}
                </>
            )

        } catch (error) {
            console.log("Error component ==> ", error)
        }
    }

    return (<>
        {returnErrors()}
    </>
    )

}

export default ErrorBoundary;