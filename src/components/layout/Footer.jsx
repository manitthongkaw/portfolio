import Icon from "../../utils/Icon";

export default function Footer() {

  return (
    <footer>
      <div className="container">
        <ul className="follow-me">
          <li>Follow me:</li>
          <li><a className="tooltip" data-tooltip="LinkedIn" href="https://www.linkedin.com/in/manitthongkaw" target="_blank">
            <Icon icon="linkedin" />
            <span className="text">LinkedIn</span></a></li>
          <li><a className="tooltip" data-tooltip="GitHub" href="https://github.com/manitthongkaw" target="_blank">
            <Icon icon="github" />
            <span className="text">GitHub</span></a></li>
        </ul>
        <p className="copyright"><span>©</span> {new Date().getFullYear()} Manit Thongkaw (Arm)</p>
      </div>
    </footer>
  );

};