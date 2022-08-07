// file path: src/profile.js

export const printProfile = (profileData) => {
  const { name, location } = profileData;
  console.log(`${name} from ${location}`);
};
