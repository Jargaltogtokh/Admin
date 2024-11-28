function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

function Greeting(props) {
  return (
    <div>
      Hi, {props.name} {props.age}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <Greeting age={22} name={"Jagaa"} />
      <Greeting age={23} name={"Jak"} />
    </>
  );
}

// export default function Profile() {
//   return <Avatar />;
// }
