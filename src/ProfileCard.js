function ProfileCard({ title, handle, imgSrc }) {
  // const { title, handle } = props;
  return (
    <div>
      <img src={imgSrc} alt="{title}logo" />
      <div>Title is {title}</div>
      <div>Handle is {handle}</div>
    </div>
  );
}

export default ProfileCard;
