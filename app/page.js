import Link from "next/link";
import NineBox from "../components/NineBox";

export default function Home() {
  return (
    <>
      <div className="BG BG1" />
      <div className="BG BG2" />
      <div className="BG BG3" />
      <div className="BG BG4" />
      <div className="PageGrid">
        <div className="Sidebar">
          <div className="Guy" />
        </div>
        <div className="FrontPage">
          <div className="Sun" />
          <div className="Clouds" />
          <h1 className="Title">ELIOT GEER</h1>
          <div className="TextBody">
            <p>
              <Link href="/about/">About this site</Link>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <NineBox>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
            </NineBox>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <NineBox>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
            </NineBox>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id cursus
              mi pretium tellus duis convallis. Tempus leo eu aenean sed diam
              urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum
              egestas. Iaculis massa nisl malesuada lacinia integer nunc
              posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
              litora torquent per conubia nostra inceptos himenaeos.
            </p>
            <NineBox>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
            </NineBox>
          </div>
        </div>
      </div>
      <div className="MidGround">
        <div className="GuyMed" />
        <div className="Hill" />
      </div>
      <div className="PageEnd">
        <div className="View" />
      </div>
    </>
  );
}
