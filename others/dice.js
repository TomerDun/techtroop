function oldAsyncFunction(callback) {

    setTimeout(() => {

        if (Math.random() > 0.5) {

            callback(null, "Success");

        } else {

            callback(new Error("Failed"));

        }

    }, 1000);

}