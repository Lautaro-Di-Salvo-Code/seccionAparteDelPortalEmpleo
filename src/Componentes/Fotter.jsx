
export const Footer = ({footer}) => {
  return (
    <footer className="footer">
    <article className="article-footer">

    <div className="footer-left">
    <div className="social-icons">
    
      <a href="#"><img src={footer.img1} alt="Facebook"/></a>
      <a href="#"><img src={footer.img2} alt="Instagram"/></a>
      <a href="#"><img src={footer.img3}  alt="Twitter"/></a>
      <a href="#"><img src={footer.img4}  alt="YouTube"/></a>
      <a href="#"><img src={footer.img5} alt="LinkedIn"/></a>
    </div>
  </div>
  <div className="footer-right">
    <p style={{width: "max-content"}}>Version. 6554bfbfb</p>
  </div>
    </article>
</footer>
  )
}
