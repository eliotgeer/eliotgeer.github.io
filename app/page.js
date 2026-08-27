import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="PageGrid">
        <div className="Sidebar">
          <img src="/assets/Guy.gif" alt="Guy" className="Guy" />
        </div>
        <div className="FrontPage">
          <img src="/assets/Sun.png" alt="Sun" className="Sun" />
          <img src="/assets/Clouds.png" alt="Clouds" className="Clouds" />
          <h1 className="Title">ELIOT GEER</h1>
          <div className="TextBody">
            <p>
              <Link href="/about/">About this site</Link>
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id
              cursus mi pretium tellus duis convallis. Tempus leo eu aenean
              sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
              metus bibendum egestas. Iaculis massa nisl malesuada lacinia
              integer nunc posuere. Ut hendrerit semper vel class aptent
              taciti sociosqu. Ad litora torquent per conubia nostra
              inceptos himenaeos.
            </p>
            <div className="nine-box">
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id
              cursus mi pretium tellus duis convallis. Tempus leo eu aenean
              sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
              metus bibendum egestas. Iaculis massa nisl malesuada lacinia
              integer nunc posuere. Ut hendrerit semper vel class aptent
              taciti sociosqu. Ad litora torquent per conubia nostra
              inceptos himenaeos.
            </p>
            <div className="nine-box">
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque
              faucibus ex sapien vitae pellentesque sem placerat. In id
              cursus mi pretium tellus duis convallis. Tempus leo eu aenean
              sed diam urna tempor. Pulvinar vivamus fringilla lacus nec
              metus bibendum egestas. Iaculis massa nisl malesuada lacinia
              integer nunc posuere. Ut hendrerit semper vel class aptent
              taciti sociosqu. Ad litora torquent per conubia nostra
              inceptos himenaeos.
            </p>
            <div className="nine-box">
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
              <p>Nine box test hellow text hello</p>
            </div>
          </div>
        </div>
      </div>
      <div className="MidGround">
        <img src="/assets/GuyMed.gif" alt="GuyMedium" className="GuyMed" />
        <img src="/assets/Hill.png" alt="Hill" className="Hill" />
      </div>
      <div className="PageEnd">
        <img
          src="/assets/PageBottom.png"
          alt="GuyPointing"
          className="View"
        />
      </div>
    </>
  );
}
