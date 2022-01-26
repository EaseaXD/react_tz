import Profile from "../../components/Profile/Profile";

export const loginActionTypes ={
    SET_PROFILE: 'Profile.SET_PROFILE',
    
}

export const loginActions = {
    setProfile: () => ({type: loginActionTypes.SET_PROFILE})
}