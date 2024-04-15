const registerUser = async (email, password) => {
    if (!email || !password) {
        throw new Error("All fields are required");
    }

    try {
        const registerResponse = await fetch('/api/user/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const responseData = await registerResponse.json();

        if (!registerResponse.ok) {
            throw new Error(responseData.error);
        }

        console.log(responseData);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

const loginUser = async (email, password) => {
    if (!email || !password) {
        throw new Error("All fields are required");
    }

    try {
        const loginResponse = await fetch('/api/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const responseData = await loginResponse.json();

        if (!loginResponse.ok) {
            throw new Error(responseData.error);
        }

        console.log(responseData);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

export { registerUser, loginUser };
