import footerLogo from '../../../public/img/logo.png'
const FooterHunt = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
    <img className='w-20 h-20' src={footerLogo} alt="" />
    <p>
      Product Hunt Ltd.
      <p> <small> &copy; 2018 copyright
        </small> </p>
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>

    );
};

export default FooterHunt;