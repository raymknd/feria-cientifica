import styles from "../styles/Profile.module.sass";

export interface IProfileProps {
  picture: string;
  name: string;
}

const Profile = (props: IProfileProps) => {
  const { picture, name } = props;
  const n = name.split(" ");
  return (
    <div className={styles.root}>
      <img
        src={picture}
        alt={`Foto de ${name}`}
        className={styles.profilePicture}
      />
      <div className="text-sm opacity-80 font-light">
        {n[0]}
        <br />
        {n[1]}
      </div>
    </div>
  );
};

export default Profile;
