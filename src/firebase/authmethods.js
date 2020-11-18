import firebaseconfig from './firebaseIndex'
import firebase from 'firebase'
import Axios from 'axios';
var provider = new firebase.auth.GoogleAuthProvider();
var provider1 = new firebase.auth.GithubAuthProvider();
export const authMethods = {
    // firebase helper methods go here...
    signup: (email, password, setErrors, setToken) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            //make res asynchonous so that we can make grab the token before saving it.
            .then(async(res) => {
                const token = await Object.entries(res.user)[5][1].b;
                //set token to localStorage
                await localStorage.setItem("token", token);
                setToken(token);
                //grab token from local storage and set to state.
                console.log(res);
            })
            .catch((err) => {
                setErrors((prev) => [...prev, err.message]);
            });
    },
    signin: (email, password, setErrors, setToken) => {
        //change from create users to...
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            //everything is almost exactly the same as the function above
            .then(async(res) => {
                const token = await Object.entries(res.user)[5][1].b;
                //set token to localStorage
                await localStorage.setItem("token", token);

                setToken(window.localStorage.token);
            })
            .catch((err) => {
                setErrors((prev) => [...prev, err.message]);
            });
    },
    //no need for email and password
    signout: (setErrors, setToken) => {
        // signOut is a no argument function
        firebase
            .auth()
            .signOut()
            .then((res) => {
                //remove the token
                localStorage.removeItem("token");
                //set the token back to original state
                setToken(null);
            })
            .catch((err) => {
                //there shouldn't every be an error from firebase but just in case
                setErrors((prev) => [...prev, err.message]);
                //whether firebase does the trick or not i want my user to do there thing.
                localStorage.removeItem("token");
                setToken(null);
                console.error(err.message);
            });
    },
    GoogleSignin: (setErrors, setToken, setUser) => {
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(async(res) => {
                const token = await res.credential.accessToken;
                const user = await res.user.email;
                firebase
                    .auth()
                    .currentUser.getIdToken(true)
                    .then(async function(idToken) {
                        await Axios.post(
                                  "https://iothinc-recruitments.herokuapp.com/api/signup/", {
                                      username: user,
                                      id_token: idToken,
                                  }
                              )
                              .then((result) => {
                                  console.log("success", result);
                              })
                              .catch((error) => {
                                  console.log(error.response.data);
                              });
                        console.log("id token");
                        console.log(idToken);
                    })

                .catch(function(error) {
                    //Handle error
                });
                await localStorage.setItem("token", token);
                await localStorage.setItem("user", user);
                setToken(window.localStorage.token);
                setUser(user);
                console.log(user);


            })
            .catch((err) => {
                setErrors((prev) => [...prev, err.message]);
            });

    },

    GithubSignin: (setErrors, setToken, setUser) => {
        firebase
            .auth()
            .signInWithPopup(provider1)
            .then(async(res) => {
                const token = await res.credential.accessToken;
                const user = await res.user.email;

                await localStorage.setItem("token", token);
                await localStorage.setItem("user", user);
                setToken(window.localStorage.token);
                setUser(user);
                console.log(user);

                await Axios.post(
                    "https://iothinc-recruitments.herokuapp.com/api/signup/", {
                        username: user,
                        id_token: token,
                    }
                );
            })
            .catch((err) => {
                setErrors((prev) => [...prev, err.message]);
            });
    }
};
