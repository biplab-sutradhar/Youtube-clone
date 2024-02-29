import { auth } from "./config";
export const getUserDetail = async () => {
  try {
    const currentUser = auth.currentUser;
    if (currentUser) {
      // Fetch additional user data from Firebase Authentication
      const { displayName, email, photoURL } = currentUser;
      return { name: displayName, email, photoURL };
    } else {
      throw new Error('No user signed in');
    }
  } catch (error) {
    throw new Error('Error fetching user profile:', error);
  }
};
