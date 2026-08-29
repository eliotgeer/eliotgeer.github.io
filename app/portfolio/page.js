import NineBox from "../../components/NineBox";

export const metadata = {
  title: "Portfolio",
};

export default function Portfolio() {
  return (
    <div className="TextBody">
      <h1 className="Title">Portfolio</h1>
      <NineBox id="cs-gamedev">
        <h1 className="Title">CS + Game Development</h1>
        <p>Projects coming soon.</p>
      </NineBox>
      <NineBox id="animation-film">
        <h1 className="Title">Animation + Film</h1>
        <p>Projects coming soon.</p>
      </NineBox>
      <NineBox id="research-marketing">
        <h1 className="Title">Research + Marketing</h1>
        <p>Projects coming soon.</p>
      </NineBox>
    </div>
  );
}
